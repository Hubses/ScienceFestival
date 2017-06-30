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
@RequestMapping(value = "/api/v1/jury", produces = MediaType.APPLICATION_JSON_VALUE)
public class JuryResource {

    @Autowired
    private UserService userService;

    @RequestMapping("")
    public Iterable<User> getAllJury() {
        return userService.getAllJury().map(jury -> jury)
                .orElse(new ArrayList<>());
    }

    @RequestMapping("/{id}")
    public User getJury(@PathVariable(value = "id") long id) {
        return userService.getJuryById(id).map(jury -> jury)
                .orElse(new User());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public User deleteJury(@PathVariable(value = "id") long id) {
        return userService.deleteJuryById(id).map(user -> user)
                .orElse(new User());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "", method = RequestMethod.POST)
    public User createUser(@RequestBody CustomerDTO customerDTO) {
        return userService.createJury(customerDTO).map(user -> user)
                .orElse(new User());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public User updateUser(@RequestBody CustomerDTO customerDTO, @PathVariable(value = "id") long id) {
        return userService.updateJury(customerDTO, id).map(user -> user)
                .orElse(new User());
    }
}
