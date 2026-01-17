export type WeatherNow = {
  temp: number | string;
  feelsLike: number | string;
  humidity: number | string;
  windSpeed: number | string;
  precipitation: number | string;
};
export type WeatherDay = {
  date: string;
  min: number;
  max: number;
  dayName: string;
};
