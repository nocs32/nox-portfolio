

import { z } from "zod";
import { contactFormSchema } from "./zodSchemas";
import emailjs from '@emailjs/browser';

export async function sendContactForm(values: z.infer<typeof contactFormSchema>) {
    const validatedData = contactFormSchema.safeParse(values);

    if (!validatedData.success) {
        throw new Error("Invalid form data");
    }

    const templateParams = {
        firstName: validatedData.data.firstName ?? "",
        lastName: validatedData.data.lastName ?? "",
        email: validatedData.data.email,
        message: validatedData.data.message ?? "",
    }

    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "").then(
        function(response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
            console.log("FAILED...", error);
        }
    );
    
    return {
        message: 'Email send failed',
    }
}