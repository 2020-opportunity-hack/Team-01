package com.ohack.sff.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity @Table(name = "client_transactions") @Getter @Setter
public class Transaction {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @ManyToOne
    @JoinColumn(name="clientUser_id", nullable=false)
    private ClientUser clientUser;
    @Column private String transactionDate;
    @Column private String updatedBy;
    @Column private String type;
    @Column private int beforeTokenBalance;
    @Column private int transactionAmount;
    @Column private int afterTokenBalance;
    @Column private String transactionLocation;
    @Column private String description;
}
