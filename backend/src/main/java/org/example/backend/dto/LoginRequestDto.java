package org.example.backend.dto;

public record LoginRequestDto(
  String name,
  String password
) {
}
