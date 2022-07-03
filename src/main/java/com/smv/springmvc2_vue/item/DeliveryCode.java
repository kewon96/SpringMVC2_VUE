package com.smv.springmvc2_vue.item;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DeliveryCode {
    
    /** 시스템에서 전달하는 값 */
    private String code;
    
    /** 사용자에게 보여주는 값 */
    private String displayName;
    
}
