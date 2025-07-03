"use client";

import { DOMAIN } from "@/app/_utils/constants";
import DescriptionIcon from "@mui/icons-material/Description";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";

export default function CvButton() {
	const [loading, setLoading] = useState(false);

	async function downloadCV() {
		setLoading(true);
		try {
			const res = await fetch(`${DOMAIN}/api/uploads`, { method: "GET" });
			if (!res.ok) {
				throw Error("Error: something went wrong when downloading CV");
			}
			const blob = await res.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "cv.pdf";
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);
		} catch (e) {
			alert("Failed to download CV.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<button
			className="button-primary flex items-center gap-2"
			disabled={loading}
			onClick={downloadCV}>
			{loading ? (
				<CircularProgress size={20} color="inherit" />
			) : (
				<DescriptionIcon />
			)}
			{loading ? "Downloading..." : "Download CV"}
		</button>
	);
}
