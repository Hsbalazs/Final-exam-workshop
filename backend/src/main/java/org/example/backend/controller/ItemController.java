package org.example.backend.controller;

import java.security.Principal;

import org.example.backend.dto.AddItemRequestDto;
import org.example.backend.dto.AddItemResponseDto;
import org.example.backend.service.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;

    @PostMapping("/addItem")
    ResponseEntity<AddItemResponseDto> addItem(Principal user, @RequestBody AddItemRequestDto addItemRequestDto) {
        return ResponseEntity.status(HttpStatus.OK).body(itemService.add(user.getName(), addItemRequestDto));
    }
    
}
