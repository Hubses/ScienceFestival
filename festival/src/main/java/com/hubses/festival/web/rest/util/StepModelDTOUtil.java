package com.hubses.festival.web.rest.util;

import com.hubses.festival.domain.Step;
import com.hubses.festival.domain.User;
import com.hubses.festival.dto.model.StepModelDTO;

import java.util.Set;
import java.util.stream.Collectors;

public class StepModelDTOUtil {

    public static Set<StepModelDTO> getStepModelDTOs(Set<Step> steps) {
        return steps.stream().map(step -> StepModelDTO.builder()
                .id(step.getId())
                .name(step.getName())
                .startDate(step.getStartDate())
                .finishDate(step.getFinishDate())
                .maxUsers(step.getMaxUsers())
                .users(step.getUsers().stream().map(User::getId).collect(Collectors.toList()))
                .build()).collect(Collectors.toSet());
    }

    private StepModelDTOUtil() {
    }
}
