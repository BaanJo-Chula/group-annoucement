import desktopBg from '#/desktop-bg.svg';
import logo from '#/kungjo-panda.jpg';

export default function Home() {
  return (
    <div className="flex flex-col bg-fixed bg-cover bg-no-repeat min-h-screen w-full items-center justify-center" style={{backgroundImage: `url(${desktopBg.src})`}}>
      <div className="relative flex h-52 sm:h-64 w-4/6 max-w-lg max-h-96 flex-col items-center justify-center rounded-3xl bg-red border-4 border-solid border-red/20">
        <div className="absolute -top-14 sm:-top-16 h-28 sm:h-32 w-28 sm:w-32 rounded-full bg-cover" style={{backgroundImage: `url(${logo.src})`}}></div>
        <div className="flex flex-col space-y-2 h-1/3 w-5/6 min-w-fit font-salapao text-white text-xl sm:text-2xl sm:text-center">
          <div>เลขรหัสนิสิต</div>
          <input className="h-1/3 w-full rounded-xl sm:rounded-2xl bg-white/30 text-black text-xl indent-2 sm:indent-3" type="text" placeholder='66XXXXXXXX'></input>
        </div>
        <div className="absolute flex justify-center items-center bottom-5 sm:bottom-8 h-1/6 w-1/4 min-w-fit rounded-lg font-salapao bg-white text-black text-xl sm:text-2xl">
          login
        </div>
      </div>
    </div>
  );
}
