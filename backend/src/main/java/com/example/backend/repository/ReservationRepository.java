package com.example.backend.repository;

import com.example.backend.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByReservationTimeBetween(LocalDateTime start, LocalDateTime end);
    Optional<Reservation> findByConfirmationToken(String confirmationToken);
    long countByDateTimeBetween(LocalDateTime start, LocalDateTime end);
    long countByDateTimeAfter(LocalDateTime dateTime);
    List<Reservation> findTop10ByOrderByDateTimeDesc();
}
