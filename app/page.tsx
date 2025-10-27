import Image from "next/image";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    /* */
    <div className="bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
      <NavBar/>
      <div className="w-full h-auto lg:h-[375px] bg-linear-to-r from-red-100 to-blue-500 flex items-center justify-center">

              <Image
              className="w-full h-full sm:object-contain lg:object-fill [image-rendering:high-quality] [image-rendering:-moz-crisp-edges]"
              src="/braveLogo.png"
              alt="Missing pic"
              width={250}
              height={250}
              priority
              />
      </div>
    

      
        <main className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1">
            <h2 className="flex justify-center font-bold text-[30px] p-10 bg-linear-to-r from-[#EF5B17] to-[#000000] bg-clip-text text-transparent">BraveHeart Repairs.....We bring life back to your technology!</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 lg:gap-4">
          <div className="shadow-[5px_5px_5px_#121212] bg-[#00000075] border-2 border-[#E77014] rounded-lg p-4 min-h-[200px]">
            
            <Image
              className="w-full h-full object-cover"
              src="/desktop.png"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
              <div className="p-4 text-center text-black text-[25px] ">
                <figcaption className=" mt-5 mb-5">Braveheart Repairs also offers custom PC Builds</figcaption> 
              </div>
              
          </div>

          
          
          <div className="shadow-[5px_5px_5px_#121212] bg-[#00000075] border-2 border-[#E77014] rounded-lg p-4 min-h-[200px]">
             <Image
              className="w-full h-full object-cover"
              src="/laptop.png"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
               <div className="p-4 text-center text-black text-[25px]">
                <figcaption className="mt-5 mb-5">We have certified repair technicians on site for any laptop</figcaption> 
              </div>
              

          </div>
          <div className="shadow-[5px_5px_5px_#121212] bg-[#00000075] border-2 border-[#E77014] rounded-lg p-4 min-h-[200px]">
             <Image
              className="w-full h-full object-cover"
              src="/tablet-repair.jpg"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              /> 
              <div className="p-4 text-center text-black text-[25px]">
                <figcaption className="mt-5 mb-5">We service all mobile and tablet devices</figcaption> 
              </div>

          </div>
              
          </div>
        </main>
       


       <div className="bg-transparent w-full py-10 px-4">
        <div className="flex items-center justify-center">
          <div className="shadow-[5px_5px_5px_#121212] mt-25 text-black bg-white w-full h-auto lg:w-[624px] lg:h-[76px] gap-4 flex items-center justify-center border-4 border-[#E77014] font-bold text-[25px] rounded-[5px]">Testimonials</div>
        </div>
        </div>

        
        <div className="container mx-auto px-4 py-10">
          <div className="pb-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">


            <div className="bg-white border-2 border-black shadow-[5px_5px_5px_#121212] bg-white border-2 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
              <div className="text-center text-black">
              <Image
              className="blur-sm opacity-50 hover:opacity-100 hover:blur-none focus:blur-none focus:opacity-100 active:blur-none active:opacity-100 transition-all duration-300"
              src="/david_L_testimonial.png"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
              </div>
            </div>
          
            <div className="bg-white border-2 border-black shadow-[5px_5px_5px_#121212] bg-white border-2 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
              <div className="text-center text-black">
                <Image
              className="blur-sm opacity-50 hover:opacity-100 hover:blur-none focus:blur-none focus:opacity-100 active:blur-none active:opacity-100 transition-all duration-300"
              src="/Emily_S_testimonial.png"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
              </div>
            </div>


            <div className="bg-white border-2 border-black shadow-[5px_5px_5px_#121212] rounded-lg p-6 min-h-[300px] flex items-center justify-center ">
              <div className="text-center text-black">
                <Image
              className="blur-sm opacity-50 hover:opacity-100 hover:blur-none focus:blur-none focus:opacity-100 active:blur-none active:opacity-100 transition-all duration-300"
              src="/John_M_Testimonial.png"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
              </div>
            </div>


            <div className="pb-10 bg-white border-2 border-black shadow-[5px_5px_5px_#121212] bg-white border-2 rounded-lg p-6 min-h-[300px] flex items-center justify-center" >
              <div className="text-center text-black">
                <Image
              className="blur-sm opacity-50 hover:opacity-100 hover:blur-none focus:blur-none focus:opacity-100 active:blur-none active:opacity-100 transition-all duration-300"
              src="/Sarah_W_testimonial.png"
              alt="Missing pic"
              width={550}
              height={250}
              priority
              />
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}
