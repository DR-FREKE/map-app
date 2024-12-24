"use client";

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";

type TableProps<T> = {
  data: T[];
  has_checkbox?: boolean;
  has_delete?: boolean;
  onDelete?: (index: number) => void;
};

const AppTable = <T extends Record<string, any>>({ data, has_checkbox, has_delete, onDelete }: TableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]); // store indices of selected rows

  const table_keys = Object.keys(data[0] ?? {}); // use table keys as the table headers

  const toggleAllRows = () => {
    if (selectedRows.length == data.length) {
      setSelectedRows([]);
      return;
    }
    setSelectedRows(data.map((_, index) => index));
  };

  return (
    <Table className="border rounded-lg">
      <TableHeader className="bg-[#F9FAFB]">
        <TableRow>
          {has_checkbox && (
            <TableHead>
              <Checkbox checked={selectedRows.length === data.length} onChange={toggleAllRows} />
            </TableHead>
          )}
          {table_keys.map((content, index) => (
            <React.Fragment key={index}>
              <TableHead className="capitalize">{content}</TableHead>
            </React.Fragment>
          ))}
          {has_delete && <TableHead></TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((content, index) => (
          <TableRow key={index} className="cursor-pointer">
            {has_checkbox && (
              <TableCell>
                <Checkbox />
              </TableCell>
            )}
            {table_keys.map((key, index) => (
              <TableCell key={index}>{content[key]}</TableCell>
            ))}
            {has_delete && (
              <TableCell>
                <Button type="button" variant="outline" size="icon" className="shadow-none border-0" onClick={() => onDelete?.(index)}>
                  <Trash size={20} />
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
