"use client";
import { useState } from "react";
import Image from "next/image";
export default function SearchInput() {
  const [inputcity, setInputcity] = useState("");
  return (
    <>
      <div className="flex item-center justify-center text-center font-bold text-xl sm:text-3xl mt-16 ">
        <span className="">How is the sky looking today?</span>
      </div>
      <div className="flex items-center  justify-center mt-12">
        <div className=" flex items-center w-120 h-8  relative">
          <input
            className=" mx-auto  h-full w-full bg-[hsl(243,27%,20%)] rounded-md pl-9"
            type="text"
            placeholder="Search for a place.."
            value={inputcity}
            onChange={(e) => setInputcity(e.target.value)}
          />
          <Image
            className="absolute left-3"
            src="/images/icon-search.svg"
            alt="search"
            height={15}
            width={15}
          />
        </div>
        <button className="h-9 font-bold mx-2 cursor-pointer hover:opacity-70 px-5 opacity-90 bg-[hsl(233,67%,56%)] rounded-md">
          Search
        </button>
      </div>
    </>
  );
}
