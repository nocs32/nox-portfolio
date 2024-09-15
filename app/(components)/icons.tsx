import Image from "next/image";

export function Icons() {
    return (
        <div className="bg-black p-[60px] lg:py-[140px]">
            <div className="grid gap-[20px] grid-cols-2 justify-center lg:flex items-center lg:justify-between max-w-[1260px] mx-auto">
                <Image className="mx-auto mb-[40px] lg:m-0" src="/circle.svg" width={100} height={100} alt="circle" />
                <Image className="mx-auto mb-[40px] lg:m-0" src="/slash.svg" width={100} height={100} alt="circle" />
                <Image className="mx-auto mb-[40px] lg:m-0" src="/line.svg" width={100} height={100} alt="circle" />
                <Image className="mx-auto mb-[40px] lg:m-0" src="/empty-circle.svg" width={100} height={100} alt="circle" />
                <Image className="mx-auto mb-[40px] lg:m-0" src="/contrast-circle.svg" width={100} height={100} alt="circle" />
                <Image className="mx-auto mb-[40px] lg:m-0" src="/contrast-circle-2.svg" width={100} height={100} alt="circle" />
            </div>
        </div>
    )
}
