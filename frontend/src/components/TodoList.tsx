import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item.tsx";
import type { TTodo } from "@/lib/types.ts";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Label } from "@/components/ui/label.tsx";

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
      completed: true,
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
    <Item
      asChild
      variant="outline"
      className="hover:bg-accent/50 cursor-pointer flex items-start gap-3 rounded-lg border p-3 dark:has-aria-checked:border-primary/40 dark:has-aria-checked:bg-primary/30"
    >
      <Label>
        <ItemActions>
          <Checkbox defaultChecked={todo.completed} className="cursor-pointer" />
        </ItemActions>
        <ItemContent>
          <ItemTitle>{todo.title}</ItemTitle>
          <ItemDescription>{todo.description}</ItemDescription>
        </ItemContent>
        <ItemActions>
          {/*<Button variant="destructive" size="sm">*/}
          {/*  Delete*/}
          {/*</Button>*/}
        </ItemActions>
      </Label>
    </Item>
  );
}
