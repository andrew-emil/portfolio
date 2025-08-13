"use client";

import { Download } from "lucide-react";
import { GlowButton } from "./glow-button";
import { useState } from "react";

function CVbutton({ apiUrl }: { apiUrl: string }) {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        try {
            if (!apiUrl || apiUrl.trim() === "") {
                throw new Error("API URL is not defined");
            }
            setLoading(true);
            const response = await fetch(`${apiUrl}/uploads`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("Failed to download CV");
            }
            const { secureUrl } = await response.json();
            if (!secureUrl) throw new Error("No CV URL found");

            const link = document.createElement("a");
            link.href = secureUrl;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("Download failed:", error);
            alert("Failed to download file");
        } finally {
            setLoading(false);
        }
    };
    return (
        <GlowButton
            type="button"
            className="fixed bottom-4 right-4"
            loading={loading}
            disabled={loading}
            onClick={handleDownload}
        >
            <Download className="ml-2 h-5 w-5" />
            {loading ? "Downloading..." : "Download CV"}
        </GlowButton>
    );
}
export default CVbutton;