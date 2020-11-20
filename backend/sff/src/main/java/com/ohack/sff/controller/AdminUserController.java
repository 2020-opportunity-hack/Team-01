package com.ohack.sff.controller;

import com.ohack.sff.dto.AdminRequestDTO;
import com.ohack.sff.dto.ClientUserDTO;
import com.ohack.sff.dto.JwtResponseDTO;
import com.ohack.sff.model.ClientUser;
import com.ohack.sff.security.JwtTokenUtil;
import com.ohack.sff.service.AdminUserService;
import com.ohack.sff.service.ClientUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController @RequestMapping("/admin") public class AdminUserController {
    @Autowired private JwtTokenUtil jwtTokenUtil;

    @Autowired private AdminUserService adminUserService;
    @Autowired private ClientUserService clientUserService;

    @GetMapping("/token") public ResponseEntity getAdminToken(@RequestBody AdminRequestDTO request) {
        final UserDetails userDetails = adminUserService.loadUserByUsername(request.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponseDTO(token));
    }

    @GetMapping("/getAll") public List<ClientUserDTO> getAllUsers(Authentication authentication) {
        return clientUserService.getAllUsers();
    }

}
