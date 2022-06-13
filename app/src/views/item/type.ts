import {RouteLocationRaw, RouteParamsRaw} from "vue-router";

export interface Item {
    id?: string
    name?: string
    price?: number
    quantity?: number
}

export type ItemRouteParams = {
    id: string
} | RouteParamsRaw

export type ItemRouteLocationRaw = {
    name: string,
    params: ItemRouteParams
} | RouteLocationRaw

