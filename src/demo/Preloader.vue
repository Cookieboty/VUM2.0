<template>
  <div class="page">
    <simple-header title="Preloader" :back-link="true"></simple-header>
    <Contented>
      <div class='demos-content-padded'>
        <p>3s之后结束</p>
        <p><m-button @click.native="showPreloader()">Show Preloader</m-button></p>
      </div>
    </Contented>
    <preloader :show="show"></preloader>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Contented from '../components/content'
import { Button } from '../components/buttons'
import Preloader from '../components/preloader'

export default {
  components: {
    SimpleHeader,
    Contented,
    Preloader,
    'm-button': Button
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPreloader () {
      this.show = true
      let self = this
      clearTimeout(this.timeout)
      this.timeout = setTimeout(function () {
        self.show = false
      }, 3000)
    }
  }
}
</script>
