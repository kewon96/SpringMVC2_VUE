import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        name: "MenuList",
        path: "/",
        component: () => import("@/views/MenuList.vue"),
    },
    {
        name: "ItemHome",
        path: "/item/home",
        component: () => import("@/views/item/ItemHome.vue"),
        children: [
            {
                name: 'ItemList',
                path: '',
                component: () => import("@/views/item/ItemList.vue"),
            },
            {
                name: 'ItemAdd',
                path: '/item/add',
                component: () => import("@/views/item/ItemComponent.vue"),
            },
            {
                name: 'ItemEdit',
                path: '/item/edit',
                component: () => import("@/views/item/ItemComponent.vue"),
            },
            {
                name: 'ItemInfo',
                path: '/item/:id',
                component: () => import("@/views/item/ItemComponent.vue"),
            }
        ]
    },
    // {
    //     path: "/item/list",
    //     name: "ItemList",
    //     component: () => import("@/views/ItemList.vue"),
    // },
    // {
    //     path: "/item/add",
    //     name: "ItemAdd",
    //     component: () => import("@/views/ItemComponent.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;