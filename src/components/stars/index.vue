<template>
  <div class="stars">
    <div class="star" @click="click(1)"><icon :icon="showValue < 0.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(2)"><icon :icon="showValue < 1.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(3)"><icon :icon="showValue < 2.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(4)"><icon :icon="showValue < 3.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(5)"><icon :icon="showValue < 4.5 ? 'star' : 'star-fill'"></icon></div>
  </div>
</template>

<script>
import Icon from '../icons'

export default {
  components: {
    Icon
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    readonly: {
      type: Boolean,
      default: true
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
    click (i) {
      if (this.readonly) return false
      this.showValue = (this.showValue === i ? i - 1 : i)
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
@import './stars.less';
</style>
