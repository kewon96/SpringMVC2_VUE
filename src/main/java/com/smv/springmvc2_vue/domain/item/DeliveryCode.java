package com.smv.springmvc2_vue.domain.item;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class DeliveryCode {
    
    /** 시스템에서 전달하는 값 */
    private String code;
    
    /** 사용자에게 보여주는 값 */
    private String displayName;
    
}
