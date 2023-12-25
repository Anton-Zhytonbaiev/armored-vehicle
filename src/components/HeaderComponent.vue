<template>
  <div class="header_container">
    <div class="logo_container" @click="navigateToHome">
      <img src="../assets/logo.png" class="logo" alt="logo">
      <h1 class="name">Zodiac Engineering</h1>
    </div>
    <div class="nav">
      <a v-if="!isHomePage" href="./" class="nav_link">Home</a>
      <a href="./gallery" class="nav_link">Gallery</a>
      <a href="./projects" class="nav_link">Projects</a>
      <a href="./contacts" class="nav_link">Contacts</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',

  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },
}
</script>

<style scoped>
.header_container {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  height: 70px;
  background-color: #f8f9fa;
}

.logo_container {
  display: flex;
  align-items: center;
}

.logo_container:hover {
  cursor: pointer;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}

.name {
  text-decoration: none;
  color: #161616;
  font-weight: 700;
  font-size: 25px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav_link {
  text-decoration: none;
  color: #181b1e;
  margin-right: 30px;
  font-size: 21px;
  transition: color 0.5s ease, transform 0.5s ease;
}

.nav_link:hover {
  color: #1e4057; 
  transform: translateY(1px);
}
</style>