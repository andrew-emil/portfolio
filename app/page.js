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
		<div className="w-full max-w-5xl mx-auto py-6 sm:py-8 px-2 sm:px-4 md:px-8 flex flex-col gap-6 sm:gap-8 -z-20">
			{/* Header Section */}
			<header className="flex flex-col items-center text-center gap-2 sm:gap-3">
				<div className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 mb-2 rounded-xl overflow-hidden border-4 border-[var(--accent-primary)] shadow-lg">
					<Image
						src="/profile.jpg"
						alt="Andrew Emil Avatar"
						fill
						className="object-cover"
						priority
						quality={100}
					/>
				</div>
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--accent-primary)]">
					{personalInfo.name}
				</h1>
				<h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--foreground)]">
					{personalInfo.tagline}
				</h2>
				<p className="text-sm sm:text-md md:text-lg text-[var(--foreground)]">
					{personalInfo.currentRole}
				</p>
				<p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80">
					{personalInfo.location}
				</p>
			</header>

			{/* About Section */}
			<section className="bg-[var(--card-bg)] rounded-xl shadow-lg p-4 sm:p-6">
				<h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[var(--accent-primary)]">
					{about.title}
				</h3>
				<p className="text-[var(--foreground)] text-lg">{about.description}</p>
			</section>

			{/* Skills Section */}
			<section className="bg-[var(--card-bg)] rounded-xl shadow-lg p-4 sm:p-6">
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
			<section className="bg-[var(--card-bg)] rounded-xl shadow-lg p-4 sm:p-6">
				<h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[var(--accent-primary)]">
					Contact Me
				</h3>
				<div>
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
				</div>
				<div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 p-2">
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
