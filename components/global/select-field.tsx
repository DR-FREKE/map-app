import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { cn } from "@/lib/utils";

type SelectProps<T> = {
  items: T[];
  select_by?: string;
  control: any;
  name: string;
  label?: string;
  className?: string;
  disabled?: boolean;
};

export const SelectField = <T extends Record<string, any>>({ items, select_by, control, name, label, className, disabled }: SelectProps<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select disabled={disabled} defaultValue={field.value} {...field}>
            <FormControl>
              <SelectTrigger className={cn("shadow-none btn-disabled", className)}>
                <SelectValue placeholder="Select Item" />
              </SelectTrigger>
            </FormControl>

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
