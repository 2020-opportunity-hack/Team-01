package com.ohack.sff.service;

import com.ohack.sff.model.AdminUser;
import com.ohack.sff.repo.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service public class AdminUserService implements UserDetailsService, IAdminUserService {
    @Autowired private AdminUserRepository adminUserRepository;

    @Override
    public AdminUser findAdminUser(String username) {
        AdminUser adminUser = adminUserRepository.findByUsername(username);
        return adminUser;
    }

    @Override public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AdminUser adminUser = adminUserRepository.findByUsername(username);
        if (adminUser == null) {
            throw new UsernameNotFoundException("Admin not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(adminUser.getUsername(), adminUser.getPassword(),getAuthority(adminUser));
    }

    private Set getAuthority(AdminUser user) {
        Set authorities = new HashSet();
        authorities.add(new SimpleGrantedAuthority(user.getAuthority()));
        return authorities;
    }
}
