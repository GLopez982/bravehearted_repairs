import Image from 'next/image'

export default function Footer(){
    return(
        <div className="border-2 bg-[#E77014] shadow-md border-black w-full h-auto lg:h-[165px] lg:px-10 rounded-[8px] flex flex-col min-h-screen">
            <footer className='gap-8 shadow-md lg:h-[165px] px-10 flex justify-center rounded-lg'>
               <div className='flex lg:content-center '>
                  <Image 
                        src="/circuit-heart.png"
                        alt="Missing Logo"
                        width={140}
                        height={100}
                    />
                </div>
                    {/*COMMENTED OUT CODE FOR THREE LIST ITEMS IN FOOTER UNTIL FURTHER PAGE DEVELOPEMENT. ADD BACK WHEN COMPLETING ADDITIONAL PAGES OR REMOVE FOR PRODUCTION! */}
                     {/* <ul className='flex-1 '>
                    
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
                                        
                    </ul> */}

                    <div className='flex-1 lg:flex'>
                    
                         <h3 className='p-5 py-5 border-black hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600 lg:mt-[45px] text-[10px] sm:text-[14px] lg:text-[16px]' >©2025 BraveHeart Repairs. All rights reserved.
This website and its content are provided for informational purposes only. Unauthorized reproduction or distribution of any material is prohibited. </h3>
                                {/* <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'><Link href='/'>About Us </Link></li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'><Link href='/'>Careers</Link></li>
                                <li className='hover:text-[#110211] text-shadow-lg hover:text-shadow-white text-white-700 hover:text-black-600'><Link href='/'>Reviews</Link></li> */}
                                        
                    </div>

            </footer>     
        
        </div>

        

    )
}