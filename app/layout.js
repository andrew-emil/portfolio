import { Inter } from "next/font/google";
import CustomParticles from "./_components/CustomParticles";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

import "./globals.css";
import { CustomCard } from "./_components/StyledComponents";

const inter = Inter({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata = {
	title: "Andrew Emil | Portfolio",
	description:
		"Showcasing the work, skills, and projects of Andrew Emil, a passionate web developer",
	keywords: [
		"Andrew Emil",
		"Portfolio",
		"Web Developer",
		"Frontend Developer",
		"React",
		"JavaScript",
		"Projects",
		"Software Engineer",
		"Backend Developer",
		"Next.js",
		"Nest.js",
	],
	author: "Andrew Emil",
	openGraph: {
		title: "Andrew Emil | Portfolio",
		description:
			"Explore the professional portfolio of Andrew Emil, featuring web development projects, skills, and contact information.",
		type: "website",
	},
	linkedIn: {
		card: "summary_large_image",
		title: "Andrew Emil | Portfolio",
		description:
			"Discover the work and projects of Andrew Emil, a creative web developer and designer.",
		creator: "Andrew Emil",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
				<CustomParticles />
				<Navbar />

				<main className="flex flex-col md:p-4 gap-2 lg:p-8 p-0 m-auto min-w-3/4 sm:w-3/4 sm:p-2 w-3/4 min-w-[240px]">
					<CustomCard>{children}</CustomCard>
				</main>
				<Footer />
			</body>
		</html>
	);
}
