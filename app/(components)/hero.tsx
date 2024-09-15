import { archivo, unbounded } from "@/lib/fonts"
import Image from "next/image"

export function Hero() {
    return (
        <div className="h-[100vh] relative py-[40px] px-[20px] md:py-[100px] md:px[50px] lg:p-[100px]">
            <video
                className="absolute h-full w-full top-0 left-0 object-cover z-0"
                autoPlay
                loop
                muted
                preload="none"
            >
                <source src="background.mp4" type="video/mp4" />
            </video>
            <div className="absolute h-full w-full top-0 left-0 bg-[#660008]/70 z-2" />
            <div className="flex flex-col justify-between h-full max-w-[1260px] mx-auto relative z-2">
                <div className="flex justify-between items-center">
                    <Image
                        className="cursor-pointer p-2"
                        src="triangle.svg"
                        width={90}
                        height={90}
                        alt="triangle"
                    />
                    <a className={`${archivo.className} text-white text-[16px]`} href="#gallery">Explore</a>
                </div>
                <h1 className={`${unbounded.className} text-center font-bold text-[32px] md:text-[64px] lg:text-[80px] text-white`}>
                    Unleash Your Inner Samurai.
                </h1>
                <div className="flex justify-between items-center">
                    <a className={`${archivo.className} text-white text-[16px]`} href="#introduction">Introduction</a>
                    <Image
                        className="cursor-pointer p-2"
                        src="half-circle.svg"
                        width={120}
                        height={120}
                        alt="half-circle"
                    />
                </div>
            </div>
        </div>
    )
}
