package com.ohack.sff.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL) @Getter @Setter
public class ClientTransactionRequestDTO implements Serializable {
    private static final long serialVersionUIDLONG = 1L;
    private String email;
    private String type;
    @JsonProperty("transaction_amount") private int transactionAmount;
    @JsonProperty("transaction_location") private String transactionLocation;
    private String description;
}
