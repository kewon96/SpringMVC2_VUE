package com.smv.springmvc2_vue;

import com.smv.springmvc2_vue.domain.item.Item;
import com.smv.springmvc2_vue.domain.item.ItemRepository;
import com.smv.springmvc2_vue.domain.item.ItemType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
@RequiredArgsConstructor
public class TestDataInit {

    private final ItemRepository itemRepository;

    /**
     * 테스트용 데이터 추가
     */
    @PostConstruct
    public void init() {
        itemRepository.save(new Item("itemA", 10000, 10));
        itemRepository.save(
                Item.builder()
                        .name("itemB")
                        .price(20000)
                        .quantity(5)
                        .open(true)
                        .regions(List.of("SEOUL", "JEJU"))
                        .itemType(ItemType.BOOK)
                        .deliveryCode("FAST")
                        .build()
        );
    }

}
