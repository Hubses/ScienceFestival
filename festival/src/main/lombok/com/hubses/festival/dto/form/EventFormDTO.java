package com.hubses.festival.dto.form;

import lombok.Data;

@Data
public class EventFormDTO {
    private String name;
    private String description;
    private String startDate;
    private String finishDate;
    private long latitude;
    private long longitude;
}
