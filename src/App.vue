<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>


<style>
@import './style/normalize.css';
</style>
