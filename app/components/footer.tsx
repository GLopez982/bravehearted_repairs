import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(
        <div className="border-2 bg-[#E77014] shadow-md border-black w-full h-auto lg:h-[165px] px-10 rounded-[8px]">
            <footer className=' gap-8 bg-[#E77014] shadow-md border-green w-screen h-auto lg:h-[165px] px-10 flex-shrink-0 flex rounded-lg'>
               <div className='flex-1 content-center'>
                  <Image 
                        src="/word_logo.png"
                        alt="Missing Logo"
                        width={140}
                        height={100}
                        

                    />
          </div>

                     <ul className='flex-1 '>
                    
                           <li> <h3 className='p-5 py-5 border-black hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>Topic </h3></li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>stuff</li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>more stuff</li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>extra stuff</li>
                                        
                    </ul>
                     <ul className='flex-1'>
                    
                            <li><h3 className='p-5 py-5 border-black hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>Topic2 </h3></li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>stuff</li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>more stuff</li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>extra stuff</li>
                                        
                    </ul>

                    <ul className='flex-1 '>
                    
                          <li> <h3 className='p-5 py-5 border-black hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'>About </h3></li> 
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'><Link href='/'>About Us </Link></li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'><Link href='/'>Careers</Link></li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'><Link href='/'>Reviews</Link></li>
                                        
                    </ul>

            </footer>     
        
        </div>

        

    )
}