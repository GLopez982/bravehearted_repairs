import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(
        <div className="bg-[#E77014] shadow-md border-black w-full h-auto lg:h-[165px] px-10 rounded-[8px]">
            <footer className=' gap-8 bg-[#E77014] shadow-md border-green w-screen h-auto lg:h-[165px] px-10 flex-shrink-0 flex rounded-lg'>
               <div className='flex-1 content-center'>
                  <Image 
                        src="/word_logo.png"
                        alt="Missing Logo"
                        width={140}
                        height={100}
                        

                    />
          </div>

                     <ul className='flex-1'>
                    
                           <li> <h3 className='p-5 py-5 border-black'>Topic </h3></li>
                                <li>stuff</li>
                                <li>more stuff</li>
                                <li>extra stuff</li>
                                        
                    </ul>
                     <ul className='flex-1'>
                    
                            <li><h3 className='p-5 py-5 border-black'>Topic2 </h3></li>
                                <li>stuff</li>
                                <li>more stuff</li>
                                <li>extra stuff</li>
                                        
                    </ul>

                    <ul className='flex-1 '>
                    
                          <li> <h3 className='p-5 py-5  border-black'>About </h3></li> 
                                <li><Link href='/'>About Us </Link></li>
                                <li><Link href='/'>Careers</Link></li>
                                <li><Link href='/'>Reviews</Link></li>
                                        
                    </ul>

            </footer>     
        
        </div>

        

    )
}