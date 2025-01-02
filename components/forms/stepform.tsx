"use client";

import { useFormContext } from "@/context/form-context";
import { steps } from "@/lib/data";
import React, { useActionState, useEffect, useState } from "react";
import { Button } from "../ui/button";
import ConfirmModal from "../global/confirm-modal";
import clsx from "clsx";
import { createQuote } from "@/actions/test";
import { LoadingDialog } from "../global/loading-modal";
import { useToast } from "@/hooks/use-toast";

const StepForm = () => {
  // const { push } = useRouter();
  const { active, markAsCompleted, setActive, reset } = useFormContext();
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(createQuote, null);
  const { toast } = useToast();

  const CurrentStep = steps[active].component;
  const last_step = active + 1 == steps.length;

  useEffect(() => {
    if (state?.success) {
      toast({ description: "RFQ ID sent successfully!" });
    }
  }, [state]);

  const handleNextStep = () => {
    if (active + 1 !== steps.length) {
      // should just use !last_step
      markAsCompleted(active);
      setActive(prev => (prev < steps.length - 1 ? prev + 1 : prev));
      return;
    }

    setOpen(true);
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <>
      <div className={clsx("rounded-[10px]", !last_step ? "border pt-8 pb-6 sm:px-6 px-4" : "")}>
        <div className="flex gap-8 flex-col">
          {!last_step && (
            <div className="flex flex-col gap-2">
              <span className="font-bold text-2xl leading-[28.8px]">{steps[active].head_title}</span>
              <span className="text-[#98A2B3]">{steps[active].head_sub}</span>
            </div>
          )}
          <CurrentStep />
          {!last_step && <hr className="" />}
          <div className="flex sm:gap-6 gap-2 justify-end">
            <Button className="max-w-[68px] bg-transparent border shadow-none text-gray-600 font-bold hover:bg-transparent" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="px-4 bg-transparent border shadow-none md:w-[150px] border-[#175CFF] text-[#175CFF] font-bold hover:bg-transparent">Save as draft</Button>
            <Button className="bg-[#175CFF] md:w-[150px]" onClick={handleNextStep}>
              {last_step ? "Submit" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
      <ConfirmModal open={open && !pending} setOpen={setOpen} action={formAction} />
      <LoadingDialog open={pending} />
    </>
  );
};

export default StepForm;
