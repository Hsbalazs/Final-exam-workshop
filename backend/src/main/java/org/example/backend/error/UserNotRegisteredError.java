package org.example.backend.error;

public class UserNotRegisteredError extends RuntimeException {
  public UserNotRegisteredError(String message) {
    super(message);
  }
}
