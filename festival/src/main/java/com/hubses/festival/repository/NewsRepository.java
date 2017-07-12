package com.hubses.festival.repository;

import com.hubses.festival.domain.News;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NewsRepository extends CrudRepository<News, Long> {
    Optional<News> findOneById(long id);
}
