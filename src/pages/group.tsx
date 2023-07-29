import Image from "next/image";
import React from "react";
import groupSnake from "../../public/groupImages/group-snake.jpeg";
import Head from "next/head";

type Props = {};

export default function group({}: Props) {
  return (
    <div>
      <div className="bg-blue-100 block">
        &nbsp;
        <br />
        &nbsp;
      </div>
      <div className="flex flex-col justify-center items-center  ">
        <h1 className=" font-IBMPlexSansThai font-bold text-[32px]">
          คุณได้รับเลือกให้เข้า
        </h1>

        <Image
          src={groupSnake}
          alt="groupImage"
          className="w-[230px] sm:w-6/12 md:w-5/12 lg:w-5/12 xl:w-3/12 rounded-xl mt-4 shadow-md shadow-gray-300"
        />
        <h3 className="font-salapao font-bold sm:text-[20px] md:text-[25px] mt-4 ">
          กลุ่มอสรพิษวารี
        </h3>
      </div>
    </div>
  );
}
