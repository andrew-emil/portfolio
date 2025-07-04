import React from "react";

export default function Footer() {
	return (
		<footer className="w-full text-center py-3 sm:py-4 bg-[rgba(30,30,40,0.7)] text-xs sm:text-sm text-gray-300 mt-8 border-t border-purple-400/20 md:fixed md:bottom-0 md:left-0 md:right-0 md:static">
			© {new Date().getFullYear()} Andrew Emil. All rights reserved.
		</footer>
	);
}
