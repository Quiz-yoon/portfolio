import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import CaseStudyContent from "@/components/case-study/CaseStudyContent";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <main className="mx-auto w-full max-w-[1400px] px-5 pb-20 md:px-[80px]">
      <CaseStudyContent study={study} />
    </main>
  );
}
