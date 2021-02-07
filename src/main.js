import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router";
import axios from 'axios';

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response;
        if (status === 401) {
            // do stuff
        }
    }
)
if (process.env.NODE_ENV === 'local') {
    axios.defaults.baseURL = 'http://localhost/';
}

window.axios = axios;

createApp(App)
    .use(router)
    .mount('#app')