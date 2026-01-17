"use client";
import { useState, useEffect } from "react";
import { useLonlat } from "./lon_lat";

export function useGeolocation() {
  const [city, setCity] = useState("");
  const { coord } = useLonlat();

  useEffect(() => {
    if (!coord) return;
    const lat = coord.lat;
    const lon = coord.lon;
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
  }, [coord]);

  return { city, setCity };
}
