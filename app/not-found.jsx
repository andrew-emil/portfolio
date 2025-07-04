import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function NotFound() {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-6xl font-bold text-accent-primary mb-4">404</h1>
			<h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
			<Typography
				variant="body1"
				className="mb-6 text-accent-secondary text-center max-w-md">
				Sorry, the page you are looking for does not exist or has been moved.
			</Typography>
			<Link href="/" className="button-primary">
				Go Home
			</Link>
		</section>
	);
}
