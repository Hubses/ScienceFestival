package com.hubses.festival.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/**/*.html", "/**/*.css", "/**/*.js").permitAll()
                .antMatchers("/**/customers/**", "/**/users/**", "/**/jury/**", "/**/committee/**").hasAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                .httpBasic().realmName("Science")
                .and()
                .logout().logoutUrl("/logout");
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/**/*.html", "/**/*.css", "/**/*.js");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.userDetailsService(customUserDetailService);
    }

}
