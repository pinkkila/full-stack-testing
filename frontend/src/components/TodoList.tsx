import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item.tsx";
import { Button } from "@/components/ui/button.tsx";
import type { TTodo } from "@/lib/types.ts";

export default function TodoList() {
  const todos = [
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
      completed: false,
    },
  ];

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function TodoItem({ todo }: { todo: TTodo }) {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>{todo.title}</ItemTitle>
        <ItemDescription>{todo.description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </ItemActions>
    </Item>
  );
}
