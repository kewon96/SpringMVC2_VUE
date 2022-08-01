package com.smv.springmvc2_vue.web.form;

import com.smv.springmvc2_vue.item.DeliveryCode;
import com.smv.springmvc2_vue.item.Item;
import com.smv.springmvc2_vue.item.ItemRepository;
import com.smv.springmvc2_vue.item.ItemType;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
public class FormItemController {

    private final ItemRepository itemRepository;

    @GetMapping("/list")
    public List<Item> items() {
        return itemRepository.findAll();
    }

    @GetMapping("/{itemId}")
    public Item item(@PathVariable long itemId) {
        return itemRepository.findById(itemId);
    }

    @PostMapping("/add")
    public Long addItem(@RequestBody Item item) {
        Item savedItem = itemRepository.save(item);

        return savedItem.getId();
    }

    @PostMapping("/edit")
    public Long editItem(@RequestBody Item item) {
        return itemRepository.update(item).getId();
    }

    @GetMapping("/get/regions")
    public Map<String, Object> regions() {
        Map<String, Object> regions = new LinkedHashMap<>();
        regions.put("SEOUL", "서울");
        regions.put("BUSAN", "부산");
        regions.put("JEJU", "제주");

        return regions;
    }

    @GetMapping("/get/itemTypes")
    public ItemType[] getItemTypes() {
        return ItemType.values();
    }

    @GetMapping("/get/deliveryCodes")
    public List<DeliveryCode> deliveryCodes() {
        List<DeliveryCode> deliveryCodes = new ArrayList<>();

        deliveryCodes.add(new DeliveryCode("FAST", "빠른 배송"));
        deliveryCodes.add(new DeliveryCode("NORMAL", "일반 배송"));
        deliveryCodes.add(new DeliveryCode("SLOW", "느린 배송"));

        return deliveryCodes;
    }

}

