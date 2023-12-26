<template>
  <div class="projects_container">
    <h1 class="title">
      {{ $t('projects.subtitle') }}
    </h1>
    <div class="features">
      <div class="photo"></div>
      <div class="description">
        <h2 class="description_title">
          {{ $t('projects.features1.title') }}
        </h2>
        <p class="description_text">
          {{ $t('projects.features1.text') }}
        </p>
        <h3 class="list_title">
          {{ $t('projects.features1.listTitle') }}
        </h3>
        <ul>
          <li>{{ $t('projects.features1.listItem1') }}</li>
          <li>{{ $t('projects.features1.listItem2') }}</li>
          <li>{{ $t('projects.features1.listItem3') }}</li>
          <li>{{ $t('projects.features1.listItem4') }}</li>
        </ul>
      </div>
    </div>
    <div class="features">
      <div class="photo photo_features2"></div>
      <div class="description">
        <h2 class="description_title">
          {{ $t('projects.features2.title') }}
        </h2>
        <p class="description_text">
          {{ $t('projects.features2.text') }}
        </p>
      </div>
    </div>
    <div class="features">
      <div class="photo photo_features3"></div>
      <div class="description">
        <h2 class="description_title">
          {{ $t('projects.features3.title') }}
        </h2>
        <p class="description_text">
          {{ $t('projects.features3.text') }}
        </p>
        <h3 class="list_title">
          {{ $t('projects.features3.listTitle') }}
        </h3>
        <ul>
          <li>{{ $t('projects.features3.listItem1') }}</li>
          <li>{{ $t('projects.features3.listItem2') }}</li>
          <li>{{ $t('projects.features3.listItem3') }}</li>
          <li>{{ $t('projects.features3.listItem4') }}</li>
        </ul>
      </div>
    </div>
    <div class="features">
      <div class="photo photo_features4"></div>
      <div class="description">
        <h2 class="description_title">
          {{ $t('projects.features4.title') }}
        </h2>
        <p class="description_text">
          {{ $t('projects.features4.text') }}
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
