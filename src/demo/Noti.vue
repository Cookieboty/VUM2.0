<template>
  <div>
    <simple-header title="Noti"></simple-header>
    <Contented>
      <div class="content-padded">
        <p>V0.1.1 has been released @2016/10/23 [changelog](https://github.com/vum-team/vum/blob/master/changelog.md)</p>
        <p>V0.1.0 should be released before 08/31</p>
      </div>
      <div class="content-padded">
        <p>V2.0 has been released @2017/04/01 [changelog](https://github.com/Cookieboty/VUM2.0)</p>
      </div>
    </Contented>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Contented from '../components/content'

export default {
  components: {
    SimpleHeader,
    Contented
  }
}
</script>
