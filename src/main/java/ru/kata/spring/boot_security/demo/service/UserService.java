package ru.kata.spring.boot_security.demo.service;
import ru.kata.spring.boot_security.demo.entity.User;

import java.util.List;

public interface UserService {

   void saveUser(User user);

   void updateUser(User updateUser);

   void deleteUser(int id);
   User findUserByEmail(String email);
   User findByUsername(String username);

   User getById(int id);

   List<User> getAllUsers();

}


