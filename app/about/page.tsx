"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { aboutData, experienceData } from "@/lib/data";
import TableOfContents from "@/components/case-study/TableOfContents";
import ScrollVideo from "@/components/scroll-video/ScrollVideo";

export default function AboutPage() {
  const { locale } = useLocale();
  const [tooltip, setTooltip] = useState<{ x: number; y: number; visible: boolean; logo: string | null }>({ x: 0, y: 0, visible: false, logo: null });

  const positioning =
    locale === "ko" ? aboutData.positioning : aboutData.positioningEn;
  const philosophy =
    locale === "ko" ? aboutData.philosophy : aboutData.philosophyEn;
  const interests =
    locale === "ko" ? aboutData.interests : aboutData.interestsEn;
  const currentlyExploring =
    locale === "ko"
      ? aboutData.currentlyExploring
      : aboutData.currentlyExploringEn;

  const aboutSections = [
    { id: "intro", label: "Intro" },
    { id: "philosophy", label: "Philosophy" },
    { id: "interests", label: "Interests" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <main className="mx-auto w-full max-w-[1400px] px-5 pb-20 md:px-[80px]">
      <div className="mx-auto flex items-start gap-[48px]" style={{ maxWidth: "992px" }}>
      <div className="min-w-0 flex-1 max-w-[760px] pt-16 md:pt-[80px]">
        {/* Scroll Video */}
        <div id="intro">
          <ScrollVideo src="/videos/도_왼쪽_회전_영상_생성.mp4" />
        </div>

        {/* Content wrapper - covers sticky video */}
        <div className="relative z-30 bg-white pt-12 md:pt-[80px]">
        {/* Intro */}
        <section>
          <div>
            <p className="text-[13.5px] text-[#8E8E93]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              {aboutData.role}
            </p>
            <h1 className="mt-4 mb-12 text-[32px] font-medium leading-[1.3] text-[#1C1C1E] md:text-[48px]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              Quiz Yoon
            </h1>
            <p className="text-[16px] leading-[1.7] text-[#48484A]">
              {positioning}
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="mt-14 scroll-mt-[80px]">
          <p className="text-[10.5px] font-medium uppercase tracking-widest text-[#AEAEB2]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Philosophy
          </p>
          <p className="mt-4 whitespace-pre-line text-[14.5px] leading-[1.85] text-[#48484A]">
            {philosophy}
          </p>
        </section>

        {/* Interests */}
        <section id="interests" className="mt-14 scroll-mt-[80px]">
          <p className="text-[10.5px] font-medium uppercase tracking-widest text-[#AEAEB2]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Interests
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-md bg-[#F2F2F7] px-2.5 py-1 text-[13px] text-[#48484A]"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-14 scroll-mt-[80px]">
          <div className="flex flex-col">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className={`border-b border-[#F2F2F7] py-8 last:border-b-0${exp.caseStudySlug ? " cursor-none" : ""}`}
                onClick={exp.caseStudySlug ? () => window.location.href = `/work/${exp.caseStudySlug}` : undefined}
                onMouseMove={exp.caseStudySlug ? (e) => setTooltip({ x: e.clientX, y: e.clientY, visible: true, logo: exp.logo }) : undefined}
                onMouseLeave={exp.caseStudySlug ? () => setTooltip((t) => ({ ...t, visible: false })) : undefined}
              >
                {/* Header: Company + Role + Period */}
                <div>
                  <p className="text-[18px] font-semibold text-[#1C1C1E]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                    {exp.company}
                  </p>
                  <p className="mt-1 text-[14.5px] text-[#636366]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                    {exp.period} · {exp.location}
                  </p>
                </div>

                {/* Description + Highlights + Tags */}
                <div className="mt-4">
                  <p className="text-[16px] font-medium text-[#1C1C1E]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                    {exp.role}
                  </p>
                  <p className="mt-1.5 text-[14.5px] leading-[1.75] text-[#636366]">
                    {locale === "ko" ? exp.description : exp.descriptionEn}
                  </p>
                  {(locale === "ko" ? exp.highlights : exp.highlightsEn).length > 0 && (
                    <ul className="mt-1.5 flex flex-col gap-1.5">
                      {(locale === "ko" ? exp.highlights : exp.highlightsEn).map((h, i) => (
                        <li
                          key={i}
                          className="text-[14.5px] leading-[1.4] text-[#636366]"
                        >
                          <span className="mr-1.5 text-[#636366]">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        </div>
        {/* Mobile TOC */}
        <div className="mb-16 md:hidden">
          <TableOfContents sections={aboutSections} mobile />
        </div>
      </div>

      {/* Right TOC */}
      <TableOfContents sections={aboutSections} />
      </div>

      {/* Cursor tooltip */}
      {tooltip.visible && (
        <div
          className="pointer-events-none fixed z-50"
          style={{ left: tooltip.x + 16, top: tooltip.y + 16 }}
        >
          <div
            className="flex items-center gap-2 rounded-full py-3 pl-3 pr-5 text-[14px] font-semibold"
            style={{
              background: "rgba(0,0,0,0.03)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "none",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.7), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.04)",
              color: "rgba(0,0,0,0.75)",
            }}
          >
            {tooltip.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tooltip.logo} alt="" className="h-5 w-5 rounded-full object-cover" />
            )}
            {locale === "ko" ? "프로젝트 보러가기" : "View project"}
            <ArrowUpRight size={14} />
          </div>
        </div>
      )}
    </main>
  );
}
