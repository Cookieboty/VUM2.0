<template>
  <div class="overlay" :class="reoverlay" transition="overlay" v-if="show" @click="click && click()">
    <div class="inner" v-bind:style="{ opacity: opacity }"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true,
      twoWay: true
    },
    click: {
      type: Function,
      default: undefined
    },
    transparent: {
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
      reoverlay: this.transparent ? 'transparent' : ''
    }
  }
}
</script>

<style lang="less" scoped>
@import "./overlay.less";
</style>
