import {
  elementalImages,
  elementalName,
  groupImages,
  groupName,
} from '@/constants/Images';
import Image from 'next/image';

import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function group() {
  const group = 'mantis';
  const element = 'earth';

  let imgSrc = groupImages[group];
  let frameSrc = elementalImages[element];
  let imgAlt = groupName[group] + elementalName[element];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center pb-32">
      <Link href="/">
        <Icon
          icon="ic:arrow-back"
          className="absolute left-8 top-8 text-3xl text-red"
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="font-ibmthai text-2xl font-bold">
          คุณได้รับเลือกให้เข้า
        </h1>
        <div className="relative aspect-square w-64 overflow-hidden rounded-xl shadow-xl">
          <Image src={frameSrc} fill alt="" className="absolute z-10" />
          <Image src={imgSrc} alt={imgAlt} fill />
        </div>
        <h3 className="font-salapao text-xl font-bold">{imgAlt}</h3>
      </div>
    </div>
  );
}
