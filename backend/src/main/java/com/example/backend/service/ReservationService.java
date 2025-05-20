package com.example.backend.service;

import com.example.backend.entity.Reservation;
import com.example.backend.repository.ReservationRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Objects;

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
        if (existingReservation.getTableType() == null) {
            // Przykład: ustaw domyślnie na podstawie liczby gości
            if (existingReservation.getNumberOfGuests() == 1) {
                existingReservation.setTableType("1-person");
            } else if (existingReservation.getNumberOfGuests() == 2) {
                existingReservation.setTableType("2-person");
            } else if (existingReservation.getNumberOfGuests() <= 4) {
                existingReservation.setTableType("4-person");
            } else if (existingReservation.getNumberOfGuests() <= 6) {
                existingReservation.setTableType("6-person");
            } else if (existingReservation.getNumberOfGuests() <= 10) {
                existingReservation.setTableType("10-person");
            } else {
                existingReservation.setTableType(calculateOptimalTableCombination(existingReservation.getNumberOfGuests()));
            }
        }
        if (updatedReservation.getTableType() == null) {
            // Ustaw domyślnie na podstawie liczby gości
            updatedReservation.setTableType(updatedReservation.getNumberOfGuests() <= 2 ? "2-person" : "3-person");
        }
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
        
        // Send second email with reservation details and management options
        emailService.sendReservationDetailsEmail(reservation.getEmail(), reservation);
    }

    private void validateTableAvailability(Reservation reservation) {
        String tableType = reservation.getTableType();
        LocalDateTime reservationTime = reservation.getReservationTime();
        LocalDateTime start = reservationTime.minusHours(1);
        LocalDateTime end = reservationTime.plusHours(1);

        List<Reservation> overlappingReservations = reservationRepository.findByReservationTimeBetween(start, end);

        long reservedTables = overlappingReservations.stream()
                .filter(r -> Objects.equals(r.getTableType(), tableType))
                .count();

        if ("2-person".equals(tableType) && reservedTables >= TWO_PERSON_TABLES) {
            throw new RuntimeException("No available 2-person tables for the selected time.");
        } else if ("3-person".equals(tableType) && reservedTables >= THREE_PERSON_TABLES) {
            throw new RuntimeException("No available 3-person tables for the selected time.");
        }
    }

    public boolean validateTableAvailability(LocalDateTime reservationTime, String tableType, Long excludeId) {
        // Bezpieczne porównanie wartości tableType - użyj Objects.equals lub poniższego podejścia
        if ("2-person".equals(tableType)) {
            // ...existing code dla 2-person...
        } else if ("3-person".equals(tableType)) {
            // ...existing code dla 3-person...
        }
        
        // Alternatywnie użyj:
        // if (Objects.equals(tableType, "2-person")) { ... }
        
        // ...existing code...
        
        return true; // lub inna wartość w zależności od logiki metody
    }

    /**
     * Calculates the optimal combination of tables for a given number of guests
     * @param numberOfGuests The number of guests to accommodate
     * @return A string describing the optimal table combination
     */
    private String calculateOptimalTableCombination(int numberOfGuests) {
        // Available table sizes
        int[] tableSizes = {2, 4, 6, 10};
        
        // Check if any single table can accommodate the guests
        for (int size : tableSizes) {
            if (numberOfGuests <= size) {
                return size + "-person";
            }
        }
        
        // For larger groups, find optimal combination
        StringBuilder combination = new StringBuilder();
        int remainingGuests = numberOfGuests;
        
        // Start with largest tables for efficiency
        for (int i = tableSizes.length - 1; i >= 0 && remainingGuests > 0; i--) {
            int currentSize = tableSizes[i];
            while (remainingGuests >= currentSize) {
                if (combination.length() > 0) {
                    combination.append(" + ");
                }
                combination.append(currentSize).append("-person");
                remainingGuests -= currentSize;
            }
        }
        
        // If we still have guests that don't fit perfectly, add one more small table
        if (remainingGuests > 0) {
            for (int size : tableSizes) {
                if (remainingGuests <= size) {
                    if (combination.length() > 0) {
                        combination.append(" + ");
                    }
                    combination.append(size).append("-person");
                    break;
                }
            }
        }
        
        return "custom:" + combination.toString();
    }
}