import { cn } from "@/lib/utils";
import React from "react";

const AmountSummary = ({ no_total, className }: { no_total?: boolean; className?: string }) => {
  return (
    <div className="grid grid-cols-12">
      <div className={cn("flex items-end gap-4 flex-col sm:min-h-[62px] sm:col-start-9 sm:col-end-12 col-span-full", className)}>
        <div className="flex sm:gap-4 gap-2 text-[#475367]">
          <span className="sm:w-[118px]">Sub Total</span>
          <span className="sm:w-[151px]">$8,000.00</span>
        </div>
        {!no_total && (
          <div className="flex gap-4 text-[#475367]">
            <span className="sm:w-[118px]">Total</span>
            <span className="font-bold sm:w-[151px]">$8,750.00</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmountSummary;
