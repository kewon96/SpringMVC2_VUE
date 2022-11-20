package com.smv.springmvc2_vue.web.form.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;

@Getter @Setter @SuperBuilder @NoArgsConstructor @AllArgsConstructor
public class ItemControlDto {

    @NotNull
    private Integer price;

    @NotNull
    private Integer quantity;
}
