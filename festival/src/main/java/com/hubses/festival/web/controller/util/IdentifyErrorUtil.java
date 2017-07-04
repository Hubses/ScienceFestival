package com.hubses.festival.web.controller.util;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Lazy
@Component
public final class IdentifyErrorUtil {
    private static final int BAD_REQUEST_CODE = 400;
    private static final int UNAUTHORIZED_CODE = 401;
    private static final int NOT_FOUND_CODE = 404;
    private static final int SERVER_ERROR_CODE = 500;

    private IdentifyErrorUtil() {
    }

    public static String selectErrorMessage(HttpServletRequest request) {
        return identifyErrorPage(getErrorCode(request));
    }

    private static String identifyErrorPage(int errorCode) {
        switch (errorCode) {
            case BAD_REQUEST_CODE:
                return "Http Error Code: 400. Bad Request";

            case UNAUTHORIZED_CODE:
                return "Http Error Code: 401. Unauthorized";

            case NOT_FOUND_CODE:
                return "Http Error Code: 404. Resource not found";

            case SERVER_ERROR_CODE:
                return "Http Error Code: 500. Internal Server Error";

            default:
                return "UNEXPECTED ERROR";
        }
    }

    private static int getErrorCode(HttpServletRequest request) {
        return (Integer) request
                .getAttribute("javax.servlet.error.status_code");
    }
}
