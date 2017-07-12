package com.hubses.festival.service;

import com.hubses.festival.domain.News;
import com.hubses.festival.dto.form.NewsFormDTO;
import com.hubses.festival.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Optional;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public Optional<Iterable<News>> getAllNews() {
        return Optional.ofNullable(newsRepository.findAll());
    }

    public Optional<News> getNewsById(long id) {
        return Optional.ofNullable(newsRepository.findOne(id));
    }

    public Optional<News> deleteNewsById(long id) {
        return newsRepository.findOneById(id).map(news -> {
                    newsRepository.delete(news);
                    return news;
                }
        );
    }

    public Optional<News> createNews(NewsFormDTO newsFromDTO) {
        return Optional.of(newsRepository.save(
                new News.NewsBuilder()
                        .name(newsFromDTO.getName())
                        .newsHTML(newsFromDTO.getHtml())
                        .build()
        ));
    }

    public Optional<News> updateNews(NewsFormDTO newsFromDTO, long id) {
        return newsRepository.findOneById(id).map(news ->
                newsRepository.save(
                        new News.NewsBuilder()
                                .id(id)
                                .name(newsFromDTO.getName())
                                .newsHTML(newsFromDTO.getHtml())
                                .build()
                )
        );
    }

    @PostConstruct
    public void init() {
        News news = new News();
        news.setName("News Name");
        news.setNewsHTML(
                "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\"/>\n" +
                "    <title></title>\n" +
                "</head>\n" +
                 "<body>\n" +
                    "<h1>Hello</h1>\n" +
                 "</body>\n" +
                "</html>");
        newsRepository.save(news);
    }
}
