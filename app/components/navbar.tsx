import Image from 'next/image'
import Link from 'next/link'

export default function NavBar(){
    return(
        <nav className="bg-[#E77014] border-b-2 border-black w-full h-auto lg:h-[165px] lg:px-10 flex flex-1">
            <div className="w-full h-auto lg:h-[164px] flex flex-col lg:flex-row lg:justify-between gap-4 py-4 lg:py-0">

                <div className="mb-0 lg:mb-4 px-0 lg:px-20 flex lg:items-center justify-center lg:justify-start">
                    <Image
                        className='lg:w-[140px] lg:h-[140px]'
                        src="/circuit-heart.png"
                        alt="A heart that looks like a circuit board"
                        width={220}
                        height={60}
                    />
                </div>

                <div className='flex flex-col justify-center'>
                    <Image
                        src="/brave-word.png"
                        alt="BraveHeart Repairs written in circuit board letters"
                        width={350}
                        height={40}
                    />
                </div>

                <div className='flex items-center justify-center lg:justify-end'>
                    <ul className='flex items-center gap-1'>
                        <li>
                            <Link href="/" className="circuit-link text-[#1a0800] font-semibold px-3 py-2 text-sm hover:text-black transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="circuit-link text-[#1a0800] font-semibold px-3 py-2 text-sm hover:text-black transition-colors">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="circuit-link text-[#1a0800] font-semibold px-3 py-2 text-sm hover:text-black transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/register" className="circuit-link text-[#1a0800] font-bold px-3 py-2 text-sm hover:text-black transition-colors">
                                Subscribe!
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}