import Promise from 'bluebird'
import { handleChar } from 'common/js/util'
import { mapState } from 'vuex'

const endOfSentence = /[？！。~：]$/
const comma = /\D[，；、]$/
const endOfBlock = /[^/]\n\n$/

export const writeMixin = {
  data() {
    return {
      // 页面展示的字符文本
      text: ''
    }
  },
  computed: {
    ...mapState(['speed'])
  },
  created() {
    this.styleBuffer = ''
  },
  methods: {
    /**
     * @param {*} el 组件元素
     * @param {*} message style.css文件内容
     * @param {*} index 从第几个字符开始展示
     * @param {*} mirrorToStyle true:页面展示css false:页面不展示css
     * @param {*} charsPerInterval 一次展示多少个字 测试发现如果展示超过1个字符的话也会导致css不生效
     */
    async writeTo(el, message, index, mirrorToStyle, charsPerInterval) {
      // 点击跳过动画
      if (this.$root.animationSkipped) {
        throw new Error('SKIP IT')
      }
      let chars = message.slice(index, index + charsPerInterval)
      index += charsPerInterval

      el.scrollTop = el.scrollHeight

      if (mirrorToStyle) {
        // 让页面展示css style-text调用
        this.writeChar(chars, index === message.length)
      } else {
        // 让页面不展示css work-text调用
        this.writeSimpleChar(chars)
      }

      if (index < message.length) {
        let thisInterval = this.speed
        let thisSlice = message.slice(index - 2, index)
        // 控制特殊字符的展示速度
        if (comma.test(thisSlice)) {
          thisInterval = this.speed * 1
        }
        if (endOfSentence.test(thisSlice)) {
          thisInterval = this.speed * 1.1
        }
        thisSlice = message.slice(index - 2, index + 1)
        if (endOfBlock.test(thisSlice)) {
          thisInterval = this.speed * 1.2
        }
        // 当暂停时无限延时
        do {
          await Promise.delay(thisInterval)
        } while (this.$root.paused)

        return this.writeTo(el, message, index, mirrorToStyle, charsPerInterval)
      }
    },
    /**
     * @param {*} char 单个字符
     * @param {*} lastChar 最后一个字符
     * 往id=style-tag里面写的css样式会写到最后一个分号,之后就不再往里面写了，加上这个判断让所有字符都写进样式里面,而不是止步于最后一个分号
     */
    writeChar(char, lastChar) {
      // 针对一些字符加上标签以使css修饰代码可读
      this.text = handleChar(this.text, char)
      this.styleBuffer += char
      // css以分号结束 将css加到index.html里面来使页面的css样式生效
      if (char === ';' || lastChar) {
        this.$root.$emit('styleAppend', this.styleBuffer)
        this.styleBuffer = ''
      }
    },
    // 不在index.html实时展示css
    writeSimpleChar(char) {
      this.text += char
    }
  }
}
