<template>
  <List class="form-list">
    <div slot="title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
    <div slot="append">
      <slot name="append"></slot>
    </div>
  </List>
</template>

<script>
import { List } from '../list'
export default {
  components: {
    List
  }
}
</script>
