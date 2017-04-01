<template>
  <div class="page">
    <simple-header title="Icons" :back-link="true"></simple-header>
    <Contented>
      <div class='demos-content-padded'>
        <div class="icons">
          <Icon icon="success"></Icon>
          <Icon icon="error"></Icon>
          <Icon icon="back"></Icon>
          <Icon icon="search"></Icon>
          <Icon icon="clear"></Icon>
          <Icon icon="error-fill"></Icon>
          <Icon icon="success-fill"></Icon>
          <Icon icon="forbidden-fill"></Icon>
          <Icon icon="link"></Icon>
          <Icon icon="star"></Icon>
          <Icon icon="star-fill"></Icon>
        </div>
      </div>
    </Contented>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Contented from '../components/content'
import Icon from '../components/icons'

export default {
  components: {
    SimpleHeader,
    Contented,
    Icon
  }
}
</script>

<style scoped>
.icons {
  font-size: 24px;
  color: #3cc51f;
}
</style>
