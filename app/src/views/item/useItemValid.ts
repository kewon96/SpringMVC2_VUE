export const useItemValid = {

    /**
     * 상품명에 대한 검사
     * 1. 필수값
     * @param name
     */
    validName(name?: string): string {
        let resultMsg: string = ''

        if(!name) resultMsg = '상품명을 입력하세요.'

        return resultMsg
    },

}