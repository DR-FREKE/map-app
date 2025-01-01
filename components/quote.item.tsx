import React from "react";
import AppTable from "./global/app-table";
import { additionalHeaderStyle, QuoteItem } from "@/lib/data";
import ItemRow from "./global/item-row";
import AmountSummary from "./global/amount-summary";

// this data should mostly come from api and can be transpiled or processed to get desired result
const quote_items = [
  { id: 28373, item_name: "Oxygen concentrated", color: "blue", quantity: 100, unit: "pieces", price: 200, amount: 2000, delivery_date: "2024-08-07" },
  { id: 28374, item_name: "Mechanical ventilator", color: null, quantity: 45, unit: "kg", price: 350, amount: 2500, delivery_date: "2024-08-07" },
  { id: 28375, item_name: "Patient monitor", color: "blue", quantity: 30, unit: "units", price: 300, amount: 1500, delivery_date: "2024-08-07" },
  { id: 28376, item_name: "Mechanical ventilator", color: "blue", quantity: 35, unit: "units", price: 200, amount: 1500, delivery_date: "2024-08-07" },
];

export const processData = (data: QuoteItem) => ({
  items: <ItemRow id={data.id} name={data.item_name} />,
  variants: data.color ?? "NIL",
  quantity: `${data.quantity} ${data.unit}`,
  price: data.price,
  amount: data.amount,
  "expected delivery date": data.delivery_date,
});

const QuoteItems = () => {
  const quote_data = quote_items.map(processData);
  return (
    <div className="rounded-[10px] border border-[#E4E7EC] shadow-sm pb-6 flex flex-col gap-4">
      <div className="py-4 px-6">
        <span className="font-bold text-xl leading-6">Item(s)</span>
      </div>
      <div className="px-4 flex flex-col gap-6">
        <AppTable data={quote_data} has_checkbox additionalHeaderStyle={additionalHeaderStyle} />
        <AmountSummary />
      </div>
    </div>
  );
};

export default QuoteItems;
