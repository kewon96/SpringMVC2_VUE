import {ItemType} from "@/views/item/validator/ItemType";
// import {ItemValid} from "@/views/item/validator/ItemValid";

interface Region {
    type?: string
    name?: string
}

interface DeliveryCode {
    code: string
    displayName: string
}

interface Item {
    id?: string
    name?: string
    price?: number
    quantity?: number
    open: boolean
    regions?: Array<string>
    itemType?: ItemType
    deliveryCode?: string
}