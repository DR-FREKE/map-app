import { Badge } from "@/components/ui/badge";
import React from "react";

const Requestor = () => (
  <div className="flex items-center gap-2">
    <span className="md:w-[32px] w-[32px] md:h-[32px] h-[32px] font-bold text-sm text-center text-[#101928] rounded-full bg-[#FFECE5] flex items-center justify-center">JD</span>
    <div className="flex flex-1 gap-2 items-center">
      <span className="font-medium md:flex-shrink-0">Jane Doe</span> {/** could be dynamic */}
      <div className="md:w-[6px] md:h-[6px] bg-[#D9D9D9] rounded-full md:flex-shrink-0" />
      <span className="font-medium text-[#98A2B3] md:flex-shrink-0">Head Nurse, Paediatrics</span>
    </div>
  </div>
);

const quote_details = {
  title: <span className="font-medium text-[#344054]">Request for Equipments</span>,
  "RFQ No": <span className="font-medium text-[#344054]">RQ #01234</span>,
  Requestor: <Requestor />,
  Status: <Badge className="rounded-[50px] bg-[#FFECE5] text-[#F56630] shadow-none">Awaiting</Badge>,
  Department: "Maternity",
};

const QuoteInfo = () => {
  const keys = Object.keys(quote_details); // get the details keys...should most times be passed as props i.e the quote_details
  return (
    <div className="flex flex-col gap-4 md:min-w-[550px] min-w-max md:w-auto w-full">
      {keys.map((content, index) => (
        <div key={index} className="flex items-center justify-start">
          <span className="flex-1 font-medium md:text-base text-sm">{content}</span>
          <div className="flex-1 md:text-base text-sm">{quote_details[content as keyof typeof quote_details]}</div>
        </div>
      ))}
    </div>
  );
};

export default QuoteInfo;
