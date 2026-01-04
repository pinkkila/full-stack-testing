package com.pinkkila.backend.todo;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class Todo {
    @Id
    private Long id;
    private String title;
    private String description;
    private LocalDateTime created;
    private boolean done;
}
