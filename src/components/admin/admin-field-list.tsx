import { CheckCircle2 } from "lucide-react";

export function AdminFieldList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li className="flex items-center gap-2 text-sm text-muted-foreground" key={item}>
          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
