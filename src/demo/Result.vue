<template>
  <div class="page">
    <simple-header title="Result" :back-link="true"></simple-header>
    <Contented>
      <result type="success">
        <div slot="title">Commit Success</div>
        <div slot="text">
          Your commit have been recieved!
        </div>
        <div slot="buttons">
          <m-button>OK</m-button>
          <m-button type="light">BACK</m-button>
        </div>
        <div slot="bottom">
          <a>About This Page</a>
        </div>
      </result>
    </Contented>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Contented from '../components/content'
import { Button } from '../components/buttons'
import Result from '../components/result'

export default {
  components: {
    SimpleHeader,
    Contented,
    Result,
    'm-button': Button
  }
}
</script>
