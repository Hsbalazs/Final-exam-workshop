package org.example.backend.config;

import lombok.Getter;
import org.springframework.context.annotation.Configuration;

/**
 * This configuration represents the CORS configurations for the application.
 */
@Configuration
@Getter
public class CorsConfig {
  private String corsUrls = "http://localhost:5173";
}
