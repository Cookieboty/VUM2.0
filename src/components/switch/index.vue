<template>
  <label class="label-switch">
    <input type="checkbox">
    <div class="checkbox"></div>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import './switch.less';
</style>
