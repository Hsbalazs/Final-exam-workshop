package org.example.backend.dto;

public record AddItemRequestDto(
    String name,
    String description,
    String photoUrl,
    String price
) {
    
}
