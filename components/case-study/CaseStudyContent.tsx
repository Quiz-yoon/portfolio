"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import type { CaseStudy } from "@/lib/data";
import TeamCredits from "@/components/case-study/TeamCredits";
import ProjectNavigation from "@/components/case-study/ProjectNavigation";
import PasswordGate from "@/components/case-study/PasswordGate";
import TableOfContents from "@/components/case-study/TableOfContents";


export default function CaseStudyContent({ study }: { study: CaseStudy }) {
  const { locale } = useLocale();
  const isKo = locale === "ko";
  const [gateUnlocked, setGateUnlocked] = useState(false);

  return (
    <div className="flex items-start gap-12">
      {/* Main content */}
      <div className="min-w-0 flex-1">
        {/* Cover Image */}
        {study.cover && (
          <section className="mb-12 pt-10 md:mb-[80px]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.cover}
                alt={study.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </section>
        )}

        {/* Hero */}
        <section className="mb-16 md:mb-[100px]">
          <div className="mx-auto max-w-[800px]">
            <p className="text-[13.5px] text-[#8E8E93]">
              {study.title}
            </p>
            <h1 className="mt-4 mb-12 text-[28px] font-medium leading-[1.3] text-[#1C1C1E] md:text-[48px]">
              {isKo && study.impactKo ? study.impactKo : study.impact}
            </h1>
            {study.sections[0] && (
              <p className="text-[16px] leading-[1.7] text-[#48484A]">
                {isKo
                  ? study.sections[0].content
                  : (study.sections[0].contentEn || study.sections[0].content)}
              </p>
            )}
          </div>

          {/* Project Overview */}
          <div className="mx-auto max-w-[800px] pt-16">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
              <div>
                <p className="text-[16px] font-medium text-[#1C1C1E]">Year</p>
                <p className="mt-1 text-[16px] text-[#8E8E93]">{study.period}</p>
              </div>
              <div>
                <p className="text-[16px] font-medium text-[#1C1C1E]">Company</p>
                <p className="mt-1 text-[16px] text-[#8E8E93]">{study.company}</p>
              </div>
              <div>
                <p className="text-[16px] font-medium text-[#1C1C1E]">Category</p>
                <p className="mt-1 text-[16px] text-[#8E8E93]">{study.category}</p>
              </div>
              <div>
                <p className="text-[16px] font-medium text-[#1C1C1E]">Role</p>
                <p className="mt-1 text-[16px] text-[#8E8E93]">{study.role}</p>
              </div>
            </div>
          </div>
        </section>

        <PasswordGate onUnlock={setGateUnlocked}>
        {/* Sections */}
        {study.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16 md:mb-[100px]">
              <div className="mx-auto max-w-[800px]">
              {/* Image */}
              {section.images && section.images.length > 0 ? (
                section.images.map((img) => (
                  <figure
                    key={img.src}
                    className="mb-12 md:mb-[80px]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.caption || ""} className="w-full" />
                    {img.caption && (
                      <figcaption className="mt-2 text-center text-[11.5px] text-[#8E8E93]">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))
              ) : (
                <div className="mb-12 w-full overflow-hidden md:mb-[80px]" style={{ aspectRatio: "16 / 9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/JPEG 이미지.jpeg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Text */}
                <p className="text-[14px] text-[#8E8E93]">
                  {section.labelEn || section.label}
                </p>
                <h2 className="mt-3 text-[22px] font-semibold leading-[1.5] text-[#1C1C1E] md:text-[28px]">
                  {isKo ? section.headline : (section.headlineEn || section.headline)}
                </h2>
                <p className="mt-8 text-[16px] leading-[1.7] text-[#48484A]">
                  {isKo ? section.content : (section.contentEn || section.content)}
                </p>
              </div>
            </section>
          ))}

          {/* Team Credits */}
          <TeamCredits team={study.team} />

        </PasswordGate>

        {/* Prev / Next Navigation */}
        <div className={gateUnlocked ? "mt-20 md:mt-[150px]" : ""}>
          <ProjectNavigation
            prevProject={study.prevProject}
            nextProject={study.nextProject}
          />
        </div>
      </div>

      {/* Right TOC */}
      <TableOfContents sections={study.sections} />
    </div>
  );
}
