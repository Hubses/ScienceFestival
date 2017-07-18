package com.hubses.festival.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "This id is not stored")
public class IDNotFoundException extends RuntimeException {
    public IDNotFoundException(String message) {
        super(message);
    }

    public IDNotFoundException() {
        super("This id is not stored");
    }
}
