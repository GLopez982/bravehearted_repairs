"use client";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import supabase from "../components/api/client";

interface ServiceData {
  first_name: string;
  last_name: string;
  email: string;
  service: string;
  message: string;
}

export default function Home() {
  const [serviceData, setServiceData] = useState<ServiceData>({
    first_name: "",
    last_name: "",
    email: "",
    service: "",
    message: "",
  });

  async function storeServiceData(serviceData: ServiceData): Promise<boolean> {
    const { data, error } = await supabase
      .from("services")
      .insert([serviceData]);

    if (error) {
      console.error("Error submitting the service form: ", error.message);
      return false;
    }

    console.log("Data inserted successfully", data);
    return true;
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setServiceData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted: ", serviceData);

    const success = await storeServiceData(serviceData);

    if (success) {
      alert("Successfully submitted service form");
      setServiceData({
        first_name: "",
        last_name: "",
        email: "",
        service: "",
        message: "",
      });
    } else {
      alert("Failed to submit service form");
    }
  };

  return (
    <div className="bg-[#CBC9C6] font-sans min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Hero Banner */}
      <div className="w-full h-[250px] lg:h-[375px] bg-linear-to-br from-[#1a0800] via-[#0f0400] to-black flex items-center justify-center overflow-hidden">
        <Image
          className="w-full h-full sm:object-contain lg:object-fill [image-rendering:high-quality]"
          src="/techLogoBR.png"
          alt="Service logo of a heart with company name"
          width={500}
          height={550}
          priority
        />
      </div>

      {/* Service Cards */}
      <main className="container mx-auto px-4 py-10">
        <div className="mb-8 text-center">
          <h2 className="text-[22px] lg:text-[28px] font-bold bg-linear-to-r from-[#EF5B17] to-[#000000] bg-clip-text text-transparent leading-tight">
            What We Fix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="border-2 shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_20px_#E77014] bg-[#E77014] rounded-lg p-6 flex flex-col items-center gap-6 transition-all duration-300 hover:-translate-y-1">
            <h2 className="service-heading text-[26px] lg:text-[30px] text-center">
              Desktop Services
            </h2>
            <Image
              src="/desktop-services.png"
              alt="Desktop repair services"
              width={450}
              height={250}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="border-2 shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_20px_#E77014] bg-[#E77014] rounded-lg p-6 flex flex-col items-center gap-6 transition-all duration-300 hover:-translate-y-1">
            <h2 className="service-heading text-[26px] lg:text-[30px] text-center">
              Laptop Services
            </h2>
            <Image
              src="/laptop-services.png"
              alt="Laptop repair services"
              width={450}
              height={250}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="border-2 shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_20px_#E77014] bg-[#E77014] rounded-lg p-6 flex flex-col items-center gap-6 transition-all duration-300 hover:-translate-y-1">
            <h2 className="service-heading text-[26px] lg:text-[30px] text-center">
              Mobile / Tablet Services
            </h2>
            <Image
              src="/mobile-services.png"
              alt="Mobile and tablet repair services"
              width={450}
              height={250}
              className="w-full h-auto"
              priority
            />
          </div>

        </div>
      </main>

      {/* Service Order Form */}
      <section className="container mx-auto px-4 pb-12">
        <div className="mb-8 text-center">
          <h2 className="text-[22px] lg:text-[26px] font-bold text-black">
            Service Order Form
          </h2>
        </div>

        <div className="shadow-[5px_5px_8px_#121212] hover:shadow-[5px_5px_16px_#1a0800] border-2 border-[#EF5B1775] bg-[#EF5B1725] w-full max-w-[757px] mx-auto rounded-lg p-6 mb-10 transition-shadow duration-300">
          <form
            onSubmit={handleSubmit}
            className="w-full text-black flex flex-col gap-5"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <label htmlFor="first_name" className="flex flex-col flex-1 gap-1 font-medium">
                First Name
                <input
                  id="first_name"
                  className="border-2 border-black bg-white text-black w-full h-[52px] px-3 rounded focus:outline-none focus:border-[#E77014]"
                  type="text"
                  name="first_name"
                  value={serviceData.first_name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label className="flex flex-col flex-1 gap-1 font-medium">
                Last Name
                <input
                  className="border-2 border-black bg-white text-black w-full h-[52px] px-3 rounded focus:outline-none focus:border-[#E77014]"
                  type="text"
                  name="last_name"
                  value={serviceData.last_name}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>

            <label className="flex flex-col gap-1 font-medium">
              Email
              <input
                className="border-2 border-black bg-white text-black w-full h-[52px] px-3 rounded focus:outline-none focus:border-[#E77014]"
                type="email"
                name="email"
                value={serviceData.email}
                onChange={handleInputChange}
                required
              />
            </label>

            <label className="flex flex-col gap-1 font-medium">
              Select a Service
              <select
                className="border-2 border-black bg-white text-black w-full h-[52px] px-3 rounded focus:outline-none focus:border-[#E77014]"
                name="service"
                onChange={handleInputChange}
                value={serviceData.service}
                required
              >
                <option value="" disabled>
                  Select a service option
                </option>
                <option value="Hardware Diagnostic & Troubleshooting">
                  Desktop: Hardware Diagnostic &amp; Troubleshooting
                </option>
                <option value="Motherboard Repair/Replacement">
                  Desktop: Motherboard Repair/Replacement
                </option>
                <option value="Power Supply Unit Replacement">
                  Desktop: Power Supply Unit Replacement
                </option>
                <option value="RAM Memory Upgrade/Replacement">
                  Desktop: RAM Memory Upgrade/Replacement
                </option>
                <option value="Hard Drive/SSD Installation">
                  Desktop: Hard Drive/SSD Installation
                </option>
                <option value="Graphics Card Installation/Repair">
                  Desktop: Graphics Card Installation/Repair
                </option>
                <option value="CPU Cooling System Repair">
                  Desktop: CPU Cooling System Repair
                </option>
                <option value="Operating System Installation/Repair">
                  Desktop: Operating System Installation/Repair
                </option>
                <option value="Virus/Malware Removal & Security Setup">
                  Desktop: Virus/Malware Removal &amp; Security Setup
                </option>
                <option value="Data Recovery Services">
                  Desktop: Data Recovery Services
                </option>
                <option value="Custom PC Build Consultation">
                  Desktop: Custom PC Build Consultation
                </option>
                <option value="Screen/LCD Replacement">
                  Laptop: Screen/LCD Replacement
                </option>
                <option value="Keyboard Replacement">
                  Laptop: Keyboard Replacement
                </option>
                <option value="Battery Replacement">
                  Laptop: Battery Replacement
                </option>
                <option value="Charging Port Repair">
                  Laptop: Charging Port Repair
                </option>
                <option value="Trackpad/Touchpad Repair">
                  Laptop: Trackpad/Touchpad Repair
                </option>
                <option value="Fan Cleaning & Overheating Fix">
                  Laptop: Fan Cleaning &amp; Overheating Fix
                </option>
                <option value="RAM/Memory Upgrade">
                  Laptop: RAM/Memory Upgrade
                </option>
                <option value="Hard Drive/SSD Upgrade">
                  Laptop: Hard Drive/SSD Upgrade
                </option>
                <option value="Hinge Repair/Replacement">
                  Laptop: Hinge Repair/Replacement
                </option>
                <option value="WiFi/Bluetooth Module Repair">
                  Laptop: WiFi/Bluetooth Module Repair
                </option>
                <option value="Liquid Damage Assessment & Repair">
                  Laptop: Liquid Damage Assessment &amp; Repair
                </option>
                <option value="Performance Optimization & Tune-up">
                  Laptop: Performance Optimization &amp; Tune-up
                </option>
                <option value="Screen/Digitizer Replacement">
                  Mobile/Tablet: Screen/Digitizer Replacement
                </option>
                <option value="Mobile Battery Replacement">
                  Mobile/Tablet: Battery Replacement
                </option>
                <option value="Mobile Charging Port Repair">
                  Mobile/Tablet: Charging Port Repair
                </option>
                <option value="Camera Repair/Replacement">
                  Mobile/Tablet: Camera Repair/Replacement
                </option>
                <option value="Speaker/Microphone Repair">
                  Mobile/Tablet: Speaker/Microphone Repair
                </option>
                <option value="Home/Power Button Repair">
                  Mobile/Tablet: Home/Power Button Repair
                </option>
                <option value="Water Damage Assessment & Repair">
                  Mobile/Tablet: Water Damage Assessment &amp; Repair
                </option>
                <option value="Software Issues & OS Restoration">
                  Mobile/Tablet: Software Issues &amp; OS Restoration
                </option>
                <option value="Data Recovery & Transfer">
                  Mobile/Tablet: Data Recovery &amp; Transfer
                </option>
                <option value="Tablet Screen Replacement">
                  Mobile/Tablet: Tablet Screen Replacement
                </option>
                <option value="Virus/Malware Removal">
                  Mobile/Tablet: Virus/Malware Removal
                </option>
                <option value="Device Setup & Configuration">
                  Mobile/Tablet: Device Setup &amp; Configuration
                </option>
              </select>
            </label>

            <label className="flex flex-col gap-1 font-medium">
              Service Message
              <textarea
                className="resize-none border-2 border-black bg-white text-black w-full h-[130px] px-3 py-2 rounded focus:outline-none focus:border-[#E77014]"
                name="message"
                value={serviceData.message}
                onChange={handleInputChange}
                required
              />
            </label>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="text-white border-2 border-black cursor-pointer px-8 py-3 rounded font-semibold tracking-wide bg-linear-to-r from-[#EF5B17] to-[#000000] hover:from-[#E77014] hover:to-[#1a0800] transition-all duration-200 shadow-[3px_3px_6px_#121212] hover:shadow-[3px_3px_12px_#E77014] hover:-translate-y-0.5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
