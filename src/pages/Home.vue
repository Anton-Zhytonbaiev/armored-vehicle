<template>
  <Header />
  <About />
  <Partners />
  <Video />
  <Footer />
</template>

<script>
import Header from '../components/HeaderComponent.vue'
import About from '../components/AboutComponent.vue'
import Footer from '../components/FooterComponent.vue'
import Partners from '../components/PartnersComponent.vue'
import Video from '../components/VideoComponent.vue'

export default {
  name: 'HomePage',
  components: {
    About,
    Header,
    Footer,
    Partners,
    Video
  }
}
</script>
