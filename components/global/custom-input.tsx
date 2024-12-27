import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import clsx from "clsx";

export const CustomInput = ({ control, name, label, disabled }: { control: any; name: string; label?: string; disabled?: boolean }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder="" className={clsx("btn-disabled")} disabled={disabled} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
