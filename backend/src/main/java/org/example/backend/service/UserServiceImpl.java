package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.LoginRequestDto;
import org.example.backend.dto.LoginResponseDto;
import org.example.backend.dto.RegisterRequestDto;
import org.example.backend.dto.RegisterResponseDto;
import org.example.backend.error.InvalidPasswordError;
import org.example.backend.error.UserAlreadyRegisteredError;
import org.example.backend.error.UserNotRegisteredError;
import org.example.backend.model.User;
import org.example.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final AuthService authService;
  /**
   * @param registerRequestDto
   * @return
   */
  @Override
  public RegisterResponseDto register(RegisterRequestDto registerRequestDto) {
    User user = new User();
    if (userRepository.existsByName(registerRequestDto.name())) {
      throw new UserAlreadyRegisteredError("User already registered!");
    } else {
      user.setName(registerRequestDto.name());
      user.setPassword(passwordEncoder.encode(registerRequestDto.password()));
    }
    return new RegisterResponseDto(userRepository.save(user).getId());
  }

  /**
   *
   */
  @Override
  public void loadUser() {

  }

  /**
   * @param loginRequestDto
   * @return
   */
  @Override
  public LoginResponseDto login(LoginRequestDto loginRequestDto) {
    User user = userRepository.findByName(loginRequestDto.name());
    if(!userRepository.existsByName(loginRequestDto.name())) {
      throw new UserNotRegisteredError("Please register the username!");
    } else if(!passwordEncoder.matches(loginRequestDto.password(), user.getPassword())) {
      throw new InvalidPasswordError("Invalid password!");
    }
    return new LoginResponseDto(authService.generateToken(loginRequestDto));
  }
}
