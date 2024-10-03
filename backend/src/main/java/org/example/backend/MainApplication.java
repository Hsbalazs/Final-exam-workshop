package org.example.backend;

import lombok.RequiredArgsConstructor;
import org.example.backend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class MainApplication implements CommandLineRunner {
  public static void main(String[] args) {
    SpringApplication.run(MainApplication.class, args);
  }
  public final UserService userService;

  /**
   * @param args
   * @throws Exception
   */
  @Override
  public void run(String... args) throws Exception {
    final UserService userservice;
    userService.loadUser();
    



  }
}
