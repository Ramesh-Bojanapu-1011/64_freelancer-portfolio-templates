import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import React from "react";
import aos from "aos";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Home1 = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    aos.init({});
  }, []);
  return (
    <>
      <Head>
        <title>{t("home1.title", "Freelancer Portfolio - Home 1")}</title>
        <meta
          name="description"
          content={t("home1.metaDescription", "Freelancer Portfolio Home 1")}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 max-w-screen overflow-x-hidden caret-transparent">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[100vh] py-16 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-100 mb-4 drop-shadow-lg">
            {t("home1.heroTitle", "Elevate Your Freelance Brand")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            {t(
              "home1.heroDesc",
              "Modern portfolio templates to showcase your skills, attract clients, and grow your business with confidence.",
            )}
          </p>
          <Link
            href="/about-us"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
          >
            {t("home1.getStarted", "Get Started")}
          </Link>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative py-24 px-4 bg-gradient-to-tr from-cyan-50 via-blue-100 to-blue-200 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-y border-cyan-200 dark:border-cyan-900/40 overflow-hidden"
        >
          <div className="relative   mx-auto">
            <div className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-10 p-10 md:p-16 border border-cyan-100 dark:border-cyan-900">
              {/* Avatar and badge */}
              <div className="flex flex-col items-center md:items-start">
                <div className="rounded-2xl overflow-hidden border-4 border-cyan-400 shadow-xl mb-4 bg-white dark:bg-gray-900 flex items-center justify-center">
                  <Image
                    src="https://i.pinimg.com/736x/b4/cf/c9/b4cfc93dd4aaa0e8d697ba95773a06e4.jpg"
                    alt="Avatar"
                    className=" size-[300px] object-cover object-bottom"
                    width={100}
                    height={100}
                  />
                </div>
                <span className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-yellow-200 font-bold px-5 py-2 rounded-full text-base shadow-lg tracking-wide mt-2">
                  {t("home1.badge", "Freelancer / Portfolio Expert")}
                </span>
              </div>
              {/* About text and timeline stats */}
              <div className="flex-1">
                <h2 className="text-4xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-6 flex items-center gap-3">
                  <svg
                    className="w-10 h-10 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm-6 8v-1a4 4 0 014-4h4a4 4 0 014 4v1"
                    />
                  </svg>
                  {t("home1.aboutTitle", "About Me")}
                </h2>
                <p className="text-xl text-blue-900 dark:text-blue-100 mb-8 leading-relaxed">
                  {t("home1.aboutDesc1", "I am a ")}
                  <span className="font-semibold text-cyan-700 dark:text-cyan-300">
                    {t("home1.aboutPassion", "passionate freelancer")}
                  </span>
                  {t("home1.aboutDesc2", " with expertise in ")}
                  <span className="font-semibold">
                    {t("nav.webDesign", "web design")}
                  </span>
                  ,
                  <span className="font-semibold">
                    {t("nav.uiux", "UI/UX")}
                  </span>
                  ,
                  <span className="font-semibold">
                    {t("nav.branding", "branding")}
                  </span>
                  ,{t("home1.aboutDesc3", ", and ")}
                  <span className="font-semibold">
                    {t("nav.digitalMarketing", "digital marketing")}
                  </span>
                  .
                  {t(
                    "home1.aboutDesc4",
                    " My mission is to help businesses and individuals build a strong online presence with beautiful, functional, and effective portfolio websites.",
                  )}
                </p>
                {/* Timeline style stats */}
                <ol className="relative border-l-4 border-cyan-300 dark:border-cyan-800 ml-4">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
                      <svg
                        className="w-5 h-5 text-cyan-600 dark:text-cyan-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3"
                        />
                      </svg>
                    </span>
                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-1">
                      {t("home1.experienceTitle", "5+ Years Experience")}
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-base">
                      {t(
                        "home1.experienceDesc",
                        "Delivering quality freelance projects worldwide.",
                      )}
                    </p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
                      <svg
                        className="w-5 h-5 text-yellow-600 dark:text-yellow-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2"
                        />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-1">
                      {t("home1.projectsTitle", "100+ Projects")}
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-base">
                      {t(
                        "home1.projectsDesc",
                        "Successfully completed for happy clients.",
                      )}
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          id="why-choose-us"
          className="relative  py-24 px-4 bg-gradient-to-tr from-yellow-50 via-cyan-50 to-blue-100 dark:from-yellow-950 dark:via-cyan-950 dark:to-blue-950/80 border-y border-cyan-200 dark:border-cyan-900/40 overflow-hidden"
        >
          {/* Decorative background shapes */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-yellow-200 via-cyan-200 to-transparent dark:from-yellow-900 dark:via-cyan-900 dark:to-transparent rotate-12 rounded-full blur-2xl opacity-20 pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-cyan-100 via-blue-100 to-transparent dark:from-cyan-900 dark:via-blue-950 dark:to-transparent -rotate-12 rounded-full blur-2xl opacity-10 pointer-events-none"></div>
          <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Content */}
            <div className="flex-1" data-aos="fade-right">
              <h2 className="text-4xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-6 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#d48872"
                    d="M12 6a1.003 1.003 0 0 1 1 1v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A1 1 0 0 1 11 12V7a1.003 1.003 0 0 1 1-1"
                  ></path>
                  <path
                    fill="#d48872"
                    d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m9-5a1 1 0 0 1 2 0v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A1 1 0 0 1 11 12Z"
                    opacity={0.5}
                  ></path>
                </svg>
                {t("home1.whyChooseUsTitle", "Why Choose Us?")}
              </h2>
              <p className="text-xl text-blue-900 dark:text-blue-100 mb-6 leading-relaxed">
                {t("home1.whyChooseUsDesc1", "We are dedicated to delivering ")}
                <span className="font-semibold text-cyan-700 dark:text-cyan-300">
                  {t(
                    "home1.whyChooseUsExceptional",
                    "exceptional digital services",
                  )}
                </span>
                {t(
                  "home1.whyChooseUsDesc2",
                  " that help you stand out and succeed. Our team combines creativity, technical expertise, and a passion for client success.",
                )}
              </p>
              {(() => {
                const points = [
                  t(
                    "home1.whyChooseUsPoint1",
                    "Personalized solutions for every client",
                  ),
                  t(
                    "home1.whyChooseUsPoint2",
                    "Cutting-edge design & technology",
                  ),
                  t(
                    "home1.whyChooseUsPoint3",
                    "Transparent communication & support",
                  ),
                  t(
                    "home1.whyChooseUsPoint4",
                    "Proven results & client satisfaction",
                  ),
                ];
                return (
                  <ul className="space-y-4 mb-8">
                    {points.map((text, idx) => (
                      <li className="flex items-start gap-3" key={idx}>
                        <span className="mt-1">
                          <svg
                            className="w-6 h-6 text-cyan-500 dark:text-cyan-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-blue-800 dark:text-blue-200 text-lg">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              })()}
              <Link
                href="#contact"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
              >
                {t("home1.letsWorkTogether")}
              </Link>
            </div>
            {/* Image */}
            <div className="flex-1 flex justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-200 dark:border-cyan-800 bg-white dark:bg-gray-900">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                  alt={t(
                    "home1.whyChooseUsImageAlt",
                    "Teamwork and Digital Services",
                  )}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 via-transparent to-yellow-200/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognitions Section */}
        <section
          id="awards"
          className="relative py-24 px-4 bg-gradient-to-tr from-yellow-50 via-cyan-50 to-blue-100 dark:from-yellow-950 dark:via-cyan-950 dark:to-blue-950/80 border-y border-cyan-200 dark:border-cyan-900/40 overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-200 via-cyan-200 to-transparent dark:from-yellow-900 dark:via-cyan-900 dark:to-transparent rotate-12 rounded-full blur-2xl opacity-20 pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tl from-cyan-100 via-blue-100 to-transparent dark:from-cyan-900 dark:via-blue-950 dark:to-transparent -rotate-12 rounded-full blur-2xl opacity-10 pointer-events-none"></div>
          <div className="relative max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-300 mb-8 text-center">
              {t("home1.awardsTitle", "Awards & Recognitions")}
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              {[
                {
                  title: t("home1.award1", "Top Rated Freelancer 2025"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 -0.5 41 41"
                    >
                      <g fill="none" strokeMiterlimit={10}>
                        <path
                          fill="#ffe236"
                          stroke="#231f20"
                          d="M38.24 13.84a25.6 25.6 0 0 0-6.13-2a33 33 0 0 0-4.83-.59a29.4 29.4 0 0 0-2-4.11a25.8 25.8 0 0 0-3.75-5.24a2.47 2.47 0 0 0-3.38 0a26.2 26.2 0 0 0-3.75 5.28a35 35 0 0 0-1.94 4.13a29 29 0 0 0-4.56.61a26.2 26.2 0 0 0-6.14 1.95a2.49 2.49 0 0 0-1 3.22a26 26 0 0 0 3.81 5.19a36 36 0 0 0 3.38 3.17A29.3 29.3 0 0 0 7 30.3a26 26 0 0 0 0 6.43a2.48 2.48 0 0 0 2.74 2a26 26 0 0 0 6.11-2a37 37 0 0 0 4-2.22a35 35 0 0 0 4 2.22a26 26 0 0 0 6.11 2a2.48 2.48 0 0 0 2.74-2a26 26 0 0 0 0-6.43a30 30 0 0 0-.86-4.65a28 28 0 0 0 3.63-3.41a26.6 26.6 0 0 0 3.82-5.19a2.47 2.47 0 0 0-1.05-3.21Z"
                          strokeWidth={1}
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          d="M21.52 5.84A26 26 0 0 1 24 10.11"
                          strokeWidth={1}
                        ></path>
                      </g>
                    </svg>
                  ),
                },
                {
                  title: t("home1.award2", "Awards Honorable Mention"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="#ffef5e"
                          d="M12 6.74A2.87 2.87 0 1 0 12 1a2.87 2.87 0 0 0 0 5.74"
                        ></path>
                        <path
                          fill="#fff9bf"
                          d="M9.13 3.87c.001.27.04.54.116.8A2.87 2.87 0 0 0 13.8 1.634A2.87 2.87 0 0 0 9.13 3.87"
                        ></path>
                        <path
                          fill="#ffbc44"
                          d="m9.02 11.285l-2.431 1.14a1.598 1.598 0 0 0-.67 2.402l4.169 6.24h3.826l4.168-6.24a1.6 1.6 0 0 0-.67-2.402l-2.614-1.227z"
                        ></path>
                        <path
                          fill="#ffef5e"
                          d="M15.61 9.569a.477.477 0 0 0-.64-.554a7.94 7.94 0 0 1-5.943-.008a.478.478 0 0 0-.638.554l2.655 11.505h1.913z"
                        ></path>
                        <path
                          fill="#fff9bf"
                          d="M12 9.588a8.3 8.3 0 0 1-2.973-.581a.478.478 0 0 0-.638.554l2.655 11.505H12z"
                        ></path>
                        <path
                          stroke="#191919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.467 22.629a4.26 4.26 0 0 0-3.045-1.542H9.639a4.4 4.4 0 0 0-3.076 1.519L6.262 23H17.74zM15.61 9.569a.477.477 0 0 0-.64-.554a7.94 7.94 0 0 1-5.943-.008a.478.478 0 0 0-.638.554l2.655 11.505h1.913zM12 6.74A2.87 2.87 0 1 0 12 1a2.87 2.87 0 0 0 0 5.74m4.528 5.27l.884.415a1.598 1.598 0 0 1 .67 2.403l-4.169 6.24m-6.44-9.058l-.884.415a1.598 1.598 0 0 0-.67 2.403l4.169 6.24"
                          strokeWidth={1}
                        ></path>
                      </g>
                    </svg>
                  ),
                },
                {
                  title: t("home1.award3", "CSS Design Awards Winner"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 48 48"
                    >
                      <g fill="none">
                        <circle
                          cx={21}
                          cy={19}
                          r={12}
                          fill="url(#SVGQr2ikcOb)"
                        ></circle>
                        <circle
                          cx={21}
                          cy={19}
                          r={12}
                          fill="url(#SVGXZ5Gvdon)"
                          fillOpacity={0.6}
                        ></circle>
                        <circle
                          cx={21}
                          cy={19}
                          r={12}
                          fill="url(#SVGXRAPUc2E)"
                          fillOpacity={0.6}
                        ></circle>
                        <rect
                          width={23}
                          height={23}
                          x={20}
                          y={18}
                          fill="url(#SVG2S6bcdVQ)"
                          rx={6}
                        ></rect>
                        <path
                          fill="url(#SVGnMVnEyCo)"
                          fillRule="evenodd"
                          d="M21 31c6.627 0 12-5.373 12-12q0-.505-.041-1H26a6 6 0 0 0-6 6v6.959q.495.04 1 .041"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="url(#SVGRJK3Pcol)"
                          fillRule="evenodd"
                          d="M21 31c6.627 0 12-5.373 12-12q0-.505-.041-1H26a6 6 0 0 0-6 6v6.959q.495.04 1 .041"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="url(#SVGp5NrRdhu)"
                          d="M16 27.956C16 37.84 13.078 43 10.5 43C8.266 43 5 38.717 5 27.956c0-9.187 2.462-10.651 5.5-10.651c2.707 0 5.5.768 5.5 10.651"
                        ></path>
                        <path
                          fill="url(#SVGFdxxhcOH)"
                          fillOpacity={0.5}
                          d="M16 27.956C16 37.84 13.078 43 10.5 43C8.266 43 5 38.717 5 27.956c0-9.187 2.462-10.651 5.5-10.651c2.707 0 5.5.768 5.5 10.651"
                        ></path>
                        <path
                          fill="url(#SVGCsJlM8cn)"
                          d="M16 27.956C16 37.84 13.078 43 10.5 43C8.266 43 5 38.717 5 27.956c0-9.187 2.462-10.651 5.5-10.651c2.707 0 5.5.768 5.5 10.651"
                        ></path>
                        <path
                          fill="url(#SVGkxfKAe8B)"
                          fillOpacity={0.7}
                          d="M16 27.956C16 37.84 13.078 43 10.5 43C8.266 43 5 38.717 5 27.956c0-9.187 2.462-10.651 5.5-10.651c2.707 0 5.5.768 5.5 10.651"
                        ></path>
                        <path
                          fill="#fff"
                          fillOpacity={0.15}
                          d="M5.126 24.688c.539-6.283 2.74-7.383 5.374-7.383c2.372 0 4.81.59 5.377 7.384c-1.523.906-3.376 1.437-5.374 1.437c-2 0-3.853-.532-5.377-1.439"
                        ></path>
                        <path
                          fill="url(#SVGSUVaCd0V)"
                          d="M12.812 6.222a1.25 1.25 0 0 0-2.048-.934C8.366 7.278 6.905 8.8 6.06 10.198C5.168 11.667 5 12.93 5 14.247a5.5 5.5 0 1 0 11 0c0-1.795-.89-3.006-1.59-3.957l-.203-.278c-.724-1.004-1.355-2.008-1.395-3.791"
                        ></path>
                        <defs>
                          <radialGradient
                            id="SVGQr2ikcOb"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="rotate(-78.382 28.226 11.549)scale(32.4671)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.222} stopColor="#4e46e2"></stop>
                            <stop offset={0.578} stopColor="#625df6"></stop>
                            <stop offset={0.955} stopColor="#e37dff"></stop>
                          </radialGradient>
                          <radialGradient
                            id="SVGXZ5Gvdon"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(12.51502 -3.89356 5.09662 16.382 5.847 25.302)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.566} stopColor="#251fba"></stop>
                            <stop
                              offset={1}
                              stopColor="#5e51e4"
                              stopOpacity={0}
                            ></stop>
                          </radialGradient>
                          <radialGradient
                            id="SVGXRAPUc2E"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="rotate(8.259 -111.102 42.48)scale(12.0564 12.324)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.566} stopColor="#251fba"></stop>
                            <stop
                              offset={1}
                              stopColor="#5e51e4"
                              stopOpacity={0}
                            ></stop>
                          </radialGradient>
                          <radialGradient
                            id="SVG2S6bcdVQ"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(20.06212 18.35928 -24.9369 27.24982 22.938 19.643)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#c354ff"></stop>
                            <stop offset={0.158} stopColor="#b339f0"></stop>
                            <stop offset={0.429} stopColor="#f24a9d"></stop>
                            <stop offset={0.749} stopColor="#ff835c"></stop>
                            <stop offset={1} stopColor="#ffc470"></stop>
                          </radialGradient>
                          <radialGradient
                            id="SVGFdxxhcOH"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(4.15366 25.2323 -66.50384 10.94764 10.042 15.699)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset={0.5}
                              stopColor="#dd3ce2"
                              stopOpacity={0}
                            ></stop>
                            <stop offset={1} stopColor="#dd3ce2"></stop>
                          </radialGradient>
                          <radialGradient
                            id="SVGkxfKAe8B"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="rotate(-67.221 16.249 3.2)scale(13.1036 26.4776)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.169} stopColor="#02888d"></stop>
                            <stop
                              offset={0.26}
                              stopColor="#02888d"
                              stopOpacity={0}
                            ></stop>
                          </radialGradient>
                          <radialGradient
                            id="SVGSUVaCd0V"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="rotate(108.394 2.876 9.538)scale(11.3366 12.4369)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#ff9532"></stop>
                            <stop offset={0.251} stopColor="#ff835c"></stop>
                            <stop offset={1} stopColor="#f24a9d"></stop>
                          </radialGradient>
                          <linearGradient
                            id="SVGnMVnEyCo"
                            x1={32.257}
                            x2={22.374}
                            y1={31.362}
                            y2={16.838}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.195} stopColor="#6d37cd"></stop>
                            <stop offset={0.765} stopColor="#ea71ef"></stop>
                          </linearGradient>
                          <linearGradient
                            id="SVGRJK3Pcol"
                            x1={34.348}
                            x2={18.588}
                            y1={34.777}
                            y2={12.749}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.195} stopColor="#7631ff"></stop>
                            <stop offset={0.886} stopColor="#e63080"></stop>
                          </linearGradient>
                          <linearGradient
                            id="SVGp5NrRdhu"
                            x1={2.422}
                            x2={13.912}
                            y1={28.212}
                            y2={41.188}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#0fafff"></stop>
                            <stop offset={1} stopColor="#2764e7"></stop>
                          </linearGradient>
                          <linearGradient
                            id="SVGCsJlM8cn"
                            x1={20.125}
                            x2={0.875}
                            y1={29.075}
                            y2={29.075}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.307} stopColor="#0d91e1"></stop>
                            <stop offset={0.761} stopColor="#52b471"></stop>
                          </linearGradient>
                        </defs>
                      </g>
                    </svg>
                  ),
                },
                {
                  title: t("home1.award4", "Featured in Web Designer Mag"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 48 48"
                    >
                      <g fill="none" strokeWidth={3}>
                        <path
                          fill="#8fbffa"
                          d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0"
                        ></path>
                        <path
                          stroke="#2859c5"
                          strokeLinejoin="round"
                          d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0"
                        ></path>
                        <path
                          stroke="#2859c5"
                          strokeLinejoin="round"
                          d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0"
                        ></path>
                        <path
                          stroke="#2859c5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 31h39m-39-14h39"
                        ></path>
                      </g>
                    </svg>
                  ),
                },
              ].map((award, idx) => (
                <div
                  key={award.title}
                  className="flex flex-col items-center"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  <div className="w-24 h-24 flex items-center justify-center mb-2 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-cyan-100 dark:border-cyan-900">
                    {award.icon}
                  </div>
                  <span className="text-blue-800 dark:text-blue-200 text-sm font-semibold text-center mt-2">
                    {award.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section
          id="process"
          className=" bg-gradient-to-tr from-cyan-50 via-blue-100 to-blue-200 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-y border-cyan-200 dark:border-cyan-900/40"
        >
          <div className="max-w-5xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-300 mb-8 text-center">
              {t("home1.processTitle", "How We Work")}
            </h2>
            <div className="relative">
              <ol className="relative border-l-4 border-cyan-300 dark:border-cyan-800 ml-5">
                {[
                  {
                    title: t(
                      "home1.processStep1Title",
                      "Discovery & Consultation",
                    ),
                    desc: t(
                      "home1.processStep1Desc",
                      "We start by understanding your goals, audience, and vision to craft a tailored strategy.",
                    ),
                    icon: (
                      <svg
                        className="w-8 h-8 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                    ),
                  },
                  {
                    title: t("home1.processStep2Title", "Design & Development"),
                    desc: t(
                      "home1.processStep2Desc",
                      "We create modern, responsive designs and develop robust solutions to bring your project to life.",
                    ),
                    icon: (
                      <svg
                        className="w-8 h-8 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M3 8h18" />
                        <path d="M7 4v4" />
                        <path d="M17 4v4" />
                      </svg>
                    ),
                  },
                  {
                    title: t("home1.processStep3Title", "Feedback & Revisions"),
                    desc: t(
                      "home1.processStep3Desc",
                      "We collaborate with you to refine and perfect the work, ensuring it matches your expectations.",
                    ),
                    icon: (
                      <svg
                        className="w-8 h-8 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    ),
                  },
                  {
                    title: t("home1.processStep4Title", "Launch & Support"),
                    desc: t(
                      "home1.processStep4Desc",
                      "We launch your project and provide ongoing support to help you grow and succeed.",
                    ),
                    icon: (
                      <svg
                        className="w-8 h-8 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4v16m8-8H4" />
                      </svg>
                    ),
                  },
                ].map((step, idx) => (
                  <li
                    key={step.title}
                    className="mb-12 ml-8 relative"
                    data-aos="fade-up"
                    data-aos-delay={idx}
                  >
                    <span className="absolute flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-full -left-15 ring-4 ring-white dark:ring-gray-900 shadow-lg">
                      {step.icon}
                    </span>
                    <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-1 mt-2">
                      {step.title}
                    </h2>
                    <p className="text-blue-700 dark:text-blue-300 text-base">
                      {step.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        {/* Client Testimonials Section */}
        <section
          id="testimonials"
          className="relative  mx-auto py-16 px-6 flex flex-col items-center justify-center text-center rounded-3xl bg-gradient-to-br from-blue-100 via-cyan-100 to-yellow-50 dark:from-blue-950 dark:via-cyan-950 dark:to-yellow-950     overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-300/10 rounded-full blur-2xl pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-700 dark:text-cyan-200 mb-4 drop-shadow-lg tracking-tight">
            {t("home1.testimonialsTitle", "What Clients Say")}
          </h2>
          <p className="text-lg md:text-xl text-blue-800 dark:text-blue-100 mb-8 max-w-2xl mx-auto">
            {t(
              "home1.testimonialsDesc",
              "Hear from some of my amazing clients and collaborators about their experience working with me.",
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {[
              {
                name: t("home1.testimonial1Name", "Sarah K."),
                role: t("home1.testimonial1Role", "Startup Founder"),
                text: t(
                  "home1.testimonial1Text",
                  "Absolutely thrilled with my new portfolio site! The process was smooth, creative, and the results exceeded my expectations.",
                ),
                avatar: "https://randomuser.me/api/portraits/men/33.jpg",
              },
              {
                name: t("home1.testimonial2Name", "James L."),
                role: t("home1.testimonial2Role", "Marketing Director"),
                text: t(
                  "home1.testimonial2Text",
                  "Professional, responsive, and highly skilled. My brand now stands out online and I've seen a real boost in client inquiries.",
                ),
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: t("home1.testimonial3Name", "Priya S."),
                role: t("home1.testimonial3Role", "Freelancer Coach"),
                text: t(
                  "home1.testimonial3Text",
                  "A pleasure to work with! The attention to detail and creative vision made all the difference for my business.",
                ),
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: t("home1.testimonial4Name", "Alex M."),
                role: t("home1.testimonial4Role", "Agency Owner"),
                text: t(
                  "home1.testimonial4Text",
                  "Delivered on time, on budget, and with a unique flair. Highly recommended for anyone serious about their online presence!",
                ),
                avatar: "https://randomuser.me/api/portraits/men/85.jpg",
              },
            ].map((t, idx) => (
              <div
                key={t.name}
                className="relative group bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl border-l-8 border-cyan-400 dark:border-cyan-700 p-8 flex flex-col items-center overflow-visible transition-transform duration-200 hover:-translate-y-2 hover:shadow-3xl"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Floating Avatar */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={72}
                    height={72}
                    className="rounded-full border-4 border-cyan-400 dark:border-cyan-700 shadow-lg object-cover bg-white dark:bg-gray-900"
                  />
                </div>
                <div className="pt-12 flex flex-col items-center w-full">
                  <blockquote className="text-blue-900 dark:text-blue-100 italic mb-4 text-lg relative">
                    <svg
                      className="w-6 h-6 text-cyan-300 absolute -left-8 -top-2 opacity-60"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6.17A5.98 5.98 0 0 0 2 12c0 3.31 2.69 6 6 6v-2c-2.21 0-4-1.79-4-4 0-1.86 1.28-3.41 3-3.86V6.17zm9.66 0A5.98 5.98 0 0 0 16 6.17V8.14c1.72.45 3 2 3 3.86 0 2.21-1.79 4-4 4v2c3.31 0 6-2.69 6-6 0-2.21-1.79-4-4-4z" />
                    </svg>
                    {t.text}
                  </blockquote>
                  <span className="font-bold text-cyan-700 dark:text-cyan-300 text-lg mt-2">
                    {t.name}
                  </span>
                  <span className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    {t.role}
                  </span>
                </div>
                {/* Accent bar shadow effect */}
                <div className="absolute left-0 top-4 bottom-4 w-2 bg-gradient-to-b from-cyan-400/80 via-cyan-200/60 to-cyan-100/0 dark:from-cyan-700/80 dark:via-cyan-900/60 dark:to-cyan-900/0 rounded-full blur-sm opacity-70 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default Home1;
