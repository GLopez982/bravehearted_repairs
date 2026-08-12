import Image from 'next/image'

export default function Footer(){
    return(
        <footer className="bg-[#E77014] border-2 border-black shadow-md w-full rounded-lg px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 sm:h-[165px]">

            <div className="shrink-0 flex items-center justify-center">
                <Image
                    src="/circuit-heart.png"
                    alt="BraveHeart Repairs logo"
                    width={140}
                    height={100}
                />
            </div>

            <p className="text-[#1a0800] font-medium text-center sm:text-left text-[11px] sm:text-[13px] lg:text-[15px] leading-relaxed max-w-prose">
                ©2025 BraveHeart Repairs. All rights reserved.
                <br />
                This website and its content are provided for informational purposes only. Unauthorized reproduction or distribution of any material is prohibited.
            </p>

        </footer>
    )
}