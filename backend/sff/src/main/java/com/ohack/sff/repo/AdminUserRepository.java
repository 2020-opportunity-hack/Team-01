package com.ohack.sff.repo;

import com.ohack.sff.model.AdminUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.annotation.Secured;

public interface AdminUserRepository extends CrudRepository<AdminUser, Integer> {

    AdminUser findByUsername(String username);
}
