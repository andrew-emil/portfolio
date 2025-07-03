"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
	{ name: "About", href: "/" },
	{ name: "Resume", href: "/resume" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav
			className="
                flex items-center justify-between max-w-screen-md mx-auto gap-4 w-1/2
                h-[var(--navbar-height)]
                px-6 py-3
                bg-[rgba(30,30,40,0.7)]
                backdrop-blur-md
                border border-transparent
                rounded-2xl
                shadow-lg
                my-4
                md:relative md:flex-row md:justify-between md:items-center
                md:rounded-2xl md:px-10 md:py-4 md:h-[var(--navbar-height)] md:w-full 
				sm:mx-auto z-[100] sm:w-full
                "
			style={{
				borderImage: "linear-gradient(90deg, #a78bfa 0%, #f472b6 100%) 1",
				borderWidth: 2,
			}}>
			{/* Brand/Logo */}
			<div className="flex items-center gap-2 select-none">
				<span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-tight drop-shadow-lg">
					
					My Portfolio
				</span>
			</div>

			{/* Hamburger Icon for Mobile */}
			<button
				className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
				onClick={() => setMenuOpen((open) => !open)}
				aria-label="Toggle menu">
				<span
					className={`block w-6 h-0.5 bg-purple-300 transition-all duration-300 ${
						menuOpen ? "rotate-45 translate-y-1.5" : ""
					}`}></span>
				<span
					className={`block w-6 h-0.5 bg-purple-300 my-1 transition-all duration-300 ${
						menuOpen ? "opacity-0" : ""
					}`}></span>
				<span
					className={`block w-6 h-0.5 bg-purple-300 transition-all duration-300 ${
						menuOpen ? "-rotate-45 -translate-y-1.5" : ""
					}`}></span>
			</button>

			{/* Navigation Links */}
			<div className="hidden md:flex gap-2">
				{navLinks.map((link) => {
					const isActive =
						link.href === "/"
							? pathname === "/"
							: pathname.startsWith(link.href);
					return (
						<Link
							key={link.name}
							href={link.href}
							className={`
								whitespace-nowrap
								text-[1.08rem] font-semibold
								py-1.5 px-4 rounded-xl
								transition-all duration-200
								backdrop-blur-sm
								border border-transparent
								${
									isActive
										? "text-purple-300 bg-[rgba(168,139,250,0.13)] shadow-[0_0_8px_2px_rgba(168,139,250,0.18)] border-purple-400/40 font-bold"
										: "text-[var(--foreground)] hover:text-pink-300 hover:bg-[rgba(244,114,182,0.10)] hover:shadow-[0_0_8px_2px_rgba(244,114,182,0.13)] hover:border-pink-300/30"
								}
								sm:text-sm sm:px-2 sm:py-1 sm:rounded-full
							`}>
							{link.name}
						</Link>
					);
				})}
			</div>

			{/* Mobile Menu Dropdown */}
			{menuOpen && (
				<div className="absolute top-full left-0 w-full flex flex-col items-center bg-[rgba(30,30,40,0.97)] shadow-lg rounded-b-2xl py-4 md:hidden animate-fade-in">
					{navLinks.map((link) => {
						const isActive =
							link.href === "/"
								? pathname === "/"
								: pathname.startsWith(link.href);
						return (
							<Link
								key={link.name}
								href={link.href}
								className={`
									block w-full text-center mb-2 last:mb-0
									text-lg font-semibold py-2 rounded-xl
									transition-all duration-200
									backdrop-blur-sm
									border border-transparent
									${
										isActive
											? "text-purple-300 bg-[rgba(168,139,250,0.13)] shadow-[0_0_8px_2px_rgba(168,139,250,0.18)] border-purple-400/40 font-bold"
											: "text-[var(--foreground)] hover:text-pink-300 hover:bg-[rgba(244,114,182,0.10)] hover:shadow-[0_0_8px_2px_rgba(244,114,182,0.13)] hover:border-pink-300/30"
									}
								`}
								onClick={() => setMenuOpen(false)}>
								{link.name}
							</Link>
						);
					})}
				</div>
			)}
		</nav>
	);
}
