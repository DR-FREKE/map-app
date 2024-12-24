"use client";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import clsx from "clsx";
import { Add, Calendar as CalendarIcon } from "iconsax-react";
import { DatePicker } from "../ui/date";
import { quote_items } from "@/lib/data";
import AppTable from "../global/app-table";
import { SelectField } from "../global/select-field";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export type QuoteProps = {
  "RQF No": string;
  title: string;
  department: string;
  quote_delivery_date: Date;
  items: { item: string; variant: string; quantity: number; price: number; delivery_date: string; amount: number }[];
  note: string;
};

const RequestQuoteForm = () => {
  const form = useForm<QuoteProps>({
    mode: "onChange",
    defaultValues: {
      "RQF No": "RFQ-10234",
      title: "Request For Equipments",
      department: "Maternity",
      items: quote_items,
    },
  });

  // for creating and viewing an array of identical input fields
  const { fields, append, remove } = useFieldArray({ control: form.control, name: "items" });

  /* we use the fields array to know the amount of identical input fields we'll need to create...
  then process that so we can pass to the table component*/
  const processed_fields = fields.map(data => ({
    items: <SelectField items={[{ id: 1, name: "Oxygen Concentration" }]} select_by="name" />,
    variant: <SelectField items={[{ id: 1, name: "Blue" }]} select_by="name" />,
    quantity: <Input className="shadow-none" />,
    price: <Input className="shadow-none" />,
    "Expected Delivery date": <DatePicker control={form.control} name="delivery_date" />,
    amount: <span>$1200.00</span>,
  }));

  // function to delete identical input from the table
  const handleDelete = (index: number) => {
    remove(index);
  };

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
        <FormField
          control={form.control}
          name="quote_delivery_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expected Delivery Date</FormLabel>
              <FormControl>
                <DatePicker disabled className={clsx("btn-disabled")} control={form.control} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <hr className="col-span-full" />
        <div className="flex flex-col gap-8 col-span-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>Add Item</span>
              <Button variant="outline" type="button" className="gap-1 items-center" onClick={() => append(quote_items)}>
                <Add color="#667185" size={24} />
                <span className="text-black">Add</span>
              </Button>
            </div>
            <AppTable data={processed_fields} has_delete onDelete={handleDelete} />
          </div>
          <hr className="col-span-full" />
          <div className="sm:w-[472px]">
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us a little bit about yourself" className="resize-none shadow-none sm:h-[155px]" {...field} />
                  </FormControl>
                  <FormDescription className="flex justify-end">0/200</FormDescription>
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default RequestQuoteForm;
