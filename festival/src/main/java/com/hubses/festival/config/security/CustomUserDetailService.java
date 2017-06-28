package com.hubses.festival.config.security;

import com.hubses.festival.dto.UserAuthDTO;
import com.hubses.festival.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String s) {

        return userService.getUserByUsername(s).map(user ->
                UserAuthDTO.builder()
                        .username(user.getUsername())
                        .password(user.getPassword())
                        .accountNonExpired(true)
                        .accountNonLocked(true)
                        .credentialsNonExpired(true)
                        .enabled(true)
                        .authorities(Collections.singletonList(user.getRole()))
                        .build()
        ).orElseThrow(() -> new UsernameNotFoundException("User with name " + s + " not found"));
    }
}
