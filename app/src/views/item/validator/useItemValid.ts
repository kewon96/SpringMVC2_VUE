import {ItemValid} from "@/views/item/validator/ItemValid";
import {useValidUtil} from "@/views/item/validator/useValidUtil";
import {ItemType} from "@/views/item/validator/ItemType";

const { setError, setSuccess } = useValidUtil

export const useItemValid = {

    /**
     * 상품명에 대한 검사
     * 1. 필수값
     * @param name
     */
    validName(name?: string): ItemValid {
        return name ? setSuccess() : setError('상품명을 입력하세요.')
    },

    validPrice(price?: number): ItemValid {
        if(!price) return setError('가격을 입력하세요')

        return price > 10 ? setSuccess() : setError('가격은 10원을 넘겨야합니다.')
    },

    validQuantity(quantity?: number): ItemValid {
        if(!quantity) return setError('가격을 입력하세요')

        return quantity > 1 ? setSuccess() : setError('수량은 최소 1개여야합니다.')
    },

    validRegions(regions?: Array<string>): ItemValid {
        return regions && regions.length > 0 ?
            setSuccess() : setError('등록지역을 선택해야합니다.')
    },

    validType(type?: ItemType): ItemValid {
        return type ?  setSuccess() : setError('상품 종류를 선택해야합니다.')
    },

    validDeliveryCode(code?: string): ItemValid {
        return code ?  setSuccess() : setError('배송방식을 선택해야합니다.')
    },

}