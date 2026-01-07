import TodoForm from "@/components/TodoForm.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import TodoList from "@/components/TodoList.tsx";

export function App() {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-4xl px-6 border gap-10">
      <h1 className="text-2xl lg:text-3xl pt-8 lg:pt-10 font-bold text-center text-accent-foreground">
        Todo App
      </h1>

      <TodoForm />
      <Toaster />

      <TodoList />
    </div>
  );
}
