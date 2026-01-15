"use client";
import Image from "next/image";
export default function Units_button() {
  return (
    <>
      <Image
        src="/images/icon-units.svg"
        alt="setting"
        height={15}
        width={15}
      />
      <p>Units</p>
      <Image
        src="/images/icon-dropdown.svg"
        alt="setting"
        height={15}
        width={15}
      />
    </>
  );
}
