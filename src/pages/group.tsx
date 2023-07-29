import Image from "next/image";
import React from "react";
import groupSnake from "../../public/groupImages/group-snake.jpeg";
import Head from "next/head";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {};

export default function group({}: Props) {
  const group = "viper";
  const element = "thunder";

  let imgList = {
    tiger: "",
    monkey: "",
    crane: "",
    grasshopper: "",
    viper: groupSnake,
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
  // console.log(imgSrc);

  return (
    <>
      <div className="bg-blue-200 absolute top-0 left-0 w-screen">
        &nbsp;
        <br />
        &nbsp;
      </div>
      <div className="flex flex-col h-screen pb-32">
        <div className="flex flex-col justify-center items-center flex-grow">
          <h1 className=" font-imbthai font-bold text-[26px] sm:text-[28px] md:text-[33px]">
            คุณได้รับเลือกให้เข้า
          </h1>

          <Image
            src={imgSrc}
            alt="groupImage"
            className="w-[230px] sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 rounded-xl mt-3 shadow-md shadow-gray-300"
          />
          <h3 className="font-salapao font-bold sm:text-[20px] md:text-[25px] mt-4 ">
            {imgAlt}
          </h3>
        </div>
      </div>
    </>
  );
}
