import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { archivo } from '@/lib/fonts'

export default function Footer() {
    return (
        <div className="py-[40px] px-[20px] lg:pt-[100px] lg:pb-[40px] bg-black">
            <div className={`${archivo.className} max-w-[1260px] mx-auto font-normal text-white text-[16px]`}>
                <div className="flex flex-col md:flex-row lg:justify-between gap-x-[20px] mb-[60px]">
                    <div className="flex-1 flex flex-col mb-[40px] lg:m-0">
                        <h4 className="font-bold mb-[15px]">Repositories</h4>
                        <Link className="mb-[10px]" href="https://github.com/nocs32/nox-photos" target='_blank'>NOX PHOTOS</Link>
                        <Link className="mb-[10px]" href="https://github.com/nocs32/nox-shop" target='_blank'>NOX SHOP</Link>
                        <Link className="mb-[10px]" href="https://github.com/nocs32/nox-blog" target='_blank'>NOX BLOG</Link>
                        <Link className="mb-[10px]" href="https://github.com/nocs32/nox-conterter" target='_blank'>NOX CONVERTER</Link>
                    </div>
                    <div className="flex-1 flex flex-col mb-[40px] lg:m-0">
                        <h4 className="font-bold mb-[15px]">Media</h4>
                        <Link className="mb-[10px]" href="https://blog.timnox.dev" target='_blank'>Blog</Link>
                        <Link className="mb-[10px]" href="#gallery">Gallery</Link>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h4 className="font-bold mb-[15px]">Get In Touch</h4>
                        <Link className="mb-[10px]" href="mailto:tim.nox.dev@gmail.com" type="email">Email</Link>
                        <Link className="mb-[10px]" href="https://www.linkedin.com/in/tymofii-tytenko-5478a0215/" target='_blank'>LinkedIn</Link>
                        <Link className="mb-[10px]" href="https://github.com/nocs32" target='_blank'>GitHub</Link>
                        <Link className="mb-[10px]" href="https://x.com/NocsTimofiu" target='_blank'>Twitter</Link>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <p className="mb-[20px] md:mb-0">© 2024 Tim Nox</p>
                    <div className="flex items-center gap-x-[12px]">
                        <Link href="https://github.com/nocs32" target='_blank'>
                            <Image src="/github.svg" width={24} height={24} alt="GitHub" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/tymofii-tytenko-5478a0215/" target='_blank'>
                            <Image src="/linkedin.svg" width={34} height={34} alt="LinkedIn" />
                        </Link>
                        <Link href="https://x.com/NocsTimofiu" target='_blank'>
                            <Image src="/twitter.svg" width={30} height={30} alt="Twitter" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
