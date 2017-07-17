package com.hubses.festival.web.rest;

import com.hubses.festival.domain.Event;
import com.hubses.festival.domain.User;
import com.hubses.festival.dto.form.EventFormDTO;
import com.hubses.festival.dto.form.StepFormDTO;
import com.hubses.festival.dto.model.EventModelDTO;
import com.hubses.festival.exception.IDNotFoundException;
import com.hubses.festival.service.EventService;
import com.hubses.festival.web.rest.util.StepModelDTOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/events", produces = MediaType.APPLICATION_JSON_VALUE)
public class EventResource {
    @Autowired
    private EventService eventService;

    @Transactional
    @RequestMapping("")
    public Iterable<EventModelDTO> getAllEvents() {
        return eventService.getAllEvents().map(events -> {
            List<EventModelDTO> eventList = new ArrayList<>();
            for (Event event : events) {
                eventList.add(EventModelDTO.builder()
                        .id(event.getId())
                        .name(event.getName())
                        .description(event.getDescription())
                        .startDate(event.getStartDate())
                        .finishDate(event.getFinishDate())
                        .users(event.getUsers().stream().map(User::getId).collect(Collectors.toList()))
                        .steps(StepModelDTOUtil.getStepModelDTOs(event.getSteps()))
                        .build());
            }
            return eventList;
        })
                .orElse(new ArrayList<>());
    }

    @RequestMapping("/{id}")
    public EventModelDTO getEvent(@PathVariable(value = "id") long id) {
        return eventService.getEventById(id).map(event ->
                EventModelDTO.builder()
                        .id(event.getId())
                        .name(event.getName())
                        .description(event.getDescription())
                        .startDate(event.getStartDate())
                        .finishDate(event.getFinishDate())
                        .users(event.getUsers().stream().map(User::getId).collect(Collectors.toList()))
                        .steps(StepModelDTOUtil.getStepModelDTOs(event.getSteps()))
                        .build())
                .orElse(new EventModelDTO());
    }

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public EventModelDTO deleteEvent(@PathVariable(value = "id") long id) {
        return eventService.deleteEventById(id).map(event ->
                EventModelDTO.builder()
                        .id(event.getId())
                        .name(event.getName())
                        .description(event.getDescription())
                        .startDate(event.getStartDate())
                        .finishDate(event.getFinishDate())
                        .users(event.getUsers().stream().map(User::getId).collect(Collectors.toList()))
                        .steps(StepModelDTOUtil.getStepModelDTOs(event.getSteps()))
                        .build())
                .orElseThrow(() -> new IDNotFoundException("Event with id = " + id + "not found"));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "", method = RequestMethod.POST)
    public EventModelDTO createEvent(@RequestBody EventFormDTO eventFormDTO) {
        return eventService.createEvent(eventFormDTO).map(event ->
                EventModelDTO.builder()
                        .id(event.getId())
                        .name(event.getName())
                        .description(event.getDescription())
                        .startDate(event.getStartDate())
                        .finishDate(event.getFinishDate())
                        .users(new ArrayList<>())
                        .steps(new HashSet<>())
                        .build())
                .orElse(new EventModelDTO());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public EventModelDTO updateEvent(@RequestBody EventFormDTO eventFormDTO, @PathVariable(value = "id") long id) {
        return eventService.updateEvent(eventFormDTO, id).map(event -> {
                    if (event.getUsers() == null) {
                        event.setUsers(new HashSet<>());
                    } else if (event.getSteps() == null) {
                        event.setSteps(new HashSet<>());
                    }
                    return EventModelDTO.builder()
                            .id(event.getId())
                            .name(event.getName())
                            .description(event.getDescription())
                            .startDate(event.getStartDate())
                            .finishDate(event.getFinishDate())
                            .users(event.getUsers().stream().map(User::getId).collect(Collectors.toList()))
                            .steps(StepModelDTOUtil.getStepModelDTOs(event.getSteps()))
                            .build();
                }
        )
                .orElse(new EventModelDTO());
    }

    @RequestMapping(value = "/{id}/step", method = RequestMethod.POST)
    public EventModelDTO addStepToEvent(@RequestBody StepFormDTO stepFormDTO, @PathVariable(value = "id") long id) {
        return eventService.addStepToEvent(stepFormDTO, id).map(event -> {
            if (event.getUsers() == null) {
                event.setUsers(new HashSet<>());
            }
            return EventModelDTO.builder()
                    .id(event.getId())
                    .name(event.getName())
                    .description(event.getDescription())
                    .startDate(event.getStartDate())
                    .finishDate(event.getFinishDate())
                    .users(event.getUsers().stream().map(User::getId).collect(Collectors.toList()))
                    .steps(StepModelDTOUtil.getStepModelDTOs(event.getSteps()))
                    .build();
        })
                .orElseThrow(() -> new IDNotFoundException("Event with id = " + id + "not found"));
    }
}
