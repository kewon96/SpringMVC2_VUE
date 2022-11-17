
/** 유효성 검사 성공 */
function createSuccess(): SpringValid {
    return {
        msg: '',
        isError: false,
        isWarning: false
    }
}

/** 유효성검사 실패 */
function createError(msg: string): SpringValid {
    return {
        msg,
        isError: true,
        isWarning: false
    }
}

/** 유효성검사 경고 */
function createWarning(msg: string): SpringValid {
    return {
        msg,
        isError: false,
        isWarning: true
    }
}

/** 필수입력 유효성검사 */
const setValidRequired = <T>(value: T, name: string): SpringValid =>
    value ? createSuccess() : createError(`${name}은(는) 필수입력항목입니다.`)

/** 글자 수 유효성검사 */
const setValidSize = <T>(value: string | undefined, name: string, option: {stand: number}): SpringValid => {
    if(!value) return setValidRequired(value, name)

    return value.length === option.stand ? createSuccess() : createError(`${name}은(는) ${option.stand}글자여야합니다.`)
}

/** 글자 최대길이 유효성검사 */
const setValidMax = <T>(value: string | undefined, name: string, option: {limit: number}): SpringValid => {
    if(!value) return setValidRequired(value, name)

    return value.length < option.limit ? createSuccess() : createError(`${name}은(는) 최대 ${option.limit}글자여야합니다.`)
}

/** Error가 발생한 ValidMap 조회 */
const getError = <T>(validMap: SpringValidMap<T>): SpringValid | undefined => getValidMapList(validMap).find(v => v.isError)

/** Warning이 발생한 ValidMap 조회 */
const getWarning = <T>(validMap: SpringValidMap<T>): SpringValid | undefined => getValidMapList(validMap).find(v => v.isWarning)

/** ValidMap만 존재하는 List로 변환 */
const getValidMapList = <T>(validMap: SpringValidMap<T>): Array<SpringValid> => Array.from(validMap.values())

export const validUtil = {
    createSuccess,
    createError,
    createWarning,
    setValidRequired,
    setValidSize,
    setValidMax,
    getError,
    getWarning,
}
