import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-red-500 h-32 w-screen absolute bottom-0 ">
      <section className=" font-salapao text-white flex flex-col items-center justify-center h-full">
        <p className="font-[16px] justify-center w-auto">
          รับเพื่อนก้าวใหม่ 2023
        </p>
        <div className="flex">
          <p className="text-blue-300">logo</p>
          <p className="font-[14px] ml-2">baanjochula</p>
        </div>
      </section>
    </div>
  );
}
