<template>
  <div class="page">
    <simple-header title="Toast" :back-link="true"></simple-header>
    <Contented>
      <div class='demos-content-padded'>
        <p><m-button @click.native="showToast(1)">Show Toast Success</m-button></p>
        <p><m-button @click.native="showToast(2)">Show Toast Error</m-button></p>
      </div>
    </Contented>
    <toast v-model="showSuccess" text="Done!"></toast>
    <toast v-model="showError" text="Failed!" type="error"></toast>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Contented from '../components/content'
import { Button } from '../components/buttons'
import Toast from '../components/toast'

export default {
  components: {
    SimpleHeader,
    Contented,
    Toast,
    'm-button': Button
  },
  data () {
    return {
      showSuccess: false,
      showError: false
    }
  },
  methods: {
    showToast (type) {
      type === 1 ? this.showSuccess = true : this.showError = true
    }
  }
}
</script>
