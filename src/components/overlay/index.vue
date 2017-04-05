<template>
  <transition name="overlay">
    <div class="overlay" v-show="showValue" :class="reoverlay" @click="closeOverlay">
      <div class="inner" v-bind:style="{opacity: opacity }"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    },
    transparent: {
      type: Boolean,
      default: false
    },
    overlayClose: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      reoverlay: this.transparent ? 'transparent' : '',
      showValue: false
    }
  },
  created () {
    this.showValue = this.show
    if (this.value) {
      this.showValue = this.value
    }
  },
  methods: {
    closeOverlay () {
      if (this.overlayClose) this.showValue = false
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
@import "./overlay.less";
</style>
