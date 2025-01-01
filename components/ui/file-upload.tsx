import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "./button";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({ onChange }: { onChange?: (files: File[]) => void }) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    onChange && onChange(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: error => {
      console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div onClick={handleClick} whileHover="animate" className="px-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden">
        <input ref={fileInputRef} id="file-upload-handle" type="file" onChange={e => handleFileChange(Array.from(e.target.files || []))} className="hidden" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="sm:w-[56px] z-40 w-[40px] sm:h-[56px] h-[40px] bg-[#F0F2F5] rounded-full flex justify-center items-center">
            <Image src="/cloud-upload.svg" alt="cloud-upload" width={28} height={28} />
          </div>
          <div className="flex flex-col z-40 gap-[2px] items-center">
            <div className="flex gap-1 items-center text-center text-sm">
              <span className="font-medium text-[#175CFF]">Click to upload</span>
              <span>or drag and drop</span>
            </div>
            <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
          </div>
          <div className="z-40 sm:w-[243px] flex justify-center items-center">
            <hr className="absolute sm:w-[234] w-[134px] border-[#F0F2F5]" />
            <span className="w-[34px] px-2 z-10 bg-white text-[#98A2B3] font-bold text-xs leading-[17.4px] text-center">OR</span>
          </div>
          <div className="relative w-full max-w-xl mx-auto">
            {files.length > 0 &&
              files.map((file, idx) => (
                <motion.div
                  key={"file" + idx}
                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                  className={cn("relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md", "shadow-sm")}
                >
                  <div className="flex justify-between w-full items-center gap-4">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs">
                      {file.name}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input"
                    >
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </motion.p>
                  </div>

                  <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 ">
                      {file.type}
                    </motion.p>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout>
                      modified {new Date(file.lastModified).toLocaleDateString()}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            {!files.length && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-2xl z-40 bg-[#175CFF] dark:bg-neutral-900 flex items-center mt-1 justify-center h-9 w-full max-w-[8rem] mx-auto rounded-md",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}
              >
                {isDragActive ? (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neutral-600 flex flex-col items-center">
                    Drop it
                    <IconUpload className="h-4 w-4 text-white dark:text-neutral-400" />
                  </motion.p>
                ) : (
                  <div className="flex gap-2 items-center text-white dark:text-neutral-300">
                    <IconUpload className="h-4 w-4 " />
                    <span className="font-bold text-sm">Browse Files</span>
                  </div>
                )}
              </motion.div>
            )}

            {!files.length && (
              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-9 w-full max-w-[8rem] mx-auto rounded-md"
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
