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

const { personalInfo, about, skills } = portfolioData.portfolioData;
const { socialLinks } = personalInfo;

export default function Home() {
	return (
		<div className="w-full max-w-5xl mx-auto py-8 px-2 md:px-8 flex flex-col gap-8 sm:m-0 -z-20">
			{/* Header Section */}
			<header className="flex flex-col items-center text-center gap-2">
				<div className="relative h-32 w-32 md:h-40 md:w-40 mb-2 rounded-xl overflow-hidden border-4 border-[var(--accent-primary)] shadow-lg">
					<Image
						src="/avatar.jpg"
						alt="Andrew Emil Avatar"
						fill
						className="object-cover"
						priority
						quality={95}
					/>
				</div>
				<h1 className="text-4xl md:text-5xl font-bold text-[var(--accent-primary)]">
					{personalInfo.name}
				</h1>
				<h2 className="text-xl md:text-2xl font-semibold text-[var(--foreground)]">
					{personalInfo.tagline}
				</h2>
				<p className="text-md md:text-lg text-[var(--foreground)]">
					{personalInfo.currentRole}
				</p>
				<p className="text-sm text-[var(--foreground)] opacity-80">
					{personalInfo.location}
				</p>
			</header>

			{/* About Section */}
			<section className="bg-[var(--card-bg)] rounded-xl shadow-lg p-6">
				<h3 className="text-2xl font-bold mb-2 text-[var(--accent-primary)]">
					{about.title}
				</h3>
				<p className="text-[var(--foreground)] text-lg">{about.description}</p>
			</section>

			{/* Skills Section */}
			<section className="bg-[var(--card-bg)] rounded-xl shadow-lg p-6">
				<h3 className="text-2xl font-bold mb-4 text-[var(--accent-primary)]">
					{skills.title}
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{skills.categories.map((cat) => (
						<div key={cat.name}>
							<h4 className="font-semibold text-lg mb-1 text-[var(--accent-secondary)]">
								{cat.name}
							</h4>
							<ul className="flex flex-wrap gap-2">
								{cat.items.map((item) => (
									<li
										key={item}
										className="bg-[var(--button-secondary-hover-bg)] px-3 py-1 rounded text-sm text-[var(--foreground)] border border-[var(--card-border)]">
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/** Contact section */}
			<section className="bg-[var(--card-bg)] rounded-xl shadow-lg p-6">
				<h3 className="text-2xl font-bold mb-4 text-[var(--accent-primary)]">
					Contact Me
				</h3>
				<div>
					<Info
						icon={<EmailIcon fontSize="medium" />}
						socialObject={socialLinks[0]}
					/>
					<Info
						icon={<SmartphoneIcon fontSize="medium" />}
						socialObject={socialLinks[1]}
					/>
					<Info
						icon={<LocationOnIcon fontSize="medium" />}
						socialObject={{
							name: "Location",
							url: personalInfo.location,
						}}
					/>
				</div>
				<div className="flex justify-center items-center gap-4 flex-row p-2">
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
				</div>
			</section>
		</div>
	);
}
