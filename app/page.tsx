import Image from "next/image";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    /* */
    <div className="bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
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
    

      
        <main className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1">
            <h2 className="flex justify-center text-black font-bold text-[30px] p-10 ">BraveHearted Repairs.....We bring life back to your technology!</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#00000075] border-2 border-[#E77014] rounded-lg p-4 min-h-[200px]">
            
            <Image
              className="w-full h-full object-cover"
              src="/desktop.png"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              ></Image>
              <div className="p-4 text-center text-black text-[25px]">
                <figcaption>Bravehearted Repairs also offers custom PC Builds</figcaption> 
              </div>
              
          </div>

          
          
          <div className="bg-[#00000075] border-2 border-[#E77014] rounded-lg p-4 min-h-[200px]">
             <Image
              className="w-full h-full object-cover"
              src="/laptop.png"
              alt="Missing pic"
              width={650}
              height={250}
              priority
              ></Image>
               <div className="p-4 text-center text-black text-[25px]">
                <figcaption>We have certified repair technicians on site for any laptop</figcaption> 
              </div>
              

          </div>
          <div className="border-2 border-[#E77014] bg-black rounded-lg p-4 flex items-center justify-center min-h-[200px]">
             <Image
              src="/file.svg"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />

          </div>
          </div>
        </main>
       


       <div className="bg-transparent w-full py-10 px-4">
        <div className="flex items-center justify-center">
          <div className="mt-25 text-black text-xl bg-white w-[624px] h-[76px] gap-4 flex items-center justify-center border-4 border-[#E77014] font-bold text-[25px]">Testimonials</div>
        </div>
        </div>

        
        <div className="container mx-auto px-4 py-10">
          <div className="pb-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">


            <div className="bg-white border-2 rounded-lg p-6 min-h-[300px] flex items-center justify-center shadow-md">
              <div className="text-center text-black">
              <Image
              src="/file.svg"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
                Test1
              </div>
            </div>
          
            <div className="bg-white border-2 rounded-lg p-6 min-h-[300px] flex items-center justify-center shadow-md">
              <div className="text-center text-black">
                <Image
              src="/file.svg"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
                Test2
              </div>
            </div>


            <div className="bg-white border-2 rounded-lg p-6 min-h-[300px] flex items-center justify-center shadow-md">
              <div className="text-center text-black">
                <Image
              src="/file.svg"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
                Test3
              </div>
            </div>


            <div className="pb-10 bg-white border-2 rounded-lg p-6 min-h-[300px] flex items-center justify-center shadow-md">
              <div className="text-center text-black">
                <Image
              src="/file.svg"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
                Test4
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}
