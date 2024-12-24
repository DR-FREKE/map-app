import Image from "next/image";
import React from "react";

const ItemRow = ({ id, name }: { id: number; name: string }) => {
  return (
    <div className="flex gap-3 items-center">
      <Image src={"/misc-icon.svg"} alt="item-img" width={40} height={40} />
      <div className="flex flex-col">
        <span className="font-medium text-sm text-ellipsis truncate w-[130px]">{name}</span>
        <span className="text-sm text-gray-600">#{id}</span>
      </div>
    </div>
  );
};

export default ItemRow;
