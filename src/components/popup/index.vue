<template>
  <div>
    <overlay v-model="showValue" :overlay-close="overlayClose"></overlay>
    <div transition="popup-modal"
         v-if="showValue"
         class="popup-modal" :class="repopup">
      <page-header v-if="showTitleBar">
        <header-title>{{title}}</header-title>
        <header-link @click.native="close()">{{closeButtonText}}</header-link>
      </page-header>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Link, Title } from '../header'
import Overlay from '../overlay'

export default {
  components: {
    Overlay,
    'page-header': Header,
    'header-link': Link,
    'header-title': Title
  },
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      default: 'Popup Title'
    },
    showTitleBar: {
      type: Boolean,
      default: true
    },
    closeButtonText: {
      type: String,
      default: 'Close'
    },
    full: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    overlayClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      repopup: [
        this.className,
        this.full ? 'full' : ''
      ],
      showValue: false
    }
  },
  created () {
    if (this.value) {
      this.showValue = this.value
    }
  },
  methods: {
    close () {
      this.showValue = false
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
@import './popup.less';
</style>
