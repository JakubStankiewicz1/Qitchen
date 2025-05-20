package com.example.backend.controller;

import com.example.backend.entity.TableType;
import com.example.backend.service.TableTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/table-types")
public class TableTypeController {
    private final TableTypeService tableTypeService;

    @Autowired
    public TableTypeController(TableTypeService tableTypeService) {
        this.tableTypeService = tableTypeService;
    }

    @GetMapping
    public List<TableType> getAllTableTypes() {
        return tableTypeService.getAllTableTypes();
    }

    @PutMapping("/{id}")
    public ResponseEntity<TableType> updateTableType(@PathVariable Long id, @RequestBody Map<String, Integer> body) {
        int count = body.getOrDefault("count", -1);
        if (count < 0) {
            return ResponseEntity.badRequest().build();
        }
        TableType updated = tableTypeService.updateTableType(id, count);
        return ResponseEntity.ok(updated);
    }
} 