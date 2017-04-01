<template>
  <a class= "button button-link" :class="releft, reedge">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    left: { // pull left
      type: Boolean,
      default: false
    },
    edge: { // edge
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      releft: this.left ? 'left' : 'right',
      reedge: this.edge ? 'edge' : ''
    }
  }
}
</script>

<style lang="less" scoped>
@import './link.less';
</style>
