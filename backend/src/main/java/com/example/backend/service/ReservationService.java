package com.example.backend.service;

import com.example.backend.entity.Reservation;
import com.example.backend.repository.ReservationRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final EmailService emailService;

    @Value("${spring.mail.username}")
    private String senderEmail;

    private final int TWO_PERSON_TABLES = 10;
    private final int THREE_PERSON_TABLES = 6;

    public ReservationService(ReservationRepository reservationRepository, EmailService emailService) {
        this.reservationRepository = reservationRepository;
        this.emailService = emailService;
    }

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public Reservation getReservationById(Long id) {
        return reservationRepository.findById(id).orElseThrow(() -> new RuntimeException("Reservation not found"));
    }

    public Reservation createReservation(Reservation reservation) {
        validateTableAvailability(reservation);
        Reservation savedReservation = reservationRepository.save(reservation);

        String confirmationLink = "http://localhost:8081/api/reservations/confirm?token=" + savedReservation.getConfirmationToken();
        emailService.sendConfirmationEmail(reservation.getEmail(), confirmationLink);

        return savedReservation;
    }

    public Reservation updateReservation(Long id, Reservation updatedReservation) {
        Reservation existingReservation = getReservationById(id);
        existingReservation.setName(updatedReservation.getName());
        existingReservation.setEmail(updatedReservation.getEmail());
        existingReservation.setPhoneNumber(updatedReservation.getPhoneNumber());
        existingReservation.setNumberOfGuests(updatedReservation.getNumberOfGuests());
        existingReservation.setReservationTime(updatedReservation.getReservationTime());
        existingReservation.setTableType(updatedReservation.getTableType());
        validateTableAvailability(existingReservation);
        return reservationRepository.save(existingReservation);
    }

    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }

    public void confirmReservation(String token) {
        Optional<Reservation> reservationOptional = reservationRepository.findByConfirmationToken(token);
        if (reservationOptional.isEmpty()) {
            throw new RuntimeException("Invalid confirmation token");
        }

        Reservation reservation = reservationOptional.get();
        reservation.setConfirmed(true);
        reservationRepository.save(reservation);
    }

    private void validateTableAvailability(Reservation reservation) {
        String tableType = reservation.getTableType();
        LocalDateTime reservationTime = reservation.getReservationTime();
        LocalDateTime start = reservationTime.minusHours(1);
        LocalDateTime end = reservationTime.plusHours(1);

        List<Reservation> overlappingReservations = reservationRepository.findByReservationTimeBetween(start, end);

        long reservedTables = overlappingReservations.stream()
                .filter(r -> r.getTableType().equals(tableType))
                .count();

        if (tableType.equals("2-person") && reservedTables >= TWO_PERSON_TABLES) {
            throw new RuntimeException("No available 2-person tables for the selected time.");
        } else if (tableType.equals("3-person") && reservedTables >= THREE_PERSON_TABLES) {
            throw new RuntimeException("No available 3-person tables for the selected time.");
        }
    }
}
