package com.hubses.festival.service;

import com.hubses.festival.domain.Role;
import com.hubses.festival.domain.User;
import com.hubses.festival.dto.form.CustomerFormDTO;
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

    public Optional<User> createCustomer(CustomerFormDTO customerFormDTO) {
        return Optional.of(userRepository.save(
                new User.UserBuilder()
                        .username(customerFormDTO.getUsername())
                        .password(customerFormDTO.getPassword())
                        .name(customerFormDTO.getName())
                        .surname(customerFormDTO.getSurname())
                        .role(Role.USER)
                        .build()
        ));
    }

    public Optional<User> updateCustomer(CustomerFormDTO customerFormDTO, long id) {
        return userRepository.findOneById(id).map(user -> {
                    if (customerFormDTO.getRole() == null) {
                        customerFormDTO.setRole(user.getRole().toString());
                    }
                    return userRepository.save(new User.UserBuilder()
                            .id(id)
                            .username(customerFormDTO.getUsername())
                            .password(customerFormDTO.getPassword())
                            .name(customerFormDTO.getName())
                            .surname(customerFormDTO.getSurname())
                            .role(Role.valueOf(customerFormDTO.getRole()))
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

    public Optional<User> updateUser(CustomerFormDTO customerFormDTO, long id) {
        return userRepository.findOneByIdAndRole(id, Role.USER).map(user ->
                userRepository.save(new User.UserBuilder()
                        .id(id)
                        .username(customerFormDTO.getUsername())
                        .password(customerFormDTO.getPassword())
                        .name(customerFormDTO.getName())
                        .surname(customerFormDTO.getSurname())
                        .role(Role.USER)
                        .build()
                )
        );
    }

    public Optional<Iterable<User>> getAllJury() {
        return userRepository.findAllByRole(Role.JURY).map(jury -> jury);
    }

    public Optional<User> getJuryById(long id) {
        return userRepository.findOneByIdAndRole(id, Role.JURY).map(jury -> jury);
    }

    public Optional<User> deleteJuryById(long id) {
        return userRepository.findOneByIdAndRole(id, Role.JURY).map(jury -> {
            userRepository.delete(jury);
            return jury;
        });
    }

    public Optional<User> createJury(CustomerFormDTO customerFormDTO) {
        return Optional.of(userRepository.save(
                new User.UserBuilder()
                        .username(customerFormDTO.getUsername())
                        .password(customerFormDTO.getPassword())
                        .name(customerFormDTO.getName())
                        .surname(customerFormDTO.getSurname())
                        .role(Role.JURY)
                        .build()
        ));
    }

    public Optional<User> updateJury(CustomerFormDTO customerFormDTO, long id) {
        return userRepository.findOneByIdAndRole(id, Role.JURY).map(jury ->
                userRepository.save(new User.UserBuilder()
                        .id(id)
                        .username(customerFormDTO.getUsername())
                        .password(customerFormDTO.getPassword())
                        .name(customerFormDTO.getName())
                        .surname(customerFormDTO.getSurname())
                        .role(Role.JURY)
                        .build()
                )
        );
    }

    public Optional<Iterable<User>> getAllCommittee() {
        return userRepository.findAllByRole(Role.ORGANISING_COMMITTEE).map(committee -> committee);
    }

    public Optional<User> getCommitteeById(long id) {
        return userRepository.findOneByIdAndRole(id, Role.ORGANISING_COMMITTEE).map(committee -> committee);
    }

    public Optional<User> deleteCommitteeById(long id) {
        return userRepository.findOneByIdAndRole(id, Role.ORGANISING_COMMITTEE).map(committee -> {
            userRepository.delete(committee);
            return committee;
        });
    }

    public Optional<User> createCommittee(CustomerFormDTO customerFormDTO) {
        return Optional.of(userRepository.save(
                new User.UserBuilder()
                        .username(customerFormDTO.getUsername())
                        .password(customerFormDTO.getPassword())
                        .name(customerFormDTO.getName())
                        .surname(customerFormDTO.getSurname())
                        .role(Role.ORGANISING_COMMITTEE)
                        .build()
        ));
    }

    public Optional<User> updateCommittee(CustomerFormDTO customerFormDTO, long id) {
        return userRepository.findOneByIdAndRole(id, Role.ORGANISING_COMMITTEE).map(committee ->
                userRepository.save(
                        new User.UserBuilder()
                                .id(id)
                                .username(customerFormDTO.getUsername())
                                .password(customerFormDTO.getPassword())
                                .name(customerFormDTO.getName())
                                .surname(customerFormDTO.getSurname())
                                .role(Role.ORGANISING_COMMITTEE)
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

        User jury = new User();
        jury.setUsername("jury");
        jury.setPassword("jury");
        jury.setName("Vasya2");
        jury.setSurname("Pupkin2");
        jury.setRole(Role.JURY);
        userRepository.save(jury);

        User orgCom = new User();
        orgCom.setUsername("org");
        orgCom.setPassword("org");
        orgCom.setName("Vasya3");
        orgCom.setSurname("Pupkin3");
        orgCom.setRole(Role.ORGANISING_COMMITTEE);
        userRepository.save(orgCom);
    }

}
