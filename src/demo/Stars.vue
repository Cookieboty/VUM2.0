<template>
  <div class="page">
    <simple-header title="Stars" :back-link="true"></simple-header>
    <Contented>
      <list>
        <div slot="title">Read Only Stars</div>
        <list-item>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">iPhone SE</div>
              <div class="item-after">
                <stars v-model="statr1"></stars>
              </div>
            </div>
          </div>
        </list-item>
      </list>
      <list>
        <div slot="title">Click Star!</div>
        <list-item>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">iPhone 6S</div>
              <div class="item-after">
                <stars v-model="statr2" :readonly="false"></stars>
              </div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">iPhone 6S</div>
              <div class="item-after">
                <stars v-model="statr3" :readonly="false" style="color: #f6383a;"></stars>
              </div>
            </div>
          </div>
        </list-item>
      </list>
    </Contented>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import { List, ListItem } from '../components/list'
import Contented from '../components/content'
import Stars from '../components/stars'

export default {
  components: {
    SimpleHeader,
    Contented,
    List,
    ListItem,
    Stars
  },
  data () {
    return {
      statr1: 2,
      statr2: 2,
      statr3: 2
    }
  }
}
</script>
