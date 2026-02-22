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
    <main className="mx-auto w-full self-stretch max-w-[1400px] px-[80px] pb-20">
      <div className="mx-auto max-w-[800px] pt-[80px]">
        {/* Intro */}
        <section>
          <div>
            <p className="text-[13.5px] text-[#8E8E93]">
              {aboutData.role}
            </p>
            <h1 className="mt-4 mb-12 text-[48px] font-medium leading-[1.3] text-[#1C1C1E]">
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

        {/* Currently Exploring */}
        <section className="mt-14">
          <p className="text-[10.5px] font-medium uppercase tracking-widest text-[#AEAEB2]">
            Currently Exploring
          </p>
          <p className="mt-4 text-[14px] text-[#48484A]">
            {currentlyExploring}
          </p>
        </section>

        {/* Experience */}
        <section className="mt-14">
          <p className="text-[10.5px] font-medium uppercase tracking-widest text-[#AEAEB2]">
            Experience
          </p>
          <div className="mt-4 flex flex-col">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="border-b border-[#F2F2F7] py-5 last:border-b-0"
              >
                {/* Header: Company + Role + Period */}
                <div className="flex items-center gap-3">
                  <div className="flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-[8px] bg-[#F2F2F7]">
                    <span className="text-[13px] font-medium text-[#8E8E93]">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 items-baseline justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[14px] font-medium text-[#1C1C1E]">
                        {exp.company}
                      </span>
                      <span className="ml-2 text-[13px] text-[#8E8E93]">
                        {exp.role}
                      </span>
                    </div>
                    <span className="flex-shrink-0 text-[12px] text-[#AEAEB2]">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description + Highlights + Tags */}
                <div className="mt-3 pl-[48px]">
                  <p className="text-[13.5px] leading-[1.75] text-[#48484A]">
                    {locale === "ko" ? exp.description : exp.descriptionEn}
                  </p>
                  {(locale === "ko" ? exp.highlights : exp.highlightsEn).length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {(locale === "ko" ? exp.highlights : exp.highlightsEn).map((h, i) => (
                        <li
                          key={i}
                          className="text-[13px] leading-[1.6] text-[#8E8E93]"
                        >
                          <span className="mr-1.5 text-[#D1D1D6]">·</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#EFF6FF] px-2 py-0.5 text-[11px] font-medium text-[#2563EB]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

        {/* Education + Languages */}
        <section className="mt-14">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10.5px] font-medium uppercase tracking-widest text-[#AEAEB2]">
                Education
              </p>
              <div className="mt-4">
                <p className="text-[14px] font-medium text-[#1C1C1E]">
                  {locale === "ko"
                    ? aboutData.education.school
                    : aboutData.education.schoolEn}
                </p>
                <p className="mt-1 text-[13px] text-[#8E8E93]">
                  {locale === "ko"
                    ? aboutData.education.major
                    : aboutData.education.majorEn}
                </p>
                <p className="mt-1 text-[12px] text-[#AEAEB2]">
                  {aboutData.education.period}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10.5px] font-medium uppercase tracking-widest text-[#AEAEB2]">
                Languages
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {aboutData.languages.map((l) => (
                  <div key={l.lang} className="flex items-baseline gap-2">
                    <span className="text-[14px] font-medium text-[#1C1C1E]">
                      {locale === "ko" ? l.lang : l.langEn}
                    </span>
                    <span className="text-[13px] text-[#8E8E93]">
                      {locale === "ko" ? l.level : l.levelEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


      </div>
    </main>
  );
}
