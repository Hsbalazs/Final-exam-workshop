package org.example.backend.service;

import org.example.backend.dto.AddItemRequestDto;
import org.example.backend.dto.AddItemResponseDto;

public interface ItemService {

    AddItemResponseDto add(String name, AddItemRequestDto addItemRequestDto);

    Object getItems();
    
}
