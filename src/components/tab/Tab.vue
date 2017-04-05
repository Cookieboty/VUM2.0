<template>
  <div class="tab-container">
    <div :class="{
      'buttons-tab' : style === 'default',
      'buttons-group' : style === 'button' || style === 'button-bordered',
      'button-bordered' : style === 'button-bordered',
      'button-small': size === 'small',
      'button-large': size === 'large'
      }">
      <m-button 
         v-for="(item, index) in items" 
         :showActive="index === showActive"
         :key="index"
         @click.native="onClick(index)"
         >{{item.title}}{{showActive}}</m-button>
    </div>
    <div class="tabs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Button } from '../buttons'

export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    style: {
      type: String,
      default: 'default' // default, button, button-bordered
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  components: {
    'm-button': Button
  },
  data () {
    return {
      items: [],
      showActive: 0
    }
  },
  created () {
    if (this.value) {
      this.showActive = this.value
    }
  },
  methods: {
    onClick (active) {
      this.showActive = active
    }
  },
  watch: {
    value (val) {
      this.showActive = val
    },
    showActive (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import 'tabs.less';
</style>
