package com.ohack.sff.repo;

import com.ohack.sff.model.ClientUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientUserRepository extends CrudRepository<ClientUser, Integer> {

    ClientUser findByEmail(String email);
}
