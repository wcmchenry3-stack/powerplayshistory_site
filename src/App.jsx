import { useTranslation } from "react-i18next";
import { useHtmlAttributes } from "./i18n/useHtmlAttributes.js";

export default function App() {
  useHtmlAttributes();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center px-6">
      <main id="main-content" tabIndex={-1} className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-white mb-3">{t("title")}</h1>
        <p className="text-2xl font-semibold text-teal-400 mb-4">
          {t("comingSoon")}
        </p>
        <p className="text-slate-400 text-lg">{t("tagline")}</p>
      </main>
    </div>
  );
}
