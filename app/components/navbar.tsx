import Image from 'next/image'
import Link from 'next/link'

export default function NavBar(){
    return(
        <nav className="bg-[#E77014] border-b-2 border-black w-full h-auto lg:h-[165px] px-10 flex-1 flex">
            <div className="w-full h-[164px] flex justify-between">
       
            <div className="mb-12 px-20">
            
                <Image
                    src="/word_logo.png"
                    alt="Missing pic"
                    width={160}
                    height={60} 
                /> 
                    
            </div>
            <div className='flex flex-col justify-center text-[30px] font-bold hover:text-[#110211] text-shadow-lg hover:text-shadow-white'>BraveHearted Repairs</div>
            <div className='flex items-center'>
            <ul className='flex items-end'>
                <li>
                    <Link href="/" className="hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600 px-3 py-2 text-sm font-medium transition-colors">
                        Home</Link>
                </li>
                <li>
                    <Link href="/services" className="hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-[#171717]-600 px-3 py-2 text-sm font-medium transition-colors">
                        Services</Link>
                </li>
                <li>        
                    <Link href="/about" className="hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600 px-3 py-2 text-sm font-medium transition-colors">
                        About</Link>
                </li>   
                <li>        
                    <Link href="/register" className="hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600 px-3 py-2 text-sm font-medium transition-colors">
                        Sign Up</Link>
                </li>   

            </ul>
            </div> 
        </div>
        </nav>
    )
}