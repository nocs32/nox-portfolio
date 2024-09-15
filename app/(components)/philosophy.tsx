import { archivo, unbounded } from "@/lib/fonts";

export function Philosophy() {
    return (
        <div className="bg-black px-[20px] py-[60px] lg:py-[100px]">
            <div className="max-w-[1260px] mx-auto">
                <h2 className={`${unbounded.className} font-bold text-white text-[30px] lg:text-[48px] mb-[40px] gap-x-[40px]`}>Philosophy</h2>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <p className={`${archivo.className} text-[#CCE6F4] text-[20px] mb-[40px] lg:m-0`}>I live by the code - quite literally. But beyond the screens and keys, it&#39;s about the unwavering bushido spirit. Standing up to challenges, bold innovation and a commitment to excellence - that&#39;s my way of the programmer.</p>
                    <p className={`${archivo.className} text-[#CCE6F4] text-[20px]`}>Riding the wave of the freshest technologies, wielding the katana of knowledge, I slice through the noise to bring the finest solutions to the tech battlefield.</p>
                </div>
            </div>
        </div>
    )
}
