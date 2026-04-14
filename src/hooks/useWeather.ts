import { useState, useEffect } from "react";
import { useLonlat } from "./lon_lat";
import { WeatherNow, WeatherDay } from "../types/weather";

export function useWeather() {
  const [weathernow, setWeathernow] = useState<WeatherNow>({
    temp: "",
    feelsLike: "",
    humidity: "",
    windSpeed: "",
    precipitation: "",
  });
  const [hourlyweather, setHourlyweather] = useState([
    { time: "", timeunits: "", image: "", hourly_temp: "", weather_code: "" },
  ]);
 
  const [weather_history, setWeather_history] = useState<WeatherDay[]>([]);
  const { coord } = useLonlat();

  const mapWeatherCodeToText = (weather_code: number) => {
    if (!weather_code) return "sunny";
    if ([0, 1].includes(weather_code)) return "sunny";
    if ([2, 3].includes(weather_code)) return "partly-cloudy";
    if ([45, 48].includes(weather_code)) return "overcast";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weather_code))
      return "rain";
    if ([71, 73, 75].includes(weather_code)) return "snow";
    if ([95, 96, 99].includes(weather_code)) return "storm";
  };

  useEffect(() => {
    if (!coord) return;

    const lon = coord.lon;
    const lat = coord.lat;

    async function fetchweathernow() {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&past_days=6&forecast_days=1&daily=temperature_2m_min,weathercode,temperature_2m_max&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,precipitation,weather_code`,
      );

      const data = await res.json();
     
      console.log(data);


      setWeathernow({
        temp: data.current.temperature_2m,
        feelsLike: data.hourly.apparent_temperature[0],
        humidity: data.hourly.relative_humidity_2m[0],
        windSpeed: data.hourly.wind_speed_10m[0],
        
        precipitation: data.hourly.precipitation[0],
      });

      setWeather_history(
        data.daily.time.slice(-7).map((date: string, index: number) => ({
          date: date,
          min: data.daily.temperature_2m_min[index],
          max: data.daily.temperature_2m_max[index],
          dayName: new Date(date).toLocaleDateString("en-US",  {
            weekday: "short",
          }),
          weather_code: data.daily.weathercode[index],
        })),
      );

      setHourlyweather(
        data.hourly.time.slice(-7).map((time: string, index: number) => {
          const formattedtime = new Date(time).toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true,
          });

          return {
            time: time,
            timeunits: formattedtime,
            image: "",
            hourly_temp: data.hourly.temperature_2m[index],
            weather_code: data.hourly.weather_code[index],
          };
        }),
      );
    }
    fetchweathernow();
  }, [coord]);

  return { weathernow, weather_history, hourlyweather, mapWeatherCodeToText };
}
