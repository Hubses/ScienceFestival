package com.hubses.festival.web.controller;

import com.hubses.festival.web.controller.util.IdentifyErrorUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class ErrorController {

    @RequestMapping(value = "/error", method = RequestMethod.GET)
    public ModelAndView renderErrorPage(HttpServletRequest httpRequest) {
        ModelAndView errorPage = new ModelAndView("error");
        errorPage.addObject("errorMsg", IdentifyErrorUtil.selectErrorMessage(httpRequest));
        return errorPage;
    }

}
