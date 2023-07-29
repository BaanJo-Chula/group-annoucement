import Image from "next/image";
import React from "react";
import groupSnake from "../../public/group-snake.jpeg";
import Head from "next/head";
import { Icon } from "@iconify/react/dist/iconify.js";

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
        <h1 className=" font-IBMPlexSansThai font-bold">
          คุณได้รับเลือกให้เข้า
        </h1>

        <Image
          src={groupSnake}
          alt="groupImage"
          className=" w-3/12 rounded-xl"
        />
        <h3 className="font-salapao ">กลุ่มอสรพิษวารี</h3>
      </div>
    </div>
  );
}
