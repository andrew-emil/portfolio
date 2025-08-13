import { PortfolioData } from "@shared/types/portfolioData.type"

export async function getPortfolioData(): Promise<PortfolioData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/info.json`)
  if (!res.ok) {
    throw new Error("Failed to load portfolio info.json")
  }
  const json = await res.json()
  return (json.portfolioData ?? json) as PortfolioData
}