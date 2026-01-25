"use client";
import Image from "next/image";
import { useState } from "react";
import Maincard from "./maincard";
export default function Maincard2() {
  const [thatday, setThatday] = useState("Tuesday");
  const [daysoption, setDaysoption] = useState(false);
  return (
    <>
      <Maincard />
      <div className=" w-[60%] sm:w-[60%] md:w-[30%]  border border-white/10  mx-auto grid gap-4  rounded-2xl px-5 py-5 bg-[hsl(243,27%,20%)]">
        <div className="flex justify-between items-center ">
          <h2>Hourly forecast</h2>
          <div
            onClick={() => setDaysoption((prev) => !prev)}
            onMouseOver={() => setDaysoption(true)}
            onMouseLeave={() => setDaysoption(false)}
            className="flex cursor-pointer justify-between gap-2 relative items-center text-xs rounded-md bg-[hsl(243,23%,24%)] h-7 w-23 px-3"
          >
            <p className="">{thatday}</p>
            <Image
              src="/images/icon-dropdown.svg"
              width={30}
              height={30}
              alt="dropdown"
            />
            {daysoption && (
              <div
                onMouseLeave={() => setDaysoption(false)}
                className="absolute cursor-pointer rounded-sm right-0 px-1.5 py-1.5 flex flex-col  bg-[hsl(243,23%,20%)] top-7 border border-white/10 w-50 text-lg"
              >
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thrusday",
                  "Friday",
                  "Saturday",
                ].map((days) => (
                  <p
                    className="rounded-sm hover:bg-[hsl(243,23%,60%)] top px-1.5 h-12 flex items-center"
                    key={days}
                    onClick={() => {
                      setThatday(days);
                    }}
                  >
                    {days}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className=" px-4 flex items-center rounded bg-[hsl(243,23%,30%)]">
          <Image
            src="/images/icon-overcast.webp"
            alt="here"
            height={30}
            width={30}
          />
          <p>4 PM</p>
          <p className="ml-auto ">69°</p>
        </div>
        <div className="flex px-4 items-center rounded bg-[hsl(243,23%,30%)]">
          <Image
            src="/images/icon-partly-cloudy.webp"
            alt="here"
            width={30}
            height={30}
          />
          <p>4 PM</p>
          <p className="ml-auto ">68°</p>
        </div>
        <div className="flex px-4 items-center rounded bg-[hsl(243,23%,30%)]">
          <Image
            src="/images/icon-rain.webp"
            alt="here"
            height={30}
            width={30}
          />
          <p>4 PM</p>
          <p className="ml-auto ">68°</p>
        </div>
        <div className="flex items-center px-4 rounded bg-[hsl(243,23%,30%)]">
          <Image
            src="/images/icon-snow.webp"
            alt="here"
            height={30}
            width={30}
          />
          <p>4 PM</p>
          <p className="ml-auto ">69°</p>
        </div>
        <div className="flex px-4 items-center rounded bg-[hsl(243,23%,30%)] ">
          <Image
            src="/images/icon-storm.webp"
            alt="here"
            height={30}
            width={30}
          />
          <p>4 PM</p>
          <p className="ml-auto ">70°</p>
        </div>
        <div className="flex px-4 items-center rounded bg-[hsl(243,23%,30%)] ">
          <Image
            src="/images/icon-sunny.webp"
            alt="here"
            height={30}
            width={30}
          />
          <p>4 PM</p>
          <p className="ml-auto ">68°</p>
        </div>
        <div className="flex px-4 items-center rounded bg-[hsl(243,23%,30%)] ">
          <Image
            src="/images/icon-rain.webp"
            alt="here"
            height={30}
            width={30}
          />
          <p>4 PM</p>
          <p className="ml-auto ">68°</p>
        </div>
        <div className="flex px-4 items-center rounded bg-[hsl(243,23%,30%)] ">
          <Image
            src="/images/icon-drizzle.webp"
            alt="here"
            height={30}
            width={30}
          />
          <p>4 PM</p>
          <p className="ml-auto ">68°</p>
        </div>
      </div>
    </>
  );
}
