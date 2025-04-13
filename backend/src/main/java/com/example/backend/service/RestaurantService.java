package com.example.backend.service;

import com.example.backend.entity.Restaurant;
import com.example.backend.repository.RestaurantRepository;
import org.springframework.stereotype.Service;

@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public Restaurant getRestaurant() {
        return restaurantRepository.findAll().stream().findFirst().orElse(null);
    }

    public Restaurant createOrUpdateRestaurant(Restaurant restaurant) {
        restaurantRepository.deleteAll(); // Ensure only one restaurant exists
        return restaurantRepository.save(restaurant);
    }

    public void deleteRestaurant() {
        restaurantRepository.deleteAll();
    }
}
