"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "ko" | "en";

interface LocaleContextType {
  locale: Locale;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "ko" || saved === "en") {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, locale);
      if (locale === "ko") {
        document.body.style.fontFamily = "'Pretendard Variable', Pretendard, var(--font-poppins), sans-serif";
      } else {
        document.body.style.fontFamily = "var(--font-poppins), 'Pretendard Variable', Pretendard, sans-serif";
      }
    }
  }, [locale, mounted]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "ko" ? "en" : "ko"));
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
