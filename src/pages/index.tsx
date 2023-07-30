import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="flex flex-col relative justify-center items-center w-4/6 h-1/3 max-w-lg bg-red-700 border-4 border-solid border-red-200 rounded-3xl">
          <div className="absolute -top-14 sm:-top-16 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-black right-10px">
          </div>
          <div className="flex flex-col min-w-fit w-5/6 h-1/3">
            <div className="text-xl sm:text-2xl text-white">
              เลขรหัสนิสิต
            </div>
            <div className="w-full h-1/3 bg-gray-400 rounded-xl">
            </div>
          </div>
          <div className="absolute bottom-5 min-w-fit w-1/5 sm:w-1/6 h-1/6 bg-white">
            <div className="text-xl sm:text-2xl text-center text-black">
              login
            </div>
          </div>
        </div>
      </div>
      <div className ="flex h-32 justify-center items-center bg-red-500">
        footer
      </div>
    </div>
  );
}
