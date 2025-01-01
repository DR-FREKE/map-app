import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-4">
      <div className="flex flex-col gap-[2px]">
        <span className="font-bold text-2xl">Quote details</span>
        <small className="text-[#667185] text-sm leading-[20.3px]">Created on Wed, 12th June 2022, 08:00am</small>
      </div>
      <div className="flex gap-3 items-center text-white">
        <Button className="bg-btn-respond" asChild>
          <Link href={"/quote/2/response"}>Respond</Link>
        </Button>
        <Button className="bg-btn-reject">
          <X size={20} />
          <span>Reject</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
