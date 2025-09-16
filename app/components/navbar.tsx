import Image from 'next/image'
import Link from 'next/link'

export default function NavBar(){
    return(
        <nav className="bg-[#E77014] border-b-2 border-black w-full h-auto lg:h-[165px] px-4 lg:px-10 flex flex-1 ">
            <div className="w-full h-auto lg:h-[164px] flex flex-cols lg:flex-row lg:justify-between gap-4 py-4 lg:py-0">
       
            <div className="mb-0 lg:mb-4 px-0 lg:px-20 flex lg:items-center justify-center lg:justify-start">
            
                <Image
                    className='lg:w-[160px] lg:h-[120px]'
                    src="/word_logo.png"
                    alt="Missing pic"
                    width={120}
                    height={40} 
                /> 
                    
            </div>
            <div className='flex flex-col justify-center text-[20px] lg:text-[30px] font-bold focus:text-[#110211] focus:text-shadow-white active:text-shadow-white hover:text-[#110211] hover:text-shadow-lg hover:text-shadow-white '>BraveHearted Repairs</div>
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
                       Register</Link>
                </li>   

            </ul>
            </div> 
        </div>
        </nav>
    )
}