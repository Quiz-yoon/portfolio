"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { heroData } from "@/lib/data";

function getLocalTime() {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function Hero() {
  const { locale } = useLocale();
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    setLocalTime(getLocalTime());
    const interval = setInterval(() => {
      setLocalTime(getLocalTime());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  const headline = locale === "ko" ? heroData.headlineKo : heroData.headline;
  const bio = locale === "ko" ? heroData.bioKo : heroData.bio;
  const location = locale === "ko" ? heroData.locationKo : heroData.location;

  return (
    <section>
      <Image
        src="/images/avatar.jpg"
        alt={`${heroData.name}'s avatar`}
        width={48}
        height={48}
        className="rounded-full"
      />

      <h1 className="mt-5 text-2xl font-semibold">
        {headline}
      </h1>

      <p className="mt-3 text-[13.5px] leading-relaxed text-[#8E8E93]">
        {bio}
      </p>

      <p className="mt-3 text-[13.5px]">
        <span className="text-[#8E8E93]">Prev. </span>
        {heroData.previousCompanies.map((company, i) => (
          <span key={company}>
            <span className="font-medium text-[#1C1C1E]">{company}</span>
            {i < heroData.previousCompanies.length - 1 && (
              <span className="text-[#8E8E93]">, </span>
            )}
          </span>
        ))}
      </p>

      <div className="mt-3 flex items-center gap-3 text-xs text-[#8E8E93]">
        <span className="flex items-center gap-1">
          <MapPin size={13} />
          {location}
        </span>
        {localTime && (
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {localTime}
          </span>
        )}
      </div>
    </section>
  );
}
