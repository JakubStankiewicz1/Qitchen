package com.example.backend.controller;

import com.example.backend.entity.Reservation;
import com.example.backend.service.ReservationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.beans.factory.annotation.Value;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    @Value("${app.frontend.url:http://localhost:5173}")
    private String frontendUrl;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Long id) {
        return ResponseEntity.ok(reservationService.getReservationById(id));
    }

    @PostMapping
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation reservation) {
        return ResponseEntity.ok(reservationService.createReservation(reservation));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable Long id, @RequestBody Reservation reservation) {
        return ResponseEntity.ok(reservationService.updateReservation(id, reservation));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReservation(@PathVariable Long id) {
        reservationService.deleteReservation(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/confirm")
    public RedirectView confirmReservation(@RequestParam String token) {
        reservationService.confirmReservation(token);
        return new RedirectView(frontendUrl + "/confirmation");
    }

    @PostMapping("/check-availability")
    public ResponseEntity<?> checkAvailability(@RequestBody Map<String, Object> body) {
        try {
            String timeStr = (String) body.get("reservationTime");
            int guests = (int) body.get("numberOfGuests");
            LocalDateTime time = LocalDateTime.parse(timeStr, DateTimeFormatter.ISO_DATE_TIME);
            var result = reservationService.checkTableAvailability(time, guests);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid request: " + e.getMessage());
        }
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Long>> getReservationStats() {
        return ResponseEntity.ok(reservationService.getReservationStats());
    }

    @GetMapping("/recent")
    public ResponseEntity<List<Reservation>> getRecentReservations() {
        return ResponseEntity.ok(reservationService.getRecentReservations());
    }
}
