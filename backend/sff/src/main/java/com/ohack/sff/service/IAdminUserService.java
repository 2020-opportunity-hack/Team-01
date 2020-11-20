package com.ohack.sff.service;

import com.ohack.sff.model.AdminUser;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;

public interface IAdminUserService {
//    @Secured("ROLE_ADMIN")
//    @PreAuthorize("hasAuthority('ADMIN')")
    public AdminUser findAdminUser(String username);
}
