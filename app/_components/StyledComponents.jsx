"use client";

import { Card, IconButton, styled } from "@mui/material";

export const CustomCard = styled(Card)(() => ({
	backgroundColor: "rgba(255, 255, 255, 0.10)",
	background: "rgba(255, 255, 255, 0.10)",
	border: "0.5px solid #fff",
	borderRadius: "10px",
	padding: "2rem",
	boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
	backdropFilter: "blur(8px)",
	WebkitBackdropFilter: "blur(8px)",
	maxWidth: "100%",
	boxSizing: "border-box",
}));

export const CustomIconButton = styled(IconButton)(() => ({
	backgroundColor: "rgba(138, 43, 226, 0.08)",
	border: "1.5px solid var(--accent-primary)",
	borderRadius: "16px",
	width: 48,
	height: 48,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "background 0.2s, border 0.2s",
	boxShadow: "none",
	color: "var(--accent-primary)",
	"&:hover": {
		backgroundColor: "rgba(138, 43, 226, 0.18)",
		border: "1.5px solid var(--accent-secondary)",
		color: "var(--accent-secondary)",
	},
}));
