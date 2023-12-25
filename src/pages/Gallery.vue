<template>
  <GalleryHero />
  <Gallery />
  <Footer />
</template>

<script>
import Footer from '../components/FooterComponent.vue'
import GalleryHero from '../components/GalleryHero.vue'
import Gallery from '../components/GalleryComponent.vue'

export default {
  name: 'GalleryPage',
  components: {
    GalleryHero,
    Gallery,
    Footer,
  }
}
</script>
