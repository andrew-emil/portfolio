import { z } from "zod";

export const ContactActionSchema = z.object({
    fullname: z.string({ message: 'Full name is required' })
        .min(2, { message: 'Full name must be at least 2 characters long' })
        .max(100, { message: 'Full name must not exceed 100 characters' })
    ,
    email: z.string().email({ message: 'Email must be a valid email address' })
        .min(5, { message: 'Email must be at least 5 characters long' })
        .max(255, { message: 'Email must not exceed 255 characters' }),
    subject: z.string({ message: 'Subject is required' })
        .min(2, { message: 'Subject must be at least 2 characters long' })
        .max(200, { message: 'Subject must not exceed 200 characters' })
    ,
    message: z.string({ message: 'Message is required' })
        .min(10, { message: 'Message must be at least 10 characters long' })
        .max(5000, { message: 'Message must not exceed 5000 characters' })

})