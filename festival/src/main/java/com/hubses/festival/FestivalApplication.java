package com.hubses.festival;

import com.github.ziplet.filter.compression.CompressingFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.servlet.Filter;

@EnableAutoConfiguration
@SpringBootApplication
public class FestivalApplication {

    @Bean
    public Filter compressingFilter() {
        return new CompressingFilter();
    }

    public static void main(String[] args) {
        SpringApplication.run(FestivalApplication.class, args);
    }
}
