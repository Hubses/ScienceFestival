package com.hubses.festival.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    private String description;

    private String startDate;

    private String finishDate;

    @Embedded
    private Coordinate coordinate;

    @ManyToMany
    @JoinTable(name = "event_user", joinColumns = @JoinColumn(name = "event_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"))
    private Set<User> users;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private Set<Step> steps;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(String finishDate) {
        this.finishDate = finishDate;
    }

    public Coordinate getCoordinate() {
        return coordinate;
    }

    public void setCoordinate(Coordinate coordinate) {
        this.coordinate = coordinate;
    }

    public Set<Step> getSteps() {
        return steps;
    }

    public void setSteps(Set<Step> steps) {
        this.steps = steps;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Event() {
    }

    private Event(EventBuilder eventBuilder) {
        this.id = eventBuilder.id;
        this.name = eventBuilder.name;
        this.startDate = eventBuilder.startDate;
        this.finishDate = eventBuilder.finishDate;
        this.description = eventBuilder.description;
        this.coordinate = eventBuilder.coordinate;
    }

    public static class EventBuilder {
        private long id;
        private String name;
        private String description;
        private String startDate;
        private String finishDate;
        private Coordinate coordinate;

        public EventBuilder id(long id) {
            this.id = id;
            return this;
        }

        public EventBuilder name(String name) {
            this.name = name;
            return this;
        }

        public EventBuilder description(String description) {
            this.description = description;
            return this;
        }

        public EventBuilder startDate(String startDate) {
            this.startDate = startDate;
            return this;
        }

        public EventBuilder finishDate(String finishDate) {
            this.finishDate = finishDate;
            return this;
        }

        public EventBuilder coordinate(long latitude, long longitude) {
            this.coordinate = new Coordinate();
            this.coordinate.setLatitude(latitude);
            this.coordinate.setLongitude(longitude);
            return this;
        }

        public Event build() {
            return new Event(this);
        }
    }
}
