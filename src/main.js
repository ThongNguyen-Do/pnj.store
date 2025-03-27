import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Đảm bảo đường dẫn chính xác
import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const app = createApp(App);
app.use(router);
app.mount('#app');
