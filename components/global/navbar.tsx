import Image from "next/image";
import React from "react";
import { ArrowLeft2, Notification, Messages1, ArrowDown2 } from "iconsax-react";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import SearchForm from "../forms/searchform";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = async () => {
  return (
    <header className="md:px-6 px-3 py-1.5 bg-white border-b md:min-h-[64px] min-h-auto flex items-center sticky top-0 z-50">
      <nav className="flex justify-between flex-1 items-center py-1.5">
        <aside className="sm:hidden block flex-1">
          <SidebarTrigger />
        </aside>
        <aside className="sm:flex hidden items-center gap-2">
          <ArrowLeft2 size={20} color="#667185" />
          <span className="text-sm font-medium text-gray-primary-gray">Back</span>
        </aside>
        <aside className="flex items-center gap-10 text-black">
          <SearchForm />
          <div className="flex gap-5 items-center">
            <Notification size={24} color="#667185" />
            {/* <Image src={"/bell.svg"} alt="message" width={17} height={2} /> */}
            <Image src={"/message.svg"} alt="message" width={22} height={22} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2">
                  <Image src={"/Image.svg"} alt="profile" width={32} height={32} />
                  <ArrowDown2 color="#667185" size={18} />
                </div>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
