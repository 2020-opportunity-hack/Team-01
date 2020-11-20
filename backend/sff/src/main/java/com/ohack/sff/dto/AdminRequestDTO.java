package com.ohack.sff.dto;

import java.io.Serializable;

public class AdminRequestDTO implements Serializable {
    private static final long serialVersionUIDLONG = 1L;
    String username;
    String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
