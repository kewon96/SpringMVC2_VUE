import {createWebHistory, createRouter, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
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
                beforeEnter(to, from, next) {
                    // id값이 명확해야 이동가능
                    if(Number(to.params.id)) {
                        next()
                    }
                }
            },
            {
                name: 'ItemCancel',
                path: '/item/cancel',
                redirect: 'home'
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