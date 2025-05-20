package com.example.backend.service;

import com.example.backend.entity.TableType;
import com.example.backend.repository.TableTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@Service
public class TableTypeService {
    private final TableTypeRepository tableTypeRepository;

    @Autowired
    public TableTypeService(TableTypeRepository tableTypeRepository) {
        this.tableTypeRepository = tableTypeRepository;
    }

    public List<TableType> getAllTableTypes() {
        return tableTypeRepository.findAll();
    }

    public TableType updateTableType(Long id, int count) {
        TableType tableType = tableTypeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("TableType not found"));
        tableType.setCount(count);
        return tableTypeRepository.save(tableType);
    }

    @PostConstruct
    public void initializeDefaults() {
        if (tableTypeRepository.count() == 0) {
            List<TableType> defaults = Arrays.asList(
                new TableType(1, 10),
                new TableType(2, 7),
                new TableType(4, 14),
                new TableType(6, 6),
                new TableType(10, 4)
            );
            tableTypeRepository.saveAll(defaults);
        }
    }
} 