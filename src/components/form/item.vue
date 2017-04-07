<template>
  <List-item>
    <slot></slot>
  </List-item>
</template>

<script>
import { ListItem } from '../list'
export default {
  components: {
    ListItem
  }
}
</script>
