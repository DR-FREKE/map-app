import React from "react";
import SummaryCard from "./global/summary-card";
import QuoteInfo from "./global/list/list-quote";

type QuoteInfoProps = {
  name: string;
  right_prop?: React.ReactNode;
  has_summary?: boolean;
};

const DeliveryDateInfo = () => <span className="text-sm text-gray-primary-gray">Expected delivery date : 2024-12-02</span>;

const QuoteInformation = ({ name, right_prop, has_summary = true }: QuoteInfoProps) => {
  return (
    <div className="rounded-lg border md:py-6 py-4 md:px-8 px-5 flex flex-col gap-8 border-[#E4E7EC]">
      {/** header */}
      <div className="flex gap-8 justify-between items-center w-full">
        <div>
          <span className="font-bold text-xl text-[#1D2739]">{name}</span>
        </div>
        <span>{right_prop ?? <DeliveryDateInfo />}</span>
      </div>

      {/** main content */}
      <div className="flex md:flex-row flex-col-reverse justify-between items-start md:gap-0 gap-4">
        <QuoteInfo />
        {has_summary && <SummaryCard />}
      </div>
    </div>
  );
};

export default QuoteInformation;
