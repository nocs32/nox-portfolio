import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";
import { archivo, unbounded } from "@/lib/fonts";

export function JoinMe() {
    return (
        <div className="bg-black">
            <div className="max-w-[500px] text-center mx-auto py-[60px] px-[20px] lg:py-[100px]">
                <h2 className={`${unbounded.className} font-bold text-[#4BA3C3] text-[32px] lg:text-[48px] mb-[20px]`}>Join Me</h2>
                <p className={`${archivo.className} text-[#4BA3C3] text-[16px] mb-[20px]`}>Ready to take on digital shoguns and shape tomorrow&#39;s tech? Or maybe you&#39;re here to witness some miracles? I&#39;ve got you covered. Let&#39;s walk together on this path of coding enlightenment. Dive in!</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-white text-black w-full md:w-min">Get in Touch</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Thank you for reaching out!
                            </DialogTitle>
                            <DialogDescription>
                                Please leave your email and I will get back to you as soon as possible.
                            </DialogDescription>
                        </DialogHeader>
                        <ContactForm />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
