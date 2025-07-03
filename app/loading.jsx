import React from "react";

const Loading = () => (
	<div className="flex flex-col items-center justify-center min-h-[40vh]">
		<div className="relative mb-6">
			<span
				className="block w-16 h-16 border-4 border-accent-primary border-t-transparent rounded-full animate-spin shadow-lg"
				style={{
					boxShadow:
						"0 0 32px var(--accent-primary), 0 2px 8px var(--accent-secondary)",
				}}
			/>
			<span
				className="absolute inset-0 rounded-full blur-xl opacity-40"
				style={{
					background:
						"radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
				}}
			/>
		</div>
		<span
			className="text-accent-primary text-xl font-semibold animate-pulse tracking-wide select-none"
			style={{ textShadow: "0 2px 16px var(--accent-secondary)" }}>
			Loading...
		</span>
	</div>
);

export default Loading;
