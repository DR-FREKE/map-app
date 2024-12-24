import DashboardHeader from "@/components/dashboard.header";
import QuoteAttachment from "@/components/quote.attachment";
import QuoteInformation from "@/components/quote.info";
import QuoteItems from "@/components/quote.item";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />
      <div className="flex flex-col gap-6">
        <QuoteInformation name="Quote Information" />
        <QuoteItems />
        <QuoteAttachment />
      </div>
    </div>
  );
}
