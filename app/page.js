import Image from "next/image";
import portfolioData from "@/app/assets/info.json";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Info from "@/app/_components/Info";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const { personalInfo, about, skills } = portfolioData.portfolioData;
const { socialLinks } = personalInfo;

export default function Home() {
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					py: { xs: 3, sm: 4 },
					px: { xs: 1, sm: 2, md: 4 },
					display: "flex",
					flexDirection: "column",
					gap: { xs: 3, sm: 4 },
					zIndex: -20,
				}}>
				{/* Header Section */}
				<Box
					component="header"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
						gap: { xs: 1, sm: 1.5 },
					}}>
					<Box
						sx={{
							position: "relative",
							height: { xs: 96, sm: 128, md: 160 },
							width: { xs: 96, sm: 128, md: 160 },
							mb: 1,
							borderRadius: 2,
							overflow: "hidden",
							border: "4px solid var(--accent-primary)",
							boxShadow: 3,
						}}>
						<Image
							src="/profile.jpg"
							alt="Andrew Emil Avatar"
							fill
							className="object-cover"
							priority
							quality={100}
						/>
					</Box>
					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "1.875rem", sm: "2.25rem", md: "3rem" },
							fontWeight: "bold",
							color: "var(--accent-primary)",
						}}>
						{personalInfo.name}
					</Typography>
					<Typography
						variant="h5"
						sx={{
							fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
							fontWeight: 600,
							color: "var(--foreground)",
						}}>
						{personalInfo.tagline}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
							color: "var(--foreground)",
						}}>
						{personalInfo.currentRole}
					</Typography>
					<Typography
						variant="body2"
						sx={{
							fontSize: { xs: "0.75rem", sm: "0.875rem" },
							color: "var(--foreground)",
							opacity: 0.8,
						}}>
						{personalInfo.location}
					</Typography>
				</Box>

				{/* About Section */}
				<Box
					component="section"
					sx={{
						bgcolor: "var(--card-bg)",
						borderRadius: 3,
						boxShadow: 3,
						p: { xs: 2, sm: 3 },
					}}>
					<Typography
						variant="h4"
						sx={{
							fontSize: { xs: "1.25rem", sm: "1.5rem" },
							fontWeight: "bold",
							mb: { xs: 1.5, sm: 2 },
							color: "var(--accent-primary)",
						}}>
						{about.title}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: "var(--foreground)",
							fontSize: "1.125rem",
						}}>
						{about.description}
					</Typography>
				</Box>

				{/* Skills Section */}
				<Box
					component="section"
					sx={{
						bgcolor: "var(--card-bg)",
						borderRadius: 3,
						boxShadow: 3,
						p: { xs: 2, sm: 3 },
					}}>
					<Typography
						variant="h4"
						sx={{
							fontSize: "1.5rem",
							fontWeight: "bold",
							mb: 2,
							color: "var(--accent-primary)",
						}}>
						{skills.title}
					</Typography>
					<Grid container spacing={2}>
						{skills.categories.map((cat) => (
							<Grid item xs={12} md={6} key={cat.name}>
								<Box>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 600,
											fontSize: "1.125rem",
											mb: 0.5,
											color: "var(--accent-secondary)",
										}}>
										{cat.name}
									</Typography>
									<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
										{cat.items.map((item) => (
											<Box
												key={item}
												sx={{
													bgcolor: "var(--button-secondary-hover-bg)",
													px: 1.5,
													py: 0.5,
													borderRadius: 1,
													fontSize: "0.875rem",
													color: "var(--foreground)",
													border: "1px solid var(--card-border)",
												}}>
												{item}
											</Box>
										))}
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>

				{/** Contact section */}
				<Box
					component="section"
					sx={{
						bgcolor: "var(--card-bg)",
						borderRadius: 3,
						boxShadow: 3,
						p: { xs: 2, sm: 3 },
					}}>
					<Typography
						variant="h4"
						sx={{
							fontSize: { xs: "1.25rem", sm: "1.5rem" },
							fontWeight: "bold",
							mb: { xs: 1.5, sm: 2 },
							color: "var(--accent-primary)",
						}}>
						Contact Me
					</Typography>
					<Box>
						<Info
							icon={<EmailIcon fontSize="medium" />}
							socialObject={socialLinks[0]}
							link="https://mail.google.com"
						/>
						<Info
							icon={<SmartphoneIcon fontSize="medium" />}
							socialObject={socialLinks[1]}
							link={`https://wa.me/${socialLinks[1].url.split("+")[1]}`}
						/>
						<Info
							icon={<LocationOnIcon fontSize="medium" />}
							socialObject={{
								name: "Location",
								url: personalInfo.location,
							}}
							link="https://www.google.com/maps/place/Ain+Shams,+Cairo+Governorate/@30.1223512,31.3169966,14z/data=!3m1!4b1!4m6!3m5!1s0x145815963961a195:0x7cdcd1f2d3971c77!8m2!3d30.1253048!4d31.3333779!16s%2Fg%2F1tf8hp2d?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							justifyContent: "center",
							alignItems: "center",
							gap: { xs: 1, sm: 2 },
							p: 1,
						}}>
						<Link
							href={socialLinks[2].url}
							target="_blank"
							rel="noopener noreferrer">
							<LinkedInIcon
								fontSize="medium"
								sx={{
									color: "var(--navbar-border)",
									"&:hover": {
										color: "var(--foreground)",
									},
									transition: "color 0.2s",
								}}
							/>
						</Link>
						<Link
							href={socialLinks[3].url}
							target="_blank"
							rel="noopener noreferrer">
							<GitHubIcon
								fontSize="medium"
								sx={{
									color: "var(--navbar-border)",
									"&:hover": {
										color: "var(--foreground)",
									},
									transition: "color 0.2s",
								}}
							/>
						</Link>
						<Link
							href="https://mail.google.com"
							target="_blank"
							rel="noopener noreferrer">
							<GoogleIcon
								fontSize="medium"
								sx={{
									color: "var(--navbar-border)",
									"&:hover": {
										color: "var(--foreground)",
									},
									transition: "color 0.2s",
								}}
							/>
						</Link>
						<Link
							href={`https://wa.me/${socialLinks[1].url.split("+")[1]}`}
							target="_blank"
							rel="noopener noreferrer">
							<WhatsAppIcon
								fontSize="medium"
								sx={{
									color: "var(--navbar-border)",
									"&:hover": {
										color: "var(--foreground)",
									},
									transition: "color 0.2s",
								}}
							/>
						</Link>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
