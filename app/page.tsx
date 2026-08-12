import Image from "next/image";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
      <NavBar/>

      {/* Hero Banner */}
      <div className="w-full h-[250px] lg:h-[375px] bg-linear-to-br from-[#1a0800] via-[#0f0400] to-black flex items-center justify-center overflow-hidden">
        <Image
          className="w-full h-full sm:object-contain lg:object-fill [image-rendering:high-quality]"
          src="/braveLogo1.png"
          alt="BraveHeart Repairs banner"
          width={250}
          height={250}
          priority
        />
      </div>

      <main className="container mx-auto px-4 py-10">
        <div className="mb-10">
          <h2 className="text-center font-bold text-[26px] lg:text-[30px] bg-linear-to-r from-[#EF5B17] to-[#000000] bg-clip-text text-transparent leading-tight">
            BraveHeart Repairs.....We bring life back to your technology!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_20px_#E77014] bg-[#00000075] border-2 border-[#E77014] rounded-lg p-4 min-h-[200px] transition-all duration-300 hover:-translate-y-1">
            <Image
              className="w-full h-full object-cover rounded"
              src="/desktop.png"
              alt="Custom PC Build"
              width={550}
              height={250}
              priority
            />
            <div className="p-4 text-center">
              <figcaption className="text-white text-lg font-medium mt-4 mb-4">
                Braveheart Repairs also offers custom PC Builds
              </figcaption>
            </div>
          </div>

          <div className="shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_20px_#E77014] bg-[#00000075] border-2 border-[#E77014] rounded-lg p-4 min-h-[200px] transition-all duration-300 hover:-translate-y-1">
            <Image
              className="w-full h-full object-cover rounded"
              src="/laptop.png"
              alt="Laptop Repair"
              width={550}
              height={250}
              priority
            />
            <div className="p-4 text-center">
              <figcaption className="text-white text-lg font-medium mt-4 mb-4">
                We have certified repair technicians on site for any laptop
              </figcaption>
            </div>
          </div>

          <div className="shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_20px_#E77014] bg-[#00000075] border-2 border-[#E77014] rounded-lg p-4 min-h-[200px] transition-all duration-300 hover:-translate-y-1">
            <Image
              className="w-full h-full object-cover rounded"
              src="/tablet-repair.jpg"
              alt="Mobile and Tablet Repair"
              width={550}
              height={250}
              priority
            />
            <div className="p-4 text-center">
              <figcaption className="text-white text-lg font-medium mt-5 mb-5">
                We service all mobile and tablet devices
              </figcaption>
            </div>
          </div>

        </div>
      </main>

      {/* Testimonials */}
      <div className="w-full py-8 px-4">
        <div className="flex items-center justify-center">
          <div className="shadow-[5px_5px_8px_#121212] text-black bg-white w-full lg:w-[624px] h-[76px] flex items-center justify-center border-4 border-[#E77014] font-bold text-[25px] rounded-[5px]">
            Testimonials
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="bg-white border-2 border-black shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_16px_#E77014] rounded-lg p-6 min-h-[300px] flex items-center justify-center transition-shadow duration-300">
            <div className="text-center">
              <Image
                className="blur-sm opacity-50 hover:opacity-100 hover:blur-none focus:blur-none focus:opacity-100 active:blur-none active:opacity-100 transition-all duration-300"
                src="/david_L_testimonial.png"
                alt="David L. testimonial"
                width={550}
                height={250}
                priority
              />
            </div>
          </div>

          <div className="bg-white border-2 border-black shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_16px_#E77014] rounded-lg p-6 min-h-[300px] flex items-center justify-center transition-shadow duration-300">
            <div className="text-center">
              <Image
                className="blur-sm opacity-50 hover:opacity-100 hover:blur-none focus:blur-none focus:opacity-100 active:blur-none active:opacity-100 transition-all duration-300"
                src="/Emily_S_testimonial.png"
                alt="Emily S. testimonial"
                width={550}
                height={250}
                priority
              />
            </div>
          </div>

          <div className="bg-white border-2 border-black shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_16px_#E77014] rounded-lg p-6 min-h-[300px] flex items-center justify-center transition-shadow duration-300">
            <div className="text-center">
              <Image
                className="blur-sm opacity-50 hover:opacity-100 hover:blur-none focus:blur-none focus:opacity-100 active:blur-none active:opacity-100 transition-all duration-300"
                src="/John_M_Testimonial.png"
                alt="John M. testimonial"
                width={550}
                height={250}
                priority
              />
            </div>
          </div>

          <div className="bg-white border-2 border-black shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_16px_#E77014] rounded-lg p-6 min-h-[300px] flex items-center justify-center transition-shadow duration-300">
            <div className="text-center">
              <Image
                className="blur-sm opacity-50 hover:opacity-100 hover:blur-none focus:blur-none focus:opacity-100 active:blur-none active:opacity-100 transition-all duration-300"
                src="/Sarah_W_testimonial.png"
                alt="Sarah W. testimonial"
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