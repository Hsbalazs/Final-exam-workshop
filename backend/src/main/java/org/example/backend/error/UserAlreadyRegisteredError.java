package org.example.backend.error;

public class UserAlreadyRegisteredError extends RuntimeException {
  public UserAlreadyRegisteredError(String message) {
    super(message);
  }
}
