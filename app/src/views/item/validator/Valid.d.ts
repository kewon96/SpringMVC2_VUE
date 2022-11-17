/**
 * Field에 대한 Valid Infomation
 *
 * isError와 isWarning은 절대 같이 true이면 안된다.
 *
 * @param msg 메세지 내용
 * @param isError 에러여부
 * @param isWarning 경고여부
 */
interface SpringValid {
    msg?: string
    isError: boolean
    isWarning: boolean
}

/** 화면 초기에 생성되는 Valid객체가  */
type SpringValidMap<T> = Map<keyof T, SpringValid>

/**
 * 길이에 대한 Validation의 경우 적용할 Option
 *
 * @param stand 정해진 글자 수
 */
interface SizeOption {
    stand?: number, // 고정 글자수
    limit?: number, // 최대/최소 글자수
    // unit: string
}
