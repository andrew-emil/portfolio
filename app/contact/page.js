import ContactForm from "@/app/_components/ContactForm";

export default function ContactPage() {
	return (
		<section className="w-full max-w-5xl mx-auto py-6 sm:py-8 px-2 sm:px-4 md:px-8 flex flex-col gap-6 sm:gap-8 -z-20 justify-start">
			<header className="mb-8 sm:mb-12">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--accent-primary)]">
					Contact
				</h2>
			</header>
			<ContactForm />
		</section>
	);
}
