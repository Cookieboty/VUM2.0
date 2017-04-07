<template>
  <label class="label-switch">
    <input type="checkbox" v-model="showValue">
    <div class="checkbox"></div>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
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
@import './switch.less';
</style>
