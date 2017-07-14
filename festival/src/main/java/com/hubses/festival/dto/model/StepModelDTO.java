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
public class StepModelDTO {
    private long id;
    private String name;
    private String startDate;
    private String finishDate;
    private int maxUsers;
    private List<Long> users;
}
