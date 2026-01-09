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

export default function TodoList({todos} : {todos: TTodo[]}) {

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
      className="hover:bg-accent/50 cursor-pointer border p-3 has-aria-checked:border-primary/40 has-aria-checked:bg-primary/10 hover:has-aria-checked:bg-primary/20"
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
          {/*<Button variant="destructive" size="sm">*/}
          {/*  Delete*/}
          {/*</Button>*/}
        </ItemActions>
      </Label>
    </Item>
  );
}
