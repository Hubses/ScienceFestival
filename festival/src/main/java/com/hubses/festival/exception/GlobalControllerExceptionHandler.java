package com.hubses.festival.exception;

import com.hubses.festival.web.controller.util.IdentifyErrorUtil;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalControllerExceptionHandler {
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(IDNotFoundException.class)
    public ModelAndView handleNotFoundId(HttpServletRequest httpRequest) {
        ModelAndView errorPage = new ModelAndView("error");
        errorPage.addObject("errorMsg", IdentifyErrorUtil.selectErrorMessage(httpRequest));
        return errorPage;
    }
}
