package com.example.backend.repository;

import com.example.backend.entity.TableType;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface TableTypeRepository extends JpaRepository<TableType, Long> {
    Optional<TableType> findBySeats(int seats);
} 