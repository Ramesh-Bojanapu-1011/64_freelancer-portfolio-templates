import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ClientOutreachBlog = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("clientOutreach.title")}</title>
        <meta
          name="description"
          content={t("clientOutreach.metaDescription")}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br caret-transparent from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 min-h-screen overflow-hidden">
        {/* Blog Header/Meta Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[40vh] py-12 px-4 text-center bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-yellow-200 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 dark:text-yellow-100 mb-4 drop-shadow-lg">
            {t("clientOutreach.heroTitle")}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 text-base text-blue-700 dark:text-blue-200 opacity-80">
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z" />
                <circle cx="10" cy="10" r="3" />
              </svg>
              {t("clientOutreach.by")}{" "}
              <span className="font-semibold">
                {t("clientOutreach.author")}
              </span>
            </span>
            <span className="hidden md:inline">|</span>
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 2a1 1 0 00-1 1v1H5a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3h-.01V3a1 1 0 00-1-1H6zm8 4a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h8z" />
              </svg>
              Oct 10, 2025
            </span>
            <span className="hidden md:inline">|</span>
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4zm1 2h10v10H5V5z" />
              </svg>
              <span className="font-semibold">{t("clientOutreach.tags")}</span>
            </span>
          </div>
          <div className="w-full flex justify-center mb-6">
            <Image
              src="https://images.pexels.com/photos/7915263/pexels-photo-7915263.jpeg"
              alt="Winning Clients: Outreach Strategies for 2025"
              width={600}
              height={288}
              className="rounded-2xl shadow-xl max-h-72 object-cover border border-cyan-100 dark:border-cyan-900 w-full"
              style={{ maxWidth: "600px", width: "100%" }}
              priority
            />
          </div>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-2 max-w-2xl mx-auto">
            {t("clientOutreach.heroDesc")}
          </p>
        </section>

        {/* Blog Content Section */}
        <section className="relative py-16 px-4 max-w-3xl mx-auto">
          {/* Animated Gradient Border & Floating Accents */}
          <div className="absolute -top-16 -right-16 w-72 h-72 pointer-events-none opacity-30 animate-spin-slow z-0">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  id="blogAccent"
                  cx="50%"
                  cy="50%"
                  r="80%"
                  fx="50%"
                  fy="50%"
                >
                  <stop offset="0%" stopColor="#fef9c3" />
                  <stop offset="60%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </radialGradient>
              </defs>
              <circle cx="150" cy="150" r="120" fill="url(#blogAccent)" />
            </svg>
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-yellow-200 via-cyan-200 to-blue-200 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-900 rounded-full blur-2xl opacity-30 animate-float z-0"></div>
          <div className="relative z-10 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-4 border-transparent bg-clip-padding px-0 py-0 animate-fade-in-up">
            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-yellow-200 via-cyan-200 to-blue-200 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-900">
              <div className="rounded-[22px] bg-white/90 dark:bg-gray-900/90 px-6 py-10 md:px-12 md:py-14">
                <article className="prose prose-lg dark:prose-invert prose-yellow prose-headings:text-blue-900 dark:prose-headings:text-yellow-200 prose-a:text-cyan-700 dark:prose-a:text-cyan-300">
                  <h2 className="relative inline-block pb-1 mb-6 after:block after:absolute after:left-0 after:bottom-0 after:w-full after:h-2 after:bg-gradient-to-r after:from-yellow-200 after:via-cyan-200 after:to-blue-200 after:rounded-full after:opacity-60 animate-pulse">
                    {t("clientOutreach.section.title")}
                  </h2>
                  <p>{t("clientOutreach.section.intro")}</p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    {t("clientOutreach.section.p1.title")}
                  </h3>
                  <p>{t("clientOutreach.section.p1.desc")}</p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    {t("clientOutreach.section.p2.title")}
                  </h3>
                  <p>{t("clientOutreach.section.p2.desc")}</p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    {t("clientOutreach.section.p3.title")}
                  </h3>
                  <p>{t("clientOutreach.section.p3.desc")}</p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    {t("clientOutreach.section.p4.title")}
                  </h3>
                  <p>{t("clientOutreach.section.p4.desc")}</p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    {t("clientOutreach.section.p5.title")}
                  </h3>
                  <p>{t("clientOutreach.section.p5.desc")}</p>
                  <blockquote className="border-l-4 border-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 px-6 py-4 rounded-xl shadow-md text-lg font-semibold text-blue-900 dark:text-yellow-100 my-8 animate-fade-in scale-105">
                    <span className="text-3xl mr-2 align-middle text-cyan-400 dark:text-yellow-200">
                      “
                    </span>
                    {t("clientOutreach.section.quote")}
                    <span className="text-3xl ml-2 align-middle text-cyan-400 dark:text-yellow-200">
                      ”
                    </span>
                  </blockquote>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    {t("clientOutreach.section.creativeTitle")}
                  </h3>
                  <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        {t("clientOutreach.section.idea1.title")}
                      </span>{" "}
                      {t("clientOutreach.section.idea1.desc")}
                    </li>
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        {t("clientOutreach.section.idea2.title")}
                      </span>{" "}
                      {t("clientOutreach.section.idea2.desc")}
                    </li>
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        {t("clientOutreach.section.idea3.title")}
                      </span>{" "}
                      {t("clientOutreach.section.idea3.desc")}
                    </li>
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        {t("clientOutreach.section.idea4.title")}
                      </span>{" "}
                      {t("clientOutreach.section.idea4.desc")}
                    </li>
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        {t("clientOutreach.section.idea5.title")}
                      </span>{" "}
                      {t("clientOutreach.section.idea5.desc")}
                    </li>
                  </ul>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    {t("clientOutreach.section.metricsTitle")}
                  </h3>
                  <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                    <li>
                      <span className="font-semibold text-cyan-700 dark:text-yellow-200">
                        {t("clientOutreach.section.metric1.title")}
                      </span>{" "}
                      – {t("clientOutreach.section.metric1.desc")}
                    </li>
                    <li>
                      <span className="font-semibold text-cyan-700 dark:text-yellow-200">
                        {t("clientOutreach.section.metric2.title")}
                      </span>{" "}
                      – {t("clientOutreach.section.metric2.desc")}
                    </li>
                    <li>
                      <span className="font-semibold text-cyan-700 dark:text-yellow-200">
                        {t("clientOutreach.section.metric3.title")}
                      </span>{" "}
                      – {t("clientOutreach.section.metric3.desc")}
                    </li>
                    <li>
                      <span className="font-semibold text-cyan-700 dark:text-yellow-200">
                        {t("clientOutreach.section.metric4.title")}
                      </span>{" "}
                      – {t("clientOutreach.section.metric4.desc")}
                    </li>
                  </ul>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    {t("clientOutreach.section.finalTitle")}
                  </h3>
                  <p>{t("clientOutreach.section.finalDesc")}</p>
                  <blockquote className="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-6 py-4 rounded-xl shadow text-lg font-semibold text-blue-900 dark:text-yellow-100 my-8 animate-fade-in scale-105">
                    <span className="text-2xl mr-2 align-middle text-yellow-400 dark:text-yellow-200">
                      ★
                    </span>
                    {t("clientOutreach.section.finalQuote")}
                    <span className="text-2xl ml-2 align-middle text-yellow-400 dark:text-yellow-200">
                      ★
                    </span>
                  </blockquote>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ClientOutreachBlog;
