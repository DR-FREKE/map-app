"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function AppFileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="w-3/6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="font-bold">Attachments</span>
        <span className="text-sm text-[#98A2B3]">Attach all necessary files or documents</span>
      </div>
      <div className="w-full max-w-4xl mx-auto min-h-[251px] border-[1.5px] border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-2xl p-[24px]">
        <FileUpload onChange={handleFileUpload} />
      </div>
    </div>
  );
}
