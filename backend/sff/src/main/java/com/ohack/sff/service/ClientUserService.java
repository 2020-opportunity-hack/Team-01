package com.ohack.sff.service;

import com.ohack.sff.dto.ClientUserDTO;
import com.ohack.sff.model.ClientUser;
import com.ohack.sff.repo.ClientUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service public class ClientUserService implements UserDetailsService {

    @Autowired
    private ClientUserRepository clientUserRepository;

    @Override public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        ClientUser user = clientUserRepository.findByEmail(email);

        if(user == null){
           throw new UsernameNotFoundException("User not found with email: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getName(), new ArrayList<>());
    }

    public ClientUser loginUserByEmail(ClientUserDTO clientUserDTO){
        ClientUser user = clientUserRepository.findByEmail(clientUserDTO.getEmail());
        if(user == null){
            user = new ClientUser();
            if (clientUserDTO.getEmail() == null) {
                throw new UsernameNotFoundException("User not found with email: " + clientUserDTO.getEmail());
            }
            user.setEmail(clientUserDTO.getEmail());
            user.setName(clientUserDTO.getName());
            user.setAuthority(clientUserDTO.getAuthority());
            user.setFirstName(clientUserDTO.getFirstName());
            user.setLastName(clientUserDTO.getLastName());
            user.setImageUrl(clientUserDTO.getImageUrl());
        }
        clientUserRepository.save(user);
        return user;
    }


}
