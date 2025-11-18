"use client";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [option, setOption] = useState(false);
  return (
    <>
      <div className=" flex  items-center justify-between ">
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
          className="relative border flex text-lg  rounded-md items-center cursor-pointer justify-between gap-3.5 h-10 px-4 bg-[hsl(243,27%,20%)]"
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
            <div className="border border-white/10  py-1.5 px-1.5 text-sm  rounded-lg absolute w-50 right-0 z-60 top-12 bg-[hsl(243,30%,17%)] ">
              <p className="rounded-lg  bg-[hsl(243,22%,25%)] flex px-2.5 py-2.5">
                Switch to Imperial
              </p>
              <p className="opacity-60 px-2 py-1">Temperature</p>
              <p className="border rounded-lg bg-[hsl(243,22%,25%)]  flex px-2.5 py-2.5">
                Celsius(°C)
              </p>
              <p className=" px-2.5 py-2.5">Fahrenheit(°F)</p>
              <p className="opacity-60 px-2 py-2  border-t border-t-gray-200">Wind Speed</p>
              <p className="rounded-lg border bg-[hsl(243,22%,25%)] flex px-2.5 py-2.5">
                km/h
              </p>
              <p className="rounded-lg flex px-2.5 py-2.5">mph</p>
              <p className="opacity-60 px-2 py-2  border-t border-t-gray-200">Precipitation</p>
              <p className="border rounded-lg  bg-[hsl(243,22%,25%)] flex px-2.5 py-2.5">
                Millimeters (mm)
              </p>
              <p className="rounded-lg  flex px-2.5 py-2.5">inches (in)</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
