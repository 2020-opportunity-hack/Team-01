package com.ohack.sff.config;

import com.ohack.sff.service.CustomOauth2UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private CustomOauth2UserService customOauth2UserService;
    @Override
    public void configure(HttpSecurity http) throws Exception {

        http.antMatcher("/**")
            .authorizeRequests()
            .antMatchers("/login","/callback/","/oauth2/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .oauth2Login()
            .userInfoEndpoint()
            .userService(customOauth2UserService);
    }
}