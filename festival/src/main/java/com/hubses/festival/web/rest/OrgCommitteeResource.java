package com.hubses.festival.web.rest;

import com.hubses.festival.domain.User;
import com.hubses.festival.dto.CustomerDTO;
import com.hubses.festival.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping(value = "/api/v1/committee", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrgCommitteeResource {

    @Autowired
    private UserService userService;

    @RequestMapping("")
    public Iterable<User> getAllCommittee() {
        return userService.getAllCommittee().map(committee -> committee)
                .orElse(new ArrayList<>());
    }

    @RequestMapping("/{id}")
    public User getCommittee(@PathVariable(value = "id") long id) {
        return userService.getCommitteeById(id).map(committee -> committee)
                .orElse(new User());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public User deleteJCommittee(@PathVariable(value = "id") long id) {
        return userService.deleteCommitteeById(id).map(committee -> committee)
                .orElse(new User());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "", method = RequestMethod.POST)
    public User createCommittee(@RequestBody CustomerDTO customerDTO) {
        return userService.createCommittee(customerDTO).map(committee -> committee)
                .orElse(new User());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public User updateCommittee(@RequestBody CustomerDTO customerDTO, @PathVariable(value = "id") long id) {
        return userService.updateCommittee(customerDTO, id).map(committee -> committee)
                .orElse(new User());
    }
}
