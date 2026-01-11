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
import { Button } from "@/components/ui/button.tsx";
import { Pencil, Trash2 } from "lucide-react";

export default function TodoList({ todos }: { todos: TTodo[] }) {
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
      className="hover:bg-accent/50 cursor-pointer border p-3 has-aria-checked:border-primary/40 has-aria-checked:bg-primary/5 hover:has-aria-checked:bg-primary/10"
    >
      <Label>
        <ItemActions>
          <Checkbox
            defaultChecked={todo.completed}
            className="cursor-pointer"
          />
        </ItemActions>
        <ItemContent>
          <ItemTitle>{todo.title}</ItemTitle>
          <ItemDescription>{todo.description}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            variant="default"
            size="icon-lg"
            className="text-primary/70 hover:cursor-pointer hover:text-primary bg-transparent hover:bg-primary/20"
          >
            <Pencil />
          </Button>
          <Button
            variant="default"
            size="icon-lg"
            className="text-destructive/70 hover:cursor-pointer hover:text-destructive bg-transparent hover:bg-destructive/20"
          >
            <Trash2 />
          </Button>
        </ItemActions>
      </Label>
    </Item>
  );
}
