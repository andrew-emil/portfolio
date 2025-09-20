"use server"

import { ContactActionSchema } from '@shared/schemas/contactAction.schema';

const apiUrl = process.env.API_URL;

type ContactFormErrors = {
    fullname?: string;
    email?: string;
    subject?: string;
    message?: string;
    general?: string;
};


export default async function ContactAction(prevData: any, data: FormData) {
    const formDataObj = Object.fromEntries(data.entries());

    const result = ContactActionSchema.safeParse(formDataObj);

    if (!result.success) {
        const errors: ContactFormErrors = {};

        result.error.issues.forEach(issue => {
            const field = issue.path[0] as keyof ContactFormErrors;

            if (['fullname', 'email', 'subject', 'message'].includes(field)) {
                errors[field] = issue.message;
            } else {
                errors.general = issue.message;
            }
        });

        return { errors };
    }

    const res = await fetch(`${apiUrl}/contacts`, {
        method: 'POST',
        body: JSON.stringify(result.data),
        headers: { 'Content-Type': 'application/json' }
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.log('Error response:', errorData);
        return { errors: { general: 'Failed to submit contact form' } };
    }

    const responseData = await res.json();
    return { success: true, data: responseData };
}