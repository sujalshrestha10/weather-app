"use client";
import Image from "next/image";
export default function Logo() {
  return (
    <Image
      onClick={() => window.location.reload()}
      className=" h-6 sm:h-12 "
      src="/images/logo.svg"
      alt="weather"
      height={150}
      width={150}
    />
  );
}
