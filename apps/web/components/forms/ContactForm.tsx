"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GlowButton } from "@/components/glow-button";
import { Send } from "lucide-react";
import ContactAction from "@/app/actions/contactAction";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function ContactForm() {
    const [state, formAction] = useActionState(ContactAction, null);
    const { pending } = useFormStatus();

    if (state?.success) {
        return (
            <div className="text-center text-green-400">
                Thanks! I&apos;ll get back to you soon.
            </div>
        );
    }

    return (
        <form
            action={formAction}
            className="space-y-4 sm:space-y-5"
        >
            {/* Full Name */}
            <div className="grid gap-2">
                <Label htmlFor="fullname" className="text-gray-200 text-sm">
                    Full name
                </Label>
                <Input
                    id="fullname"
                    name="fullname"
                    placeholder="Your full name"
                    required
                    className="border-white/10 bg-white/5 backdrop-blur-sm text-gray-100 placeholder:text-gray-400 focus:border-purple-500/50 focus:bg-white/10 text-sm sm:text-base"
                />
                {state?.errors?.fullname && (
                    <p className="text-sm text-red-400">{state.errors.fullname}</p>
                )}
            </div>

            {/* Email */}
            <div className="grid gap-2">
                <Label htmlFor="fullname" className="text-gray-200 text-sm">
                    Email
                </Label>
                <Input
                    id="fullname"
                    name="fullname"
                    placeholder="Your full name"
                    required
                    className="border-white/10 bg-white/5 backdrop-blur-sm text-gray-100 placeholder:text-gray-400 focus:border-purple-500/50 focus:bg-white/10 text-sm sm:text-base"
                />
                {state?.errors?.email && (
                    <p className="text-sm text-red-400">{state.errors.email}</p>
                )}
            </div>

            {/* Subject */}
            <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-200 text-sm">
                    Subject
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="border-white/10 bg-white/5 backdrop-blur-sm text-gray-100 placeholder:text-gray-400 focus:border-purple-500/50 focus:bg-white/10 text-sm sm:text-base"
                />
                {state?.errors?.subject && (
                    <p className="text-sm text-red-400">{state.errors.subject}</p>
                )}
            </div>

            {/* Message */}
            <div className="grid gap-2">
                <Label htmlFor="message" className="text-gray-200 text-sm">
                    Message
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    required
                    className="border-white/10 bg-white/5 backdrop-blur-sm text-gray-100 placeholder:text-gray-400 focus:border-purple-500/50 focus:bg-white/10 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base resize-none"
                />
                {state?.errors?.message && (
                    <p className="text-sm text-red-400">{state.errors.message}</p>
                )}
            </div>

            {/* General error */}
            {state?.errors?.general && (
                <p className="text-sm text-red-400">{state?.errors?.general}</p>
            )}

            {/* Submit button */}
            <div className="flex items-center gap-3">
                <GlowButton type="submit" loading={pending} disabled={pending}>
                    <Send className="h-4 w-4" />
                    {pending ? "Sending..." : "Send Message"}
                </GlowButton>
            </div>
        </form>
    );
}

export default ContactForm;
