import desktopBg from '#/desktop-bg.svg';
import logo from '#/kungjo-panda.jpg';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('');

  function handleClick() {
    alert(value);
  }

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${desktopBg.src})` }}
    >
      <div className="relative flex h-52 max-h-96 w-4/6 max-w-lg flex-col items-center justify-center rounded-3xl border-4 border-solid border-red/20 bg-red sm:h-64">
        <div
          className="absolute -top-14 h-28 w-28 rounded-full bg-cover sm:-top-16 sm:h-32 sm:w-32"
          style={{ backgroundImage: `url(${logo.src})` }}
        ></div>
        <div className="flex h-1/3 w-5/6 min-w-fit flex-col space-y-2 font-salapao text-xl text-white sm:text-center sm:text-2xl">
          <div>เลขรหัสนิสิต</div>
          <input
            className="h-1/3 w-full rounded-xl bg-white/30 indent-2 text-xl text-black sm:rounded-2xl sm:indent-3"
            type="text"
            placeholder="66XXXXXXXX"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          ></input>
        </div>
        <button
          className="absolute bottom-5 flex h-1/6 w-1/4 min-w-fit items-center justify-center rounded-lg bg-white font-salapao text-xl text-black sm:bottom-8 sm:text-2xl"
          onClick={handleClick}
        >
          login
        </button>
      </div>
    </div>
  );
}
