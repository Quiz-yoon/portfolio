"use client";

import { useState, useRef, KeyboardEvent, ClipboardEvent } from "react";
import { useLocale } from "@/lib/locale-context";

const CODE_LENGTH = 4;

export default function PasswordGate({ children, onUnlock }: { children: React.ReactNode; onUnlock?: (unlocked: boolean) => void }) {
  const { locale } = useLocale();
  const isKo = locale === "ko";
  const [unlocked, setUnlocked] = useState(false);
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const submit = async (code: string) => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: code }),
      });
      const data = await res.json();
      if (data.success) {
        setUnlocked(true);
        onUnlock?.(true);
      } else {
        setError(isKo ? "비밀번호가 올바르지 않습니다. 다시 시도해주세요." : "Incorrect password. Please try again.");
        setDigits(Array(CODE_LENGTH).fill(""));
        inputsRef.current[0]?.focus();
      }
    } catch {
      setError(isKo ? "문제가 발생했습니다. 다시 시도해주세요." : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (index: number, value: string) => {
    if (loading) return;
    const char = value.slice(-1);
    const next = [...digits];
    next[index] = char;
    setDigits(next);

    if (char && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (char && index === CODE_LENGTH - 1) {
      const code = next.join("");
      if (code.length === CODE_LENGTH) submit(code);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      const next = [...digits];
      next[index - 1] = "";
      setDigits(next);
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, CODE_LENGTH);
    const next = Array(CODE_LENGTH).fill("");
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
    setDigits(next);
    if (pasted.length === CODE_LENGTH) {
      submit(pasted);
    } else {
      inputsRef.current[pasted.length]?.focus();
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div id="password-gate" className="relative overflow-hidden">
      {/* Blurred content preview */}
      <div
        className="pointer-events-none select-none overflow-hidden rounded-2xl"
        aria-hidden="true"
        style={{ maxHeight: "470px", filter: "blur(16px)", WebkitFilter: "blur(16px)", mask: "linear-gradient(to bottom, black 20%, transparent 80%)", WebkitMask: "linear-gradient(to bottom, black 20%, transparent 80%)" }}
      >
        {children}
      </div>

      {/* Password overlay */}
      <div className="absolute inset-0 flex items-start justify-center pt-[80px] md:pt-[120px]" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.9) 30%, white 60%)" }}>
        <div className="w-full max-w-[760px] px-4 md:px-0">
          <div className="flex flex-col items-center px-3 py-6 text-center md:px-8 md:py-10">
            <p className="text-[15px] font-medium text-[#1C1C1E]">
              {isKo ? "보호된 콘텐츠입니다" : "This content is protected"}
            </p>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#8E8E93]">
              {isKo
                ? "상세 케이스 스터디는 NDA 보호 대상입니다. 비밀번호를 입력해주세요."
                : "The detailed case study is under NDA. Please enter the password to view."}
            </p>

            <div className="mt-6 flex gap-1.5 md:gap-2">
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => { inputsRef.current[i] = el; }}
                  type="text"
                  inputMode="text"
                  maxLength={1}
                  value={d}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  onPaste={i === 0 ? handlePaste : undefined}
                  disabled={loading}
                  autoComplete="off"
                  data-1p-ignore
                  data-lpignore="true"
                  style={{ WebkitTextSecurity: "disc" } as React.CSSProperties}
                  className="h-[48px] w-[48px] rounded-lg border border-[#D1D1D6] bg-white text-center text-[18px] font-medium text-[#1C1C1E] shadow-sm outline-none transition-colors focus:border-[#007AFF] disabled:opacity-40"
                />
              ))}
            </div>
            {loading && (
              <p className="mt-3 text-[13px] text-[#8E8E93]">{isKo ? "확인 중..." : "Verifying..."}</p>
            )}

            {error && (
              <p className="mt-3 text-[13px] text-red-500">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
