import { createApp } from 'vue';
import '@/assets/index.scss';
import App from './App.vue';
import router from '@/router';
import 'element-plus/dist/index.css';
import i18n from '@/lang';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount('#app');
