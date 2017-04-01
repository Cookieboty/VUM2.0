<template>
  <a href="javascript:;" class="button" :class="rebutton">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'  // default, light, danger, warning, success
    },
    size: {
      type: String,
      default: 'medium' // small, medium(default), large
    },
    round: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      rebutton: [
        'button-' + this.type,
        'button-' + this.size,
        this.large ? 'button-large' : '',
        this.round ? 'button-round' : '',
        this.bordered ? 'button-bordered' : '',
        this.active ? 'active' : '',
        this.disabled ? 'disabled' : ''
      ]
    }
  }
}
</script>

<style lang="less">
// not scoped
@import './button.less';
</style>
