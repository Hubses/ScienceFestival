package com.hubses.festival.service;

import com.hubses.festival.domain.Role;
import com.hubses.festival.domain.User;
import com.hubses.festival.dto.CustomerDTO;
import com.hubses.festival.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getCustomerByUsername(String username) {
        return userRepository.findOneByUsername(username).map(user -> user);
    }

    public Optional<Iterable<User>> getAllCustomers() {
        return Optional.ofNullable(userRepository.findAll());
    }

    public Optional<User> getCustomerById(long id) {
        return userRepository.findOneById(id).map(user -> user);
    }

    public Optional<User> deleteCustomerById(long id) {
        return userRepository.findOneById(id).map(user -> {
                    userRepository.delete(user);
                    return user;
                }
        );
    }

    public Optional<User> createCustomer(CustomerDTO customerDTO) {
        return Optional.of(userRepository.save(
                User.builder()
                        .username(customerDTO.getUsername())
                        .password(customerDTO.getPassword())
                        .name(customerDTO.getName())
                        .surname(customerDTO.getSurname())
                        .role(Role.USER)
                        .build()
        ));
    }

    public Optional<User> updateCustomer(CustomerDTO customerDTO, long id) {
        return userRepository.findOneById(id).map(user -> {
                    if (customerDTO.getRole() == null) {
                        customerDTO.setRole(user.getRole().toString());
                    }
                    return userRepository.save(User.builder()
                            .id(id)
                            .username(customerDTO.getUsername())
                            .password(customerDTO.getPassword())
                            .name(customerDTO.getName())
                            .surname(customerDTO.getSurname())
                            .role(Role.valueOf(customerDTO.getRole()))
                            .build()
                    );
                }
        );
    }

    public Optional<Iterable<User>> getAllUsers() {
        return userRepository.findAllByRole(Role.USER).map(users -> users);
    }

    public Optional<User> getUserById(long id) {
        return userRepository.findOneByIdAndRole(id, Role.USER).map(user -> user);
    }

    public Optional<User> deleteUserById(long id) {
        return userRepository.findOneByIdAndRole(id, Role.USER).map(user -> {
            userRepository.delete(user);
            return user;
        });
    }

    public Optional<User> updateUser(CustomerDTO customerDTO, long id) {
        return userRepository.findOneByIdAndRole(id, Role.USER).map(user ->
                userRepository.save(User.builder()
                        .id(id)
                        .username(customerDTO.getUsername())
                        .password(customerDTO.getPassword())
                        .name(customerDTO.getName())
                        .surname(customerDTO.getSurname())
                        .role(Role.USER)
                        .build()
                )
        );
    }

    @PostConstruct
    public void init() {
        User admin = new User();
        admin.setUsername("admin");
        admin.setPassword("admin");
        admin.setRole(Role.ADMIN);
        userRepository.save(admin);

        User user = new User();
        user.setUsername("user");
        user.setPassword("user");
        user.setName("Vasya");
        user.setSurname("Pupkin");
        user.setRole(Role.USER);
        userRepository.save(user);
    }

}
