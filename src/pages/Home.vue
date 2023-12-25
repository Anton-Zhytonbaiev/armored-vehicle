<template>
  <Hero />
  <About />
  <Brochure />
  <Partners />
  <Footer />
</template>

<script>
import About from '../components/AboutComponent.vue'
import Footer from '../components/FooterComponent.vue'
import Partners from '../components/PartnersComponent.vue'
import Brochure from '../components/BrochureComponent.vue'
import Hero from '../components/HeroComponent.vue'

export default {
  name: 'HomePage',
  components: {
    About,
    Footer,
    Partners,
    Brochure,
    Hero
  }
}
</script>
