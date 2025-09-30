import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className=" bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
      <NavBar />

      <main className="container mx-auto px-4 px-8 ">
        <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex justify-center border-2 shadow-[5px_5px_5px_#121212] bg-[#EF5B1725] col-span-2 col-start-1 items-center text-black w-full lg:w-[624px] h-auto lg:h-[613px] rounded-lg">
              <Image
              src="/circuit-heart.png"
              alt="Next.js logo"
              width={500}
              height={400}
              priority
            />
          </div>


          <div className="mt-5 flex w-auto h-auto lg:w-[417px] lg:h-[678px] border-2 border-[#EF5B1750] shadow-lg shadow-[#000000] hover:shadow-[#EF5B1765] rounded-lg bg-[#EF5B1725] ">
            
            <form className="flex flex-col items-center">
              <h1 className="text-[20px] font-bold bg-linear-to-r from-[#EF5B17] to-[#000000] bg-clip-text text-transparent p-10">Register Now!</h1>
              <div className="p-10">
              <label  className="flex flex-col flex-1 text-black gap-2">
              First Name:
              <input
                className="border-2 border-black text-black w-full lg:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="firstName"
                required
              />
            </label>
             <label  className="flex flex-col flex-1 text-black gap-2">
              Last Name:
              <input
                className="border-2 border-black text-black w-full lg:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="lastName"
                required
              />
            </label>
            <label  className="flex flex-col flex-1 text-black gap-2">
              UserName:
              <input
                className="border-2 border-black text-black w-full md:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="username"
                required
              />
            </label>
            <label  className="flex flex-col flex-1 text-black gap-2">
              Email:
              <input
                className="border-2 border-black text-black w-full md:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="email"
                required
              />
            </label>
            <label  className="flex flex-col flex-1 text-black gap-2">
              Password:
              <input
                className="border-2 border-black text-black w-full md:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="password"
                required
              />
            </label>
            </div>
            <button className="flex flex-col border-2 border-black text-white rounded-[5px] shadow-lg shadow-white mb-10 lg:mb-0 ml-1 lg:ml-0 bg-linear-to-r from-[#EF5B17] to-[#000000] w-auto h-auto lg:w-[300px]">Register</button>
            </form>
          </div>
        </div>

       </main>
      
      <Footer/>
    </div>
  );
}
