<template>
  <div class="image-grid">
    <div v-for="(image, index) in images" :key="index" class="grid-item">
      <img 
        :src="require(`@/assets/gallery/${index + 1}.webp`)" 
        :alt="image.alt" class="grid-image" 
        @click="openFullScreen(index)"
      >
    </div>
    <div v-if="fullScreenImage" class="modal-overlay" @click="closeFullScreen">
      <img 
        :src="require(`@/assets/gallery/${currentIndex + 1}.webp`)"
        class="full-screen-modal"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryComponent',
  data() {
    return {
      images: [
        { url: '../assets/gallery/1.webp', alt: 'Image 1' },
        { url: '../assets/gallery/2.webp', alt: 'Image 2' },
        { url: '../assets/gallery/3.webp', alt: 'Image 3' },
        { url: '../assets/gallery/4.webp', alt: 'Image 4' },
        { url: '../assets/gallery/5.webp', alt: 'Image 5' },
        { url: '../assets/gallery/6.webp', alt: 'Image 6' },
        { url: '../assets/gallery/7.webp', alt: 'Image 7' },
        { url: '../assets/gallery/8.webp', alt: 'Image 8' },
        { url: '../assets/gallery/9.webp', alt: 'Image 9' },
        { url: '../assets/gallery/10.webp', alt: 'Image 10' },
        { url: '../assets/gallery/11.webp', alt: 'Image 11' },
        { url: '../assets/gallery/12.webp', alt: 'Image 12' },
        { url: '../assets/gallery/13.webp', alt: 'Image 13' },
        { url: '../assets/gallery/14.webp', alt: 'Image 14' },
        { url: '../assets/gallery/15.webp', alt: 'Image 15' },
      ],
      fullScreenImage: false,
      currentIndex: null,
    };
  },
  methods: {
    openFullScreen(index) {
      this.fullScreenImage = true;
      this.currentIndex = index
    },
    closeFullScreen() {
      this.fullScreenImage = false;
      this.currentIndex = null
    },
  },
}
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid-item {
  position: relative;
}

.grid-image {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.full-screen-modal {
  width: 90%;
  height: auto;
}
</style>