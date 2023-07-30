import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bg-red-700 h-32 w-full absolute bottom-0 ">
      <section className=" font-salapao text-white flex flex-col items-center justify-center h-full">
        <p className=" w-auto">รับเพื่อนก้าวใหม่ 2023</p>

        <Link
          href="https://www.instagram.com/baanjochula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center hover:bg-gray-700 hover:bg-opacity-10 p-1 rounded-md cursor-pointer">
            <Icon icon="mdi:instagram" width={18} />
            <p className=" text-sm ml-1">baanjochula</p>
          </div>
        </Link>
      </section>
    </div>
  );
}
