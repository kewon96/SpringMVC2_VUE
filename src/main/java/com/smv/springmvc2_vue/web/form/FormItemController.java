package com.smv.springmvc2_vue.web.form;

import com.smv.springmvc2_vue.item.Item;
import com.smv.springmvc2_vue.item.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

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

    @GetMapping("/add")
    public String addForm() {
        return "form/addForm";
    }

    @PostMapping("/add")
    public Long addItem(@RequestBody Item item) {
        Item savedItem = itemRepository.save(item);

        return savedItem.getId();
    }

    @PostMapping("/edit")
    public Item editItem(@RequestBody Item item) {
        return itemRepository.update(item);
    }

}

