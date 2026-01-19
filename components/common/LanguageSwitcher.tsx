// app/components/LanguageSwitcher.tsx (updated)
"use client";
import { useEffect, useState } from "react";

type LanguageKey = "German" | "English";

type LanguageInfo = {
    code: string;
    short: string;
    label: string;
    flag: string;
};

const languageMap: Record<LanguageKey, LanguageInfo> = {
    German: { code: "de", short: "DE", label: "Deutsch", flag: "🇩🇪" },
    English: { code: "en", short: "EN", label: "English", flag: "🇬🇧" },
};

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: {
            translate: {
                TranslateElement: new (
                    config: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
                    id: string
                ) => void;
            };
        };
    }
}

export default function LanguageSwitcher() {
    const [currentLang, setCurrentLang] = useState<LanguageKey>("German");
    const [isLoaded, setIsLoaded] = useState(false);

    // Check when Google Translate is loaded
    useEffect(() => {
        const checkGoogleTranslate = () => {
            const select = document.querySelector(".goog-te-combo");
            if (select) {
                setIsLoaded(true);

                // Get current language from Google Translate
                const savedLang = localStorage.getItem("lang") as LanguageKey | null;
                if (savedLang && savedLang in languageMap) {
                    setCurrentLang(savedLang);
                    setTimeout(() => changeLanguage(savedLang), 100);
                } else {
                    // Check what language Google Translate is currently set to
                    const currentCode = (select as HTMLSelectElement).value;
                    const langKey = Object.keys(languageMap).find(
                        key => languageMap[key as LanguageKey].code === currentCode
                    ) as LanguageKey | undefined;
                    if (langKey) {
                        setCurrentLang(langKey);
                        localStorage.setItem("lang", langKey);
                    }
                }
            } else {
                // Check again in 500ms if not loaded yet
                setTimeout(checkGoogleTranslate, 500);
            }
        };

        checkGoogleTranslate();
    }, []);

    const changeLanguage = (langKey: LanguageKey) => {
        const langCode = languageMap[langKey].code;
        const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;

        if (select) {
            select.value = langCode;
            select.dispatchEvent(new Event("change"));
            localStorage.setItem("lang", langKey);
            setCurrentLang(langKey);

            // Also trigger page update
            if (window.google && window.google.translate) {
                const event = new Event('hashchange');
                window.dispatchEvent(event);
            }
        }
    };

    const languages: LanguageKey[] = ["German", "English"];
    const isGerman = currentLang === "German";

    return (
        <div className="flex flex-col items-start ">
            {/* Hidden Google Widget Container - Already in RootLayout */}

            {/* UI Container */}
            <div className="relative inline-flex h-9 items-center rounded-lg bg-gray-100 p-1 shadow-inner notranslate border border-gray-200  ">
                {/* Sliding White Background */}
                <div
                    className={`absolute h-7 w-[calc(50%-4px)] rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isGerman ? "left-1 translate-x-0" : "left-1 translate-x-[100%]"
                        }`}
                />

                {/* Clickable Buttons */}
                {languages.map((lang) => (
                    <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className={`relative cursor-pointer z-10 flex w-18 items-center justify-center gap-2 px-2 py-1.5 text-sm font-medium transition-colors duration-200 ${currentLang === lang
                                ? "text-gray-900"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        <span className={`transition-opacity duration-200 ${currentLang === lang ? "opacity-100 font-semibold" : "opacity-70"
                            }`}>
                            {languageMap[lang].short}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}