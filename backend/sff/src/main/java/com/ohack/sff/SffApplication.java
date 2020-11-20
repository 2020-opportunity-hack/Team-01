package com.ohack.sff;

import com.ohack.sff.repo.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SffApplication {

	@Autowired
	private AdminUserRepository adminUserRepository;
	public static void main(String[] args) {
		SpringApplication.run(SffApplication.class, args);
	}


}
