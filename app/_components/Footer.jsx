import React from "react";

export default function Footer() {
	return (
		<footer className="w-full text-center py-4 bg-[rgba(30,30,40,0.7)] text-sm text-gray-300 mt-8 border-t border-purple-400/20">
			© {new Date().getFullYear()} Andrew Emil. All rights reserved.
		</footer>
	);
}
