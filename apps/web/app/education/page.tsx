import CVbutton from "@/components/CVbutton";
import { Timeline } from "@/components/timeline";
import info from "@/public/data/info.json";
import { PortfolioData } from "@shared/types/portfolioData.type";
import { Briefcase, GraduationCap } from "lucide-react";

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
    <>
      <section className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-10">
        <div className="space-y-12 sm:space-y-16">
          {/* Education Section */}
          <div>
            <div className="mb-8 sm:mb-12 flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-purple-400" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  Education
                </h1>
                <p className="text-sm text-gray-400 mt-1">Academic background and qualifications</p>
              </div>
            </div>
            <Timeline items={eduItems} />
          </div>

          {/* Experience Section */}
          {expItems.length > 0 && (
            <div>
              <div className="mb-8 sm:mb-12 flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                    Experience
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">Professional work experience and achievements</p>
                </div>
              </div>
              <Timeline items={expItems} />
            </div>
          )}
        </div>
      </section>
      <CVbutton apiUrl={apiUrl || ""} />
    </>
  )
}
