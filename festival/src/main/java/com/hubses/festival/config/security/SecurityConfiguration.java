package com.hubses.festival.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private static final String API_PREFIX = "/api";
    private static final String API_VERSION = "/v1";
    private static final String REST_PREFIX = API_PREFIX + API_VERSION;
    private static final String AUTHORITY_ADMIN = "ADMIN";

    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/**/*.html", "/**/*.css", "/**/*.js").permitAll()
                .antMatchers(REST_PREFIX + "/customers/**").hasAuthority(AUTHORITY_ADMIN)
                .antMatchers(REST_PREFIX + "/users/**").hasAuthority(AUTHORITY_ADMIN)
                .antMatchers(REST_PREFIX + "/jury/**").hasAuthority(AUTHORITY_ADMIN)
                .antMatchers(REST_PREFIX + "/committee/**").hasAuthority(AUTHORITY_ADMIN).and()
                .cors().and()
                .httpBasic().realmName("Science").and()
                .headers().frameOptions().sameOrigin().and()
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

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }

}
