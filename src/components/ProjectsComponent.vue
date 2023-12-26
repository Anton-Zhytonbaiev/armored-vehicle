<template>
  <div class="projects_container">
    <h1 class="title">
      What we offer:
    </h1>
    <div class="features">
      <div class="photo"></div>
      <div class="description">
        <h2 class="description_title">
          Cash In Transit
        </h2>
        <p class="description_text">
          The team of our qualified engineers is able to offer various modifications of widely known transport models, as well as to develop a new model according to the order taking specific technical tasks into account.
        </p>
        <h3 class="list_title">
          Models Available:
        </h3>
        <ul>
          <li>Ford 650</li>
          <li>International 4300</li>
          <li>Kenworth 230, 330</li>
          <li>Mercedes Actros</li>
        </ul>
      </div>
    </div>
    <div class="features">
      <div class="photo photo_features2"></div>
      <div class="description">
        <h2 class="description_title">
          Armored Personnel Carriers
        </h2>
        <p class="description_text">
          We manufacture a multi-purpose off road vehicle intended for use as a method of transportation and an operational vehicle during counter-terrorist operations, carrying out territorial defense tasks, including personal transportation during march. The car is build taking the need to protect the crew from firearms and the damaging factors of explosive devices into account.
        </p>
      </div>
    </div>
    <div class="features">
      <div class="photo photo_features3"></div>
      <div class="description">
        <h2 class="description_title">
          Minibuses/Vans
        </h2>
        <p class="description_text">
          The armored minibus/van based on Ford Transit by Zodiac Engineering was developed primarily for the transport of valuable goods. This vehicle is an excellent solution for safe movement of a group of collectors with cargo. The protection of the minibus reaches the level of EN1063 BR7/NIL IV.
        </p>
        <h3 class="list_title">
          Models Available:
        </h3>
        <ul>
          <li>Ford Transit</li>
          <li>GMC Savana</li>
          <li>Mercedes Sprinter</li>
          <li>RAM ProMaster and other</li>
        </ul>
      </div>
    </div>
    <div class="features">
      <div class="photo photo_features4"></div>
      <div class="description">
        <h2 class="description_title">
          SUVs
        </h2>
        <p class="description_text">
          Invisibility in the flow of traffic, ability to mimic the environment is not the only advantage of hidden capsule armoring technology. The steel capsule under the car’s casing from Zodiac Engineering will protect not only from bullets and grenades, but also in road accidents. The reinforced suspension and the armored module inside serve as a solid skeleton of the entire vehicle structure, giving it additional rigidity and strength.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsComponent',
}
</script>

<style scoped>
.projects_container {
  background-color: #d7d9db;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 100px;
  color: #212529;
  margin: 50px 0;
  font-weight: lighter;
}

.features {
  height: calc(100vh - 70px);
  display: flex;
}

.photo {
  width: 50%;
  background-image: url('../assets/projects/1.webp');
  background-size: cover;
}

.description {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f8f8f8;
  padding: 50px;
  color: #212529;
}

.photo_features2 {
  background-image: url('../assets/projects/2.webp');
  order: 3;
}

.photo_features3 {
  background-image: url('../assets/projects/3.webp');
}

.photo_features4 {
  background-image: url('../assets/projects/4.webp');
  order: 3;
}
</style>
