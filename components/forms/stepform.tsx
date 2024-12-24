"use client";

import { useFormContext } from "@/context/form-context";
import { steps } from "@/lib/data";
import React, { useState } from "react";
import { Button } from "../ui/button";
import ConfirmModal from "../global/confirm-modal";
import { useRouter } from "next/navigation";
import clsx from "clsx";

const StepForm = () => {
  // const { push } = useRouter();
  const { active, setActive, markAsCompleted, setCompleted } = useFormContext();
  const [open, setOpen] = useState(false);

  const CurrentStep = steps[active].component;
  const last_step = active + 1 == steps.length;

  const handleNextStep = () => {
    if (active + 1 !== steps.length) {
      markAsCompleted(active);
      setActive(prev => (prev < steps.length - 1 ? prev + 1 : prev));
      return;
    }

    setOpen(true);
  };

  const handleCancel = () => {
    // push("/");

    setCompleted([]);
    setActive(0);
  };

  return (
    <>
      <div className={clsx("rounded-[10px]", !last_step ? "border pt-8 pb-6 px-6" : "")}>
        <div className="flex gap-8 flex-col">
          {!last_step && (
            <div className="flex flex-col gap-2">
              <span className="font-bold text-2xl leading-[28.8px]">{steps[active].head_title}</span>
              <span className="text-[#98A2B3]">{steps[active].head_sub}</span>
            </div>
          )}
          <CurrentStep />
          {!last_step && <hr className="" />}
          <div className="flex gap-6 justify-end">
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
      <ConfirmModal open={open} setOpen={setOpen} />
    </>
  );
};

export default StepForm;
