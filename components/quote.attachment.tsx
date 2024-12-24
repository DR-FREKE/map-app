import { ArrowDown2 } from "iconsax-react";
import Image from "next/image";
import React from "react";

const QuoteAttachment = () => {
  return (
    <div className="border p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-start">
          <Image src={"/sign-doc.svg"} alt="signdoc" width={32} height={32} />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl leading-6 text-[#1D2739]">Terms and Attachments</span>
            <span className="text-sm text-gray-600">Review payment and delivery terms</span>
          </div>
        </div>
        <div>
          <ArrowDown2 size={24} color="#98A2B3" />
        </div>
      </div>
    </div>
  );
};

export default QuoteAttachment;
