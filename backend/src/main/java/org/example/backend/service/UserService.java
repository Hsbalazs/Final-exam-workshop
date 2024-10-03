package org.example.backend.service;

import org.example.backend.dto.LoginRequestDto;
import org.example.backend.dto.LoginResponseDto;
import org.example.backend.dto.RegisterRequestDto;
import org.example.backend.dto.RegisterResponseDto;

public interface UserService {
  RegisterResponseDto register(RegisterRequestDto registerRequestDto);

  void loadUser();

  LoginResponseDto login(LoginRequestDto loginRequestDto);

//  <groupId>org.example</groupId>
//  <artifactId>Final-exam-workshop</artifactId>
//  <version>1.0-SNAPSHOT</version>
//  <name>Archetype - Final-exam-workshop</name>
//  <url>http://maven.apache.org</url>
}
