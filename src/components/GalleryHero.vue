<template>
  <div class="hero_container">
    <div class="hero">
      <h1 class="title">
        {{ $t('gallery.title') }}
      </h1>
      <h3 class="text">
        {{ $t('gallery.text') }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryHero',
}
</script>

<style scoped>
.hero_container {
  height: calc(100vh - 70px);
  background: url('../assets/galleryHero.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
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
  z-index: 2;
}

.title {
  color: #b8b5b2;
  font-size: 86px;
  letter-spacing: 10px;
  font-weight: lighter;
}

.text {
  color: #b8b5b2;
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: lighter;
}
</style>