package com.example.backend.controller;

import com.example.backend.entity.Restaurant;
import com.example.backend.service.RestaurantService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantController {

    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping
    public ResponseEntity<Restaurant> getRestaurant() {
        return ResponseEntity.ok(restaurantService.getRestaurant());
    }

    @PostMapping
    public ResponseEntity<Restaurant> createOrUpdateRestaurant(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantService.createOrUpdateRestaurant(restaurant));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteRestaurant() {
        restaurantService.deleteRestaurant();
        return ResponseEntity.noContent().build();
    }
}
