<template>
  <div>
    <simple-header title="About"></simple-header>
    <Contented>
      <div class="content-padded">
        <p>An UI Framework for build mobile web app with vue.js</p>
        <p>Source Code: <a href="https://github.com/lihongxun945/vum" target="_blank">https://github.com/lihongxun945/vum</a></p>
        <p>Docs will come out soon</p>
        <p>
          @2016/06/30 by 言川
          @2017/04/01 by 言萧凡
        </p>
      </div>
    </Contented>
  </div>
</template>

<script>
import Contented from '../components/content'
import { SimpleHeader } from '../components/header'

export default {
  components: {
    SimpleHeader,
    Contented
  }
}
</script>
