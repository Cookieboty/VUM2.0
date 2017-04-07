<template>
  <popup v-model='showValue' :overlay-close="overlayClose" class-name="actions-modal">
    <slot></slot>
    <action-group v-if="showCancelButton">
      <action-button class="color-gray" @click.native="cancel()">Cancel</action-button>
    </action-group>
  </popup>
</template>

<script>
import Popup from '../popup'
import ActionGroup from './ActionGroup.vue'
import ActionButton from './ActionButton.vue'

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    overlayClose: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Popup,
    ActionGroup,
    ActionButton
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
    cancel () {
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
