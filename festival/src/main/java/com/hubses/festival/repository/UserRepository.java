package com.hubses.festival.repository;

import com.hubses.festival.domain.Role;
import com.hubses.festival.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findOneByUsername(String username);

    Optional<User> findOneById(long id);

    Optional<Iterable<User>> findAllByRole(Role role);

    Optional<User> findOneByIdAndRole(long id,Role role);
}
