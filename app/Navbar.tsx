"use client";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [option, setOption] = useState(false);
  return (
    <>
      <div className=" flex items-center justify-between ">
        <Image
          onClick={() => window.location.reload()}
          className=" h-6 sm:h-12 hover:opacity-70 transition"
          src="/images/logo.svg"
          alt="weather"
          height={150}
          width={150}
        />

        <div
          onClick={() => setOption((prev) => !prev)}
          className=" flex text-lg  rounded-md items-center cursor-pointer justify-between gap-3.5 h-10 px-4 bg-[hsl(243,27%,20%)]"
        >
          <Image
            src="/images/icon-units.svg"
            alt="setting"
            height={15}
            width={15}
          />
          <p>Units</p>
          <Image
            src="/images/icon-dropdown.svg"
            alt="setting"
            height={15}
            width={15}
          />
          {option && (
            <div className="">
              <p className="">Km/hr</p>
              <p className="">Mp/s</p>
              <p className="">Knots</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
