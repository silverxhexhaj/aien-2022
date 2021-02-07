import {createWebHistory, createRouter} from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const history = createWebHistory();
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
];

const router = createRouter({
    history,
    routes
});

export default router;