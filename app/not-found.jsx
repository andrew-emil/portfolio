import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-6xl font-bold text-accent-primary mb-4">404</h1>
			<h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
			<p className="mb-6 text-accent-secondary text-center max-w-md">
				Sorry, the page you are looking for does not exist or has been moved.
			</p>
			<Link href="/" className="button-primary">
				Go Home
			</Link>
		</main>
	);
}
