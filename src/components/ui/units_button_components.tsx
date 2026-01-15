"use client";
import Image from "next/image";
import { useState } from "react";
import Units_button from "./units_button";

export default function UnitsComponents() {
  const [check, setCheck] = useState("Celsius");
  const [windSpeed, setwindSpeed] = useState("km/hr");
  const [precipitation, setPrecipitation] = useState("Millimeters (mm)");
  const [option, setOption] = useState(false);

  return (
    <>
      <div
        onClick={() => setOption(true)}
        onMouseEnter={() => setOption(true)}
        onMouseOver={() => setOption(true)}
        onMouseLeave={() => setOption(false)}
        className="relative "
      >
        <div className="border border-white/10  relative flex  hover:opacity-80 text-lg  rounded-md items-center cursor-pointer justify-between gap-3.5 h-10 px-4 bg-[hsl(243,27%,20%)]">
          <Units_button />
        </div>
        {option && (
          <div className=" border border-white/10   py-1.5 px-1.5 text-sm  rounded-lg absolute w-50 right-0 z-60 top-10 bg-[hsl(243,30%,17%)] ">
            <p className="rounded-lg  bg-[hsl(243,22%,25%)] flex px-2.5 py-2.5">
              Switch to Imperial
            </p>
            <p className="opacity-60 px-2 mt-3">Temperature</p>
            <div className="   flex flex-col">
              {["Celsius", "Fahrenheit"].map((temp) => (
                <div
                  className=" hover:bg-[hsl(243,22%,25%)] cursor-pointer px-1.5 flex py-2 rounded-md justify-between  hover:opacity-80"
                  key={temp}
                  onClick={() => setCheck(temp)}
                >
                  {temp}

                  {temp === check && (
                    <Image
                      className="left-0"
                      src={"/images/icon-checkmark.svg"}
                      alt=""
                      height={15}
                      width={15}
                    ></Image>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-4 flex opacity-60 px-2 py-2  border-t border-t-gray-200">
              Wind Speed
            </p>
            <div className="  flex flex-col">
              {["km/hr", "mph"].map((wind) => (
                <div
                  className=" hover:bg-[hsl(243,22%,25%)] cursor-pointer px-1.5 flex py-2 rounded-md justify-between  hover:opacity-80"
                  key={wind}
                  onClick={() => setwindSpeed(wind)}
                >
                  {wind}

                  {wind === windSpeed && (
                    <Image
                      className="left-0"
                      src={"/images/icon-checkmark.svg"}
                      alt=""
                      height={15}
                      width={15}
                    ></Image>
                  )}
                </div>
              ))}
            </div>

            <p className="opacity-60 px-2 py-2  border-t border-t-gray-200">
              Precipitation
            </p>
            <div className="  flex flex-col">
              {["Millimeters (mm)", "mph"].map((preci) => (
                <div
                  className=" hover:bg-[hsl(243,22%,25%)] cursor-pointer px-1.5 flex py-2 rounded-md justify-between  hover:opacity-80"
                  key={preci}
                  onClick={() => setPrecipitation(preci)}
                >
                  {preci}

                  {preci === precipitation && (
                    <Image
                      className="left-0"
                      src={"/images/icon-checkmark.svg"}
                      alt=""
                      height={15}
                      width={15}
                    ></Image>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
