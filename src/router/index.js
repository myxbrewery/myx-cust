import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import Home from '@/views/Home';
import Browse from '@/views/Browse';
import Menu from '@/views/Menu';
import Checkout from '@/views/Checkout';
import Pay from '@/views/Pay';
import Receipt from '@/views/Receipt';
import Notification from '@/views/Notification';
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
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
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
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
