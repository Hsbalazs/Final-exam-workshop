package org.example.backend.error;

public class InvalidPasswordError extends RuntimeException {
  public InvalidPasswordError(String message) {
    super(message);
  }
}
