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

    public News() {

    }

    private News(NewsBuilder newsBuilder) {
        this.id = newsBuilder.id;
        this.name = newsBuilder.name;
        this.newsHTML = newsBuilder.newsHTML;
    }

    public static class NewsBuilder {

        private long id;

        private String name;

        private String newsHTML;

        public NewsBuilder id(long id) {
            this.id = id;
            return this;
        }

        public NewsBuilder name(String name) {
            this.name = name;
            return this;
        }

        public NewsBuilder newsHTML(String newsHTML) {
            this.newsHTML = newsHTML;
            return this;
        }

        public News build() {
            return new News(this);
        }
    }
}
