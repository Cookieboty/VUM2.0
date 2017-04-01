<template>
  <span class="icon " :class="reiocn"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      reiocn: 'icon-' + this.icon
    }
  }
}
</script>

<style lang="less">
@import 'icons.less';
</style>
