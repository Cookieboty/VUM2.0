<template>
  <div class="page">
    <simple-header title="Tab" :back-link="true"></simple-header>
    <Contented>
      <tab v-model="tab1">
        <tab-item title="All">
          <!--<div class="content-padded">
            <tab v-model="tab2" style="button">
              <tab-item title="ALL" :on-show="onShow">
                <h1 class="demos-title">ALL</h1>
              </tab-item>
              <tab-item title="TODO">
                <h1 class="demos-title">TODO</h1>
              </tab-item>
              <tab-item title="DONE">
                <h1 class="demos-title">DONE</h1>
              </tab-item>
            </tab>
            <tab v-model="tab3" style="button-bordered" size="small">
              <tab-item title="ALL">
                <h1 class="demos-title">ALL</h1>
              </tab-item>
              <tab-item title="TODO">
                <h1 class="demos-title">TODO</h1>
              </tab-item>
              <tab-item title="DONE">
                <h1 class="demos-title">DONE</h1>
              </tab-item>
            </tab>
          </div>-->
          <h1 class="demos-title">All</h1>
        </tab-item>
        <tab-item title="Boys">
          <h1 class="demos-title">Boys</h1>
        </tab-item>
        <tab-item title="Girls">
          <h1 class="demos-title">Girls</h1>
        </tab-item>
      </tab>
    </Contented>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Contented from '../components/content'
import { Tab, TabItem } from '../components/tab'

export default {
  components: {
    SimpleHeader,
    Contented,
    Tab,
    TabItem
  },
  methods: {
    onShow () {
    }
  },
  data () {
    return {
      tab1: 0,
      tab2: 1,
      tab3: 1
    }
  }
}
</script>
