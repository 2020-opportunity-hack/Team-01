package com.ohack.sff.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL) @Getter @Setter public class TransactionDTO implements Serializable {
    private static final long serialVersionUIDLONG = 1L;
    @JsonProperty("transaction_date")
    private String transactionDate;
    @JsonProperty("updated_by")
    private String updatedBy;
    private String type;
    @JsonProperty("before_token_balance")
    private int beforeTokenBalance;
    @JsonProperty("transaction_amount")
    private int transactionAmount;
    @JsonProperty("after_token_balance")
    private int afterTokenBalance;
    @JsonProperty("transaction_location")
    private String transactionLocation;
    private String description;
}
