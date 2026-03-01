interface TeamMember {
  role: string;
  members: string[];
}

interface TeamCreditsProps {
  team: TeamMember[];
}

export default function TeamCredits({ team }: TeamCreditsProps) {
  return (
    <section className="mx-auto max-w-[800px] pt-10" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
        {team.map((group) => (
          <div key={group.role}>
            <p className="text-[16px] font-medium text-[#1C1C1E]">
              {group.role}
            </p>
            <p className="mt-1 text-[16px] text-[#636366]">
              {group.members.map((name, i) => (
                <span key={name}>
                  {name.startsWith("* ") ? name.slice(2) : name}
                  {i < group.members.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
