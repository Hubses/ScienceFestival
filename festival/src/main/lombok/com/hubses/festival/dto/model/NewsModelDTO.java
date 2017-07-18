package com.hubses.festival.dto.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NewsModelDTO {
    private long id;
    private String name;
    private String html;
}
