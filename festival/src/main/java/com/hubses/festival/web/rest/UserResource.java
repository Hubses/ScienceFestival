package com.hubses.festival.web.rest;

import com.hubses.festival.domain.Event;
import com.hubses.festival.domain.User;
import com.hubses.festival.dto.form.CustomerFormDTO;
import com.hubses.festival.dto.model.CustomerModelDTO;
import com.hubses.festival.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserResource {

    @Autowired
    private UserService userService;

    @RequestMapping("")
    public Iterable<CustomerModelDTO> getAllUsers() {
        return userService.getAllUsers().map(users -> {
            List<CustomerModelDTO> userList = new ArrayList<>();
            for (User customer : users) {
                userList.add(CustomerModelDTO.builder()
                        .id(customer.getId())
                        .username(customer.getUsername())
                        .name(customer.getName())
                        .surname(customer.getSurname())
                        .role(customer.getRole().toString())
                        .events(customer.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build());
            }
            return userList;
        })
                .orElse(new ArrayList<>());
    }

    @RequestMapping("/{id}")
    public CustomerModelDTO getUser(@PathVariable(value = "id") long id) {
        return userService.getUserById(id).map(user ->
                CustomerModelDTO.builder()
                        .id(user.getId())
                        .username(user.getUsername())
                        .name(user.getName())
                        .surname(user.getSurname())
                        .role(user.getRole().toString())
                        .events(user.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build())
                .orElse(new CustomerModelDTO());
    }

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public CustomerModelDTO deleteUser(@PathVariable(value = "id") long id) {
        return userService.deleteUserById(id).map(user ->
                CustomerModelDTO.builder()
                        .id(user.getId())
                        .username(user.getUsername())
                        .name(user.getName())
                        .surname(user.getSurname())
                        .role(user.getRole().toString())
                        .events(user.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build())
                .orElse(new CustomerModelDTO());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "", method = RequestMethod.POST)
    public CustomerModelDTO createUser(@RequestBody CustomerFormDTO customerFormDTO) {
        return userService.createCustomer(customerFormDTO).map(user -> {
            if (user.getEvents() == null) {
                user.setEvents(new HashSet<>());
            }
            return CustomerModelDTO.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .name(user.getName())
                    .surname(user.getSurname())
                    .role(user.getRole().toString())
                    .events(user.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                    .build();
        })
                .orElse(new CustomerModelDTO());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public CustomerModelDTO updateUser(@RequestBody CustomerFormDTO customerFormDTO, @PathVariable(value = "id") long id) {
        return userService.updateUser(customerFormDTO, id).map(user -> {
            if (user.getEvents() == null) {
                user.setEvents(new HashSet<>());
            }
            return CustomerModelDTO.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .name(user.getName())
                    .surname(user.getSurname())
                    .role(user.getRole().toString())
                    .events(user.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                    .build();
        })
                .orElse(new CustomerModelDTO());
    }
}
