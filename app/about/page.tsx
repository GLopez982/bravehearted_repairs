import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
      <NavBar />

      <main className="container mx-auto px-4 px-8 ">
        <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="border-2 shadow-[5px_5px_5px_#121212] bg-[#EF5B1725] col-span-2 col-start-1 items-center text-black w-full lg:w-[624px] h-auto lg:h-[691px] rounded-lg">
            <h1 className="ml-50 text-[40px] px-10 py-10 font-bold">
              About Me
            </h1>
            <p className="p-10 ml-5 mr-5">
              <br />
              Hello, my name is Gerry. I specialize in the repair and
              maintenance of desktop computers, laptops, and mobile devices,
              backed by a strong foundation in Information Technology and
              Software Development. <br />
              <br />
              With a detail-oriented approach and a commitment to reliable
              service, I aim to help clients resolve hardware and software
              issues efficiently and effectively.
              <br />
              <br />
              Whether your&apos;e experiencing system crashes, slow performance,
              connectivity problems, or need help with upgrades and data
              recovery, I offer personalized solutions designed to get your
              devices back in top shape.
              <br />
              <br /> My goal is to provide clear communication, honest
              diagnostics, and dependable results—so you can stay productive and
              connected.
              <br />
              <br />
              Your tech is essential. I&apos;m here to keep it working smoothly.
              <br />
            </p>
          </div>

          <div className="mt-5 flex w-full h-auto lg:w-[517px] lg:h-[663px] border-2 border-[#EF5B1750] shadow-lg shadow-[#EF5B1765] rounded-lg bg-black">
            <Image
              className=""
              src="/Me.jpg"
              alt="Next.js logo"
              width={517}
              height={663}
              priority
            />
          </div>
        </div>

        <div className="p-10 flex justify-center text-black ">
          <h2 className="text-center mx-auto text-[25px] mt-10 font-bold"> Contact me</h2>
        </div>

        <div className="shadow-lg hover:shadow-black border-2 border-[#EF5B1775] gap-4 w-full lg:w-[757px] h-auto lg:h-[562px] bg-[#EF5B1725] flex justify-center items-center mx-auto mb-10">
          <form className="w-full text-black flex flex-col gap-4 p-4">
            
            <div className="flex flex-col md:flex-row gap-4 ">
              <label className="flex flex-col flex-1">
                First Name:
                <input
                  className="border-2 border-black bg-white text-black w-full  md:w-[344.48px] h-[56px]"
                  type="text"
                  name="name"
                  required
                />
              </label>

              <label  className="flex flex-col flex-1">
                Last Name:
                <input
                  className="border-2 border-black bg-white text-black w-full md:w-[344.48px] h-[56px]"
                  type="text"
                  name="lName"
                  required
                />
              </label>
            </div>

            <label  className="flex flex-col flex-1">
              Email:
              <input
                className="border-2 border-black bg-white text-black w-full md:w-[731px] h-[63px]"
                type="text"
                name="email"
                required
              />
            </label>

            <label  className="flex flex-col flex-1">
              Your Message:
              <textarea
                className="resize-none border-2 border-black bg-white text-black w-full md:w-[731px] h-[193px]"
                name="Message"
                required
              />
            </label >
            <div className="flex justify-center">
           <button 
            type="submit"
            className="text-black border-2 border-black bg-white cursor-pointer px-6 py-2 hover:bg-[#E77014] transition-colors">Submit</button>
         </div>
          </form>
         
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
