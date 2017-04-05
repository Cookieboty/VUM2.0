<template>
  <div>
    <overlay v-model='showValue' :overlay-close="true"></overlay>
    <transition name="popwindow-modal">
      <div v-if="showValue"
           class="popwindow-modal" :class="popwindowClass">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Overlay from '../overlay'
export default {
  components: {
    Overlay
  },
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
      twoWay: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      popwindowClass: [
        this.className,
        this.full ? 'full' : ''
      ],
      showValue: false
    }
  },
  created () {
    console.log(this.value)
    if (this.value) {
      this.showValue = this.value
    }
  },
  methods: {
    close () {
      this.show = false
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less" scoped>
@import './popwindow.less';
</style>
