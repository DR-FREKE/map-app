"use client";

import * as React from "react";
import { format } from "date-fns";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Controller } from "react-hook-form";
import { Calendar as CalendarIcon } from "lucide-react";
import { FormDescription } from "./form";

export function DatePicker({ control, name, className, disabled = false, caption }: { control: any; name: string; className?: React.ReactNode; disabled?: boolean; caption?: boolean | string }) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Popover>
            <PopoverTrigger asChild disabled={disabled}>
              <Button variant={"outline"} className={cn("flex w-full min-h-[40px] justify-start shadow-none rounded-md border border-input bg-transparent px-3 py-2", className)}>
                <Image src="/calendar.svg" alt="calendar" width={20} height={20} />
                {date ? format(date, "PPP") : <span className="text-base font-normal transition-colors placeholder:text-muted-foreground md:text-sm">{disabled ? "2024-12-02" : "Pick a date"}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          {caption && <FormDescription className="font-medium text-xs text-[#667185]">Calculated based on lead time and issue date</FormDescription>}
        </>
      )}
    />
  );
}
