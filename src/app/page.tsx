import Body from "../components/Body";
import Logo from "../components/ui/nav/logo";
import UnitsComponents from "../components/ui/nav/units_button_components";

export default function Home() {
  return (
    <>
      <main
        className={`bg-[#050028] text-white py-8 min-h-screen overflow-hidden w-full`}
      >
        <div className="mx-auto w-[80%]">
          <div className=" flex  items-center  justify-between ">
            <Logo />
            <UnitsComponents />
          </div>
          <Body />
        </div>
      </main>
    </>
  );
}
