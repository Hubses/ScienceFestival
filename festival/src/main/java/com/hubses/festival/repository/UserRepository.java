package com.hubses.festival.repository;

import com.hubses.festival.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
    User findOneByUsername(String username);



}
