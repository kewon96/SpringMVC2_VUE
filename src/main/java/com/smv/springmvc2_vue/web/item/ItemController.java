package com.smv.springmvc2_vue.web.item;

import com.smv.springmvc2_vue.domain.item.DeliveryCode;
import com.smv.springmvc2_vue.domain.item.Item;
import com.smv.springmvc2_vue.domain.item.ItemRepository;
import com.smv.springmvc2_vue.domain.item.ItemType;
import com.smv.springmvc2_vue.web.item.model.ItemAddDto;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {

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
    public Long addItem(@RequestBody @Validated ItemAddDto dto, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            throw new ValidationException(bindingResult.getAllErrors().get(0).getDefaultMessage());
        }

        Item savedItem = itemRepository.save(dto.createItem());

        return savedItem.getId();
    }

    @PostMapping("/edit")
    public Long editItem(@RequestBody @Validated Item item, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            throw new ValidationException(bindingResult.getAllErrors().get(0).getDefaultMessage());
        }

        return itemRepository.update(item).getId();
    }

    @GetMapping("/get/regions")
    public Map<String, Object> regions() {
        Map<String, Object> regions = new LinkedHashMap<>();
        regions.put("SEOUL", "서울 및 경기도");
        regions.put("BUSAN", "부산, 대전 등 광역시");
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

