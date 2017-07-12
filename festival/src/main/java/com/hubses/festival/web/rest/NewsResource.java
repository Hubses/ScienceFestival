package com.hubses.festival.web.rest;

import com.hubses.festival.domain.News;
import com.hubses.festival.dto.form.NewsFormDTO;
import com.hubses.festival.dto.model.NewsModelDTO;
import com.hubses.festival.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/news", produces = MediaType.APPLICATION_JSON_VALUE)
public class NewsResource {
    @Autowired
    private NewsService newsService;

    @RequestMapping("")
    public Iterable<NewsModelDTO> getAllNews() {
        return newsService.getAllNews().map(news -> {
            List<NewsModelDTO> newsList = new ArrayList<>();
            for (News item : news) {
                newsList.add(NewsModelDTO.builder()
                        .id(item.getId())
                        .name(item.getName())
                        .html(item.getNewsHTML())
                        .build());
            }
            return newsList;
        }).orElse(new ArrayList<>());
    }

    @RequestMapping("/{id}")
    public NewsModelDTO getNews(@PathVariable(value = "id") long id) {
        return newsService.getNewsById(id).map(news ->
                NewsModelDTO.builder()
                        .id(news.getId())
                        .name(news.getName())
                        .html(news.getNewsHTML())
                        .build())
                .orElse(new NewsModelDTO());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public NewsModelDTO deleteNews(@PathVariable(value = "id") long id) {
        return newsService.deleteNewsById(id).map(news ->
                NewsModelDTO.builder()
                        .id(news.getId())
                        .name(news.getName())
                        .html(news.getNewsHTML())
                        .build())
                .orElse(new NewsModelDTO());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "", method = RequestMethod.POST)
    public NewsModelDTO createNews(@RequestBody NewsFormDTO newsFromDTO) {
        return newsService.createNews(newsFromDTO).map(news ->
                NewsModelDTO.builder()
                        .id(news.getId())
                        .name(news.getName())
                        .html(news.getNewsHTML())
                        .build())
                .orElse(new NewsModelDTO());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public NewsModelDTO updateNews(@RequestBody NewsFormDTO newsFromDTO, @PathVariable(value = "id") long id) {
        return newsService.updateNews(newsFromDTO, id).map(news ->
                NewsModelDTO.builder()
                        .id(news.getId())
                        .name(news.getName())
                        .html(news.getNewsHTML())
                        .build())
                .orElse(new NewsModelDTO());
    }
}
