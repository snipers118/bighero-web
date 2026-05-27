"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import th from "@/locales/th.json";
import en from "@/locales/en.json";

type Locale = "th" | "en";

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => string | string[] | Record<string, unknown>;
  switchLocale: () => void;
}

const translations: Record<Locale, Record<string, unknown>> = { th, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return path;
  }, obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("th");

  const switchLocale = useCallback(() => {
    setLocale((prev) => (prev === "th" ? "en" : "th"));
  }, []);

  const t = useCallback(
    (key: string) => {
      const value = getNestedValue(translations[locale], key);
      if (typeof value === "string" || Array.isArray(value) || typeof value === "object") {
        return value as string | string[] | Record<string, unknown>;
      }
      return key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, t, switchLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
