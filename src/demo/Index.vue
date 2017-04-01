<template>
  <div class="page">
    <page-footer>
      <footer-item :class="{ 'active' : currentView === 'home' }" @click.native="changeView('home')">
        <span class="icon demo-icon-home"></span>
        <label>Home</label>
      </footer-item>
      <footer-item :class="{ 'active' : currentView === 'search' }" @click.native="changeView('search')">
        <span class="icon demo-icon-search"></span>
        <label>Search</label>
      </footer-item>
      <footer-item :class="{ 'active' : currentView === 'noti' }" @click.native="changeView('noti')">
        <span class="icon demo-icon-noti"></span>
        <span class="badge">2</span>
        <label>Noti</label>
      </footer-item>
      <footer-item :class="{ 'active' : currentView === 'about' }" @click.native="changeView('about')">
        <span class="icon demo-icon-me"></span>
        <label>About</label>
      </footer-item>
    </page-footer>
    <component :is="currentView" keep-alive></component>
  </div>
</template>

<script>
import { Footer, Item } from '../components/footer'
import Home from './Home'
import Search from './Search'
import Noti from './Noti'
import About from './About'

export default {
  components: {
    'page-footer': Footer,
    'footer-item': Item,
    'home': Home,
    'search': Search,
    'noti': Noti,
    'about': About
  },
  data () {
    return {
      currentView: 'home'
    }
  },
  methods: {
    changeView (view) {
      console.log(view)
      this.currentView = view
    }
  }
}
</script>

<style lang="less">
.demo-icon-home {
  background-image: url("../assets/images/home/home.png");
  background-size: 100%;
}
.demo-icon-search {
  background-image: url("../assets/images/home/search.png");
  background-size: 100%;
}
.demo-icon-noti {
  background-image: url("../assets/images/home/button.png");
  background-size: 100%;
}
.demo-icon-me {
  background-image: url("../assets/images/home/person.png");
  background-size: 100%;
}
</style>
