import React from "react";
import QuoteInformation from "../quote.info";
import { Edit } from "iconsax-react";
import QuoteItems from "../quote.item";
import QuoteAttachment from "../quote.attachment";

const PreviewStep = () => {
  return (
    <div className="flex flex-col gap-6">
      <QuoteInformation name="Request Information" right_prop={<Edit size={24} color="#98A2B3" />} has_summary={false} />
      <QuoteItems />
      <QuoteAttachment />
    </div>
  );
};

export default PreviewStep;
