import React from "react";
import QuoteInformation from "../quote.info";
import { Edit } from "iconsax-react";
import QuoteItems from "../quote.item";
import QuoteAttachment from "../quote.attachment";
import { Requestor } from "../global/list/list-quote";

const quote_details = {
  Title: <span className="font-medium text-[#344054]">Request for Equipments</span>,
  "RFQ No": <span className="font-medium text-[#344054]">RQ #01234</span>,
  Requestor: <Requestor />,
  Department: "Maternity",
  "Expected delivery date": "2024-12-02",
};

const PreviewStep = () => {
  return (
    <div className="flex flex-col gap-6">
      <QuoteInformation details={quote_details} name="Request Information" right_prop={<Edit size={24} color="#98A2B3" />} has_summary={false} />
      <QuoteItems />
      <QuoteAttachment />
    </div>
  );
};

export default PreviewStep;
