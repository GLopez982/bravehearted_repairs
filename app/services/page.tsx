'use client'
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { ChangeEvent, FormEvent, useState } from "react";
import supabase from "../components/api/client"

interface ServiceData {
  first_name: string;
  last_name: string;
  email: string;
  service: string;
  message: string;
}

// const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kqwtcclvefodxqldijhh.supabase.co';
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON || 'sb_publishable_8p2sGu1KevPySaNpFr2JLA_13OhwK3h';


export default function Home() {

  // const supabase: SupabaseClient = createClient(supabaseURL, supabaseKey);

 
  
  const [serviceData, setServiceData] = useState<ServiceData>({
    first_name: '',
    last_name: '',
    email: '',
    service: '',
    message: ''
  });

  async function storeServiceData(serviceData: ServiceData): Promise<boolean>{
    const {data, error} = await supabase
    .from('services')
    .insert([serviceData])

    if(error){
      console.error("Error submitting the service form: ", error.message);
      return false;
    }

    console.log('Data inserted successfully', data)
    return true;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
    const {name, value} = e.target;
    setServiceData(prev => ({
      ...prev, 
      [name]: value
    }));
  };

 


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted: ', serviceData);

    const success = await storeServiceData(serviceData);
    
    if(success){
      alert("Successfully submitted service form");
      setServiceData({
        first_name: '',
        last_name: '',
        email: '',
        service: '',
        message: ''
      })
    }else{
      alert('Failed to submit service form');
    }
  }  


  

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
                 />
         </div>
       
   
         
           <main className="container mx-auto px-4 py-10">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-auto lg:h-[900px] ">
             <div className="border-2 shadow-[5px_5px_5px_#121212] bg-[#E77014] rounded-lg p-4 flex flex-col items-center justify-center min-h-[200px]">
                <h1 className="mb-16 text-shadow-lg text-shadow-[#000000] text-[25px]">Desktop Services</h1>
               <Image
                 src="/desktop-services.png"
                 alt="Missing pic"
                 width={450}
                 height={250}
                 priority
                 />
   
   
             </div>
             
             <div className="border-2 shadow-[5px_5px_5px_#121212] bg-[#E77014] rounded-lg p-4 flex flex-col items-center justify-center min-h-[200px]">
                <h1 className="mb-16 text-shadow-lg text-shadow-[#000000] text-[25px]">Laptop Services</h1>
                <Image
                
                 src="/laptop-services.png"
                 alt="Missing pic"
                 width={450}
                 height={250}
                 priority
                 />
   
             </div>
             <div className="border-2 shadow-[5px_5px_5px_#121212] bg-[#E77014] rounded-lg p-4 flex flex-col items-center justify-center min-h-[200px]">
                <h1 className="mb-16 text-shadow-lg text-shadow-[#000000] text-[25px]">Mobile/Tablet Services</h1>
                <Image
                className="lg:w-[340px]"
                 src="/mobile-services.png"
                 alt="Missing pic"
                 width={450}
                 height={250}
                 priority
                 />
   
             </div>
             </div>
           </main>
          <div className="bg-transparent w-full py-10 px-4">
        
          <div className="p-10 flex justify-center text-black ">
          <h2 className="text-center mx-auto text-[20px] text-shadow-lg text-shadow-white font-bold"> Service Order Form </h2>
        </div>

        <div className="shadow-[5px_5px_5px_#121212] hover:shadow-black border-2 border-[#EF5B1775] gap-4 w-full lg:w-[757px] h-auto lg:h-[562px] bg-[#EF5B1725] flex justify-center items-center mx-auto mb-10">
          <form onSubmit={handleSubmit} className="w-full text-black flex flex-col gap-4 p-4">
            
            <div className="flex flex-col md:flex-row gap-4 ">
              <label htmlFor="first_name" className="flex flex-col flex-1">
                First Name:
                <input
                  className="border-2 border-black bg-white text-black w-full  md:w-[344.48px] h-[56px]"
                  type="text"
                  name="first_name"
                  value={serviceData.first_name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label  className="flex flex-col flex-1">
                Last Name:
                <input
                  className="border-2 border-black bg-white text-black w-full md:w-[344.48px] h-[56px]"
                  type="text"
                  name="last_name"
                  value={serviceData.last_name}
                  onChange={handleInputChange}
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
                value={serviceData.email}
                onChange={handleInputChange}
                required
              />
            </label>

            <label  className="flex flex-col flex-1">
                Service select
                <select
                className="resize-none border-2 border-black bg-white text-black w-full  md:w-[731px] h-[60px]"
                name="service"
                onChange={handleInputChange}
                value={serviceData.service}
                required
              >
                <option value= "" disabled>Select a service option</option>
                <option value="Hardware Diagnostic & Troubleshooting">Desktop: Hardware Diagnostic & Troubleshooting</option>
                <option value="Motherboard Repair/Replacement">Desktop: Motherboard Repair/Replacement</option>
                <option value="Power Supply Unit Replacement">Desktop: Power Supply Unit Replacement</option>
                <option value="RAM Memory Upgrade/Replacement">Desktop: RAM Memory Upgrade/Replacement</option>
                <option value="Hard Drive/SSD Installation">Desktop: Hard Drive/SSD Installation</option>
                <option value="Graphics Card Installation/Repair">Desktop: Graphics Card Installation/Repair</option>
                <option value="CPU Cooling System Repair">Desktop: CPU Cooling System Repair</option>
                <option value="Operating Systemn Installation/Repair">Desktop: Operating Systemn Installation/Repair</option>
                <option value="Virus/Malware Removal & Security Setup">Desktop: Virus/Malware Removal & Security Setup</option>
                <option value="Data Recovery Services">Desktop: Data Recovery Services</option>
                <option value="Custom PC Build Consulation">Desktop: Custom PC Build Consulation</option>
                <option value="Screen/LCD Replacement">Laptop: Screen/LCD Replacement</option>
                <option value="Keyboard Replacement">Laptop: Keyboard Replacement</option>
                <option value="Battery Replacement">Laptop: Battery Replacement</option>
                <option value="Charging Port Repair">Laptop: Charging Port Repair</option>
                <option value="Trackpad/Touchpad Repair">Laptop: Trackpad/Touchpad Repair </option>
                <option value="Fan Cleaning & Overheating Fix">Laptop: Fan Cleaning & Overheating Fix</option>
                <option value="RAM/Memory Upgrade">Laptop: RAM/Memory Upgrade</option>
                <option value="Hard Drive/SSD Upgrade">Laptop: Hard Drive/SSD Upgrade</option>
                <option value="Hinge Repair/Replacement">Laptop: Hinge Repair/Replacement</option>
                <option value="WiFi/Bluetooth Module Repair">Laptop: WiFi/Bluetooth Module Repair</option>
                <option value="Liquid Damage Assessment & Repair">Laptop: Liquid Damage Assessment & Repair</option>
                <option value="Performance Optimization & Tune-up">Laptop: Performance Optimization & Tune-up</option>
                <option value="Screen/Digitizer Replacement">Mobile/Tablet: Screen/Digitizer Replacement</option>
                <option value="Battery Replacement">Mobile/Tablet: Battery Replacement</option>
                <option value="Charging Port Repair">Mobile/Tablet: Charging Port Repair</option>
                <option value="Camera Repair/Replacement">Mobile/Tablet: Camera Repair/Replacement</option>
                <option value="Speaker/Microphone Repair">Mobile/Tablet: Speaker/Microphone Repair</option>
                <option value="Home/Power Button Repair">Mobile/Tablet: Home/Power Button Repair</option>
                <option value="Water Damage Assessment & Repair">Mobile/Tablet: Water Damage Assessment & Repair</option>
                <option value="Sofwater Issues & OS Restoration">Mobile/Tablet: Sofwater Issues & OS Restoration</option>
                <option value="Data Recovery & Transfer">Mobile/Tablet: Data Recovery & Transfer </option>
                <option value="Tablet Screen Repalcement">Mobile/Tablet: Tablet Screen Repalcement</option>
                <option value="Virus/Malsware Removal">Mobile/Tablet: Virus/Malsware Removal</option>
                <option value="Device Setup & Configuration">Mobile/Tablet: Device Setup & Configuration</option>
              </select>
            </label >

             <label  className="flex flex-col flex-1">
                Service Message
                <textarea
                className="resize-none border-2 border-black bg-white text-black w-full md:w-[731px] h-[130px]"
                name="message"
                value={serviceData.message || ''}
                onChange={handleInputChange}
                required
              />
            </label >
            <div className="flex justify-center">
           <button 
            type="submit"
            className="text-white border-2 border-black bg-white cursor-pointer px-6 py-2 hover:bg-[#E77014] transition-colors bg-linear-to-r from-[#EF5B17] to-[#000000]">Submit</button>
         </div>
          </form>
         
        </div>  
           </div>
           <div className="p-10 w-full h-auto"></div>
         <Footer/>
       </div>
  );
}
