import Image from 'next/image';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import { useToast } from '@/components/Toast';
import dataJSON from '@/constants/data.json';
import type { Data } from './group/[studentId]';

import background from '#/background.svg';
import logo from '#/kungjo-panda.svg';

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const toast = useToast();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!value) {
      toast?.setToast('error', 'Please enter your student ID');
      return;
    }
    if (value.length !== 10 || isNaN(Number(value))) {
      toast?.setToast('error', 'Student ID must be number and 10 digits');
      return;
    }
    const data: Data = dataJSON;
    if (data[value] === undefined) {
      toast?.setToast('error', `${value} is not found`);
      return;
    }
    router.push(`/group/${value}`);
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center px-8 pb-16">
      <Image
        src={background}
        alt=""
        fill
        className="-z-50 select-none object-cover object-top"
      />
      <div className="relative flex h-64 w-full max-w-lg flex-col items-center gap-4 rounded-3xl bg-red pt-16 ring-8 ring-red/20">
        <div className="absolute left-1/2 top-0 aspect-square w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
          <Image
            src={logo}
            fill
            className="object-cover object-center"
            alt=""
          />
        </div>
        <form className="flex w-full flex-col items-center gap-2 px-8 text-center font-salapao text-xl text-white">
          <label htmlFor="studentId">เลขรหัสนิสิต</label>
          <input
            name="studentId"
            className="w-full rounded-3xl bg-white/30 px-4 py-1 text-lg tracking-wider text-white outline-none placeholder:text-white/40"
            type="text"
            placeholder="66xxxxxxxx"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
          <button
            className="mt-4 w-fit rounded-3xl bg-white px-4 py-1 font-salapao text-lg text-black outline-none ring-4 ring-white/40"
            type="submit"
            onClick={handleSubmit}
          >
            ตรวจสอบ
          </button>
        </form>
      </div>
    </div>
  );
}
