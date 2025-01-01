"use client";

import React, { CSSProperties, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TableProps<T> = {
  data: T[];
  has_checkbox?: boolean;
  has_delete?: boolean;
  onDelete?: (index: number) => void;
  additionalHeaderStyle?: CSSProperties[];
  variant?: string;
};

const AppTable = <T extends Record<string, any>>({ data, has_checkbox, has_delete, onDelete, variant, additionalHeaderStyle = [] }: TableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]); // store indices of selected rows

  const table_keys = Object.keys(data[0] ?? {}); // use table keys as the table headers

  const toggleAllRows = () => {
    if (selectedRows.length == data.length) {
      setSelectedRows([]);
      return;
    }
    setSelectedRows(data.map((_, index) => index));
  };

  // function to check and uncheck individual row checkbox
  const toggleIndividualRow = (index: number) => () => {
    if (selectedRows.includes(index)) {
      setSelectedRows([...selectedRows.filter(item => item != index)]);
      return;
    }
    setSelectedRows([...selectedRows, index]);
  };

  return (
    <Table variant={variant}>
      <TableHeader className={cn("bg-[#F9FAFB]", variant == "outline" && "[&_tr]:border-b-0")}>
        <TableRow className="">
          {has_checkbox && (
            <TableHead className="pl-6 flex items-center self-start">
              <Checkbox className="shadow-none border-[#D0D5DD] w-5 h-5" checked={selectedRows.length === data.length} onCheckedChange={toggleAllRows} />
            </TableHead>
          )}
          {table_keys.map((content, index) => (
            <React.Fragment key={index}>
              <TableHead className={cn("capitalize")} style={additionalHeaderStyle[index] || {}}>
                {content}
              </TableHead>
            </React.Fragment>
          ))}
          {has_delete && <TableHead></TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((content, index) => (
          <TableRow key={index} className={cn("cursor-pointer", variant == "outline" && "border-b-0")}>
            {has_checkbox && (
              <TableCell className="pl-6">
                <Checkbox className="shadow-none border-[#D0D5DD] w-5 h-5" checked={selectedRows.includes(index)} onCheckedChange={toggleIndividualRow(index)} />
              </TableCell>
            )}
            {table_keys.map((key, index) => (
              <TableCell key={index} className="capitalize">
                {content[key]}
              </TableCell>
            ))}
            {has_delete && (
              <TableCell>
                <Button type="button" variant="outline" size="icon" className="shadow-none border-0" onClick={() => onDelete?.(index)}>
                  <Image src="/trash.svg" alt="trash" width={14} height={20} />
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AppTable;
