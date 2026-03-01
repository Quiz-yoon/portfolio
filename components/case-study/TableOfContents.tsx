"use client";

import { useEffect, useState, useRef } from "react";
type TocSection = { id: string; label: string; labelEn?: string; group?: string };

export default function TableOfContents({
  sections,
  mobile = false,
  locked = false,
}: {
  sections: TocSection[];
  mobile?: boolean;
  locked?: boolean;
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
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

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      if (window.scrollY < 200) {
        setActiveId("intro");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleClick = (id: string) => {
    isScrollingRef.current = true;
    setActiveId(id);
    let scrollTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrollingRef.current = false;
        window.removeEventListener("scroll", onScroll);
      }, 150);
    };
    window.addEventListener("scroll", onScroll);
    setTimeout(() => {
      isScrollingRef.current = false;
      window.removeEventListener("scroll", onScroll);
    }, 3000);
    if (id === "intro") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
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
      <nav className="md:hidden" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2]">
          Contents
        </p>
        <ul className="mt-4 flex flex-col gap-0">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full border-l-2 py-2 pl-4 pr-2 text-left text-[13.5px] transition-colors duration-150 ${
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
    <nav className="hidden md:block w-[200px] flex-shrink-0 self-stretch" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
      <div className="sticky top-[80px]">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2]">
          Contents
        </p>
        <ul className="mt-4 flex flex-col gap-0">
          {sections.map((section, i) => {
            const prevGroup = i > 0 ? sections[i - 1].group : undefined;
            const showGroup = section.group && section.group !== prevGroup;
            const isIntro = section.id === "intro";
            const isDisabled = locked && !isIntro;
            return (
              <li key={section.id}>
                {showGroup && (
                  <p className={`pb-4 pl-4 text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2] pt-4 ${isDisabled ? "opacity-30" : ""}`}>
                    {section.group}
                  </p>
                )}
                <button
                  onClick={() => !isDisabled && handleClick(section.id)}
                  className={`w-full border-l-2 py-2 pl-4 pr-2 text-left text-[13.5px] transition-colors duration-150 ${
                    isDisabled
                      ? "border-[#E5E5EA] text-[#E5E5EA] cursor-default"
                      : activeId === section.id
                        ? "border-[#1C1C1E] font-semibold text-[#1C1C1E]"
                        : "border-[#E5E5EA] text-[#8E8E93] hover:text-[#1C1C1E]"
                  }`}
                >
                  {section.labelEn || section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
