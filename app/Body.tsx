"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function Body() {
  const [thatday, setThatday] = useState("Tuesday");
  const [daysoption, setDaysoption] = useState(false);
  const [city, setCity] = useState("");
  const [weathernow, setWeathernow] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      async function fetchweathernow() {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
        );
        const data = await res.json();
        setWeathernow(data.current.temperature_2m);

        console.log(data);
      }
      fetchweathernow();

      async function geoCoding() {
        const apiKey = "4bd382a7d77a4cccb9595f5ded72c267";
        const getLocation = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`
        );
        const locationdata = await getLocation.json();
        console.log(locationdata);

        const place = locationdata.features[0].properties;
        setCity(`${place.city},${place.country}`);
      }
      geoCoding();
    });
  }, []);
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
            onChange={(e) => setCity(e.target.value)}
            value={city}
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

      <div className="flex  flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap gap-5 justify-between my-5  ">
        <div className="mx-0 sm:mx-auto">
          <div className="rounded-2xl px-4 h-44 bg-no-repeat bg-cover items-center bg-center bg-[url('/images/bg-today-large.svg')]  flex justify-between ">
            <div className="">
              <h2 className="font-bold text-2xl">{city}</h2>
              <p className="opacity-60">Tuesday, Aug 5,2025</p>
            </div>
            <div className="flex justify-between gap-1 sm:gap-4 items-center  ">
              <Image
                src="/images/icon-sunny.webp"
                alt="sunny"
                height={50}
                width={50}
              />
              <h1 className="text-2xl sm:text-5xl mr-10 sm:mr-0 font-extrabold">
                {weathernow}
              </h1>
            </div>
          </div>
          <div className="h-25 flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex:wrap xl:flex-nowrap gap-2  text-sm sm:text-xl  justify-between mt-4 ">
            <div className="auto sm:w-47 bg-[hsl(243,27%,20%)] rounded-2xl flex flex-col  justify-center px-3.5">
              <p>Feels Like</p>
              <p>64°</p>
            </div>
            <div className="w-auto sm:w-47 rounded-2xl bg-[hsl(243,27%,20%)]  flex flex-col justify-center px-3.5">
              <p>Humidity</p>
              <p>46%</p>
            </div>
            <div className="w-auto sm:w-47 rounded-2xl bg-[hsl(243,27%,20%)] flex flex-col justify-center px-3.5">
              <p>wind</p>
              <p>9 mph</p>
            </div>
            <div className="w-auto sm:w-47 rounded-2xl bg-[hsl(243,27%,20%)]  flex flex-col  justify-center px-3.5">
              <p>Precipitation</p>
              <p>0 in</p>
            </div>
          </div>
          <div className=" my-4 mt-8">Daily forecast</div>
          <div className="flex items-center flex-wrap text-xs sm:text-lg justify-between overflow-x-auto  w-full gap-2">
            <div className="h-40 rounded-2xl  w-[30%] sm:w-25 bg-[hsl(243,27%,20%)] flex flex-col py-3.5 items-center">
              <p>Tue</p>
              <Image
                src="/images/icon-rain.webp"
                height={50}
                width={50}
                alt="rain"
              />
              <div className="flex justify-between gap-6 mt-4 mx-2.5">
                <p>68°</p>
                <p>75°</p>
              </div>
            </div>
            <div className="h-40 rounded-2xl w-[30%] sm:w-25 bg-[hsl(243,27%,20%)]   flex flex-col py-3.5 items-center">
              <p>Wed</p>
              <Image
                src="/images/icon-drizzle.webp"
                alt="drizzle"
                height={50}
                width={50}
              />
              <div className="flex bg-[hsl(243,27%,20%)] justify-between gap-6 mt-4 mx-2.5">
                <p>68°</p>
                <p>75°</p>
              </div>
            </div>
            <div className="h-40 rounded-2xl w-[30%] sm:w-25 bg-[hsl(243,27%,20%)]  flex flex-col py-3.5 items-center">
              <p>Thur</p>
              <Image
                src="/images/icon-sunny.webp"
                alt="sunny"
                height={50}
                width={50}
              />
              <div className="flex bg-[hsl(243,27%,20%)] justify-between gap-6 mt-4 mx-2.5">
                <p>68°</p>
                <p>75°</p>
              </div>
            </div>
            <div className="h-40 rounded-2xl w-[30%] sm:w-25 bg-[hsl(243,27%,20%)] flex flex-col py-3.5 items-center">
              <p>Fri</p>
              <Image
                src="/images/icon-partly-cloudy.webp"
                alt="partly-cloudy"
                height={50}
                width={50}
              />
              <div className="flex bg-[hsl(243,27%,20%)] justify-between gap-6 mt-4 mx-2.5">
                <p>68°</p>
                <p>75°</p>
              </div>
            </div>
            <div className="h-40 bg-[hsl(243,27%,20%)] w-[30%] sm:w-25 rounded-2xl flex flex-col py-3.5 items-center">
              <p>Sat</p>
              <Image
                src="/images/icon-storm.webp"
                alt="storm"
                height={50}
                width={50}
              />
              <div className="flex bg-[hsl(243,27%,20%)] justify-between gap-6 mt-4 mx-2.5">
                <p>68°</p>
                <p>75°</p>
              </div>
            </div>
            <div className="h-40 w-[30%] sm:w-25  bg-[hsl(243,27%,20%)] rounded-2xl flex flex-col py-3.5 items-center">
              <p>Sun</p>
              <Image
                src="/images/icon-snow.webp"
                alt="snow"
                height={50}
                width={50}
              />
              <div className="flex  bg-[hsl(243,27%,20%)] justify-between gap-6 mt-4 mx-2.5">
                <p>68°</p>
                <p>75°</p>
              </div>
            </div>
            <div className="h-40 w-[30%] sm:w-25 bg-[hsl(243,27%,20%)]  rounded-2xl flex flex-col py-3.5 items-center">
              <p>Mon </p>
              <Image
                src="/images/icon-fog.webp"
                alt="partially sunny"
                height={50}
                width={50}
              />
              <div className="flex bg-[hsl(243,27%,20%)] justify-between gap-6 mt-4 mx-2.5">
                <p>68°</p>
                <p>75°</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[60%] sm:w-[60%] md:w-[30%]  border mx-auto grid gap-4  rounded-2xl px-5 py-5 bg-[hsl(243,27%,20%)]">
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
      </div>
    </>
  );
}
