import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  const handleLinkClick = () => {
    window.open("https://www.instagram.com/baanjochula/", "_blank");
  };
  return (
    <div className="bg-red-500 h-32 w-screen absolute bottom-0 ">
      <section className=" font-salapao text-white flex flex-col items-center justify-center h-full">
        <p className="font-[16px] justify-center w-auto">
          รับเพื่อนก้าวใหม่ 2023
        </p>
        <div
          className="flex items-center hover:bg-gray-700 hover:bg-opacity-10 p-1 rounded-md cursor-pointer"
          onClick={handleLinkClick}
        >
          <Icon icon={"mdi:instagram"} width={18} />
          <p className="font-[14px] ml-1">baanjochula</p>
        </div>
      </section>
    </div>
  );
}
