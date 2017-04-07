<template>
  <div class="page">
    <simple-header title="Calendar" :back-link="true"></simple-header>
    <Contented>
      <calendar v-model="date" min="1990-12-12" max="2020-12-01"></calendar>
      <p>Inline Calendar：{{date}}</p>
      <form-list>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">Popup</div>
            <div class="item-input">
              <input type="text" v-model="date2" @click="showCalendar2 = true" readonly>
            </div>
          </div>
        </form-item>
      </form-list>
    </Contented>
    <popup v-model="showCalendar2" :show-title-bar="false" :overlay-close="true">
      <calendar v-model="date2"></calendar>
    </popup>
  </div>
</template>

<script>
import Contented from '../components/content'
import { SimpleHeader } from '../components/header'
import Popup from '../components/popup'
import { Calendar } from '../components/calendar'
import { Form, FormItem } from '../components/form'

export default {
  components: {
    Contented,
    SimpleHeader,
    Calendar,
    'form-list': Form,
    FormItem,
    Popup
  },
  methods: {
    disable (str, date) {
      return date.day() === 4 // disable thursday
    }
  },
  data () {
    return {
      date: '2012-12-12',
      date2: '2012-12-12',
      showCalendar2: false
    }
  },
  watch: {
    date2 (v, ov) {
      this.showCalendar2 = false
    }
  }
}
</script>
