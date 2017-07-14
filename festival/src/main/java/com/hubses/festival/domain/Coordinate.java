package com.hubses.festival.domain;

import javax.persistence.Embeddable;

@Embeddable
public class Coordinate {
    private long latitude;
    private long longitude;

    public long getLatitude() {
        return latitude;
    }

    public void setLatitude(long latitude) {
        this.latitude = latitude;
    }

    public long getLongitude() {
        return longitude;
    }

    public void setLongitude(long longitude) {
        this.longitude = longitude;
    }
}
