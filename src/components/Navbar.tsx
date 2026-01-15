"use client";
import Logo from "./ui/logo";
import UnitsComponents from "./ui/units_button_components";
export default function Navbar() {
  return (
    <>
      <div className=" flex  items-center  justify-between ">
        <Logo />
        <UnitsComponents />
      </div>
    </>
  );
}
