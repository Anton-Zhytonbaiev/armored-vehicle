<template>
  <div class="about_container" id="about">
    <div class="about_desc">
      <h2 class="title">{{ $t('home.about.title') }}</h2>
      <p class="text">
        {{ $t('home.about.text1') }}
      </p>
      <p class="text">
        {{ $t('home.about.text2') }}
      </p>
      <p class="text">
        {{ $t('home.about.text3') }}
      </p>
    </div>
    <div class="about_video">
      <iframe width="480" height="265" src="https://www.youtube.com/embed/gmf-uy7zQqo?si=Iy1xDOHsGi5USPEJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="480" height="265" src="https://www.youtube.com/embed/0s8_ucJ2sNc?si=flI6vKg4Q6JNmdYB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
}
</script>

<style scoped>
.about_container {
  height: calc(100vh - 70px);
  background: url('../assets/aboutBack.webp');
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: space-between;
}

.about_desc {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 44px;
  color: #212529;
}

.text {
  color: #212529;
}

.text:nth-last-child(-n+2) {
  margin-top: 20px;
}

.about_video {
  width: 45%;
}
</style>