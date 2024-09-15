import { z } from "zod"

export const contactFormSchema = z.object({
    email: z.string().email(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    message: z.string().optional(),
})
