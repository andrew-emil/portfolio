import CVbutton from "@/components/CVbutton";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Timeline } from "@/components/timeline";
import info from "@/public/data/info.json";
import { PortfolioData } from "@shared/types/portfolioData.type";

export default async function EducationPage() {
  const data: PortfolioData = info.portfolioData;
  const apiUrl = process.env.API_URL;

  const eduItems = data.education.list.map((e) => ({
    degree: e.degree,
    institution: e.institution,
    duration: e.duration,
  }));
  const expItems =
    data.Experience?.list?.map((e) => ({
      title: e.title,
      company: e.company,
      duration: e.duration,
      location: e.location,
      details: e.details,
    })) ?? [];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
      <section className="container mx-auto px-4 py-10">
        <h1 className="mb-8 text-3xl font-bold text-gray-100">Education</h1>
        <Timeline items={eduItems} className="mb-12" />
        <h2 className="mb-6 text-2xl font-semibold text-gray-100">
          Experience
        </h2>
        <Timeline items={expItems} />
      </section>

      <CVbutton apiUrl={apiUrl || ""} />

      <SiteFooter />
    </main>
  );
}
