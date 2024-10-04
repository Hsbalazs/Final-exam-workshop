package org.example.backend.service;

import org.example.backend.dto.LoginRequestDto;
import org.example.backend.dto.LoginResponseDto;
import org.example.backend.dto.RegisterRequestDto;
import org.example.backend.dto.RegisterResponseDto;

public interface UserService {
  RegisterResponseDto register(RegisterRequestDto registerRequestDto);

  void loadUser();

  LoginResponseDto login(LoginRequestDto loginRequestDto);


}
