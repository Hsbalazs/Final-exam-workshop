package org.example.backend.service;

import org.example.backend.dto.LoginRequestDto;

public interface AuthService {
  String generateToken(LoginRequestDto loginRequestDto);
}
