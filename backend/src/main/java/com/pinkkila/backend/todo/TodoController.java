package com.pinkkila.backend.todo;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todos")
public class TodoController {
    private final TodoService todoService;
    
    @GetMapping("/{requestedId}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long requestedId) {
        var todo = todoService.findById(requestedId);
        return ResponseEntity.ok(todo);
    }
    
    @GetMapping
    public ResponseEntity<Page<Todo>> getAllTodos(Pageable pageable) {
        Page<Todo> todos = todoService.findAll(pageable);
        return ResponseEntity.ok(todos);
    }
    
    @PostMapping
    public ResponseEntity<Todo> create(@RequestBody TodoRequest todoRequest, UriComponentsBuilder ucb) {
        Todo createdTodo = todoService.create(todoRequest);
        var location = ucb.path("/api/todos/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(location).body(createdTodo);
    }
    
}
