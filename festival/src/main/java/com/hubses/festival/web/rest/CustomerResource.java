package com.hubses.festival.web.rest;

import com.hubses.festival.domain.Event;
import com.hubses.festival.domain.User;
import com.hubses.festival.dto.form.CustomerFormDTO;
import com.hubses.festival.dto.model.CustomerModelDTO;
import com.hubses.festival.exception.IDNotFoundException;
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
@RequestMapping(value = "/api/v1/customers", produces = MediaType.APPLICATION_JSON_VALUE)
public class CustomerResource {

    @Autowired
    private UserService userService;

    @RequestMapping("")
    public Iterable<CustomerModelDTO> getAllCustomers() {
        return userService.getAllCustomers().map(customers -> {
            List<CustomerModelDTO> userList = new ArrayList<>();
            for (User customer : customers) {
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
    public CustomerModelDTO getCustomer(@PathVariable(value = "id") long id) {
        return userService.getCustomerById(id).map(customer ->
                CustomerModelDTO.builder()
                        .id(customer.getId())
                        .username(customer.getUsername())
                        .name(customer.getName())
                        .surname(customer.getSurname())
                        .role(customer.getRole().toString())
                        .events(customer.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build())
                .orElse(new CustomerModelDTO());
    }

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public CustomerModelDTO deleteCustomer(@PathVariable(value = "id") long id) {
        return userService.deleteCustomerById(id).map(customer ->
                CustomerModelDTO.builder()
                        .id(customer.getId())
                        .username(customer.getUsername())
                        .name(customer.getName())
                        .surname(customer.getSurname())
                        .role(customer.getRole().toString())
                        .events(customer.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build())
                .orElseThrow(() -> new IDNotFoundException("Customer with id = " + id + "not found"));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "", method = RequestMethod.POST)
    public CustomerModelDTO createCustomer(@RequestBody CustomerFormDTO customerFormDTO) {
        return userService.createCustomer(customerFormDTO).map(customer -> {
            if (customer.getEvents() == null) {
                customer.setEvents(new HashSet<>());
            }
            return CustomerModelDTO.builder()
                    .id(customer.getId())
                    .username(customer.getUsername())
                    .name(customer.getName())
                    .surname(customer.getSurname())
                    .role(customer.getRole().toString())
                    .events(customer.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                    .build();
        })
                .orElse(new CustomerModelDTO());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public CustomerModelDTO updateCustomer(@RequestBody CustomerFormDTO customerFormDTO, @PathVariable(value = "id") long id) {
        return userService.updateCustomer(customerFormDTO, id).map(customer -> {
            if (customer.getEvents() == null) {
                customer.setEvents(new HashSet<>());
            }
            return CustomerModelDTO.builder()
                    .id(customer.getId())
                    .username(customer.getUsername())
                    .name(customer.getName())
                    .surname(customer.getSurname())
                    .role(customer.getRole().toString())
                    .events(customer.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                    .build();
        })
                .orElse(new CustomerModelDTO());
    }

}
