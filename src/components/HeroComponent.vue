<template>
  <div class="hero_container">
    <div class="hero">
      <h1 class="title">
        ZODIAC <br>ENGINEERING
      </h1>
      <h3 class="text">
        Canadian Armored Vehicle <br>Manufacturer
      </h3>
      <div class="buttons_group">
        <a class="button_more-wrapper" href="#about">
          <div class="button_more">{{ $t('home.hero.more') }}</div>
        </a>
        <div class="button_gallery" @click="this.$router.push('/gallery')">
          {{ $t('home.hero.latest') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
}
</script>

<style scoped>
.hero_container {
  height: calc(100vh - 70px);
  background: url('../assets/hero.webp');
  background-size: cover;
  display: flex;
  align-items: center;
}

.hero {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
}

.title {
  color: #151412;
  font-size: 82px;
  letter-spacing: 12px;
  font-weight: lighter;
}

.text {
  color: #151412;
  font-size: 30px;
  letter-spacing: 6px;
  font-weight: lighter;
}

.buttons_group {
  display: flex;
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

.button_gallery {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  background-color: #885e29;
  border-radius: 4px;
  cursor: pointer;
  color: #f8f9fa;
  transition: background-color 0.3s ease;
}

.button_more:hover {
  background-color: #142c3b;
}

.button_gallery:hover {
  background-color: #6a481f;
}
</style>