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

const educationList = info.portfolioData.education.list.reverse();
const experienceList = info.portfolioData.Experience.list.reverse();

export default function EducationExperienceTimeline() {
	return (
		<div className="relative max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
			{/* Header */}
			<header className="mb-12">
				<h2 className="text-4xl md:text-5xl font-bold text-[var(--accent-primary)]">
					Resume
				</h2>
			</header>

			{/* Education Section */}
			<div className="flex items-center mb-8">
				<School
					className="text-[var(--accent-primary)] mr-3"
					fontSize="large"
				/>
				<h3 className="text-3xl font-extrabold text-foreground tracking-tight">
					Education
				</h3>
				<span className="flex-1 h-1 bg-[var(--accent-primary)] ml-4 rounded-full opacity-40"></span>
			</div>
			<Timeline
				className="mb-12"
				sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}>
				{educationList.map((edu, idx) => (
					<TimelineItem key={idx} className="flex items-stretch">
						{/* Left: Icon and Connector */}
						<TimelineSeparator className="flex flex-col items-center mr-4">
							<div className="bg-black border border-[var(--accent-primary)] rounded-lg p-2 flex items-center justify-center shadow-md">
								<School className="text-foreground" fontSize="small" />
							</div>
							{idx < educationList.length - 1 && (
								<TimelineConnector className="bg-[var(--accent-primary)] w-1 flex-1 my-1 rounded-full" />
							)}
						</TimelineSeparator>
						{/* Right: Content */}
						<TimelineContent className="flex-1 py-2 px-0">
							<div className="bg-card-bg rounded-lg shadow-lg p-5 min-w-[220px] w-full border-l-4 border-[var(--accent-primary)]">
								<h4 className="text-lg font-bold text-foreground mb-1">
									{edu.institution}
								</h4>
								<p className="text-foreground/60 text-base mb-1">
									{edu.degree}
								</p>
								<span className="text-[var(--accent-primary)] font-semibold text-sm">
									{edu.duration}
								</span>
							</div>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>

			{/* Experience Section */}
			<div className="flex items-center mb-8 mt-16">
				<Work
					className="text-[var(--accent-secondary)] mr-3"
					fontSize="large"
				/>
				<h3 className="text-3xl font-extrabold text-foreground tracking-tight">
					Experience
				</h3>
				<span className="flex-1 h-1 bg-[var(--accent-secondary)] ml-4 rounded-full opacity-40"></span>
			</div>
			<Timeline
				sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}>
				{experienceList.map((exp, idx) => (
					<TimelineItem key={idx} className="flex items-stretch">
						{/* Left: Icon and Connector */}
						<TimelineSeparator className="flex flex-col items-center mr-4">
							<div className="bg-black border border-[var(--accent-secondary)] rounded-lg p-2 flex items-center justify-center shadow-md">
								<Work className="text-foreground" fontSize="small" />
							</div>
							{idx < experienceList.length - 1 && (
								<TimelineConnector className="bg-[var(--accent-secondary)] w-1 flex-1 my-1 rounded-full" />
							)}
						</TimelineSeparator>
						{/* Right: Content */}
						<TimelineContent className="flex-1 py-2 px-0">
							<div className="bg-card-bg rounded-lg shadow-lg p-5 min-w-[240px] max-w-md w-full border-l-4 border-[var(--accent-secondary)]">
								<h4 className="text-lg font-bold text-foreground mb-1">
									{exp.title}
								</h4>
								<p className="text-foreground/60 text-base mb-1 font-medium">
									{exp.company}
								</p>
								<div className="flex flex-wrap items-center gap-2 mb-1">
									<span className="text-[var(--accent-secondary)] font-semibold text-sm">
										{exp.duration}
									</span>
									{exp.location && (
										<span className="text-xs italic text-accent-secondary">
											{exp.location}
										</span>
									)}
								</div>
								<ul className="list-disc pl-5 space-y-1">
									{exp.details &&
										exp.details.map((detail, i) => (
											<li key={i} className="text-foreground/70 text-sm">
												{detail}
											</li>
										))}
								</ul>
							</div>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>

			{/* Floating Download CV Button */}
			<div className="absolute right-6 bottom-6 z-20">
				<CvButton />
			</div>
		</div>
	);
}
