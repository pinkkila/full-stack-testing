import TodoForm from "@/components/TodoForm.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import TodoList from "@/components/TodoList.tsx";
import { useState } from "react";
import type { TTodo } from "@/lib/types.ts";

export function App() {
  const [todos, setTodos] = useState<TTodo[]>([
    {
      id: 1,
      title: "First Todo",
      description: "This is the first todo item",
      created: new Date(),
      completed: false,
    },
    {
      id: 2,
      title: "Second Todo",
      description: "This is the second todo item",
      created: new Date(),
      completed: true,
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-4xl px-6 border gap-10">
      <h1 className="text-2xl lg:text-3xl pt-8 lg:pt-10 font-bold text-center text-accent-foreground">
        Todo App
      </h1>

      <TodoForm setTodos={setTodos} />
      <Toaster />

      <TodoList todos={todos} />
    </div>
  );
}
