package com.pinkkila.backend.todo;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;
    
    public Todo findById(long id) {
        return todoRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));
    }
    
    public Page<Todo> findAll(Pageable pageable) {
        return todoRepository.findAll(pageable);
    }
    
    public Todo create(TodoRequest todoRequest) {
        Todo newTodo = new Todo(
                null,
                todoRequest.title(),
                todoRequest.description(),
                LocalDateTime.now(),
                false
        );
        return todoRepository.save(newTodo);
    }
    
}
