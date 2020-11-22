package com.ohack.sff.controller;

import com.ohack.sff.dto.ClientTransactionRequestDTO;
import com.ohack.sff.security.JwtTokenUtil;
import com.ohack.sff.service.AdminUserService;
import com.ohack.sff.service.ClientUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController @CrossOrigin @RequestMapping("/transactions") public class TransactionController {
    @Autowired private JwtTokenUtil jwtTokenUtil;

    @Autowired private AdminUserService adminUserService;
    @Autowired private ClientUserService clientUserService;

    @PostMapping("/update") public String updateTokenBalance(@RequestBody ClientTransactionRequestDTO clientTransactionRequestDTO) {
        clientUserService.getUser(clientTransactionRequestDTO.getEmail());
        return "test";
    }



}