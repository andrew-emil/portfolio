"use client"

import { Card, styled, IconButton } from "@mui/material";

export const CustomCard = styled(Card)(() => ({
	backgroundColor: "transparent",
	background: "rgb(0 0 0 / 0.20)",
	border: "0.5px solid #fff",
	borderRadius: "10px",
	padding: "2rem",
	boxShadow: "none",
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
