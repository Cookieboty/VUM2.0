<template>
  <div class="result">
    <div class="brand-icon" :class="resultcss">
      <slot name="icon">
        <div class="icon" :class="iconcss"></div>
      </slot>
    </div>

    <h1><slot name="title">SUCCESS!</slot></h1>
    <div class="text">
      <slot name="text">
        <p>Some more message</p>
      </slot>
    </div>

    <div class="buttons">
      <slot name="buttons">
        <a class="button">OK</a>
        <a class="button button-light">BACK</a>
      </slot>
    </div>

    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success'  // success, error, forbidden
    }
  },
  data () {
    return {
      resultcss: 'result-' + this.type,
      iconcss: 'icon-' + this.type + '-fill'
    }
  }
}
</script>

<style lang="less">
// not scoped to make style apply on slot elements
@import './result.less';
</style>
