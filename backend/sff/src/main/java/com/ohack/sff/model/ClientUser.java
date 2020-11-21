package com.ohack.sff.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity @Table(name = "client_user", uniqueConstraints = { @UniqueConstraint(columnNames = "email") }) @Getter @Setter public class ClientUser {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false) private String name;
    @Column(nullable = false) private String email;
    @Column private String firstName;
    @Column private String lastName;
    @Column private String imageUrl;
    @Column private String authority;
    @Column private String gender;
    @Column private String dob;
    @Column private String mailingAddress;
    @Column private String phoneNumber;
    @Column private String maritalStatus;
    @Column private String language;

}

