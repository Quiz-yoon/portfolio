"use client";

import { useState, FormEvent } from "react";
import { useLocale } from "@/lib/locale-context";

export default function PasswordGate({ children, onUnlock }: { children: React.ReactNode; onUnlock?: (unlocked: boolean) => void }) {
  const { locale } = useLocale();
  const isKo = locale === "ko";
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (data.success) {
        setUnlocked(true);
        onUnlock?.(true);
      } else {
        setError(isKo ? "비밀번호가 올바르지 않습니다. 다시 시도해주세요." : "Incorrect password. Please try again.");
      }
    } catch {
      setError(isKo ? "문제가 발생했습니다. 다시 시도해주세요." : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="mx-auto max-w-[800px] pb-[80px]">
      <div className="rounded-xl border border-[#E5E5EA] bg-[#F7F7FA] px-5 py-8 md:px-8 md:py-10">
        <p className="text-[15px] font-medium text-[#1C1C1E]">
          {isKo ? "보호된 콘텐츠입니다" : "This content is protected"}
        </p>
        <p className="mt-2 text-[14px] leading-[1.6] text-[#8E8E93]">
          {isKo
            ? "상세 케이스 스터디는 NDA 보호 대상입니다. 비밀번호를 입력해주세요."
            : "The detailed case study is under NDA. Please enter the password to view."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 md:flex-row">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={isKo ? "비밀번호 입력" : "Enter password"}
            className="h-[44px] flex-1 rounded-lg border border-[#D1D1D6] bg-white px-4 text-[15px] text-[#1C1C1E] placeholder-[#AEAEB2] outline-none transition-colors focus:border-[#007AFF]"
          />
          <button
            type="submit"
            disabled={loading || !password}
            className="h-[44px] w-full rounded-lg bg-[#1C1C1E] px-6 text-[14px] font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-40 md:w-auto"
          >
            {loading ? (isKo ? "확인 중..." : "Verifying...") : (isKo ? "확인" : "Unlock")}
          </button>
        </form>

        {error && (
          <p className="mt-3 text-[13px] text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}
