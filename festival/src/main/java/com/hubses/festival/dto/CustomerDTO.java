package com.hubses.festival.dto;

import lombok.Data;

@Data
public class CustomerDTO {
    private String username;
    private String password;
    private String name;
    private String surname;
    private String role;
    private String event;
}
