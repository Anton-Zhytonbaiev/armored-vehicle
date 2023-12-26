<template>
  <div class="hero_container">
    <div class="hero">
      <h1 class="title">
        {{ $t('projects.hero.title') }}
      </h1>
      <h3 class="text">
        {{ $t('projects.hero.text') }}
      </h3>
      <a class="button_more-wrapper" href="#offer">
        <div class="button_more">
          {{ $t('projects.hero.button') }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsHero',
}
</script>

<style scoped>
.hero_container {
  height: calc(100vh - 70px);
  background: url('../assets/projectsHero.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero_container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  text-align: center;
}

.title {
  color: #b8b5b2;
  font-size: 110px;
  letter-spacing: 10px;
  font-weight: lighter;
}

.text {
  color: #b8b5b2;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: lighter;
  margin-top: 0;
}

.button_more-wrapper {
  text-decoration: none;
}

.button_more {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  margin-right: 10px;
  background-color: #1e4057;
  border-radius: 4px;
  cursor: pointer;
  color: #f8f9fa;
  transition: background-color 0.3s ease;
}


</style>