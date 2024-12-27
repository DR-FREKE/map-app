import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormField, FormItem, FormLabel } from "../ui/form";
import { cn } from "@/lib/utils";

type SelectProps<T> = {
  items: T[];
  select_by?: string;
  control: any;
  name: string;
  label?: string;
  className?: string;
};

export const SelectField = <T extends Record<string, any>>({ items, select_by, control, name, label, className }: SelectProps<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select>
            <SelectTrigger className={cn("shadow-none", className)}>
              <SelectValue placeholder="Select Item" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((content, index) => (
                  <React.Fragment key={index}>
                    <SelectItem value="est">{content[select_by!] ?? content}</SelectItem>
                  </React.Fragment>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};
