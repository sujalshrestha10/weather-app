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

  const [weather_history, setWeather_history] = useState<WeatherDay[]>([]);
  const { coord } = useLonlat();

  useEffect(() => {
    if (!coord) return;

    const lon = coord.lon;
    const lat = coord.lat;

    async function fetchweathernow() {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&past_days=7&forecast_days=1&daily=temperature_2m_min,temperature_2m_max&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,precipitation`
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
        data.daily.time.slice(1, 3).map((date: string, index: number) => ({
          date: date,
          min: data.daily.temperature_2m_min[index],
          max: data.daily.temperature_2m_max[index],
          dayName: new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
          }),
        }))
      );
    }
    fetchweathernow();
  }, [coord]);
  return { weathernow, weather_history };
}
