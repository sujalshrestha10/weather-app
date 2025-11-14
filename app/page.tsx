import Navbar from "./Navbar";
import Body from "./Body";


export default function Home() {
 
  return (
    <>
      <main
        className={`bg-[#050028] text-white py-8 min-h-screen overflow-hidden w-full`}
      >
        <div className="mx-auto w-[80%]">
          <Navbar />
          <Body />
        </div>
      </main>
    </>
  );
}
