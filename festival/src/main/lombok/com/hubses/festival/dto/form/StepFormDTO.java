package com.hubses.festival.dto.form;

import lombok.Data;

@Data
public class StepFormDTO {
    private String name;
    private String startDate;
    private String finishDate;
    private int maxUsers;
}
