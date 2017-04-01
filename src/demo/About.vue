<template>
  <div>
    <simple-header title="About"></simple-header>
    <Contented>
      <div class="content-padded">
        <p>An UI Framework for build mobile web app with vue.js</p>
        <p>Source Code: <a href="https://github.com/lihongxun945/vum" target="_blank">https://github.com/lihongxun945/vum</a></p>
        <p>Source Code for 2.0: <a href="https://github.com/Cookieboty/VUM2.0" target="_blank">https://github.com/Cookieboty/VUM2.0</a></p>
        <p>Docs will come out soon</p>
        <p>@2016/06/30 by 言川</p>
        <p>@2017/04/01 by 言萧凡</p>
        <p>因vum1.0受众较多，所以在言川1.0的版本升级2.0，如有建议或侵权，请私信
        1403632192@qq.com</p>
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
