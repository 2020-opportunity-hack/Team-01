package com.ohack.sff.service;

import ch.qos.logback.core.net.server.Client;
import com.ohack.sff.dto.ClientUserDTO;
import com.ohack.sff.dto.TransactionDTO;
import com.ohack.sff.model.ClientUser;
import com.ohack.sff.model.Transaction;
import com.ohack.sff.repo.ClientUserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service public class ClientUserService implements UserDetailsService {

    @Autowired
    private ClientUserRepository clientUserRepository;

    @Autowired
    private ModelMapper modelMapper;

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

    public List<ClientUserDTO> getAllUsers(){
        List<ClientUserDTO> clientUserDTOS = new ArrayList<>();
        clientUserRepository.findAll().forEach(clientUser -> {
            clientUserDTOS.add(mapClientUserToDTO(clientUser));
        });
        return clientUserDTOS;
    }
    public ClientUserDTO getUser(String email){
        ClientUser clientUser = clientUserRepository.findByEmail(email);
        return mapClientUserToDTO(clientUser);
    }

    public List<TransactionDTO> getTransactions(String email){
        ClientUser clientUser = clientUserRepository.findByEmail(email);
        List<Transaction> clientTransactions = clientUser.getTransactions();
        List<TransactionDTO> transactionDTOS = new ArrayList<>();
        clientTransactions.forEach(clientTransaction -> {
            transactionDTOS.add(mapTransactionToDTO(clientTransaction));
        });
        return transactionDTOS;
    }

    private ClientUserDTO mapClientUserToDTO(ClientUser clientUser){
        return modelMapper.map(clientUser, ClientUserDTO.class);
    }

    private TransactionDTO mapTransactionToDTO(Transaction transaction){
        return modelMapper.map(transaction, TransactionDTO.class);
    }
    public ClientUserDTO mapOAuth2UserToUserDTO(OAuth2User oauth2User) {
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
