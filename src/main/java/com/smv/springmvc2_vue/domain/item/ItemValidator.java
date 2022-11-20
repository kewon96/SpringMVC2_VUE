package com.smv.springmvc2_vue.domain.item;

import com.smv.springmvc2_vue.web.form.dto.ItemControlDto;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class ItemValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return ItemControlDto.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        if(errors.hasErrors()) return;

        ItemControlDto dto = (ItemControlDto) target;

        if(dto.getPrice() * dto.getQuantity() < 10000) {
            errors.reject("globalError", "가격 x 수량은 10000원을 넘겨야 합니다.");
        }
    }
}
