import { Building2 } from "lucide-react";
import React from "react";

const SummaryCard = () => {
  return (
    <div className="md:min-w-[352px] min-w-auto md:w-auto w-full rounded-[10px] border p-4 gap-2 border-[#E4E7EC] flex flex-col">
      <div className="flex items-center gap-2">
        <Building2 size={20} className="text-[#98A2B3]" />
        <span className="text-xs text-[#475367]">Client</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-[32px] h-[32px] bg-[#FFECE5] flex items-center justify-center text-[10px] font-semibold rounded-full font-inter">w</span>
        <span className="flex flex-col">
          <p className="font-medium text-sm">Westend Hospital</p>
          <p className="text-xs text-[#475367]">Clear street</p>
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
