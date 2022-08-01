import {RouteLocationRaw, RouteParamsRaw} from "vue-router";

export enum ItemType {
    BOOK = '도서',
    FOOD = '식품',
    ETC = '기타',
}

export interface Region {
    type?: string
    name?: string
}

export interface DeliveryCode {
    code: string
    displayName: string
}

export interface Item {
    id?: string
    name?: string
    price?: number
    quantity?: number
    open: boolean
    regions?: Array<string>
    itemType?: ItemType
    deliveryCode?: string
}

export type ItemRouteParams = {
    id: string
} | RouteParamsRaw

export type ItemRouteLocationRaw = {
    name: string,
    params: ItemRouteParams
} | RouteLocationRaw

