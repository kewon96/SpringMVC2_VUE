

/**
 * ValidMap 생성
 * grid가 아닌 form 객체를 위한 ValidMap
 *
 * 데이터 구조
 * map = {
 *     key1: {
 *         msg
 *         isError
 *         isWarning
 *     },
 *     key2: {
 *         msg
 *         isError
 *         isWarning
 *     }
 * }
 *
 * @param fields form에서 유효성검사할 field 목록
 */

export function useValid<T>(fields: Array<keyof T>): SpringValidMap<T> {

    const resultValidObj: SpringValidMap<T> = new Map

    fields.forEach(f => { resultValidObj.set(f, { isError: false, isWarning: false }) })

    return resultValidObj
}