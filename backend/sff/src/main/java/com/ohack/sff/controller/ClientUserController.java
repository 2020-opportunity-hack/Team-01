package com.ohack.sff.controller;

import com.ohack.sff.dto.JwtResponseDTO;
import com.ohack.sff.dto.ClientUserDTO;
import com.ohack.sff.security.JwtTokenUtil;
import com.ohack.sff.service.ClientUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController @RequestMapping("/user") public class ClientUserController {
    @Autowired private JwtTokenUtil jwtTokenUtil;
    @Autowired private ClientUserService clientUserService;

    @GetMapping("/token") public ResponseEntity getClientToken(@AuthenticationPrincipal OAuth2User oauth2User) {
        ClientUserDTO clientUserDTO = mapOAuth2UserToUserDTO(oauth2User);
        clientUserService.loginUserByEmail(clientUserDTO);
        final UserDetails userDetails = clientUserService.loadUserByUsername(clientUserDTO.getEmail());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponseDTO(token));
    }

    @GetMapping("/update") public String updateClientUser(Authentication authentication) {
        return "hello";
    }

    private ClientUserDTO mapOAuth2UserToUserDTO(OAuth2User oauth2User) {
        ClientUserDTO clientUserDTO = new ClientUserDTO();
        List<GrantedAuthority> list = new ArrayList<>(oauth2User.getAuthorities());
        clientUserDTO.setAuthority(list.get(0).getAuthority());
        clientUserDTO.setEmail(oauth2User.getAttribute("email"));
        clientUserDTO.setFirstName(oauth2User.getAttribute("given_name"));
        clientUserDTO.setLastName(oauth2User.getAttribute("family_name"));
        clientUserDTO.setImageUrl(oauth2User.getAttribute("picture"));
        clientUserDTO.setName(oauth2User.getAttribute("name"));
        return clientUserDTO;
    }
}
