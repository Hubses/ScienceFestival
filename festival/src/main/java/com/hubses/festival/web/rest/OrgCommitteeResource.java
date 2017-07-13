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
@RequestMapping(value = "/api/v1/committee", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrgCommitteeResource {

    @Autowired
    private UserService userService;

    @RequestMapping("")
    public Iterable<CustomerModelDTO> getAllCommittee() {
        return userService.getAllCommittee().map(committee -> {
            List<CustomerModelDTO> userList = new ArrayList<>();
            for (User customer : committee) {
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
    public CustomerModelDTO getCommittee(@PathVariable(value = "id") long id) {
        return userService.getCommitteeById(id).map(committee ->
                CustomerModelDTO.builder()
                        .id(committee.getId())
                        .username(committee.getUsername())
                        .name(committee.getName())
                        .surname(committee.getSurname())
                        .role(committee.getRole().toString())
                        .events(committee.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build())
                .orElse(new CustomerModelDTO());
    }

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public CustomerModelDTO deleteCommittee(@PathVariable(value = "id") long id) {
        return userService.deleteCommitteeById(id).map(committee ->
                CustomerModelDTO.builder()
                        .id(committee.getId())
                        .username(committee.getUsername())
                        .name(committee.getName())
                        .surname(committee.getSurname())
                        .role(committee.getRole().toString())
                        .events(committee.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                        .build())
                .orElseThrow(() -> new IDNotFoundException("Customer with id = " + id + "not found"));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "", method = RequestMethod.POST)
    public CustomerModelDTO createCommittee(@RequestBody CustomerFormDTO customerFormDTO) {
        return userService.createCommittee(customerFormDTO).map(committee -> {
            if (committee.getEvents() == null) {
                committee.setEvents(new HashSet<>());
            }
            return CustomerModelDTO.builder()
                    .id(committee.getId())
                    .username(committee.getUsername())
                    .name(committee.getName())
                    .surname(committee.getSurname())
                    .role(committee.getRole().toString())
                    .events(committee.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                    .build();
        })
                .orElse(new CustomerModelDTO());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public CustomerModelDTO updateCommittee(@RequestBody CustomerFormDTO customerFormDTO, @PathVariable(value = "id") long id) {
        return userService.updateCommittee(customerFormDTO, id).map(committee -> {
            if (committee.getEvents() == null) {
                committee.setEvents(new HashSet<>());
            }
            return CustomerModelDTO.builder()
                    .id(committee.getId())
                    .username(committee.getUsername())
                    .name(committee.getName())
                    .surname(committee.getSurname())
                    .role(committee.getRole().toString())
                    .events(committee.getEvents().stream().map(Event::getName).collect(Collectors.toList()))
                    .build();
        })
                .orElse(new CustomerModelDTO());
    }
}
