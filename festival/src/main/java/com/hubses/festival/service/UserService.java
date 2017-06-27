package com.hubses.festival.service;

import com.hubses.festival.domain.Role;
import com.hubses.festival.domain.User;
import com.hubses.festival.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUserByUsername(String username){
        return Optional.ofNullable(userRepository.findOneByUsername(username));
    }

    @PostConstruct
    public void init(){
        User admin = new User();
        admin.setUsername("admin");
        admin.setPassword("admin");
        admin.setRole(Role.ADMIN);
        userRepository.save(admin);

        User user = new User();
        user.setUsername("user");
        user.setPassword("user");
        user.setRole(Role.USER);
        userRepository.save(user);

        System.out.println(userRepository.findAll());
    }
}
