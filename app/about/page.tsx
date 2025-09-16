// "use client"
import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
// import { useState } from "react";


// interface FormData{
//     firstName: string;
//     lastName: string;
//     email: string;
//     message: string;
//   }

export default function Home() {

//   //form data variable to store form input in formData and function setFormData used for updating values
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   });


//   //isSubmitting variable used to track if form is being submitted. startes in false value, setIsSubmitting used to update value.
//   const [isSubmitting, setIsSubmitting] =  useState<boolean>(false);

//   //submitMessage used to hold error message or success message of form submittion, function setSubmitMessage used to update value.
//   const [submitMessage, setSubmitMessage] = useState<string>('');

//   //
//   const handleInputChange = (e: React.ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) =>  {
//     const {name, value} = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage('');
  
//     try{
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), 
//       });

//       if(response.ok){
//         setSubmitMessage('Message sent successfully!')
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           message: ''
//         });
//       }else{
//         setSubmitMessage("Message failed, please try again in a few seconds");
//       }
//     }catch(error: unknown){
//       console.log(error);
//       setSubmitMessage('Error Sending Message. Please try again');
//     }finally{
//       setIsSubmitting(false)
//     }  
//   };

  return (
    <div className="bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
      <NavBar />

      <main className="container mx-auto px-4 px-8 ">
        <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="border-2 shadow-[5px_5px_5px_#121212] bg-[#EF5B1725] col-span-2 col-start-1 items-center text-black w-full lg:w-[624px] h-auto lg:h-[691px] rounded-lg">
            <h1 className="ml-20 lg:ml-50 text-[40px] py-4 py-5 lg:px-10 lg:py-10 font-bold">
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

          <div className="mt-5 flex w-full h-auto lg:w-[517px] lg:h-[663px] border-2 border-[#EF5B1750] shadow-lg shadow-[#000000] rounded-lg bg-black">
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

        <div className="shadow-lg shadow-black hover:shadow-white focus:shadow-white border-2 border-[#EF5B1775] gap-4 w-full lg:w-[757px] h-auto lg:h-[562px] bg-[#EF5B1725] flex justify-center items-center mx-auto mb-10">
          <form  className="w-full text-black flex flex-col gap-4 p-4">
           
                      <div className="flex flex-col md:flex-row gap-4 ">
              <label className="flex flex-col flex-1">
                First Name:
                <input
                  className="border-2 border-black bg-white text-black w-full  md:w-[344.48px] h-[40px]"
                  type="text"
                  name="firstName"
                  // value={formData.firstName}
                  // onChange={handleInputChange}
                  required
                />
              </label>

              <label  className="flex flex-col flex-1">
                Last Name:
                <input
                  className="border-2 border-black bg-white text-black w-full md:w-[344.48px] h-[40px]"
                  type="text"
                  name="lastName"
                  // value={formData.lastName}
                  // onChange={handleInputChange}
                  required
                />
              </label>
            </div>

            <label  className="flex flex-col flex-1">
              Email:
              <input
                className="border-2 border-black bg-white text-black w-full md:w-[731px] h-[50px]"
                type="text"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                required
              />
            </label>

            <label  className="flex flex-col flex-1">
              Your Message:
              <textarea
                className="resize-none border-2 border-black bg-white text-black w-full md:w-[731px] h-[193px]"
                name="message"
                // value={formData.message}
                // onChange={handleInputChange}
                required
              />
            </label >
            <div className="flex justify-center">
           <button 
            type="submit" 
            // disabled={isSubmitting}
            className="text-white border-2 border-black bg-white cursor-pointer px-6 py-2 hover:bg-[#E77014] transition-colors bg-linear-to-r from-[#EF5B17] to-[#000000]">Submit
            {/* {isSubmitting ? 'Sending....' : 'Submit'} */}
            </button>
         </div>
          </form>
         
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
