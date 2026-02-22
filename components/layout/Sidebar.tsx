"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { sidebarData } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

const allSectionIds = [
  "about",
  ...sidebarData.projects.flatMap((p) =>
    p.children ? p.children.map((c) => c.id) : [p.id],
  ),
  ...sidebarData.designEngineering.map((d) => d.id),
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, toggleLocale } = useLocale();
  const isWorkPage = pathname.startsWith("/work/");
  const currentSlug = isWorkPage ? pathname.replace("/work/", "") : null;

  const [active, setActive] = useState("about");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Sync active state with pathname
  useEffect(() => {
    if (currentSlug) {
      setActive(currentSlug);
      const parent = sidebarData.projects.find((p) =>
        p.children?.some((c) => c.id === currentSlug),
      );
      if (parent) {
        setExpanded({ [parent.id]: true });
      }
    } else if (pathname === "/about") {
      setActive("about");
    } else if (pathname.startsWith("/")) {
      const segment = pathname.replace("/", "");
      if (segment) setActive(segment);
    }
  }, [currentSlug, pathname]);

  useEffect(() => {
    if (isWorkPage) return;

    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && allSectionIds.includes(hash)) {
        setActive(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", handleHash);
      observer.disconnect();
    };
  }, []);

  const linkBase =
    "flex items-center rounded-md px-3 py-2 text-[15px] font-medium transition-colors duration-150";
  const linkDefault = "text-[#48484A] hover:text-[#1C1C1E]";
  const linkActive = "bg-white text-[#1C1C1E] shadow-[0_1px_3px_rgba(0,0,0,0.06)]";

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7F7FA] md:hidden"
        aria-label="Open menu"
      >
        <Menu size={20} className="text-[#1C1C1E]" />
      </button>

      {/* Overlay — mobile only */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[2px] md:hidden"
          onClick={closeMobile}
        />
      )}

      <aside className={`fixed left-0 top-0 z-40 flex h-screen w-[250px] flex-col bg-[#F7F7FA] px-4 pt-6 pb-4 text-[#8E8E93] transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:z-10 md:translate-x-0`}>
      {/* Close button — mobile only */}
      <button
        onClick={closeMobile}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md hover:bg-[#EBEBF0] md:hidden"
        aria-label="Close menu"
      >
        <X size={18} className="text-[#8E8E93]" />
      </button>

      {/* Scrollable menu area */}
      <div className="flex-1 overflow-y-auto">
      {/* Name */}
      <div className="flex items-center gap-2 px-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/profile.png"
          alt={sidebarData.name}
          className="h-[40px] w-[40px] rounded-full border border-[#E5E5EA] object-cover"
        />
        <span className="text-[16px] font-semibold text-[#1C1C1E]">
          {sidebarData.name}
        </span>
      </div>

      {/* Information */}
      <div className="mt-8">
        <p className="px-3 text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2]">
          Information
        </p>
        <button
          onClick={() => {
            setActive("about");
            setExpanded({});
            router.push("/about");
            closeMobile();
          }}
          className={`mt-2 w-full text-left ${linkBase} ${active === "about" ? linkActive : linkDefault}`}
        >
          About
        </button>
      </div>

      {/* Projects */}
      <div className="mt-6">
        <p className="px-3 text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2]">
          Projects
        </p>
        <nav className="mt-2 flex flex-col gap-0.5">
          {sidebarData.projects.map((project) =>
            project.children ? (
              <div key={project.id}>
                <button
                  onClick={() => {
                    const wasExpanded = expanded[project.id];
                    setExpanded({
                      [project.id]: !wasExpanded,
                    });
                    if (!wasExpanded && project.children?.[0]) {
                      setActive(project.children[0].id);
                      router.push(`/work/${project.children[0].id}`);
                      closeMobile();
                    }
                  }}
                  className={`${linkBase} w-full justify-between ${project.children?.some((c) => c.id === active) ? linkActive : linkDefault}`}
                >
                  {project.name}
                  <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-[4px] bg-[#EBEBF0] text-[11px] font-medium text-current">{project.children.length}</span>
                </button>
                <div
                  className={`ml-5 overflow-hidden transition-all duration-200 ${expanded[project.id] ? "mt-2 py-1" : ""}`}
                  style={{
                    maxHeight: expanded[project.id] ? "200px" : "0px",
                    opacity: expanded[project.id] ? 1 : 0,
                  }}
                >
                  {project.children.map((child) => (
                    <Link
                      key={child.id}
                      href={`/work/${child.id}`}
                      onClick={() => { setActive(child.id); closeMobile(); }}
                      className={`flex items-center border-l-2 py-2 pl-4 pr-3 text-[13.5px] transition-colors duration-150 ${active === child.id ? "border-[#1C1C1E] text-[#1C1C1E]" : "border-[#D1D1D6] text-[#AEAEB2] hover:text-[#1C1C1E]"}`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                onClick={() => {
                  setActive(project.id);
                  setExpanded({});
                  closeMobile();
                }}
                className={`${linkBase} justify-between ${active === project.id ? linkActive : linkDefault}`}
              >
                {project.name}
                <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-[4px] bg-[#EBEBF0] text-[11px] font-medium text-current">1</span>
              </Link>
            ),
          )}
        </nav>

      </div>

      {/* Design Engineering */}
      <div className="mt-6">
        <p className="px-3 text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2]">
          Design Engineering
        </p>
        <nav className="mt-2 flex flex-col gap-0.5">
          {sidebarData.designEngineering.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              onClick={() => {
                setActive(item.id);
                setExpanded({});
                closeMobile();
              }}
              className={`${linkBase} ${active === item.id ? linkActive : linkDefault}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Contact */}
      <div className="mt-6">
        <p className="px-3 text-[11px] font-medium uppercase tracking-wider text-[#AEAEB2]">
          Contact
        </p>
        <nav className="mt-2 flex flex-col gap-0.5">
          {sidebarData.contact.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${linkBase} justify-between ${linkDefault}`}
            >
              {item.name}
              <ArrowUpRight size={14} className="text-[#C7C7CC] transition-colors duration-150 group-hover:text-[#1C1C1E]" />
            </a>
          ))}
        </nav>
      </div>
      </div>

      {/* Language Toggle — fixed bottom */}
      <div className="flex-shrink-0 px-3 pb-2 pt-2">
        <div className="flex h-[36px] rounded-lg bg-[#EBEBF0] p-[3px]">
          <button
            onClick={() => locale !== "ko" && toggleLocale()}
            className={`flex-1 rounded-md text-[13px] font-medium transition-all duration-150 ${
              locale === "ko"
                ? "bg-white text-[#1C1C1E] shadow-sm"
                : "text-[#8E8E93] hover:text-[#48484A]"
            }`}
          >
            KR
          </button>
          <button
            onClick={() => locale !== "en" && toggleLocale()}
            className={`flex-1 rounded-md text-[13px] font-medium transition-all duration-150 ${
              locale === "en"
                ? "bg-white text-[#1C1C1E] shadow-sm"
                : "text-[#8E8E93] hover:text-[#48484A]"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </aside>
    </>
  );
}
