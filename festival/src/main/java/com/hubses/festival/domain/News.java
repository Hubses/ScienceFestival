package com.hubses.festival.domain;

import javax.persistence.*;

@Entity
@Table
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    private String newsHTML;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNewsHTML() {
        return newsHTML;
    }

    public void setNewsHTML(String newsHTML) {
        this.newsHTML = newsHTML;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
