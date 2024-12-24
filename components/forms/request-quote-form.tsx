"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import clsx from "clsx";

export type QuoteProps = {
  "RQF No": string;
  title: string;
  department: string;
  quote_delivery_date: Date;
  items: { item: string; variant: string; quantity: number; price: number; delivery_date: Date; amount: number }[];
};

const RequestQuoteForm = () => {
  const form = useForm<QuoteProps>({
    mode: "onChange",
    defaultValues: {
      "RQF No": "RFQ-10234",
      title: "Request For Equipments",
      department: "Maternity",
    },
  });

  return (
    <Form {...form}>
      <form className="grid grid-cols-2 gap-x-[18px] gap-y-6">
        <FormField
          control={form.control}
          name="RQF No"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>RFQ No</FormLabel>
              <FormControl>
                <Input placeholder="" className={clsx("btn-disabled")} disabled {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="" className={clsx("btn-disabled")} disabled {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department</FormLabel>
              <FormControl>
                <Input placeholder="" className={clsx("btn-disabled")} disabled {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default RequestQuoteForm;
