<template>
  <SubmitForm />
  <Footer />
</template>

<script>
import Footer from '../components/FooterComponent.vue'
import SubmitForm from '../components/SubmitForm.vue'

export default {
  name: 'ContactsPage',
  components: {
    SubmitForm,
    Footer,
  }
}
</script>
