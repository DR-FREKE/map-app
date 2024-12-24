"use client";

import { useFormContext } from "@/context/form-context";
import { steps } from "@/lib/data";
import clsx from "clsx";
import React from "react";

const Indicator = ({ title, sub_title, index, currentstep, completed }: { title: string; sub_title: string; index: number; currentstep: number; completed: number[] }) => {
  const is_active = currentstep == index;
  const is_completed = completed.includes(index);
  return (
    <div className="flex gap-4 items-start">
      <div className={clsx("w-[32px] h-[32px] flex items-center justify-center rounded-full", is_completed ? "bg-[#E7F6EC]" : is_active ? "bg-[#175CFF]" : "border border-[#98A2B3]")}>
        <span className={clsx("font-bold text-lg", is_completed ? "text-[#0F973D]" : is_active ? "text-white" : "text-[#98A2B3]")}>{index + 1}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className={clsx("leading-[23.2px] text-[#101928]", is_active || is_completed ? "font-bold" : "font-medium")}>{title}</span>
        <span className={clsx("text-xs leading-[17.4px]", is_active || is_completed ? "text-[#475367]" : "text-[#667185]")}>{sub_title}</span>
      </div>
    </div>
  );
};

const StepIndicator = () => {
  const { active, completed: completed_steps } = useFormContext();

  return (
    <div className="border rounded-[10px] py-6 px-5 gap-2">
      <div className="grid grid-cols-3 gap-6">
        {steps.map((content, index) => (
          <React.Fragment key={index}>
            <Indicator {...content} index={index} currentstep={active} completed={completed_steps} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
