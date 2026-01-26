"use client";
import Image from "next/image";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { useWeather } from "../../../hooks/useWeather";

export default function Maincard() {
  const today = new Date();
  const geo = useGeolocation();
  const { weathernow, weather_history } = useWeather();

  const dateString = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const weathersituation = [
    { label: "feelslike", value: weathernow.feelsLike },
    { label: "humidity", value: weathernow.humidity },
    { label: "wind", value: weathernow.windSpeed },
    { label: "precipitation", value: weathernow.precipitation },
  ];

  const mapWeatherCodeToText = (weather_code: number): string => {
    if (!weather_code) return "sunny";
    if ([0, 1].includes(weather_code)) return "sunny";
    if ([2, 3].includes(weather_code)) return "partly-cloudy";
    if ([45, 48].includes(weather_code)) return "overcast";
    if ([51, 53, 55, 61, 63, 65].includes(weather_code)) return "rain";
    if ([71, 73, 75].includes(weather_code)) return "snow";
    if ([95, 96, 99].includes(weather_code)) return "storm";
    return "cloudy";
  };
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
          {weathersituation.map((item, index) => (
            <div
              key={index}
              className="auto sm:w-47 bg-[hsl(243,27%,20%)] rounded-2xl flex flex-col  justify-center px-3.5"
            >
              <p>{item.label}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
        <div className=" my-4 mt-8">Daily forecast</div>

        <div className="flex items-center flex-wrap text-xs sm:text-lg justify-between overflow-x-auto  w-full gap-2">
          {weather_history.map((item, index) => (
            <div
              key={index}
              className="h-40 rounded-2xl  w-[30%] sm:w-25 bg-[hsl(243,27%,20%)] flex flex-col py-3.5 items-center"
            >
              <p>{item.dayName}</p>
              <Image
                src={`/images/icon-${mapWeatherCodeToText(Number(weathernow.weather_code))}.webp`}
                height={50}
                width={50}
                alt="rain"
              />
              <div className="flex bg-[hsl(243,27%,20%)] justify-between gap-6 mt-4 mx-2.5">
                <p>{item.min}</p>
                <p>{item.max}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
