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
    <div className="min-h-screen flex justify-center pb-32 items-center flex-col relative">
      <Link href="/">
        <Icon
          icon="ic:arrow-back"
          className="absolute top-8 left-8 text-3xl text-red-500"
        />
      </Link>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="font-ibmthai font-bold text-2xl sm:text-3xl">
          คุณได้รับเลือกให้เข้า
        </h1>
        <div className="w-64 aspect-square shadow-xl rounded-xl overflow-hidden relative">
          <Image src={frameSrc} fill alt="" className="absolute z-10" />
          <Image src={imgSrc} alt={imgAlt} fill />
        </div>
        <h3 className="font-salapao font-bold text-xl">{imgAlt}</h3>
      </div>
    </div>
  );
}
