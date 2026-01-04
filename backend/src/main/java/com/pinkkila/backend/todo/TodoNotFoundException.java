package com.pinkkila.backend.todo;

public class TodoNotFoundException extends RuntimeException {
    public TodoNotFoundException(long todoId) {
        super("Todo with ID " + todoId + " not found");
    }
}
