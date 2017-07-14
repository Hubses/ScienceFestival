package com.hubses.festival.service;

import com.hubses.festival.domain.Coordinate;
import com.hubses.festival.domain.Event;
import com.hubses.festival.dto.form.EventFormDTO;
import com.hubses.festival.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

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

    @PostConstruct
    public void init(){
        Event event = new Event();
        event.setName("Ice event");
        event.setDescription("Ice event has come");
        event.setStartDate("11/12/2013");
        event.setFinishDate("12/12/2013");
        event.setCoordinate(new Coordinate());
        eventRepository.save(event);
    }
}
