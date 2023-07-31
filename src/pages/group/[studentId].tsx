import {
  elementalImages,
  elementalName,
  groupImages,
  groupName,
} from '@/constants/Images';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Icon } from '@iconify/react';
import data from '../../constants/data.json';
import desktopBg from '#/desktop-bg.svg';
import noImage from '#/noImage.jpeg';
export default function group() {
  
  const router = useRouter();
  const  studentId = router.query.studentId as string;

  let group = '';
  let element = '';
  interface Data {
    [key: string]: { group: string; elemental: string };
  }

  const studentData:Data = data ;
  if(studentId in studentData){
    group = studentData[studentId].group;
    element = studentData[studentId].elemental;
  }

  let imgSrc = groupImages[group] || "";
  let frameSrc = elementalImages[element] || "";
  let imgAlt = groupName[group] + elementalName[element] || "";

  return (
    <div
    className="flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-fixed bg-no-repeat"
    style={{ backgroundImage: `url(${desktopBg.src})` }}
  >
    <div className="relative flex min-h-screen flex-col items-center justify-center pb-32 w-screen">
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
          <Image src={frameSrc||noImage} fill alt="" className="absolute z-10" />
          <Image src={imgSrc||noImage} alt={imgAlt} fill />
        </div>
        <h3 className="font-salapao text-xl font-bold">{imgAlt}</h3>
      </div>
    </div></div>
  );
}
