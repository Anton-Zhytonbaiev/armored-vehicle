<template>
  <ProjectsHero />
  <Projects />
  <Footer />
</template>

<script>
import Footer from '../components/FooterComponent.vue'
import ProjectsHero from '../components/ProjectsHero.vue'
import Projects from '../components/ProjectsComponent.vue'

export default {
  name: 'ProjectsPage',
  components: {
    ProjectsHero,
    Projects,
    Footer,
  }
}
</script>
