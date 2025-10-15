import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>SEO Services - Freelancer Portfolio</title>
        <meta
          name="description"
          content="Modern SEO services for freelancers and businesses. Creative strategies, technical optimization, and measurable results."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 px-4 text-center bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-yellow-200 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-yellow-100 mb-4 drop-shadow-lg">
            {t("seo.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            {t("seo.hero.desc")}
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-500 text-blue-900 font-bold text-lg shadow hover:from-cyan-400 hover:to-yellow-400 hover:text-yellow-100 transition-all duration-200"
          >
            {t("seo.hero.cta")}
          </Link>
        </section>

        {/* SEO Philosophy Section */}
        <section className="relative py-20 px-4 bg-gradient-to-tr from-white via-cyan-50 to-yellow-50 dark:from-gray-900 dark:via-cyan-950 dark:to-yellow-900 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Illustration or Accent */}
            <div className="flex-1 flex justify-center items-center">
              <div className="size-full rounded-3xl bg-gradient-to-br from-cyan-200 via-blue-100 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 shadow-2xl flex items-center justify-center relative overflow-hidden group transition-transform duration-500 hover:scale-105">
                <Image
                  src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg"
                  alt="SEO Illustration"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 text-center md:text-left relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-600 dark:text-yellow-300 mb-4 drop-shadow-lg">
                {t("seo.philosophy.title")}
              </h2>
              <p className="text-lg text-blue-800 dark:text-blue-200 mb-6 max-w-xl mx-auto md:mx-0 animate-fade-in">
                {t("seo.philosophy.desc")}
              </p>
              <ul className="flex flex-col gap-3 text-left text-blue-900 dark:text-blue-100 font-medium animate-fade-in-up">
                {[0, 1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 group/item hover:scale-105 transition-transform"
                  >
                    <span
                      className={`inline-block w-4 h-4 rounded-full shadow-lg group-hover/item:scale-125 transition-transform ${
                        [
                          "bg-yellow-300",
                          "bg-cyan-300",
                          "bg-blue-300",
                          "bg-emerald-400",
                        ][i]
                      }`}
                    ></span>
                    <span>{t(`seo.philosophy.points.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Featured SEO Projects Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900 dark:text-green-200 mb-10 drop-shadow-lg tracking-tight">
              {t("seo.projects.title")}
            </h2>
            {/* Array-driven project cards */}
            {(() => {
              const projects = [
                {
                  img: "https://images.pexels.com/photos/7289722/pexels-photo-7289722.jpeg",
                  titleKey: "seo.projects.items.0.title",
                  descKey: "seo.projects.items.0.desc",
                  accent:
                    "-top-8 -left-8 bg-gradient-to-br from-green-200 via-blue-200 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-950",
                },
                {
                  img: "https://images.pexels.com/photos/2890018/pexels-photo-2890018.jpeg",
                  titleKey: "seo.projects.items.1.title",
                  descKey: "seo.projects.items.1.desc",
                  accent:
                    "-top-8 -right-8 bg-gradient-to-br from-blue-100 via-green-200 to-purple-100 dark:from-blue-900 dark:via-green-900 dark:to-purple-950",
                },
                {
                  img: "https://images.pexels.com/photos/7495604/pexels-photo-7495604.jpeg",
                  titleKey: "seo.projects.items.2.title",
                  descKey: "seo.projects.items.2.desc",
                  accent:
                    "-bottom-8 -left-8 bg-gradient-to-br from-purple-100 via-green-200 to-blue-100 dark:from-purple-900 dark:via-green-900 dark:to-blue-900",
                },
              ];
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((p, i) => (
                    <div
                      key={i}
                      className="bg-white/90 dark:bg-gray-900/90 rounded-3xl p-8 border border-cyan-100 dark:border-cyan-900 shadow-xl flex flex-col items-center group hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden"
                    >
                      <span
                        className={`absolute   w-20 h-20 rounded-full blur-2xl opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity`}
                      ></span>
                      <Image
                        src={p.img}
                        width={120}
                        height={120}
                        alt={t(p.titleKey)}
                        className="rounded-xl w-full mb-4 object-cover shadow-lg"
                      />
                      <div className="font-bold text-green-700 dark:text-green-300 text-lg mb-2">
                        {t(p.titleKey)}
                      </div>
                      <p className="text-blue-800 dark:text-blue-200 text-base mb-2">
                        {t(p.descKey)}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* SEO Process Section */}
        <section className="relative py-20 px-4 bg-gradient-to-tr from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-600 dark:text-yellow-300 mb-10 drop-shadow-lg tracking-tight">
              {t("seo.process.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-5 justify-between items-center md:items-stretch">
              {[
                {
                  keyTitle: "seo.process.steps.0.title",
                  keyDesc: "seo.process.steps.0.desc",
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-200 via-blue-200 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-950 shadow-lg border-4 border-green-200 dark:border-blue-800">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" fill="#bbf7d0" />
                        <path
                          d="M12 8v4l3 2"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  keyTitle: "seo.process.steps.1.title",
                  keyDesc: "seo.process.steps.1.desc",
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-green-200 to-purple-100 dark:from-blue-900 dark:via-green-900 dark:to-purple-950 shadow-lg border-4 border-blue-100 dark:border-green-900">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="4"
                          y="7"
                          width="16"
                          height="10"
                          rx="3"
                          fill="#a7f3d0"
                        />
                        <path
                          d="M8 11h8M8 15h4"
                          stroke="#0891b2"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  keyTitle: "seo.process.steps.2.title",
                  keyDesc: "seo.process.steps.2.desc",
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-100 via-green-200 to-blue-100 dark:from-purple-900 dark:via-green-900 dark:to-blue-900 shadow-lg border-4 border-purple-100 dark:border-green-900">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="14"
                          height="14"
                          rx="3"
                          fill="#ddd6fe"
                        />
                        <path
                          d="M9 9h6v6H9z"
                          stroke="#7c3aed"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  keyTitle: "seo.process.steps.3.title",
                  keyDesc: "seo.process.steps.3.desc",
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 via-blue-100 to-purple-100 dark:from-emerald-900 dark:via-blue-900 dark:to-purple-900 shadow-lg border-4 border-emerald-200 dark:border-blue-900">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 19V5M5 12l7-7 7 7"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ),
                },
              ].map((step, idx, arr) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center min-[769px]:items-start relative"
                >
                  <div className="flex justify-center items-center w-full">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-cyan-700 dark:text-yellow-300 mb-2 text-center min-[769px]:text-left text-nowrap">
                    {t(step.keyTitle)}
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-base mb-2 text-center min-[769px]:text-left">
                    {t(step.keyDesc)}
                  </p>
                  {/* Connector line for all but last */}
                  {idx < arr.length - 1 && (
                    <span
                      className={`hidden min-[769px]:block absolute top-7 ${
                        i18n.language == "en" ? "right-[-50%]" : "left-[-50%]"
                      }    w-[100%] h-1 bg-gradient-to-r from-cyan-200 via-yellow-100 to-blue-200 dark:from-cyan-900 dark:via-yellow-900 dark:to-blue-950 opacity-40 z-0`}
                    ></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us for SEO Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-white via-cyan-50 to-yellow-50 dark:from-gray-900 dark:via-cyan-950 dark:to-yellow-900 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 dark:text-yellow-200 mb-10 drop-shadow-lg tracking-tight">
              {t("seo.why.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 shadow-lg border-4 border-yellow-200 dark:border-cyan-800">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z"
                          fill="#fde68a"
                        />
                      </svg>
                    </span>
                  ),
                  titleKey: "seo.why.features.0.title",
                  descKey: "seo.why.features.0.desc",
                },
                {
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 via-yellow-200 to-blue-100 dark:from-cyan-900 dark:via-yellow-900 dark:to-blue-950 shadow-lg border-4 border-cyan-100 dark:border-yellow-900">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" fill="#a7f3d0" />
                        <path
                          d="M8 12l2 2 4-4"
                          stroke="#0891b2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ),
                  titleKey: "seo.why.features.1.title",
                  descKey: "seo.why.features.1.desc",
                },
                {
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-yellow-200 to-cyan-100 dark:from-blue-900 dark:via-yellow-900 dark:to-cyan-900 shadow-lg border-4 border-blue-100 dark:border-yellow-900">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="14"
                          height="14"
                          rx="3"
                          fill="#bae6fd"
                        />
                        <path
                          d="M9 9h6v6H9z"
                          stroke="#0891b2"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ),
                  titleKey: "seo.why.features.2.title",
                  descKey: "seo.why.features.2.desc",
                },
                {
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 via-cyan-100 to-yellow-100 dark:from-emerald-900 dark:via-cyan-900 dark:to-yellow-900 shadow-lg border-4 border-emerald-200 dark:border-cyan-900">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 19V5M5 12l7-7 7 7"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ),
                  titleKey: "seo.why.features.3.title",
                  descKey: "seo.why.features.3.desc",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 dark:bg-gray-900/90 rounded-3xl p-8 border border-cyan-100 dark:border-cyan-900 shadow-xl flex flex-col items-center text-center group hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden"
                >
                  {feature.icon}
                  <div className="font-bold text-yellow-700 dark:text-yellow-300 text-lg mt-4 mb-2">
                    {t(feature.titleKey)}
                  </div>
                  <p className="text-blue-800 dark:text-blue-200 text-base">
                    {t(feature.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="relative max-w-4xl mx-auto py-20 px-6 flex flex-col items-center justify-center text-center rounded-3xl bg-gradient-to-br from-yellow-400 via-cyan-400 to-blue-500 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 shadow-2xl my-16 overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-yellow-300/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-yellow-200 mb-6 drop-shadow-lg tracking-tight">
            {t("seo.cta.title")}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 dark:text-yellow-100 mb-10 max-w-2xl mx-auto">
            {t("seo.cta.desc")}
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-blue-900 font-bold text-xl shadow-lg hover:from-cyan-400 hover:to-blue-500 hover:text-yellow-100 transition-all duration-200"
          >
            {t("seo.cta.button")}
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default SEO;
