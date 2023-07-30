import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="absolute bottom-0 h-32 w-full bg-red">
      <section className=" flex h-full flex-col items-center justify-center font-salapao text-white">
        <p className=" w-auto">รับเพื่อนก้าวใหม่ 2023</p>

        <Link
          href="https://www.instagram.com/baanjochula/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-1 hover:underline"
        >
          <Icon icon="mdi:instagram" className="text-md" />
          <p className="ml-1 text-sm">baanjochula</p>
        </Link>
      </section>
    </div>
  );
}
