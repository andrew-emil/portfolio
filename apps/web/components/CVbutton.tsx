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
            window.open(`${apiUrl}/uploads`, "_blank");
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
            loading={loading}
            disabled={loading}
            onClick={handleDownload}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-600 to-fuchsia-600 px-3 sm:px-4 py-2 text-white shadow-[0_0_24px_rgba(168,85,247,0.7)] transition-all hover:-translate-y-0.5 hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] text-sm"
        >
            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">
                {loading ? "Downloading..." : "Download CV"}
            </span>
            <span className="sm:hidden">
                {loading ? "Downloading..." : "CV"}
            </span>
        </GlowButton>
    );
}
export default CVbutton;
