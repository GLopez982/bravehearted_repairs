import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
         <NavBar/>
         <div className="w-full h-auto lg:h-[375px] bg-linear-to-r from-red-100 to-blue-500">
   
                 <Image
                 className="w-full h-full object-cover "
                 src="/techLogoGL.png"
                 alt="Missing pic"
                 width={250}
                 height={250}
                 priority
                 ></Image>
         </div>
       
   
         
           <main className="container mx-auto px-4 py-10">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="shadow-[5px_5px_5px_#121212] bg-black rounded-lg p-4 flex items-center justify-center min-h-[200px]">
               <Image
                 src="/globe.svg"
                 alt="Missing pic"
                 width={550}
                 height={250}
                 priority
                 ></Image>
   
   
             </div>
             
             <div className="shadow-[5px_5px_5px_#121212] bg-black rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                <Image
                 src="/globe.svg"
                 alt="Missing pic"
                 width={550}
                 height={250}
                 priority
                 ></Image>
   
             </div>
             <div className="shadow-[5px_5px_5px_#121212] bg-black rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                <Image
                 src="/file.svg"
                 alt="Missing pic"
                 width={550}
                 height={250}
                 priority
                 ></Image>
   
             </div>
             </div>
           </main>
          <div className="bg-transparent w-full py-10 px-4">
        
          <div className="p-10 flex justify-center text-black ">
          <h2 className="text-center mx-auto "> Service Order Form </h2>
        </div>

        <div className="shadow-[5px_5px_5px_#121212] hover:shadow-black border-2 border-[#EF5B1775] gap-4 w-full lg:w-[757px] h-auto lg:h-[562px] bg-[#EF5B1725] flex justify-center items-center mx-auto mb-10">
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
                Service Message
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
           </div>
           <div className="p-10 w-full h-auto"></div>
         <Footer></Footer>
       </div>
  );
}
