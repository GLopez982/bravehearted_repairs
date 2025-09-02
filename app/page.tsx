import Image from "next/image";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    
    <div className="bg-[#CBC9C6] font-sans min-h-screen">
      <NavBar/>
      <div className="w-full h-auto lg:h-[375px] bg-linear-to-r from-red-100 to-blue-500">

              <Image
              src="/globe.svg"
              alt="Missing pic"
              width={250}
              height={250}
              priority
              ></Image>
      </div>
       
        <main className="container grid grid-cols-1 lg:grid-cols-6 gap-4 bg-transparent">
          <div className="col-span-1 col-start-1 md:col-span-2 bg-black">
            <Image
              src="/globe.svg"
              alt="Missing pic"
              width={250}
              height={250}
              priority
              ></Image>


          </div>
          
          <div className="col-span-1 col-start-1 md:col-span-2 bg-black">
             <Image
              src="globe.svg"
              alt="Missing pic"
              width={250}
              height={250}
              priority
              ></Image>

          </div>
          <div className="col-span-1 col-start-1 md:col-span-2 bg-black">
             <Image
              src="file.svg"
              alt="Missing pic"
              width={250}
              height={250}
              priority
              ></Image>

          </div>
        </main>
       <div className="bg-black w-full h-[180px] flex items-center justify-center  ">
          <div className="text-black text-3xl bg-white w-[624px] h-[76px] gap-4 flex items-center justify-center border-4 border-indigo-500">Testimonials</div>
        </div>
        
      <Footer></Footer>
    </div>
  );
}
