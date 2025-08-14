import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
      <section className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-10">
        <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-gray-100">
          Contact
        </h1>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
