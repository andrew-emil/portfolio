import { School, Work } from "@mui/icons-material";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineItem,
	timelineItemClasses,
	TimelineSeparator,
} from "@mui/lab";
import CvButton from "../_components/CvButton";
import info from "../assets/info.json";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const educationList = info.portfolioData.education.list.reverse();
const experienceList = info.portfolioData.Experience.list.reverse();

export default function EducationExperienceTimeline() {
	return (
		<Container>
			<Box
				sx={{
					position: "relative",
					maxWidth: "4xl",
					mx: "auto",
					py: { xs: 6, sm: 8, md: 12 },
					px: { xs: 1, sm: 3, md: 4 },
					minHeight: "100vh",
				}}>
				{/* Header */}
				<Box
					component="header"
					sx={{
						mb: { xs: 6, sm: 8, md: 12 },
					}}>
					<Typography
						variant="h2"
						sx={{
							fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
							fontWeight: "bold",
							color: "var(--accent-primary)",
						}}>
						Resume
					</Typography>
				</Box>

				{/* Education Section */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						mb: { xs: 4, sm: 6, md: 8 },
					}}>
					<School
						sx={{
							color: "var(--accent-primary)",
							mr: 1.5,
							fontSize: "large",
						}}
					/>
					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "1.875rem", sm: "2.25rem", md: "1.875rem" },
							fontWeight: 800,
							color: "var(--foreground)",
							letterSpacing: "tight",
						}}>
						Education
					</Typography>
					<Box
						sx={{
							flex: 1,
							height: 4,
							bgcolor: "var(--accent-primary)",
							ml: 2,
							borderRadius: "full",
							opacity: 0.4,
						}}
					/>
				</Box>
				<Timeline
					sx={{
						mb: { xs: 6, sm: 8, md: 12 },
						[`& .${timelineItemClasses.root}:before`]: {
							flex: 0,
							padding: 0,
						},
					}}>
					{educationList.map((edu, idx) => (
						<TimelineItem
							key={idx}
							sx={{ display: "flex", alignItems: "stretch" }}>
							{/* Left: Icon and Connector */}
							<TimelineSeparator
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									mr: 2,
								}}>
								<Box
									sx={{
										bgcolor: "black",
										border: "1px solid var(--accent-primary)",
										borderRadius: 2,
										p: 1,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										boxShadow: 2,
									}}>
									<School
										sx={{ color: "var(--foreground)", fontSize: "small" }}
									/>
								</Box>
								{idx < educationList.length - 1 && (
									<TimelineConnector
										sx={{
											bgcolor: "var(--accent-primary)",
											width: 4,
											flex: 1,
											my: 0.5,
											borderRadius: "full",
										}}
									/>
								)}
							</TimelineSeparator>
							{/* Right: Content */}
							<TimelineContent sx={{ flex: 1, py: 1, px: 0 }}>
								<Box
									sx={{
										bgcolor: "var(--card-bg)",
										borderRadius: 2,
										boxShadow: 3,
										p: { xs: 3, sm: 4, md: 5 },
										minWidth: { xs: "auto", sm: 220 },
										width: "100%",
										borderLeft: "4px solid var(--accent-primary)",
									}}>
									<Typography
										variant="h5"
										sx={{
											fontSize: "1.125rem",
											fontWeight: "bold",
											color: "var(--foreground)",
											mb: 0.5,
										}}>
										{edu.institution}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											color: "var(--foreground)",
											opacity: 0.6,
											fontSize: "1rem",
											mb: 0.5,
										}}>
										{edu.degree}
									</Typography>
									<Typography
										variant="body2"
										sx={{
											color: "var(--accent-primary)",
											fontWeight: 600,
											fontSize: "0.875rem",
										}}>
										{edu.duration}
									</Typography>
								</Box>
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>

				{/* Experience Section */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						mb: { xs: 4, sm: 6, md: 8 },
						mt: { xs: 8, sm: 12, md: 16 },
					}}>
					<Work
						sx={{
							color: "var(--accent-secondary)",
							mr: 1.5,
							fontSize: "large",
						}}
					/>
					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "1.875rem", sm: "2.25rem", md: "1.875rem" },
							fontWeight: 800,
							color: "var(--foreground)",
							letterSpacing: "tight",
						}}>
						Experience
					</Typography>
					<Box
						sx={{
							flex: 1,
							height: 4,
							bgcolor: "var(--accent-secondary)",
							ml: 2,
							borderRadius: "full",
							opacity: 0.4,
						}}
					/>
				</Box>
				<Timeline
					sx={{
						[`& .${timelineItemClasses.root}:before`]: {
							flex: 0,
							padding: 0,
						},
					}}>
					{experienceList.map((exp, idx) => (
						<TimelineItem
							key={idx}
							sx={{ display: "flex", alignItems: "stretch" }}>
							{/* Left: Icon and Connector */}
							<TimelineSeparator
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									mr: 2,
								}}>
								<Box
									sx={{
										bgcolor: "black",
										border: "1px solid var(--accent-secondary)",
										borderRadius: 2,
										p: 1,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										boxShadow: 2,
									}}>
									<Work
										sx={{ color: "var(--foreground)", fontSize: "small" }}
									/>
								</Box>
								{idx < experienceList.length - 1 && (
									<TimelineConnector
										sx={{
											bgcolor: "var(--accent-secondary)",
											width: 4,
											flex: 1,
											my: 0.5,
											borderRadius: "full",
										}}
									/>
								)}
							</TimelineSeparator>
							{/* Right: Content */}
							<TimelineContent sx={{ flex: 1, py: 1, px: 0 }}>
								<Box
									sx={{
										bgcolor: "var(--card-bg)",
										borderRadius: 2,
										boxShadow: 3,
										p: { xs: 3, sm: 4, md: 5 },
										minWidth: { xs: "auto", sm: 240 },
										maxWidth: { xs: "100%", sm: "md" },
										width: "100%",
										borderLeft: "4px solid var(--accent-secondary)",
									}}>
									<Typography
										variant="h5"
										sx={{
											fontSize: "1.125rem",
											fontWeight: "bold",
											color: "var(--foreground)",
											mb: 0.5,
										}}>
										{exp.title}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											color: "var(--foreground)",
											opacity: 0.6,
											fontSize: "1rem",
											mb: 0.5,
											fontWeight: 500,
										}}>
										{exp.company}
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexWrap: "wrap",
											alignItems: "center",
											gap: 1,
											mb: 0.5,
										}}>
										<Typography
											variant="body2"
											sx={{
												color: "var(--accent-secondary)",
												fontWeight: 600,
												fontSize: "0.875rem",
											}}>
											{exp.duration}
										</Typography>
										{exp.location && (
											<Typography
												variant="body2"
												sx={{
													fontSize: "0.75rem",
													fontStyle: "italic",
													color: "var(--accent-secondary)",
												}}>
												{exp.location}
											</Typography>
										)}
									</Box>
									<Box
										component="ul"
										sx={{
											listStyle: "disc",
											pl: 2.5,
											"& li": {
												color: "var(--foreground)",
												opacity: 0.7,
												fontSize: "0.875rem",
												mb: 0.5,
											},
										}}>
										{exp.details &&
											exp.details.map((detail, i) => (
												<Box component="li" key={i}>
													{detail}
												</Box>
											))}
									</Box>
								</Box>
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>

				<Box
					sx={{
						position: "absolute",
						right: { xs: 1, sm: 2 },
						bottom: { xs: 2, sm: 3, md:4 },
						zIndex: 20,
					}}>
					<CvButton />
				</Box>
			</Box>
		</Container>
	);
}
