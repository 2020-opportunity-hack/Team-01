package com.ohack.sff.service;

import com.ohack.sff.model.AdminUser;

public interface IAdminUserService {
    //    @Secured("ROLE_ADMIN")
    //    @PreAuthorize("hasAuthority('ADMIN')")
    public AdminUser findAdminUser(String username);
}
