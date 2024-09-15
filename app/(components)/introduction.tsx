import { archivo, unbounded } from "@/lib/fonts";

export function Introduction() {
    return (
        <div className="bg-[#CCE6F4] py-[60px] px-[20px] lg:py-[100px]" id="introduction">
            <div className="flex flex-col md:flex-row justify-between max-w-[1260px] mx-auto">
                <div className="rounded-full w-12 h-12 bg-black mb-[40px]" />
                <div className="lg:max-w-[50%]">
                    <h2 className={`${unbounded.className} text-[#175676] mb-[40px] font-bold text-[32px] lg:text-[48px] leading-5`}>
                        Introduction
                    </h2>
                    <p className={`${archivo.className} text-black text-[20px] leading-6`}>
                        Hey there! Welcome to the dojo of Tim Nox (Tymofii Tytenko), the tech-ninja. Yes, the world of coding and numbers could be a samurai battleground, if you&#39;ve got the vision to see it.
                    </p>
                </div>
            </div>
        </div>
    )
}
