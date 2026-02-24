"use client";

import { useEffect, useState } from "react";
type TocSection = { id: string; label: string; labelEn?: string };

export default function TableOfContents({
  sections,
  mobile = false,
}: {
  sections: TocSection[];
  mobile?: boolean;
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -80% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Section not rendered (locked) → scroll to password gate
      const gate = document.getElementById("password-gate");
      if (gate) {
        gate.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  if (mobile) {
    return (
      <nav className="md:hidden">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2]">
          Contents
        </p>
        <ul className="mt-4 flex flex-col gap-0">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full border-l-2 py-2.5 pl-4 pr-2 text-left text-[13.5px] transition-colors duration-150 ${
                  activeId === section.id
                    ? "border-[#1C1C1E] font-semibold text-[#1C1C1E]"
                    : "border-[#E5E5EA] text-[#8E8E93] hover:text-[#1C1C1E]"
                }`}
              >
                {section.labelEn || section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="hidden md:block w-[200px] flex-shrink-0 self-stretch">
      <div className="sticky top-[80px]">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2]">
          Contents
        </p>
        <ul className="mt-4 flex flex-col gap-0">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full border-l-2 py-2.5 pl-4 pr-2 text-left text-[13.5px] transition-colors duration-150 ${
                  activeId === section.id
                    ? "border-[#1C1C1E] font-semibold text-[#1C1C1E]"
                    : "border-[#E5E5EA] text-[#8E8E93] hover:text-[#1C1C1E]"
                }`}
              >
                {section.labelEn || section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
