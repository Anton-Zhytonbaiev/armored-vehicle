<template>
  <div class="footer_container">
    <div class="line"></div>
    <div class="contacts_container">
      <div class="contacts">
        <div class="contact">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path opacity="1" fill="#fcfcfc" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <p class="contact_text">
            Address- 98 Healey Rd, Bolton, ON, Canada.
          </p>
        </div>
        <div class="contact">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path opacity="1" fill="#fcfcfc" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
          <p class="contact_text">
            Email - info@zodiacengineering.ca
          </p>
        </div>
        <div class="contact">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path opacity="1" fill="#fcfcfc" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <p class="contact_text">
            Phone - 647-995-6255
          </p>
        </div>
        <div class="contact">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path opacity="1" fill="#fcfcfc" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <p class="contact_text">
            Phone - 416-712-1241
          </p>
        </div>
      </div>
      <div class="vert_line"></div>
      <div class="map_container">
        <img class="map" src="https://inkasarmored.com/wp-content/uploads/map.png" alt="map">
        <img class="map_dot1" src="../assets/address2.svg" alt="dot" title="Ukraine">
        <img class="map_dot2" src="../assets/address2.svg" alt="dot" title="Great Britain">
        <img class="map_dot3" src="../assets/address2.svg" alt="dot" title="USA">
      </div>
    </div>
    <div class="line"></div>
    <div class="rights_container">
      <p class="rights_text">
        © 2023 - Zodiac. All Rights Reserved.
      </p>
      <p class="rights_text">
        Made in USA
      </p>
      <div>
        <a href="./" class="rights_text rights_text-links">
          Privacy Policy
        </a>
        <a href="./" class="rights_text">
          Terms of Use
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
.footer_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 47vh;
  background-color: #3d3d3d;
  padding: 50px;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #fff;
}

.vert_line {
  width: 1px;
  height: 34vh;
  background-color: #fff;
}

.contacts_container {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}

.contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.contact {
  display: flex;
  align-items: center;
}

.contact_text {
  color: #fcfcfc;
  font-size: 16px;
  margin-left: 10px;
}

.map_container {
  position: relative;
}

.map_dot1 {
  position: absolute;
  top: 26%;
  left: 53%;
  transition: transform 0.7s;
}

.map_dot1:hover {
  transform: translateY(3px);
}

.map_dot2 {
  position: absolute;
  top: 21%;
  left: 45%;
  transition: transform 0.7s;
}

.map_dot2:hover {
  transform: translateY(3px);
}

.map_dot3 {
  position: absolute;
  top: 29%;
  left: 20%;
  transition: transform 0.7s;
}

.map_dot3:hover {
  transform: translateY(3px);
}

.rights_container {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.rights_text {
  text-decoration: none;
  color: #fcfcfc;
  
}

.rights_text-links {
  margin-right: 30px;
}
</style>