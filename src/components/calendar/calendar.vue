<template>
  <div class="calendar">
    <div class="toolbar">
      <div class="year-picker">
        <div class="icon icon-prev" :class="cssReachMinYear" @click="prevYear()"></div>
        <div class="year-value">{{store.data.currentYear}}</div>
        <div class="icon icon-next" :class="cssReachMaxYear" @click="nextYear()"></div>
      </div>
      <div class="month-picker">
        <div class="icon icon-prev" :class="cssReachMax" @click="prevMonth()"></div>
        <div class="month-value">{{store.data.currentMonth+1}}</div>
        <div class="icon icon-next" :class="cssReachMin" @click="nextMonth()"></div>
      </div>
    </div>
    <div class="weekdays">
      <div class="weekday">周一</div>
      <div class="weekday">周二</div>
      <div class="weekday">周三</div>
      <div class="weekday">周四</div>
      <div class="weekday">周五</div>
      <div class="weekday">周六</div>
      <div class="weekday">周日</div>
    </div>

    <div class="months" :cssTransition="cssTransition" >
      <div class="months-inner" v-bind:style="{ transform: 'translate3d(' + diff + 'px, 0, 0)' }" >
        <div class="month prev-year-month" v-if="changeyear">
          <div v-bind:class="_dateClass(d)" v-for="d in store.data.prevYearDates" track-by="$index">
            <span>{{d.d}}</span>
          </div>
        </div>
        <div class="month prev-month" v-show="!changeyear">
          <div v-bind:class="_dateClass(d)" v-for="d in store.data.prevMonthDates" track-by="$index">
            <span>{{d.d}}</span>
          </div>
        </div>
        <div class="month current-month">
          <div v-bind:class="_dateClass(d)" v-for="d in store.currentMonthDates" track-by="$index" @click="select(d)">
            <span>{{d.d}}</span>
          </div>
        </div>
        <div class="month next-month" v-show="!changeyear">
          <div v-bind:class="_dateClass(d)" v-for="d in store.data.nextMonthDates" track-by="$index">
            <span>{{d.d}}</span>
          </div>
        </div>
        <div class="month next-year-month" v-if="changeyear">
          <div v-bind:class="_dateClass(d)" v-for="d in store.data.nextYearDates" track-by="$index">
            <span>{{d.d}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from './store'
import moment from 'moment'

const FORMAT = 'YYYY-MM-DD'

export default {
  props: {
    value: {
      type: String,
      required: true,
      twoWay: true
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    max: {
      type: String,
      default: undefined
    },
    min: {
      type: String,
      default: undefined
    },
    disableDates: {
      type: Array,
      default: undefined
    },
    disableWeekend: {
      type: Boolean,
      default: undefined
    },
    disable: {
      type: Function,
      default: undefined
    }
  },
  data () {
    return {
      store: '',
      diff: 0,
      width: 0,
      transition: false,
      changeyear: false, // tag to show: change month or change year
      cssReachMinYear: '',
      cssReachMaxYear: '',
      cssTransition: this.transition ? 'transition' : '',
      cssReachMax: '',
      cssReachMin: '',
      selectedDate: '',
      showValue: ''
    }
  },
  methods: {
    nextMonth () {
      console.log(this.store.data.reachMax)
      if (!this.store.data.reachMax) return false
      this.transition = true
      this.store.diff = -this.width
    },
    prevMonth () {
      if (this.store.data.reachMin) return false
      this.transition = true
      this.store.diff = this.width
    },
    nextYear () {
      console.log(this.store.data.reachMinYear)
      if (this.store.data.reachMaxYear) return false
      this.store.genYearDates()
      this.transition = true
      this.changeyear = true // add a tag
      this.diff = -this.width
    },
    prevYear () {
      console.log(this.store.data.reachMinYear)
      if (this.store.data.reachMinYear) return false
      this.store.genYearDates()
      this.transition = true
      this.changeyear = true // add a tag
      this.diff = this.width
    },
    select (d) {
      if (d.nextMonth) {
        this.nextMonth()
        this.store.toSelectDate = d.date
      } else if (d.prevMonth) {
        this.prevMonth()
        this.store.toSelectDate = d.date
      } else {
        this.store.select(d.date)
        this.selectedDate = this.store.data.selectedDate
        this.showValue = this.selectedDate
      }
    },
    _start (point) {
    },
    _move (point, diff, time) {
      const x = diff.x
      if (this.reachMax && x < 0) {
        this.diff = -Math.pow(-x, 0.7)
      } else if (this.reachMin && x > 0) {
        this.diff = Math.pow(x, 0.7)
      } else {
        this.diff = x
      }
    },
    _end (point, diff, time) {
      if (!diff) return false
      const x = diff.x
      if ((this.reachMax && x < 0) || (this.reachMin && x > 0)) {
        this.transition = true
        this.diff = 0
        return false
      }
      if (x > 100 || (x > 30 && time < 200)) {
        this.prevMonth()
      } else if (x < -100 || (x < -30 && time < 200)) {
        this.nextMonth()
      } else {
        this.transition = true
        this.diff = 0
      }
    },
    _transitionend () {
      this.transition = false
      const store = this.store
      if (this.diff > 0) {
        this.changeyear ? store.prevYear() : store.prevMonth()
      } else if (this.diff < 0) {
        this.changeyear ? store.nextYear() : store.nextMonth()
      }
      if (this.toSelectDate) this.store.select(this.toSelectDate)
      this.toSelectDate = undefined
      this.diff = 0
      this.changeyear = false
    },
    _sameDate (a, b) {
      return moment(a).format(FORMAT) === moment(b).format(FORMAT)
    },
    _dateClass (d) {
      return {
        date: true,
        selected: this._sameDate(d.date, this.selectedDate),
        'today': this._sameDate(d.date, this.today),
        'disabled': d.disabled,
        'current-date': d.currentMonth,
        'prev-date': d.prevMonth,
        'next-date': d.nextMonth
      }
    }
  },
  created () {
    if (this.value) {
      this.showValue = this.value
    }
    this.store = new Store()
    this.store.config({
      min: this.min,
      max: this.max,
      disable: this.disable,
      disableDates: this.disableDates,
      disableWeekend: this.disableWeekend,
      format: this.format
    })
    if (this.showValue) {
      this.store.select(this.showValue)
    }
    this.cssReachMinYear = this.store.reachMinYear ? 'disabled' : ''
    this.cssReachMaxYear = this.store.reachMinYear ? 'disabled' : ''
    this.cssReachMax = this.store.reachMin ? 'disabled' : ''
    this.cssReachMin = this.store.reachMax ? 'disabled' : ''
    this.selectedDate = this.store.data.selectedDate
    this.showValue = moment(this.selectedDate).format(this.format)
  },
  watch: {
    selectedDate (v, ov) {
      this.showValue = moment(v).format(this.format)
    },
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      console.log(val)
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less" scoped>
@import './calendar.less';
</style>
