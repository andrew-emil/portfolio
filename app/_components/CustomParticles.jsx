"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { particlesConfig } from "../_utils/particlesConfig";
import { loadSlim } from "@tsparticles/slim";

export default function CustomParticles() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options = useMemo(() => particlesConfig, []);

	if (init) {
		return (
			<div
				style={{
					position: "fixed",
					inset: 0,
					zIndex: -1,
					width: "100vw",
					height: "100vh",
					pointerEvents: "none",
				}}
				className="particles-bg">
				<Particles id="tsparticles" options={options} />
			</div>
		);
	}

	return <></>;
}
