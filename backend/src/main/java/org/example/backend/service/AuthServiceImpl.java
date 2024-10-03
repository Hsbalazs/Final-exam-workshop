package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.config.JwtConfig;
import org.example.backend.dto.LoginRequestDto;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
  private final JwtConfig jwtConfig;
  private final JwtEncoder jwtEncoder;

  /**
   * @param user
   * @return
   */
  @Override
  public String generateToken(LoginRequestDto user) {
    Instant now = Instant.now();
    long expiry = jwtConfig.getExpirationTime();
    // @formatter:off
    JwtClaimsSet claims = JwtClaimsSet.builder()
      .issuer("self")
      .issuedAt(now)
      .expiresAt(now.plusSeconds(expiry))
      .claim("name", user.name())
      .build();
    // @formatter:on
    return this.jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
  }
}
