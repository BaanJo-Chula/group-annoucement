import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import dataJSON from '@/constants/data.json';
import {
  elementalImages,
  elementalName,
  groupImages,
  groupName,
} from '@/constants/Images';

import desktopBg from '#/desktop-bg.svg';
import noImage from '#/noImage.jpeg';

export interface Data {
  [key: string]: { group: string; elemental: string };
}

export default function Group() {
  const router = useRouter();
  const [imageSource, setImageSource] = useState('');
  const [frameSource, setFrameSource] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  useEffect(() => {
    const { studentId } = router.query;

    if (!studentId) return;

    if (typeof studentId !== 'string') return;

    let group;
    let element;

    const data: Data = dataJSON;

    if (studentId in data) {
      group = data[studentId].group;
      element = data[studentId].elemental;
    }

    if (!group || !element) return;

    setImageSource(groupImages[group]);
    setFrameSource(elementalImages[element]);
    setImageAlt(groupName[group] + elementalName[element]);
  }, [router]);

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${desktopBg.src})` }}
    >
      <div className="relative flex min-h-screen w-screen flex-col items-center justify-center pb-32">
        <Link href="/">
          <Icon
            icon="ic:arrow-back"
            className="absolute left-6 top-14 text-3xl text-red"
          />
        </Link>
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-ibmthai text-2xl font-bold">
            คุณได้รับเลือกให้เข้า
          </h1>
          <div className="relative aspect-square w-64 overflow-hidden rounded-xl shadow-xl">
            <Image
              src={frameSource ?? noImage}
              fill
              alt=""
              className="absolute z-10"
            />
            <Image src={imageSource ?? noImage} alt={imageAlt} fill />
          </div>
          <h3 className="font-salapao text-xl font-bold">{imageAlt}</h3>
        </div>
      </div>
    </div>
  );
}
