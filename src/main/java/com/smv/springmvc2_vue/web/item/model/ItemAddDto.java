package com.smv.springmvc2_vue.web.item.model;

import com.smv.springmvc2_vue.domain.item.Item;
import com.smv.springmvc2_vue.domain.item.ItemType;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter @Setter
public class ItemAddDto {

    @NotBlank
    private String name;

    @Min(10)
    private Integer price;

    @Min(1)
    private Integer quantity;

    /** 판매여부 */
    private Boolean open;

    /** 등록 지역 */
    private List<String> regions;

    /** 상품 종류 */
    private ItemType itemType;

    /** 배송 방식 */
    private String deliveryCode;

    public Item createItem() {
        return Item.builder()
                    .name(this.name)
                    .price(this.price)
                    .quantity(this.quantity)
                    .open(this.open)
                    .regions(this.regions)
                    .itemType(this.itemType)
                    .deliveryCode(this.deliveryCode)
                .build();
    }
}
