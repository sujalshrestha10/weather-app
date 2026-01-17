"use client";
import { location } from "../types/location";
import { useEffect, useState } from "react";

export function useLonlat() {
  const [coord, setCoord] = useState<location | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      setCoord({ lat, lon });
    });
  }, []);
  return { coord };
}
