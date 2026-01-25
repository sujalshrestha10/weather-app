import Maincard2 from "../components/ui/3maincard/maincard2";
import Logo from "../components/ui/1nav/logo";
import UnitsComponents from "../components/ui/1nav/units_button_components";
import SearchInput from "../components/ui/2.searchingpart/SearchInput";

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
          <SearchInput />
          <div className="flex  flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap gap-5 justify-between my-5  ">
            <Maincard2 />
          </div>
        </div>
      </main>
    </>
  );
}
