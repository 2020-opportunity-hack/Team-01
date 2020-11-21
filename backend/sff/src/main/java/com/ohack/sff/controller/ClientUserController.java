package com.ohack.sff.controller;

import com.ohack.sff.dto.ClientUserDTO;
import com.ohack.sff.dto.JwtResponseDTO;
import com.ohack.sff.security.JwtTokenUtil;
import com.ohack.sff.service.ClientUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController @CrossOrigin @RequestMapping("/user") public class ClientUserController {
    @Autowired private JwtTokenUtil jwtTokenUtil;
    @Autowired private ClientUserService clientUserService;

    @GetMapping("/token") public ResponseEntity getClientToken(@AuthenticationPrincipal OAuth2User oauth2User) {
        ClientUserDTO clientUserDTO = clientUserService.mapOAuth2UserToUserDTO(oauth2User);
        clientUserService.loginUserByEmail(clientUserDTO);
        final UserDetails userDetails = clientUserService.loadUserByUsername(clientUserDTO.getEmail());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponseDTO(token));
    }

    @GetMapping("/profile") public ClientUserDTO getClientProfile(Authentication authentication) {
        final UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return clientUserService.getUser(userDetails.getUsername());
    }

    @GetMapping("/test") public ClientUserDTO getClient(Authentication authentication) {
        ClientUserDTO clientUserDTO = new ClientUserDTO();
        clientUserDTO.setName("test");
        return clientUserDTO;
    }


}
