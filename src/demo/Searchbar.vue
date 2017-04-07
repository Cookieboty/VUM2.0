<template>
  <div class="page">
    <simple-header title="SearchBar" :back-link="true"></simple-header>
    <Contented>
      <searchbar v-model="searchInput"></searchbar>
    </Contented>
  </div>
</template>
<script>
import { SimpleHeader } from '../components/header'
import Contented from '../components/content'
import Searchbar from '../components/searchbar'

export default {
  components: {
    SimpleHeader,
    Contented,
    Searchbar
  },
  data () {
    return {
      searchInput: ''
    }
  },
  watch: {
    searchInput (v, ov) {
      console.log(v)
    }
  }
}
</script>
