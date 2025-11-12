"use client"
import Image from "next/image";

export default function Navbar() {
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

        <div className="flex text-lg  rounded-md items-center  justify-between gap-3.5 h-10 px-4 bg-[hsl(243,27%,20%)]">
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
        </div>
      </div>
    </>
  );
}
