import { archivo, unbounded } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export function Gallery() {
    return (
        <div className="bg-black py-[60px] px-[20px] lg:py-[100px]" id="gallery">
            <div className="max-w-[1260px] mx-auto">
                <h2 className={`${unbounded.className} text-white text-[30px] lg:text-[48px] font-bold mb-[60px]`}>
                    My Digital Dojo
                </h2>
                <div className="flex justify-between gap-[20px] mb-[20px]">
                    <div className="flex flex-col gap-[20px] h-[450px] lg:h-[920px] justify-between flex-1">
                        <Link className="w-full h-[300px] relative" href="https://shop.timnox.dev" target="_blank">
                            <div className="opacity-0 hover:opacity-100 transition-all duration-900 absolute h-full w-full top-0 left-0 bg-[#660008]/70 z-50 rounded-[40px] flex items-center justify-center flex-col">
                                <h3 className={`${archivo.className} text-white text-[20px] lg:text-[36px] font-bold`}>NOX SHOP</h3>
                                <p className={`${archivo.className} text-white text-[12px] lg:text-[18px] font-light px-2 text-center`}>
                                    A simple e-commerce website built with Next.js, Tailwind CSS, Prisma, shadcn.ui and Stripe
                                </p>
                            </div>
                            <Image
                                className="object-contain bg-white rounded-[40px]"
                                src="/shop.jpeg"
                                fill
                                alt="Gallery Image"
                            />
                        </Link>
                        <Link className="w-full h-[600px] relative" href="https://blog.timnox.dev" target="_blank">
                            <div className="opacity-0 hover:opacity-100 transition-all duration-900 absolute h-full w-full top-0 left-0 bg-[#660008]/70 z-50 rounded-[40px] flex items-center justify-center flex-col">
                                <h3 className={`${archivo.className} text-white text-[20px] lg:text-[36px] font-bold`}>NOX BLOG</h3>
                                <p className={`${archivo.className} text-white text-[12px] lg:text-[18px] font-light px-4 text-center`}>
                                    A simple blog website built with Next.js, shadcn.ui, Tailwind CSS and Sanity.io
                                </p>
                            </div>
                            <Image
                                className="object-contain bg-white rounded-[40px]"
                                src="/blog.jpeg"
                                fill
                                alt="Gallery Image"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-[20px] h-[450px] lg:h-[920px] justify-between flex-1">
                        <Link className="w-full h-[600px] relative" href="https://photos.timnox.dev" target="_blank">
                            <div className="opacity-0 hover:opacity-100 transition-all duration-900 absolute h-full w-full top-0 left-0 bg-[#660008]/70 z-50 rounded-[40px] flex items-center justify-center flex-col">
                                <h3 className={`${archivo.className} text-white text-[20px] lg:text-[36px] font-bold`}>NOX PHOTOS</h3>
                                <p className={`${archivo.className} text-white text-[12px] lg:text-[18px] font-light px-2 text-center`}>
                                    A simple gallery website built with Next.js, shadcn.ui, Tailwind CSS, Prisma and MySQL DB
                                </p>
                            </div>
                            <Image
                                className="object-contain bg-white rounded-[40px]"
                                src="/photos.jpeg"
                                fill
                                alt="Gallery Image"
                            />
                        </Link>
                        <Link className="w-full h-[300px] relative" href="https://converter.timnox.dev" target="_blank">
                            <div className="opacity-0 hover:opacity-100 transition-all duration-900 absolute h-full w-full top-0 left-0 bg-[#660008]/70 z-50 rounded-[40px] flex items-center justify-center flex-col">
                                <h3 className={`${archivo.className} text-white text-[20px] lg:text-[36px] font-bold`}>NOX CONVERTER</h3>
                                <p className={`${archivo.className} text-white text-[12px] lg:text-[18px] font-light px-2 text-center`}>
                                    A file converter website built with Next.js, shadcn.ui, Tailwind CSS and FFMPEG library
                                </p>
                            </div>
                            <Image
                                className="object-contain bg-white rounded-[40px]"
                                src="/converter.png"
                                fill
                                alt="Gallery Image"
                            />
                        </Link>
                    </div>
                </div>
                {/* <div className="flex gap-[20px] h-[300px] justify-between flex-1">
                    <Link className="w-full h-[300px] relative" href="#">
                        <div className="opacity-0 hover:opacity-100 transition-all duration-900 absolute h-full w-full top-0 left-0 bg-[#660008]/70 z-50 rounded-[40px] flex items-center justify-center flex-col">
                            <h3 className={`${archivo.className} text-white text-[36px] font-bold`}>Introduction</h3>
                            <p className={`${archivo.className} text-white text-[18px] font-light`}>test</p>
                        </div>
                        <Image
                            className="object-cover rounded-[40px]"
                            src="/t1.jpg"
                            fill
                            alt="Gallery Image"
                        />
                    </Link>
                    <Link className="w-full h-[300px] relative" href="#">
                        <div className="opacity-0 hover:opacity-100 transition-all duration-900 absolute h-full w-full top-0 left-0 bg-[#660008]/70 z-50 rounded-[40px] flex items-center justify-center flex-col">
                            <h3 className={`${archivo.className} text-white text-[36px] font-bold`}>Introduction</h3>
                            <p className={`${archivo.className} text-white text-[18px] font-light`}>test</p>
                        </div>
                        <Image
                            className="object-cover rounded-[40px]"
                            src="/t1.jpg"
                            fill
                            alt="Gallery Image"
                        />
                    </Link>
                </div> */}
            </div>
        </div>
    )
}
