import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import Home from '@/components/Home';
import Browse from '@/components/Browse';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/browse',
    	name: 'Browse',
    	component: Browse,
    },
  ]
});
