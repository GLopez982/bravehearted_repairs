import Image from 'next/image'
import Link from 'next/link'

export default function NavBar(){
    return(
        <nav className="bg-[#E77014] shadow-md border-black w-full h-auto lg:h-[165px] px-10 flex-1 flex rounded-[8px]">
            <div className="w-full h-[164px] flex justify-between">
       
            <div className="mb-12 p-2 py-15 ">
            
                <Image
                    src="/tigerTest.png"
                    alt="Missing pic"
                    width={60}
                    height={57} 
                /> 
                    <div className='ml-25 flex lg:justify-end'>BraveHearted Repairs</div>
            </div>   
           

            <div className='flex items-center '>
            <ul className=' flex items-end '>
                <li>
                    <Link href="/" className="text-white-700 hover:text-black-600 px-3 py-2 text-sm font-medium transition-colors">
                        Home</Link>
                </li>
                <li>
                    <Link href="/services" className="text-white-700 hover:text-[#171717]-600 px-3 py-2 text-sm font-medium transition-colors">
                        Services</Link>
                </li>
                <li>        
                    <Link href="/about" className="text-white-700 hover:text-black-600 px-3 py-2 text-sm font-medium transition-colors">
                        About</Link>
                </li>   
                <li>        
                    <Link href="/about" className="text-white-700 hover:text-black-600 px-3 py-2 text-sm font-medium transition-colors">
                        Sign Up</Link>
                </li>   

            </ul>
        
        
            </div> 
        </div>
           
       
        </nav>
    )
}