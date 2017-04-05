<template>
  <div>
    <overlay v-model='showValue' :overlay-close="overlayClose"></overlay>
    <transition name="modal" >
      <div class="modal" v-if="showValue" >
        <div class="modal-inner">
          <div class="modal-title">
            <slot name="title">Confirm</slot>
          </div>
          <div class="modal-text">
            <slot name="content"></slot>
          </div>
        </div>
        <slot name="buttons"></slot>
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
      default: false,
      required: true
    },
    overlayClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showValue: false
    }
  },
  created () {
    if (this.value) {
      this.showValue = this.value
    }
  },
  methods: {
    beforeEnter (el, done) {
      el.style.transform = 'translate3d(0,0,0) scale(1.185)'
    },
    enter (el, done) {
      el.style.opacity = 1
      el.style.transform = 'translate3d(0,-50%,0) scale(1)'
      done()
    },
    leave (el, done) {
      el.style.opacity = 0
      el.style.transform = 'translate3d(0,-50%,0) scale(1)'
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

<style lang="less">
@import 'modal.less';
</style>
