package com.example.backend.service;

import com.example.backend.entity.Reservation;
import com.example.backend.repository.ReservationRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import com.example.backend.service.TableTypeService;
import com.example.backend.entity.TableType;
import com.example.backend.repository.TableTypeRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Objects;
import java.util.Map;
import java.util.HashMap;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final EmailService emailService;
    private final TableTypeService tableTypeService;
    private final TableTypeRepository tableTypeRepository;

    @Value("${spring.mail.username}")
    private String senderEmail;

    @Value("${app.frontend.url:http://localhost:5173}")
    private String frontendUrl;

    @Value("${app.backend.url:http://localhost:8081}")
    private String backendUrl;

    private final int TWO_PERSON_TABLES = 10;
    private final int THREE_PERSON_TABLES = 6;

    public ReservationService(ReservationRepository reservationRepository, EmailService emailService, TableTypeService tableTypeService, TableTypeRepository tableTypeRepository) {
        this.reservationRepository = reservationRepository;
        this.emailService = emailService;
        this.tableTypeService = tableTypeService;
        this.tableTypeRepository = tableTypeRepository;
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

        String confirmationLink = backendUrl + "/api/reservations/confirm?token=" + savedReservation.getConfirmationToken();
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

    /**
     * Checks table availability for a given time and number of guests
     */
    public TableAvailabilityResult checkTableAvailability(LocalDateTime reservationTime, int numberOfGuests) {
        // 1. Find optimal table type(s) for the group
        int[] tableSizes = {1, 2, 4, 6, 10};
        int needed = numberOfGuests;
        // Try to fit in one table first
        for (int size : tableSizes) {
            if (needed <= size) {
                return checkSingleTableType(reservationTime, size);
            }
        }
        // If not possible, try combinations (greedy)
        // For simplicity, just check if enough total seats are available
        // (You can expand this to return optimal combinations)
        int totalAvailableSeats = 0;
        for (int size : tableSizes) {
            TableType type = tableTypeRepository.findBySeats(size).orElse(null);
            if (type != null) {
                int reserved = countReservedTables(reservationTime, size);
                int available = type.getCount() - reserved;
                totalAvailableSeats += available * size;
            }
        }
        boolean available = totalAvailableSeats >= numberOfGuests;
        return new TableAvailabilityResult(available, available ? "Stolik dostępny" : "Brak wolnych stolików na tę liczbę osób", null);
    }

    private TableAvailabilityResult checkSingleTableType(LocalDateTime reservationTime, int size) {
        TableType type = tableTypeRepository.findBySeats(size).orElse(null);
        if (type == null) return new TableAvailabilityResult(false, "Brak takiego typu stolika", null);
        int reserved = countReservedTables(reservationTime, size);
        int available = type.getCount() - reserved;
        boolean ok = available > 0;
        return new TableAvailabilityResult(ok, ok ? "Stolik dostępny" : "Brak wolnych stolików tego typu", available);
    }

    private int countReservedTables(LocalDateTime reservationTime, int size) {
        LocalDateTime start = reservationTime.minusHours(1);
        LocalDateTime end = reservationTime.plusHours(1);
        List<Reservation> overlapping = reservationRepository.findByReservationTimeBetween(start, end);
        return (int) overlapping.stream().filter(r -> {
            String t = r.getTableType();
            return t != null && t.startsWith(size + "-person");
        }).count();
    }

    public static class TableAvailabilityResult {
        public boolean available;
        public String message;
        public Integer availableCount;
        public TableAvailabilityResult(boolean available, String message, Integer availableCount) {
            this.available = available;
            this.message = message;
            this.availableCount = availableCount;
        }
    }

    public Map<String, Long> getReservationStats() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startOfDay = now.toLocalDate().atStartOfDay();
        LocalDateTime endOfDay = startOfDay.plusDays(1);

        long totalReservations = reservationRepository.count();
        long todayReservations = reservationRepository.countByReservationTimeBetween(startOfDay, endOfDay);
        long upcomingReservations = reservationRepository.countByReservationTimeAfter(now);
        long availableTables = tableTypeRepository.count() * 4; // Assuming 4 seats per table on average

        Map<String, Long> stats = new HashMap<>();
        stats.put("totalReservations", totalReservations);
        stats.put("todayReservations", todayReservations);
        stats.put("upcomingReservations", upcomingReservations);
        stats.put("availableTables", availableTables);

        return stats;
    }

    public List<Reservation> getRecentReservations() {
        return reservationRepository.findTop10ByOrderByReservationTimeDesc();
    }
}