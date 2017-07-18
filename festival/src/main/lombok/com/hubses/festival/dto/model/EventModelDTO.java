package com.hubses.festival.dto.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventModelDTO {
    private long id;
    private String name;
    private String description;
    private String startDate;
    private String finishDate;
    private List<Long> users;
    private Set<StepModelDTO> steps;
}
