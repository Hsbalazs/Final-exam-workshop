package org.example.backend.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@SuperBuilder
@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "_user")
public class User {
  private String name;
  private String password;
  @Id
  @GeneratedValue
  private Long id;

  @OneToMany(mappedBy = "user")
  private List<Item> items;
}
