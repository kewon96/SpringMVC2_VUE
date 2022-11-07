import {ItemValid} from "@/views/item/ItemValid";

const initItemValid = (): ItemValid => {
    return {
        isError: false,
        isWarning: false
    }
}

export const useValidUtil = {


    setError(errMsg: string): ItemValid {
        return {
            errMsg,
            isError: true,
            isWarning: false
        }
    },

    setSuccess(): ItemValid {
        return {
            errMsg: undefined,
            ...initItemValid()
        }
    },
}