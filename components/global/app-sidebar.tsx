"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { bottom_items, items } from "@/lib/data";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { LogOut } from "lucide-react";
import { ArrowDown2 } from "iconsax-react";
import { cn } from "@/lib/utils";

const MenuItem = (item: (typeof items)[number]) => {
  const Icon = item.icon;
  return (
    <SidebarMenuItem key={item.title} className="rounded-sm py-2.5 px-4 pr-0 gap-1">
      <SidebarMenuButton asChild className="hover:bg-transparent group">
        <a href={item.url}>
          <Icon size={20} color="#667185" variant="Bold" />
          <span className="text-sm text-[#344054]">{item.title}</span>
        </a>
      </SidebarMenuButton>
      {item.has_badge && <SidebarMenuBadge className="my-[11px] sm:w-[30px] !text-white pointer-events-none font-medium sm:h-[17px] rounded-[10px] bg-[#175CFF]">10</SidebarMenuBadge>}
    </SidebarMenuItem>
  );
};

const CollapsibleMenuItem = ({ item, is_active, onClick }: { item: (typeof items)[number]; is_active: boolean; onClick: (id: number) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible defaultOpen={isOpen} className="group/collapsible" onOpenChange={open => setIsOpen(open)}>
      <SidebarMenuItem className={cn("gap-1")}>
        <CollapsibleTrigger className={cn("w-full py-2 px-4 rounded-sm", is_active ? "bg-[#E3EAFB]" : "")} onClick={() => onClick(item.id)}>
          <SidebarMenuButton asChild className="w-full hover:bg-transparent !bg-transparent">
            <div className="flex justify-between">
              <a href={item.url} className="flex gap-2 items-center">
                <item.icon size={16} color="#667185" variant="Bold" />
                <span className="text-sm text-[#344054]">{item.title}</span>
              </a>
              <ArrowDown2 color="#344054" className={cn(isOpen ? "rotate-180" : "")} />
            </div>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4">
          <SidebarMenuSub>
            {item.collapsible_item?.map(content => (
              <React.Fragment key={content.id}>
                <SidebarMenuSubItem className="py-2.5 px-1 text-[#344054]">{content.title}</SidebarMenuSubItem>
              </React.Fragment>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

function SidebarLinkGroup({ item_arr }: { item_arr: typeof items }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <SidebarGroup>
      <SidebarGroupContent className="gap-3">
        <SidebarMenu className="gap-1">
          {item_arr.map(item => (
            <React.Fragment key={item.id}>
              {"is_collapsible" in item && item.is_collapsible ? <CollapsibleMenuItem item={item} is_active={item.id === Number(activeId)} onClick={id => setActiveId(id)} /> : <MenuItem {...item} />}
            </React.Fragment>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function AppSidebar() {
  return (
    <Sidebar side="left" collapsible="icon" className="bg-[#F7F9FC] py-4 gap-3">
      <SidebarHeader className="p-[8px_24px] gap-1 rounded-sm">
        <Image src={"/logo.svg"} alt="logo" width={224} height={40} />
      </SidebarHeader>
      <SidebarContent className="pr-3 justify-between">
        <SidebarLinkGroup item_arr={items} />
        <SidebarLinkGroup item_arr={bottom_items} />
      </SidebarContent>
      <SidebarFooter className="py-2">
        <div className="py-3 px-4 flex justify-between items-center rounded-sm">
          <div className="flex gap-3 items-center">
            <Image src={"/Image.svg"} alt="avatar" width={40} height={40} />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Mark Benson</span>
              <span className="text-sm text-gray-600 w-36 text-ellipsis truncate">markbenson@coremed.com</span>
            </div>
          </div>
          <LogOut size={20} />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
