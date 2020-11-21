package com.ohack.sff.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Setter
public class ClientUserDTO implements Serializable {
    private static final long serialVersionUIDLONG = 1L;
    private String email;
    private String name;
    @JsonProperty("first_name")
    private String firstName;
    @JsonProperty("last_name")
    private String lastName;
    @JsonProperty("image_url")
    private String imageUrl;
    @JsonIgnore
    private String authority;
    private String gender;
    private String dob;
    @JsonProperty("mailing_address")
    private String mailingAddress;
    @JsonProperty("phone_number")
    private String phoneNumber;
    @JsonProperty("image_url")
    private String maritalStatus;
    private String language;

}
