<template>
  <div class="brochure_container">
    <div class="brochure_logo">
      <img src="../assets/bigLogo.webp" alt="bigLogo">
    </div>
    <div class="brochure_desc">
      <h2 class="title">
        {{ $t('home.brochure.title') }}
      </h2>
      <p class="text">
        {{ $t('home.brochure.text') }}
      </p>
      <a class="pdf_link" href="https://www.dropbox.com/s/zwb3szsv3kssuej/Full%20April2021%20%281%29.pdf?dl=0">
        PDF File
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrochureComponent',
}
</script>

<style scoped>
.brochure_container {
  height: 300px;
  background: url('../assets/brouchurBackground.webp');
  background-size: contain;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: space-between;
}

.brochure_logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.brochure_desc {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: #fcfcfc;
  font-size: 26px;
}

.text {
  color: #fcfcfc;
  font-size: 18px;
  font-weight: 400;
}

.pdf_link {
  margin-top: 15px;
  color: #fcfcfc;
  font-size: 20px;
}
</style>