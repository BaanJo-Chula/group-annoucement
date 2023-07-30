import Image from "next/image";
import groupCraneSrc from "/public/group-images/group-crane.svg";
import groupGhopperSrc from "/public/group-images/group-ghopper.svg";
import groupMonkeySrc from "/public/group-images/group-monkey.svg";
import groupTigerSrc from "/public/group-images/group-tiger.svg";
import groupViperSrc from "/public/group-images/group-viper.svg";

import { Icon } from "@iconify/react";
import Link from "next/link";
type Props = {};

export default function group({}: Props) {
  const group = "tiger";
  const element = "thunder";

  let imgList = {
    tiger: groupTigerSrc,
    monkey: groupMonkeySrc,
    crane: groupCraneSrc,
    grasshopper: groupGhopperSrc,
    viper: groupViperSrc,
  };
  const groupName = {
    tiger: "พยัคฆ์",
    monkey: "วานร",
    crane: "กระเรียน",
    grasshopper: "ตั๊กแตน",
    viper: "อสรพิษ",
  };
  const elementName = {
    water: "วารี",
    fire: "อัคคี",
    earth: "ขุนเขา",
    flower: "บุปผา",
    thunder: "อัสนี",
    wind: "พระพราย",
  };

  let imgSrc = imgList[group];
  let imgAlt = groupName[group] + elementName[element];

  return (
    <>
      <div className="bg-blue-200  w-screen h-8 absolute top-0 left-0"></div>

      <div className="min-h-screen pb-32 pt-8 flex justify-center flex-col relative">
        <Link href="/">
          <div className=" absolute top-8 left-0 m-1 md:m-2 w-8 sm:w-12 md:w-12 lg:w-12 ">
            <Icon icon="ic:arrow-back" width="100%" color="red" />
          </div>{" "}
        </Link>
        <div className="flex flex-col justify-center items-center ">
          <h1 className=" font-imbthai font-bold text-2xl  sm:text-3xl ">
            คุณได้รับเลือกให้เข้า
          </h1>

          <Image
            src={imgSrc}
            width={undefined}
            alt="groupImage"
            className=" w-7/12 sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 rounded-xl mt-3 shadow-md shadow-gray-300"
          />
          <h3 className="font-salapao font-bold sm:text-xl md:text-2xl mt-4 ">
            {imgAlt}
          </h3>
        </div>
      </div>
    </>
  );
}
