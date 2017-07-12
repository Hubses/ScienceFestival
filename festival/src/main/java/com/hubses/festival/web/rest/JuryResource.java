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
@RequestMapping(value = "/api/v1/jury", produces = MediaType.APPLICATION_JSON_VALUE)
public class JuryResource {

    @Autowired
    private UserService userService;

    @RequestMapping("")
    public Iterable<CustomerModelDTO> getAllJury() {
        return userService.getAllJury().map(jury -> {
            List<CustomerModelDTO> userList = new ArrayList<>();
            for (User customer : jury) {
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
    public CustomerModelDTO getJury(@PathVariable(value = "id") long id) {
        return userService.getJuryById(id).map(jury ->
                CustomerModelDTO.builder()
                        .id(jury.getId())
                        .username(jury.getUsername())
                        .name(jury.getName())
                        .surname(jury.getSurname())
                        .role(jury.getRole().toString())
                        .events(jury.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build())
                .orElse(new CustomerModelDTO());
    }

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public CustomerModelDTO deleteJury(@PathVariable(value = "id") long id) {
        return userService.deleteJuryById(id).map(jury ->
                CustomerModelDTO.builder()
                        .id(jury.getId())
                        .username(jury.getUsername())
                        .name(jury.getName())
                        .surname(jury.getSurname())
                        .role(jury.getRole().toString())
                        .events(jury.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build())
                .orElse(new CustomerModelDTO());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "", method = RequestMethod.POST)
    public CustomerModelDTO createJury(@RequestBody CustomerFormDTO customerFormDTO) {
        return userService.createJury(customerFormDTO).map(jury -> {
            if (jury.getEvents() == null) {
                jury.setEvents(new HashSet<>());
            }
            return CustomerModelDTO.builder()
                    .id(jury.getId())
                    .username(jury.getUsername())
                    .name(jury.getName())
                    .surname(jury.getSurname())
                    .role(jury.getRole().toString())
                    .events(jury.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                    .build();
        })
                .orElse(new CustomerModelDTO());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public CustomerModelDTO updateJury(@RequestBody CustomerFormDTO customerFormDTO, @PathVariable(value = "id") long id) {
        return userService.updateJury(customerFormDTO, id).map(jury -> {
            if (jury.getEvents() == null) {
                jury.setEvents(new HashSet<>());
            }
            return CustomerModelDTO.builder()
                    .id(jury.getId())
                    .username(jury.getUsername())
                    .name(jury.getName())
                    .surname(jury.getSurname())
                    .role(jury.getRole().toString())
                    .events(jury.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                    .build();
        })
                .orElse(new CustomerModelDTO());
    }
}
