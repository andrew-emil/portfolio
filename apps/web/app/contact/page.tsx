import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ContactForm from "@/components/forms/ContactForm";
import { GlassCard } from "@/components/glass-card";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
      <section className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-10">
        <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-gray-100">
          Contact
        </h1>
        <GlassCard className="mx-auto max-w-2xl p-4 sm:p-6" hover={false}>
          <ContactForm />
        </GlassCard>
      </section>
      <SiteFooter />
    </main>
  );
}
