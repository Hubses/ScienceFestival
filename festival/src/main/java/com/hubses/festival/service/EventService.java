package com.hubses.festival.service;

import com.hubses.festival.domain.Coordinate;
import com.hubses.festival.domain.Event;
import com.hubses.festival.domain.Step;
import com.hubses.festival.dto.form.EventFormDTO;
import com.hubses.festival.dto.form.StepFormDTO;
import com.hubses.festival.exception.IDNotFoundException;
import com.hubses.festival.repository.EventRepository;
import com.hubses.festival.repository.StepRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.*;

@Service
public class EventService {

    private EventRepository eventRepository;
    private StepRepository stepRepository;

    public EventService(EventRepository eventRepository, StepRepository stepRepository) {
        this.eventRepository = eventRepository;
        this.stepRepository = stepRepository;
    }

    public Optional<Iterable<Event>> getAllEvents() {
        return Optional.ofNullable(eventRepository.findAll());
    }

    public Optional<Event> getEventById(long id) {
        return Optional.ofNullable(eventRepository.findOne(id));
    }

    public Optional<Event> deleteEventById(long id) {
        return eventRepository.findOneById(id).map(event -> {
                    eventRepository.delete(event);
                    return event;
                }
        );
    }

    public Optional<Event> createEvent(EventFormDTO eventFromDTO) {
        return Optional.of(eventRepository.save(
                new Event.EventBuilder()
                        .name(eventFromDTO.getName())
                        .description(eventFromDTO.getDescription())
                        .startDate(eventFromDTO.getStartDate())
                        .finishDate(eventFromDTO.getFinishDate())
                        .coordinate(eventFromDTO.getLatitude(), eventFromDTO.getLongitude())
                        .build()
        ));
    }

    public Optional<Event> updateEvent(EventFormDTO eventFromDTO, long id) {
        return eventRepository.findOneById(id).map(event ->
                eventRepository.save(
                        new Event.EventBuilder()
                                .id(event.getId())
                                .name(eventFromDTO.getName())
                                .description(eventFromDTO.getDescription())
                                .startDate(eventFromDTO.getStartDate())
                                .finishDate(eventFromDTO.getFinishDate())
                                .coordinate(eventFromDTO.getLatitude(), eventFromDTO.getLongitude())
                                .build()
                )
        );
    }

    public Optional<Event> addStepToEvent(StepFormDTO stepFormDTO, long eventId) {
        Event event = eventRepository.findOneById(eventId).orElseThrow(IDNotFoundException::new);
        Step step = new Step.StepBuilder()
                .name(stepFormDTO.getName())
                .startDate(stepFormDTO.getStartDate())
                .finishDate(stepFormDTO.getFinishDate())
                .maxUsers(stepFormDTO.getMaxUsers())
                .users(new HashSet<>())
                .event(event)
                .build();


        Set<Step> steps = event.getSteps();
        steps.add(step);
        eventRepository.save(event);


        return Optional.ofNullable(eventRepository.findOne(1L));
    }

    @PostConstruct
    public void init() {
        Event event = new Event();
        event.setName("Ice event");
        event.setDescription("Ice event has come");
        event.setStartDate("11/12/2013");
        event.setFinishDate("12/12/2013");
        event.setCoordinate(new Coordinate());
        eventRepository.save(event);
        Step step1 = new Step.StepBuilder().id(1).name("lol").event(event).build();
        Step step2 = new Step.StepBuilder().id(2).name("kek").event(event).build();
        stepRepository.save(Arrays.asList(step1, step2));
        event.setSteps(new HashSet<>(Arrays.asList(step1, step2)));
        eventRepository.save(event);
    }
}
