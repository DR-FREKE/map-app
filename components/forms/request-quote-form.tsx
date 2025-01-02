"use client";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import clsx from "clsx";
import { Add } from "iconsax-react";
import { DatePicker } from "../ui/date";
import { quote_items, reqInfoHeaderStyle } from "@/lib/data";
import AppTable from "../global/app-table";
import { SelectField } from "../global/select-field";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { CustomInput } from "../global/custom-input";
import AmountSummary from "../global/amount-summary";

export type QuoteProps = {
  rqf_no: string;
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
      rqf_no: "RFQ-10234",
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
    items: <SelectField disabled name="item" control={form.control} items={[{ id: 1, name: "Oxygen Concentration" }]} select_by="name" />,
    variant: <SelectField name="variant" control={form.control} items={[{ id: 1, name: "Blue" }]} select_by="name" />,
    quantity: <CustomInput name="quantity" control={form.control} />,
    price: <CustomInput name="price" control={form.control} />,
    "Expected Delivery date": <DatePicker control={form.control} name="delivery_date" className="btn-disabled" />,
    amount: <span className="font-bold text-[#344054]">$1200.00</span>,
  }));

  // function to delete identical input from the table
  const handleDelete = (index: number) => {
    remove(index);
  };

  return (
    <Form {...form}>
      <form className="grid sm:grid-cols-2 grid-cols-1 gap-x-[18px] gap-y-6">
        <CustomInput name="rqf_no" control={form.control} label="RQF No" disabled />
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
                <DatePicker disabled caption className={clsx("btn-disabled")} control={form.control} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <hr className="col-span-full" />
        <div className="flex flex-col gap-8 col-span-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="font-bold text-[#1D2739]">Add Item</span>
              <Button variant="outline" type="button" className="gap-1 items-center" onClick={() => append(quote_items[0])}>
                <Add color="#667185" size={24} />
                <span className="text-black">Add</span>
              </Button>
            </div>
            <AppTable data={processed_fields} has_delete onDelete={handleDelete} additionalHeaderStyle={reqInfoHeaderStyle} variant="outline" />
            <hr />
            <AmountSummary no_total className="sm:min-h-0" />
          </div>
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
