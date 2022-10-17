package com.smv.springmvc2_vue.web.form.dto;

import com.smv.springmvc2_vue.domain.item.Item;
import com.smv.springmvc2_vue.domain.item.ItemType;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter @Setter
public class ItemAddDto extends ItemControlDto {
    @NotBlank
    private String name;

    private boolean open;

    @Size(min = 1)
    private List<String> regions;

    @NotNull
    private ItemType itemType;

    @NotBlank
    private String deliveryCode;

    public Item createItem() {
        return Item.builder()
                    .name(this.name)
                    .price(this.getPrice())
                    .quantity(this.getQuantity())
                    .open(this.open)
                    .regions(this.regions)
                    .itemType(this.itemType)
                    .deliveryCode(this.deliveryCode)
                .build();
    }
}
