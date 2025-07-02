import portfolioData from "@/app/assets/info.json";

import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { CustomCard } from "./StyledComponents";

export default function Sidebar() {
	const { personalInfo } = portfolioData.portfolioData;
	const { socialLinks } = personalInfo;

	return (
		<CustomCard
			sx={{
				height: "auto",
				width: { xs: "100%", md: 380 },
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				px: { xs: "0.5rem", md: "1rem" },
				py: { xs: "0.5rem", md: "1.5rem" },
				m: { xs: "0 auto", md: 0 },
			}}>
			<div className="flex justify-center items-center h-[120px] w-[120px] rounded-xl relative">
				<Image src="/avatar.jpg" alt="avatar" fill className="rounded-xl" />
			</div>

			<Typography
				variant="h4"
				sx={{ display: "flex", paddingY: "0.5rem", fontWeight: "bold" }}>
				{personalInfo.name}
			</Typography>
			<h6 className="flex p-[0.5rem] background-[rgb(0 0 0 / 0.60)] rounded">
				{personalInfo.tagline}
			</h6>
			<hr />
			
					</CustomCard>
	);
}
