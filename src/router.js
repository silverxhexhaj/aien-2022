import {createWebHistory, createRouter} from "vue-router";
import Home from "./pages/Home.vue";
import Akademia from "./pages/Akademia.vue";
import Projekte from "./pages/Projekte.vue";
import Aktivitete from "./pages/Aktivitete.vue";
import Publikime from "./pages/Publikime.vue";
import Blog from "./pages/Blog.vue";

const history = createWebHistory();
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/akademia",
        component: Akademia
    },
    {
        path: "/projekte",
        component: Projekte
    },
    {
        path: "/aktivitete",
        component: Aktivitete
    },
    {
        path: "/publikime",
        component: Publikime
    },
    {
        path: "/blog",
        component: Blog
    },
];

const router = createRouter({
    history,
    routes
});

export default router;