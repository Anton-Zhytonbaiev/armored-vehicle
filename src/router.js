import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/pages/Home.vue';
import Gallery from '../src/pages/Gallery.vue';
import Projects from '../src/pages/Projects.vue';
import Contacts from '../src/pages/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/projects', component: Projects },
  { path: '/contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;