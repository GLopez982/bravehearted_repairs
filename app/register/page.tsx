'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";


interface FormData {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kqwtcclvefodxqldijhh.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON || 'sb_publishable_8p2sGu1KevPySaNpFr2JLA_13OhwK3h'

export default function Home() {

  const supabase: SupabaseClient = createClient(
      supabaseURL,
      supabaseKey
  );

  
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  });

  async function storeFormData(formData: FormData): Promise<boolean>  {
    const {data, error} = await supabase
    .from('users')
    .insert([formData])

    if(error){
      console.error('Error submitting the form:', error.message);
      return false;
    }

    console.log('Data inserted successfully: ', data);
    return true;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev, 
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted: ', formData);

    const success = await storeFormData(formData);

    if(success){
      alert("Form submitted successfully");
      setFormData({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
      });
    }else{
      alert("Form failed to submit!");
    }
  }


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


          <div className="mt-5 flex w-auto h-auto lg:w-[417px] lg:h-[679px] border-2 border-[#EF5B1750] shadow-lg shadow-[#000000] hover:shadow-[#EF5B1765] rounded-lg bg-[#EF5B1725] ">
            
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <h1 className="text-[20px] font-bold bg-linear-to-r from-[#EF5B17] to-[#000000] bg-clip-text text-transparent p-10">Register Now!</h1>
              <div className="p-10">
              <label  className="flex flex-col flex-1 text-black gap-2">
              First Name:
              <input
                className="border-2 border-black text-black w-full lg:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </label>
             <label  className="flex flex-col flex-1 text-black gap-2">
              Last Name:
              <input
                className="border-2 border-black text-black w-full lg:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label  className="flex flex-col flex-1 text-black gap-2">
              UserName:
              <input
                className="border-2 border-black text-black w-full md:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </label>
            <label  className="flex flex-col flex-1 text-black gap-2">
              Email:
              <input
                className="border-2 border-black text-black w-full md:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label  className="flex flex-col flex-1 text-black gap-2">
              Password:
              <input
                className="border-2 border-black text-black w-full md:w-[308px] md:h-[25px] bg-[#FFFFFF80]"
                type="text"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </label>
            </div>
            <button type='submit' className="flex flex-col border-2 border-black text-white rounded-[5px] shadow-lg shadow-white mb-10 lg:mb-0 ml-1 lg:ml-0 bg-linear-to-r from-[#EF5B17] to-[#000000] w-auto h-auto lg:w-[300px]">Register</button>
            </form>
          </div>
        </div>

       </main>
      
      <Footer/>
    </div>
  );
}
