import {ValidEntity, ValidMap} from "@/types/Type";

export function useValid<T>(keys: Array<keyof T>): ValidMap<T> {
    const validMap: ValidMap<T> = new Map<keyof T, ValidEntity>()

    keys.forEach((k: keyof T) => {
        validMap.set(k, {
            isError: false,
            isWarning: false
        })
    })

    return validMap
}