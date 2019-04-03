import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import Home from '@/components/Home';
import Browse from '@/components/Browse';
import Menu from '@/components/Menu';
import Pay from '@/components/Pay';
import Receipt from '@/components/Receipt';
import Notification from '@/components/Notification';
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
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay,
    },
    {
      path: '/receipt',
      name: 'Receipt',
      component: Receipt,
    },

    {
      path: '/notify',
      name: 'Notification',
      component: Notification,
    },
  ]
});
