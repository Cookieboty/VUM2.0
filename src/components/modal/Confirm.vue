<template>
  <modal v-model='showValue'>
    <div slot="title">{{title}}</div>
    <div slot="content">{{content}}</div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button modal-button-cancel" v-on:click="_onCancel()">{{cancelText}}</span>
      <span class="modal-button" v-on:click="_onConfirm()">{{okText}}</span>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: 'Alert'
    },
    content: {
      type: String,
      required: false,
      default: ''
    },
    okText: {
      type: String,
      required: false,
      default: 'OK'
    },
    cancelText: {
      type: String,
      required: false,
      default: 'Cancel'
    }
  },
  data () {
    return {
      showValue: false
    }
  },
  components: {
    Modal
  },
  methods: {
    _onConfirm () {
      this.showValue = false
      this.$emit('on-confirm')
    },
    _onCancel () {
      this.showValue = false
      this.$emit('on-cancel')
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
