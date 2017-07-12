package com.hubses.festival.dto.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerModelDTO {
    private long id;
    private String username;
    private String name;
    private String surname;
    private String role;
    private List<String> events;
}
