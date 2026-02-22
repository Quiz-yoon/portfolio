import Link from "next/link";

interface ProjectLink {
  title: string;
  slug: string;
}

interface ProjectNavigationProps {
  prevProject?: ProjectLink;
  nextProject?: ProjectLink;
}

export default function ProjectNavigation({
  prevProject,
  nextProject,
}: ProjectNavigationProps) {
  if (!prevProject && !nextProject) return null;

  return (
    <nav className="mx-auto max-w-[800px] border-t border-[#D1D1D6] pt-12">
      <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between">
        <div>
          {prevProject && (
            <Link href={`/work/${prevProject.slug}`} className="group">
              <p className="text-[16px] font-medium text-[#1C1C1E]">← Previous Project</p>
              <p className="mt-2 text-[16px] text-[#8E8E93] transition-colors duration-150 group-hover:text-[#1C1C1E]">
                {prevProject.title}
              </p>
            </Link>
          )}
        </div>
        <div className="text-left md:text-right">
          {nextProject && (
            <Link href={`/work/${nextProject.slug}`} className="group">
              <p className="text-[16px] font-medium text-[#1C1C1E]">Next Project →</p>
              <p className="mt-2 text-[16px] text-[#8E8E93] transition-colors duration-150 group-hover:text-[#1C1C1E]">
                {nextProject.title}
              </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
