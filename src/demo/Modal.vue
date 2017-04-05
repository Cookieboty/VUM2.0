<template>
  <div class="page">
    <simple-header title="Modal" :back-link="true"></simple-header>
    <Contented>
      <div class='demos-content-padded'>
        <p><m-button @click.native="showAlert()">Show Alert</m-button></p>
        <p><m-button @click.native="showConfirm()">Show Custom Confirm</m-button></p>
        <p><m-button @click.native="showModal()">Show Custom Modal</m-button></p>
      </div>
    </Contented>
    <Alert 
      v-model="alert" 
      title="Hello" 
      content="Hello there!" 
      @on-confirm="colseAlert"
      ></Alert>
    <confirm 
      v-model="confirm" 
      :title="'Hello'" 
      :content="'Hello there!'" 
      @on-confirm="colseConfirm"
      @on-cancel="cancelConfirm"
      ></confirm>
    <Modal v-model="modal">
      <div slot="title">Payment</div>
      <div slot="content">Choose your payment!</div>
      <div slot="buttons" class="modal-buttons">
        <span class="modal-button modal-button-cancel" @click="onClick(1)">Cancel</span>
        <span class="modal-button" @click="onClick(2)">Paypay</span>
        <span class="modal-button modal-button-bold" @click="onClick(3)">Bankcard</span>
      </div>
    </Modal>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import Contented from '../components/content'
import { Alert, Confirm, Modal } from '../components/modal'

export default {
  components: {
    SimpleHeader,
    Contented,
    Alert,
    Confirm,
    Modal,
    'm-button': Button
  },
  data () {
    return {
      alert: false,
      confirm: false,
      modal: false,
      prompt: false,
      modal2: false,
      input: ''
    }
  },
  methods: {
    showAlert () {
      this.alert = true
    },
    showConfirm () {
      this.confirm = true
    },
    showPrompt () {
      this.prompt = true
    },
    showModal () {
      this.modal = true
    },
    showModal2 () {
      this.modal2 = true
    },
    colseAlert () {
      this.alert = false
      console.log('you close a Alert')
    },
    colseConfirm () {
      this.confirm = false
      console.log('you close a Confirm')
    },
    cancelConfirm () {
      this.confirm = false
      console.log('you cancel a Confirm')
    },
    onClick (index) {
      console.log('clickonClick' + index)
      this.modal = false
      this.modal2 = false
    }
  }
}
</script>
