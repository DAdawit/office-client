import { EllipsisVertical, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function MyDropdown({ items, ...props }) {
  console.log("Items received:", items); // Debug log
  console.log("First item bgColor:", items[0]?.IconClassName); // Debug log
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={props.triggerVariant || "ghost"}
          className={`data-[state=open]:bg-muted text-muted-foreground flex size-8 ${
            props.className || ""
          }`}
          size={props.triggerSize || "icon"}
        >
          {props.triggerIcon || (
            <EllipsisVertical className="text-neutral-50" />
          )}
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={props.align || "end"}
        className={props.menuWidth || "w-40"}
      >
        {items.map((item, index) => (
          <div key={index}>
            {item.separatorBefore && <DropdownMenuSeparator />}
            <DropdownMenuItem
              onClick={item.onClick}
              variant={item.variant}
              className={`cursor-pointer flex items-center gap-2 text-primary-brandBlue ${item?.className}`}
            >
              {item.icon && item.icon}
              {item.IconComponent && (
                <item.IconComponent
                  className={`h-6 w-6 hover:text-neutral-50 ${item.IconClassName}`}
                />
              )}
              {item.label}
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
