import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

type SelectProps<T> = {
  items: T[];
  select_by: string;
};

export const SelectField = <T extends Record<string, any>>({ items, select_by }: SelectProps<T>) => {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Item" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((content, index) => (
            <React.Fragment key={index}>
              <SelectItem value="est">{content[select_by] ?? content}</SelectItem>
            </React.Fragment>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};