export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col flex-grow">
        <div className="relative flex h-52 w-4/6 max-w-lg flex-col items-center justify-center rounded-3xl bg-red border-red/20 border-4 border-solid">
          <div className="absolute -top-14 h-28 w-28 rounded-full bg-black sm:-top-16 sm:h-32 sm:w-32"></div>
          <div className="flex h-1/3 w-5/6 min-w-fit flex-col font-salapao text-xl text-white sm:text-2xl">
            เลขรหัสนิสิต
            <input className="h-1/3 w-full rounded-xl bg-gray-400"></input>
          </div>
          <div className="absolute flex justify-center items-center bottom-5 h-1/6 w-1/5 min-w-fit font-ibmthai bg-white sm:w-1/6 text-xl text-black sm:text-2xl">
              login
          </div>
        </div>
    </div>
  );
}
