package com.hubses.festival.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
public class Step {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    private String startDate;

    private String finishDate;

    private int maxUsers;

    @ManyToOne
    @JoinColumn(name="EVENT_ID", nullable=false)
    private Event event;

    @ManyToMany
    @JoinTable(name = "step_user", joinColumns = @JoinColumn(name = "step_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"))
    private Set<User> users;

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

    public int getMaxUsers() {
        return maxUsers;
    }

    public void setMaxUsers(int maxUsers) {
        this.maxUsers = maxUsers;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Step() {

    }

    public Step(StepBuilder stepBuilder) {
        this.id = stepBuilder.id;
        this.name = stepBuilder.name;
        this.startDate = stepBuilder.startDate;
        this.finishDate = stepBuilder.finishDate;
        this.maxUsers = stepBuilder.maxUsers;
        this.users = stepBuilder.users;
        this.event = stepBuilder.event;
    }

    public static class StepBuilder {
        private long id;
        private String name;
        private String startDate;
        private String finishDate;
        private int maxUsers;
        private Event event;
        private Set<User> users;

        public StepBuilder id(long id) {
            this.id = id;
            return this;
        }

        public StepBuilder name(String name) {
            this.name = name;
            return this;
        }

        public StepBuilder startDate(String startDate) {
            this.startDate = startDate;
            return this;
        }

        public StepBuilder finishDate(String finishDate) {
            this.finishDate = finishDate;
            return this;
        }

        public StepBuilder maxUsers(int maxUsers) {
            this.maxUsers = maxUsers;
            return this;
        }

        public StepBuilder users(Set<User> users) {
            this.users = users;
            return this;
        }

        public StepBuilder event(Event event) {
            this.event = event;
            return this;
        }

        public Step build() {
            return new Step(this);
        }
    }
}
