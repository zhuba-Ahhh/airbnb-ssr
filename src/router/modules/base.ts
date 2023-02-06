import HomeView from '@/views/HomeView.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/MineView.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  }
];
