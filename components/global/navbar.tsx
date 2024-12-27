import Image from "next/image";
import React from "react";
import { ArrowLeft2, Notification, Messages1, ArrowDown2 } from "iconsax-react";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import SearchForm from "../forms/searchform";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = async () => {
  return (
    <header className="md:px-6 px-3 py-1.5 bg-white shadow-sm font-work-sans md:min-h-[64px] min-h-auto flex items-center">
      <nav className="flex justify-between flex-1 items-center py-3">
        <aside className="sm:hidden block flex-1">
          <SidebarTrigger />
        </aside>
        <aside className="sm:flex hidden items-center gap-2">
          <ArrowLeft2 size={20} color="#333333" />
          <span className="text-sm">Back</span>
        </aside>
        <aside className="flex items-center gap-10 text-black">
          <SearchForm />
          <div className="flex gap-4 items-center">
            <Notification size={24} color="#667185" />
            <Messages1 size={24} color="#667185" />
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
