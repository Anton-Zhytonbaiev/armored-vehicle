<template>
  <div class="header_container">
    <div class="logo_container" @click="navigateToHome">
      <img src="../assets/logo.png" class="logo" alt="logo">
      <h1 class="name">
        Zodiac Engineering
      </h1>
    </div>
    <div class="nav">
      <a v-if="!isHomePage" href="./" class="nav_link">
        {{ $t('nav.home') }}
      </a>
      <a href="./gallery" class="nav_link"
        >{{ $t('nav.gallery') }}
      </a>
      <a href="./projects" class="nav_link">
        {{ $t('nav.projects') }}
      </a>
      <a href="./contacts" class="nav_link">
        {{ $t('nav.contacts') }}
      </a>
      <div class="selector">
        <div class="selector_lang" @click="toggleDropdown">
          <img class="selector_icon" src="../assets/lang.png" alt="lang">
          {{ language.toUpperCase() }}
        </div>
        <div v-if="dropdownOpen" class="selector_options">
          <p class="options" @click="changeLanguage('en')">
            EN
          </p>
          <p class="options" @click="changeLanguage('ua')">
            UA
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      language: localStorage.getItem('selectedLanguage') || 'en',
      dropdownOpen: false,
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    changeLanguage(locale) {
      this.dropdownOpen = false;
      localStorage.setItem('selectedLanguage', locale);
      this.language = locale;
      this.$i18n.locale = locale;
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

.selector {
  position: relative
}

.selector_icon {
  width: 20px;
  height: 20px;
}

.selector_lang {
  display: flex;
  justify-content: center;
}

.selector_lang:hover {
  cursor: pointer;
  color: #1e4057;
}

.selector_options {
  position: absolute;
  top: 25px;
  right: -10px;
}

.options {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 60px;
  background-color: #aaa;
}
</style>