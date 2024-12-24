import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react"; // Example: Using lucide-react for the search icon
import clsx from "clsx";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({ ...props }: SearchInputProps) {
  return (
    <div className="relative flex items-center w-auto gap-4">
      <Search className="absolute left-3 h-5 w-5 text-gray-400" />
      <Input {...props} type="text" className={clsx("pl-10", props.className)} />
    </div>
  );
}

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex min-h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
