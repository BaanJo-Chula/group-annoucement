export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex flex-grow flex-col items-center justify-center">
        <div className="bg-red-700 border-red-200 relative flex h-1/3 w-4/6 max-w-lg flex-col items-center justify-center rounded-3xl border-4 border-solid">
          <div className="right-10px absolute -top-14 h-28 w-28 rounded-full bg-black sm:-top-16 sm:h-32 sm:w-32"></div>
          <div className="flex h-1/3 w-5/6 min-w-fit flex-col">
            <div className="text-xl text-white sm:text-2xl">เลขรหัสนิสิต</div>
            <div className="h-1/3 w-full rounded-xl bg-gray-400"></div>
          </div>
          <div className="absolute bottom-5 h-1/6 w-1/5 min-w-fit bg-white sm:w-1/6">
            <div className="text-center text-xl text-black sm:text-2xl">
              login
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500 flex h-32 items-center justify-center">
        footer
      </div>
    </div>
  );
}
