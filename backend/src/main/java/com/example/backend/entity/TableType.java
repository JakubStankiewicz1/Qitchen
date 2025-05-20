package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "table_type")
public class TableType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int seats; // liczba miejsc przy stoliku

    @Column(nullable = false)
    private int count; // ile takich stolików

    public TableType() {}

    public TableType(int seats, int count) {
        this.seats = seats;
        this.count = count;
    }

    public Long getId() {
        return id;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
} 