package org.example.backend.service;

import java.util.List;

import org.example.backend.dto.AddItemRequestDto;
import org.example.backend.dto.AddItemResponseDto;
import org.example.backend.model.Item;
import org.example.backend.repository.ItemRepository;
import org.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final UserRepository userRepository;
    private final ItemRepository itemRepository;
        
    @Override
    public AddItemResponseDto add(String name, AddItemRequestDto addItemRequestDto) {
        Item item = new Item();
        item.setName(addItemRequestDto.name());
        item.setDescription(addItemRequestDto.description());
        item.setPhotUrl(addItemRequestDto.photoUrl());
        item.setPrice(addItemRequestDto.price());
        item.setUser(userRepository.findByName(name));
        return new AddItemResponseDto(itemRepository.save(item).getId());
    }

    @Override
    public List<Item> getItems() {
        List<Item> items = itemRepository.findAll();
        return items;
    }
}
