"use client";

import { useLocale } from "@/lib/locale-context";
import { aboutData, experienceData } from "@/lib/data";

export default function AboutPage() {
  const { locale } = useLocale();

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

  return (
    <main className="mx-auto w-full self-stretch max-w-[1400px] px-5 pb-20 md:px-[80px]">
      <div className="mx-auto max-w-[800px] pt-16 md:pt-[80px]">
        {/* Intro */}
        <section>
          <div>
            <p className="text-[13.5px] text-[#8E8E93]">
              {aboutData.role}
            </p>
            <h1 className="mt-4 mb-12 text-[32px] font-medium leading-[1.3] text-[#1C1C1E] md:text-[48px]">
              Quiz Yoon
            </h1>
            <p className="text-[16px] leading-[1.7] text-[#48484A]">
              {positioning}
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mt-14">
          <p className="text-[10.5px] font-medium uppercase tracking-widest text-[#AEAEB2]">
            Philosophy
          </p>
          <p className="mt-4 whitespace-pre-line text-[14.5px] leading-[1.85] text-[#48484A]">
            {philosophy}
          </p>
        </section>

        {/* Interests */}
        <section className="mt-14">
          <p className="text-[10.5px] font-medium uppercase tracking-widest text-[#AEAEB2]">
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
        <section className="mt-14">
          <div className="flex flex-col">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#F2F2F7] py-8 last:border-b-0"
              >
                {/* Header: Company + Role + Period */}
                <div>
                  <p className="text-[16px] font-medium text-[#1C1C1E]">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-[13px] text-[#8E8E93]">
                    {exp.period} · {exp.location}
                  </p>
                </div>

                {/* Description + Highlights + Tags */}
                <div className="mt-4">
                  <p className="text-[14px] font-medium text-[#1C1C1E]">
                    {exp.role}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.75] text-[#8E8E93]">
                    {locale === "ko" ? exp.description : exp.descriptionEn}
                  </p>
                  {(locale === "ko" ? exp.highlights : exp.highlightsEn).length > 0 && (
                    <ul className="mt-1.5 flex flex-col gap-1.5">
                      {(locale === "ko" ? exp.highlights : exp.highlightsEn).map((h, i) => (
                        <li
                          key={i}
                          className="text-[13px] leading-[1.4] text-[#8E8E93]"
                        >
                          <span className="mr-1.5 text-[#8E8E93]">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.caseStudySlug && (
                    <a
                      href={`/work/${exp.caseStudySlug}`}
                      className="mt-3 inline-block text-[13px] font-medium text-[#007AFF] hover:underline"
                    >
                      {locale === "ko" ? "케이스 스터디 보기 ↗" : "View case study ↗"}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>



      </div>
    </main>
  );
}
