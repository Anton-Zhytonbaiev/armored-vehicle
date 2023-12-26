<template>
  <div class="partners_container">
    <div class="title_container">
      <h1 class="title">
        {{ $t('home.partners.title') }}
      </h1>
    </div>
    <div class="scroll_wrapper">
      <div class="logos_container">
        <img class="partner_logo" src="../assets/partner1.png" alt="partner1">
        <img class="partner_logo" src="../assets/partner2.png" alt="partner2">
        <img class="partner_logo" src="../assets/partner3.png" alt="partner3">
        <img class="partner_logo" src="../assets/partner4.png" alt="partner4">
        <img class="partner_logo" src="../assets/partner5.png" alt="partner5">
        <img class="partner_logo" src="../assets/partner6.png" alt="partner6">
        <img class="partner_logo" src="../assets/partner7.png" alt="partner7">
        <img class="partner_logo" src="../assets/partner1.png" alt="partner1">
        <img class="partner_logo" src="../assets/partner2.png" alt="partner2">
        <img class="partner_logo" src="../assets/partner3.png" alt="partner3">
        <img class="partner_logo" src="../assets/partner4.png" alt="partner4">
        <img class="partner_logo" src="../assets/partner5.png" alt="partner5">
        <img class="partner_logo" src="../assets/partner6.png" alt="partner6">
        <img class="partner_logo" src="../assets/partner7.png" alt="partner7">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnersComponent',
}
</script>

<style scoped>
.partners_container {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.title_container {
  display: flex;
  margin: 50px auto;
  justify-content: center;
}
.title {
  font-size: 62px;
  color: #212529;
}

.scroll_wrapper {
  overflow: hidden;
  display: flex;
  height: 100%;
  align-items: center;
}

.logos_container {
  padding: 0 30px;
  display: flex;
  animation: scrollLeft 15s linear infinite;
}

.partner_logo {
  width: 160px;
  height: 160px;
  margin-right: 30px;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-49%);
  }
}
</style>