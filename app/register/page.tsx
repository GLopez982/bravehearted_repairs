import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
      <NavBar />

      <main className="container mx-auto px-4 px-8 ">
        <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex justify-center border-2 shadow-[5px_5px_5px_#121212] bg-[#EF5B1725] col-span-2 col-start-1 items-center text-black w-full lg:w-[624px] h-auto lg:h-[613px] rounded-lg">
              <Image
              src="/heart_repairs.png"
              alt="Next.js logo"
              width={500}
              height={400}
              priority
            />
          </div>

          <div className="mt-5 flex w-auto h-auto lg:w-[417px] lg:h-[678px] border-2 border-[#EF5B1750] shadow-lg shadow-[#EF5B1765] rounded-lg bg-black">
            <Image
              className=""
              src="/file.svg"
              alt="Next.js logo"
              width={517}
              height={663}
              priority
            />
          </div>
        </div>

       </main>
      <div className="flex pt-90">
      <Footer/></div>
    </div>
  );
}
