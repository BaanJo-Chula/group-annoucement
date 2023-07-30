import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="absolute bottom-0 h-32 w-full bg-red-700">
      <section className=" flex h-full flex-col items-center justify-center font-salapao text-white">
        <p className=" w-auto">รับเพื่อนก้าวใหม่ 2023</p>

        <Link
          href="https://www.instagram.com/baanjochula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex cursor-pointer items-center rounded-md p-1 hover:bg-gray-700 hover:bg-opacity-10">
            <Icon icon="mdi:instagram" width={18} />
            <p className=" ml-1 text-sm">baanjochula</p>
          </div>
        </Link>
      </section>
    </div>
  );
}
