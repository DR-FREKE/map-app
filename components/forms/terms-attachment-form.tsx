"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { SelectField } from "../global/select-field";
import { AppFileUpload } from "../global/app-file-upload";

export type AttachmentProps = {
  payment_terms: string;
  delivery_schedule: string;
  shipping_method: string;
  lead_time: string;
};

const TermAttachmentForm = () => {
  const form = useForm<AttachmentProps>({ mode: "onChange" });

  return (
    <Form {...form}>
      <form className="grid sm:grid-cols-2 grid-cols-1 gap-x-[18px] gap-y-6">
        <SelectField name="payment_terms" control={form.control} label="Payment Terms" items={[]} />
        <SelectField name="delivery_schedule" control={form.control} label="Delivery Schedule" items={[]} />
        <SelectField name="shipping_method" control={form.control} label="Shipping Method" items={[]} />
        <SelectField name="lead_time" control={form.control} label="Lead Time" items={[]} />
        <hr className="" />
        <div className="col-span-full">
          <AppFileUpload />
        </div>
      </form>
    </Form>
  );
};

export default TermAttachmentForm;
