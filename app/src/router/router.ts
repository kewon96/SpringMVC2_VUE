import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/form/items",
        name: "ItemList",
        component: () => import("@/views/ItemList.vue"),
    },
    {
        path: "/add/item",
        name: "ItemAdd",
        component: () => import("@/views/ItemAdd.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;