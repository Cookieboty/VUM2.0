<template>
  <div>
    <Modal v-model='showValue' 
      :overlayClose="true"
    >
      <div slot="title">{{title}}</div>
      <div slot="content">{{content}}</div>
      <div slot="buttons" class="modal-buttons">
        <span class="modal-button" @click="_onConfirm()">{{okText}}</span>
      </div>
    </Modal>
  </div>
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
  created () {
    this.showValue = this.show
    if (this.value) {
      this.showValue = this.value
    }
  },
  methods: {
    _onConfirm () {
      this.showValue = false
      this.$emit('on-confirm')
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
