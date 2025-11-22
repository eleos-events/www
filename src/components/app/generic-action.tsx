import Link from "next/link";
import { Button } from "../ui/button";

export type ActionProps =
  | {
      type: "link";
      href: string;
      label: string;
      isPrimary?: boolean;
    }
  | {
      type: "button";
      label: string;
      isPrimary?: boolean;
      onClick: () => void;
    };

export function Action(props: ActionProps) {
  if (props.type === "link") {
    return (
      <Button asChild size="lg" key={props.href}>
        <Link href={props.href}>{props.label}</Link>
      </Button>
    );
  }
  return (
    <Button
      asChild
      size="lg"
      key={props.label}
      variant="outline"
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
}
