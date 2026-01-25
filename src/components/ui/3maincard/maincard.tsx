"use client";
import Image from "next/image";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { useWeather } from "../../../hooks/useWeather";

export default function Maincard() {
  const today = new Date();
  const geo = useGeolocation();
  const weathernow = useWeather().weathernow;
  const dateString = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const forecastData = [
    { day: "Tue", icon: "rain", low: "68°", high: "75°" },
    { day: "Wed", icon: "drizzle", low: "68°", high: "75°" },
    { day: "Thur", icon: "sunny", low: "68°", high: "75°" },
    { day: "Fri", icon: "partly-cloudy", low: "68°", high: "75°" },
    { day: "Sat", icon: "storm", low: "68°", high: "75°" },
    { day: "Sun", icon: "snow", low: "68°", high: "75°" },
    { day: "Mon", icon: "fog", low: "68°", high: "75°" },
  ];
  return (
    <>
      <div className="mx-0 sm:mx-auto">
        <div className="rounded-2xl px-4 h-44 bg-no-repeat bg-cover items-center bg-center bg-[url('/images/bg-today-large.svg')]  flex justify-between ">
          <div className="">
            <h2 className="font-bold text-2xl">{geo.city}</h2>
            <p className="opacity-60">{dateString}</p>
          </div>
          <div className="flex justify-between gap-1 sm:gap-4 items-center  ">
            <Image
              src="/images/icon-sunny.webp"
              alt="sunny"
              height={50}
              width={50}
            />
            <h1 className="text-2xl sm:text-5xl mr-10 sm:mr-0 font-extrabold">
              {weathernow.temp}
            </h1>
          </div>
        </div>
        <div className="h-25 flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex:wrap xl:flex-nowrap gap-2  text-sm sm:text-xl  justify-between mt-4 ">
          <div className="auto sm:w-47 bg-[hsl(243,27%,20%)] rounded-2xl flex flex-col  justify-center px-3.5">
            <p>Feels Like</p>
            <p>{weathernow.feelsLike}</p>
          </div>
          <div className="w-auto sm:w-47 rounded-2xl bg-[hsl(243,27%,20%)]  flex flex-col justify-center px-3.5">
            <p>Humidity</p>
            <p>{weathernow.humidity}%</p>
          </div>
          <div className="w-auto sm:w-47 rounded-2xl bg-[hsl(243,27%,20%)] flex flex-col justify-center px-3.5">
            <p>wind</p>
            <p>{weathernow.windSpeed} mph</p>
          </div>
          <div className="w-auto sm:w-47 rounded-2xl bg-[hsl(243,27%,20%)]  flex flex-col  justify-center px-3.5">
            <p>Precipitation</p>
            <p>{weathernow.precipitation} in</p>
          </div>
        </div>
        <div className=" my-4 mt-8">Daily forecast</div>

        <div className="flex items-center flex-wrap text-xs sm:text-lg justify-between overflow-x-auto  w-full gap-2">
          {forecastData.map((item, index) => (
            <div
              key={index}
              className="h-40 rounded-2xl  w-[30%] sm:w-25 bg-[hsl(243,27%,20%)] flex flex-col py-3.5 items-center"
            >
              <p>{item.day}</p>
              <Image
                src={`/images/icon-${item.icon}.webp`}
                height={50}
                width={50}
                alt={item.icon}
              />
              <div className="flex bg-[hsl(243,27%,20%)] justify-between gap-6 mt-4 mx-2.5">
                <p>68°</p>
                <p>75°</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
