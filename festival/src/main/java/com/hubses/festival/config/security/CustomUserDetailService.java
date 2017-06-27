package com.hubses.festival.config.security;



import com.hubses.festival.domain.Role;
import com.hubses.festival.domain.User;
import com.hubses.festival.dto.UserAuthDTO;
import com.hubses.festival.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        Optional<User> user = userService.getUserByUsername(s);

        return Optional.of(UserAuthDTO.builder()
                .username(user.get().getUsername())
                .password(user.get().getPassword())
                .accountNonExpired(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .enabled(true)
                .authorities(getRoles(user.get().getRole()))
                .build()).orElseThrow(() -> new UsernameNotFoundException("User with name " + s +" not found"));
    }

    private List<GrantedAuthority> getRoles(Role role) {
        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(role);
        return roles;
    }

}
