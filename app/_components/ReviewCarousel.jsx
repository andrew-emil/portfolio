"use client";
import { useState } from "react";
import Image from "next/image";
import { convertImage } from "@/app/_utils/convertImage";

function convertVideo(buffer) {
	const bytes = new Uint8Array(buffer);
	const binaryString = String.fromCharCode(...bytes);
	return `data:video/mp4;base64,${btoa(binaryString)}`;
}

export default function ReviewCarousel({ reviews }) {
	const [current, setCurrent] = useState(0);
	if (!reviews.length) return null;

	const goTo = (idx) => setCurrent((idx + reviews.length) % reviews.length);

	return (
		<div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-2">
			<div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
				{reviews[current].type === "photo" ? (
					<Image
						src={convertImage(reviews[current].data.data)}
						alt={`Review ${current + 1}`}
						fill
						style={{ objectFit: "contain" }}
						sizes="(max-width: 768px) 100vw, 512px"
						priority
					/>
				) : (
					<video
						src={convertVideo(reviews[current].data)}
						controls
						className="w-full h-full object-contain bg-black"
					/>
				)}
				{reviews.length > 1 && (
					<>
						<button
							className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
							onClick={() => goTo(current - 1)}
							aria-label="Previous"
							type="button">
							&#8592;
						</button>
						<button
							className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
							onClick={() => goTo(current + 1)}
							aria-label="Next"
							type="button">
							&#8594;
						</button>
					</>
				)}
			</div>
			{reviews.length > 1 && (
				<div className="flex gap-2 mt-2">
					{reviews.map((_, idx) => (
						<button
							key={idx}
							className={`w-2.5 h-2.5 rounded-full ${
								idx === current ? "bg-[var(--accent-primary)]" : "bg-gray-300"
							}`}
							onClick={() => goTo(idx)}
							aria-label={`Go to slide ${idx + 1}`}
							type="button"
						/>
					))}
				</div>
			)}
		</div>
	);
}
