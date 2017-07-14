package com.hubses.festival.repository;

import com.hubses.festival.domain.Step;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StepRepository extends CrudRepository<Step, Long> {
}
