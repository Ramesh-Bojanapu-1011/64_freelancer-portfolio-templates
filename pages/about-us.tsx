import Head from "next/head";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.metaDescription")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 max-w-screen overflow-x-hidden caret-transparent">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[100vh] py-20 px-4 text-center bg-gradient-to-br from-cyan-50 via-blue-100 to-yellow-50 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-b border-cyan-100 dark:border-cyan-900">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-100 mb-4 drop-shadow-lg">
            {t("about.heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            {t("about.heroDesc")}
          </p>
        </section>

        {/* Our Story Section */}
        <section className="relative py-24 px-4 bg-gradient-to-tr from-white via-cyan-50 to-yellow-50 dark:from-gray-900 dark:via-cyan-950 dark:to-yellow-900 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          {/* Decorative accent shapes */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-yellow-100 via-cyan-100 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-16 text-center tracking-tight drop-shadow-lg">
              {t("about.storyTitle")}
            </h2>
            {/* Timeline */}
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full opacity-60"></div>
              {/* Timeline events */}
              <div className="relative z-10 w-full flex flex-col gap-16">
                {[
                  {
                    year: "2018",
                    yearColor: "text-cyan-700 dark:text-cyan-300",
                    badge:
                      "bg-gradient-to-br from-cyan-400 via-blue-400 to-yellow-200 dark:from-cyan-700 dark:via-blue-800 dark:to-yellow-900",
                    dot: "bg-gradient-to-br from-cyan-400 via-blue-400 to-yellow-200 dark:from-cyan-700 dark:via-blue-800 dark:to-yellow-900",
                    title: t("about.timeline.2018.title"),
                    titleColor: "text-cyan-700 dark:text-cyan-300",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#f9f9f9"
                          d="m11.391 23.879l-9.386-5.5c-.269-.158-.492-.546-.492-.86V6.48c0-.314.223-.7.494-.857L11.506.116c.274-.157.717-.154.988.003l9.499 5.561c.271.16.494.546.494.86v10.979c0 .314-.223.7-.494.857l-9.613 5.509c-.271.154-.717.154-.989-.006m1.221-.934l6.929-3.958c.274-.157.471-.354.443-.443c-.029-.088-.309-.125-.62-.085l-6.684.877a.67.67 0 0 0-.566.646v2.674c0 .315.226.446.498.289M9.714 1.951l-6.766 3.92c-.272.158-.272.418 0 .575l2.208 1.288a.676.676 0 0 0 .846-.162l4.075-5.204c.194-.248.306-.508.243-.577s-.335.003-.606.16m2.429 16.222l5.212-9.064c.157-.272.028-.494-.286-.494H6.725c-.314 0-.443.222-.289.497l5.141 9.058c.154.274.409.274.566.003m1.489-7.247s-.949.28-.952.958c0 .674 1.129 1.025 1.129 1.025v.669h-1.12a1.37 1.37 0 0 0-.752-.237c-.268 0-.523.086-.751.237H10.12v-.669c.36 0 1.086-.591 1.086-1.02c0-.428-.683-.517-.683-.517h-.54c-1.258 0-1.749-1.186-1.749-1.186h2.08v-.228h4.824v.731c-.646 0-1.506.237-1.506.237m-3.052-.58h4.303c.026 0 .049-.02.049-.048v-.029a.05.05 0 0 0-.049-.048H10.58a.05.05 0 0 0-.049.048v.029c0 .025.02.048.049.048m-.297.2v-.097a.023.023 0 0 0-.023-.023H8.868c-.02 0-.028.032-.008.043c.211.112.351.1.351.1h1.049a.023.023 0 0 0 .023-.023M2.17 7.166v7.972c0 .315.075.589.166.606s.266-.203.386-.494l2.617-6.252a.655.655 0 0 0-.28-.803L2.67 6.872c-.274-.152-.5-.02-.5.294m11.459-5.375c-.06.071.048.329.243.577l4.072 5.204c.194.248.574.32.845.162l2.209-1.288c.272-.157.272-.417 0-.575l-6.763-3.92c-.272-.157-.546-.229-.606-.16m8.172 13.347V7.166c0-.314-.226-.446-.5-.294l-2.389 1.323a.65.65 0 0 0-.28.803l2.618 6.252c.123.291.294.511.385.494c.092-.02.166-.291.166-.606m-8.895 3.652l8.218-1.083c.311-.04.466-.311.346-.6l-3.201-7.644c-.123-.288-.348-.303-.505-.031l-5.141 8.938c-.154.271-.029.46.283.42m4.317-11.144l-4.88-6.444c-.189-.251-.503-.254-.697-.005L6.594 7.649c-.195.248-.095.451.22.451h10.184c.314 0 .414-.203.225-.454M2.759 17.71l8.055 1.077c.314.043.44-.146.286-.42L6.036 9.44c-.157-.274-.38-.26-.5.032L2.41 17.104c-.12.292.037.563.349.606m8.841 4.946h-.003v-2.669a.675.675 0 0 0-.566-.648l-6.54-.878c-.312-.042-.592-.002-.621.083c-.028.086.169.289.441.446l6.795 3.949c.271.16.494.032.494-.283"
                          strokeWidth={0.5}
                          stroke="#f9f9f9"
                        ></path>
                      </svg>
                    ),
                    desc: t("about.timeline.2018.desc"),
                  },
                  {
                    year: "2020",
                    yearColor: "text-yellow-600 dark:text-yellow-300",
                    badge:
                      "bg-gradient-to-br from-yellow-300 via-cyan-300 to-blue-200 dark:from-yellow-700 dark:via-cyan-800 dark:to-blue-900",
                    dot: "bg-gradient-to-br from-yellow-300 via-cyan-300 to-blue-200 dark:from-yellow-700 dark:via-cyan-800 dark:to-blue-900",
                    title: t("about.timeline.2020.title"),
                    titleColor: "text-yellow-600 dark:text-yellow-300",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 50 50"
                      >
                        <g
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            stroke="#344054"
                            d="M6.25 25c8.333 0 27.083-4.167 35.417-18.75"
                          ></path>
                          <path
                            stroke="#344054"
                            d="M33.333 6.25h8.334l2.083 8.333"
                          ></path>
                          <path
                            stroke="#306cfe"
                            d="M12.5 43.75H6.25v-8.333h6.25zm16.667-12.5h-6.25v12.5h6.25zm16.666-8.333h-6.25V43.75h6.25z"
                          ></path>
                        </g>
                      </svg>
                    ),
                    desc: t("about.timeline.2020.desc"),
                  },
                  {
                    year: "2023",
                    yearColor: "text-blue-600 dark:text-blue-300",
                    badge:
                      "bg-gradient-to-br from-blue-400 via-cyan-400 to-yellow-200 dark:from-blue-700 dark:via-cyan-800 dark:to-yellow-900",
                    dot: "bg-gradient-to-br from-blue-400 via-cyan-400 to-yellow-200 dark:from-blue-700 dark:via-cyan-800 dark:to-yellow-900",
                    title: t("about.timeline.2023.title"),
                    titleColor: "text-blue-600 dark:text-blue-300",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 14 14"
                      >
                        <g fill="none">
                          <path
                            fill="#d7e0ff"
                            fillRule="evenodd"
                            d="M.65 8.074v3.62l3.167 1.357l3.167-1.357l3.166 1.357l3.167-1.357v-3.62l-.008-.003l-3.159 1.353l-3.166-1.357l3.166-1.35l.002-3.621l-.002.026L6.983 4.48L3.82 3.123l-.002 3.594l3.167 1.35l-3.167 1.359z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#fff"
                            d="m6.985 1.738l3.167 1.357l-.002.027l-3.167 1.357l-3.166-1.357l.002-.027zm3.165 4.979l3.158 1.354l-3.158 1.353l-3.166-1.357l-3.167 1.359L.65 8.074l3.167-1.357l3.167 1.35z"
                          ></path>
                          <path
                            stroke="#1447e6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m.65 8.067l3.167 1.357l3.167-1.357M3.817 3.122l3.166 1.357l3.167-1.357"
                            strokeWidth={1}
                          ></path>
                          <path
                            stroke="#1447e6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6.983 8.067l3.167 1.357l3.167-1.357M.65 11.694v-3.62l3.167-1.357l3.167 1.357v3.62L3.817 13.05z"
                            strokeWidth={1}
                          ></path>
                          <path
                            stroke="#1447e6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.819 6.715v-3.62l3.166-1.357l3.167 1.357v3.62L6.985 8.072zm3.164 4.979v-3.62l3.167-1.357l3.167 1.357v3.62L10.15 13.05zM3.817 9.426v3.625m6.335-3.625v3.625M6.983 4.48v3.624"
                            strokeWidth={1}
                          ></path>
                        </g>
                      </svg>
                    ),
                    desc: t("about.timeline.2023.desc"),
                  },
                ].map((event, idx) => {
                  const isRight = idx % 2 === 0;
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${
                        !isRight ? "md:flex-row" : "md:flex-row-reverse"
                      }    items-center md:items-start gap-8 md:gap-0`}
                    >
                      <div
                        className={`md:w-1/2 flex justify-end ${
                          !isRight ? "md:pr-10" : "md:pl-10"
                        } order-2 md:order-1`}
                      >
                        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-cyan-100 dark:border-cyan-900 p-8 max-w-md w-full text-right md:text-left">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={`  justify-center w-10 h-10 rounded-full ${event.badge} flex items-center justify-center text-white text-2xl shadow-lg`}
                            >
                              {event.icon}
                            </span>
                            <span
                              className={`font-bold ${event.yearColor} text-lg`}
                            >
                              {event.year}
                            </span>
                          </div>
                          <div
                            className={`font-bold text-xl mb-1 ${event.titleColor}`}
                          >
                            {event.title}
                          </div>
                          <div className="text-blue-800 dark:text-blue-200">
                            {event.desc}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`flex max-[768px]:hidden absolute justify-center ${
                          isRight
                            ? "md:justify-end max-[769px]:left-90 left-108    "
                            : " md:justify-start max-[769px]:right-90 right-108"
                        }  order-1 md:order-2 mb-6 md:mb-0`}
                      >
                        <span
                          className={`block w-8 h-8 rounded-full ${event.dot} border-4 border-white dark:border-gray-900 shadow-lg`}
                        ></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="relative py-24 px-4 bg-gradient-to-tr from-cyan-50 via-blue-100 to-yellow-50 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          {/* Decorative accent shapes */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-r from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>

          <div className="mx-auto text-center  z-10">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-4 drop-shadow-lg">
              {t("about.teamTitle")}
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-14 max-w-2xl mx-auto">
              {t("about.teamDesc")}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
              {[
                {
                  name: t("about.team.0.name"),
                  role: t("about.team.0.role"),
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                  accent:
                    "from-cyan-300 via-blue-200 to-yellow-100 dark:from-cyan-800 dark:via-blue-900 dark:to-yellow-900",
                  shadow: "shadow-cyan-200 dark:shadow-cyan-900/40",
                },
                {
                  name: t("about.team.1.name"),
                  role: t("about.team.1.role"),
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                  accent:
                    "from-yellow-200 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-900",
                  shadow: "shadow-yellow-200 dark:shadow-yellow-900/40",
                },
                {
                  name: t("about.team.2.name"),
                  role: t("about.team.2.role"),
                  avatar: "https://randomuser.me/api/portraits/men/65.jpg",
                  accent:
                    "from-blue-200 via-cyan-200 to-yellow-100 dark:from-blue-900 dark:via-cyan-900 dark:to-yellow-900",
                  shadow: "shadow-blue-200 dark:shadow-blue-900/40",
                },
              ].map((member, idx) => (
                <div
                  key={member.name}
                  className={`relative group w-72 md:w-80 bg-white dark:bg-gray-900 rounded-3xl border border-cyan-100 dark:border-cyan-900 p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl ${member.shadow} z-10 `}
                  style={{
                    boxShadow:
                      idx === 1
                        ? "0 8px 32px 0 rgba(0, 183, 255, 0.15)"
                        : undefined,
                  }}
                >
                  <div className={`relative mb-4`}>
                    <span
                      className={`absolute -top-2 -left-2 w-24 h-24 rounded-full bg-gradient-to-br ${member.accent} blur-2xl opacity-30 pointer-events-none`}
                    ></span>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="rounded-full border-4 border-cyan-300 shadow-lg object-cover relative z-10"
                    />
                  </div>
                  <h3 className="font-bold text-cyan-700 dark:text-cyan-300 text-xl mb-1">
                    {member.name}
                  </h3>
                  <span className="text-blue-700 dark:text-blue-300 text-base mb-2">
                    {member.role}
                  </span>
                  <div className="w-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-yellow-200 dark:from-cyan-700 dark:via-blue-800 dark:to-yellow-900 mt-3 mb-1 opacity-60"></div>
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400 group-hover:dark:border-cyan-600 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative py-24 px-4 bg-white dark:bg-gray-900 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          {/* Decorative floating shapes */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-r from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-10 drop-shadow-lg">
              {t("about.valuesTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center md:gap-16">
              {[
                {
                  title: t("about.values.0.title"),
                  desc: t("about.values.0.desc"),
                  icon: (
                    <svg
                      className="w-16 h-16 mx-auto text-cyan-400 drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12V4"
                      />
                    </svg>
                  ),
                  accent:
                    "from-cyan-100 via-blue-100 to-yellow-50 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900",
                  shadow: "shadow-cyan-200 dark:shadow-cyan-900/40",
                  anim: "animate-float-slow",
                },
                {
                  title: t("about.values.1.title"),
                  desc: t("about.values.1.desc"),
                  icon: (
                    <svg
                      className="w-16 h-16 mx-auto text-yellow-400 drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 15s1.5-2 4-2 4 2 4 2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 9h.01M15 9h.01"
                      />
                    </svg>
                  ),
                  accent:
                    "from-yellow-100 via-cyan-100 to-blue-50 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-900",
                  shadow: "shadow-yellow-200 dark:shadow-yellow-900/40",
                  anim: "animate-float-medium",
                },
                {
                  title: t("about.values.2.title"),
                  desc: t("about.values.2.desc"),
                  icon: (
                    <svg
                      className="w-16 h-16 mx-auto text-blue-400 drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ),
                  accent:
                    "from-blue-100 via-cyan-100 to-yellow-50 dark:from-blue-900 dark:via-cyan-900 dark:to-yellow-900",
                  shadow: "shadow-blue-200 dark:shadow-blue-900/40",
                  anim: "animate-float-fast",
                },
              ].map((v, idx) => (
                <div
                  key={v.title}
                  className={`relative group bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-cyan-100 dark:border-cyan-900 p-10 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl ${v.shadow} ${v.anim}`}
                  style={{
                    boxShadow:
                      idx === 1
                        ? "0 8px 32px 0 rgba(0, 183, 255, 0.10)"
                        : undefined,
                  }}
                >
                  <div className="relative mb-6">
                    <span
                      className={`absolute -top-4 -left-4 w-28 h-28 rounded-full bg-gradient-to-br ${v.accent} blur-2xl opacity-30 pointer-events-none`}
                    ></span>
                    <span className="relative z-10">{v.icon}</span>
                  </div>
                  <h3 className="font-bold text-cyan-700 dark:text-cyan-300 text-2xl mb-2">
                    {v.title}
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-base font-medium max-w-xs mx-auto">
                    {v.desc}
                  </p>
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400 group-hover:dark:border-cyan-600 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
          {/* Floating animation keyframes */}
          <style jsx>{`
            @keyframes float-slow {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-18px);
              }
            }
            @keyframes float-medium {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-32px);
              }
            }
            @keyframes float-fast {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-12px);
              }
            }
            .animate-float-slow {
              animation: float-slow 5s ease-in-out infinite;
            }
            .animate-float-medium {
              animation: float-medium 7s ease-in-out infinite;
            }
            .animate-float-fast {
              animation: float-fast 4s ease-in-out infinite;
            }
          `}</style>
        </section>
        {/* 🌟 Client Success Stories - Modern Redesign */}
        <section className="relative py-28 px-6 bg-gradient-to-br from-cyan-100 via-blue-50 to-yellow-100 dark:from-slate-950 dark:via-cyan-950 dark:to-blue-950 overflow-hidden">
          {/* Animated Gradient Blobs */}
          <div className="absolute top-[-100px] left-[5%] w-96 h-96 bg-cyan-300/30 dark:bg-cyan-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-120px] right-[10%] w-[28rem] h-[28rem] bg-yellow-300/20 dark:bg-yellow-900/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg mb-6 tracking-tight">
              {t("about.testimonialsTitle")}
            </h2>
            <p className="text-lg md:text-xl text-blue-800 dark:text-blue-200 mb-16 max-w-2xl mx-auto leading-relaxed">
              {t("about.testimonialsDesc")}
            </p>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  name: t("about.testimonials.0.name"),
                  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                  quote: t("about.testimonials.0.quote"),
                  company: t("about.testimonials.0.company"),
                },
                {
                  name: t("about.testimonials.1.name"),
                  avatar: "https://randomuser.me/api/portraits/men/51.jpg",
                  quote: t("about.testimonials.1.quote"),
                  company: t("about.testimonials.1.company"),
                },
                {
                  name: t("about.testimonials.2.name"),
                  avatar: "https://randomuser.me/api/portraits/women/85.jpg",
                  quote: t("about.testimonials.2.quote"),
                  company: t("about.testimonials.2.company"),
                },
              ].map((tst, i) => (
                <div
                  key={i}
                  className="group relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-cyan-100 dark:border-cyan-800 shadow-2xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 hover:shadow-cyan-400/40"
                >
                  {/* Animated Halo Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-cyan-300/30 via-blue-300/30 to-yellow-300/30 blur-2xl -z-10"></div>

                  {/* Quote Icon */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg
                      className="w-12 h-12 text-cyan-400 dark:text-cyan-600 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6.17A5.97 5.97 0 0 0 2 12c0 3.31 2.69 6 6 6 1.66 0 3-1.34 3-3 0-1.31-1.01-2.42-2.32-2.91C9.47 10.36 10 9.24 10 8c0-1.1-.9-2-2-2-.31 0-.61.06-.83.17zm9 0A5.97 5.97 0 0 0 11 12c0 3.31 2.69 6 6 6 1.66 0 3-1.34 3-3 0-1.31-1.01-2.42-2.32-2.91C18.47 10.36 19 9.24 19 8c0-1.1-.9-2-2-2-.31 0-.61.06-.83.17z" />
                    </svg>
                  </div>

                  {/* Avatar */}
                  <div className="mt-8 mb-4">
                    <Image
                      src={tst.avatar}
                      alt={tst.name}
                      width={90}
                      height={90}
                      className="rounded-full border-4 border-cyan-300 shadow-md object-cover transition-transform duration-500 group-hover:scale-110 bg-white dark:bg-gray-800"
                    />
                  </div>

                  {/* Quote */}
                  <p className="text-lg italic text-blue-900 dark:text-blue-100 mb-6 leading-relaxed">
                    “{tst.quote}”
                  </p>

                  {/* Name */}
                  <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 text-lg">
                    {tst.name}
                  </h3>
                  <span className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                    {tst.company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 via-blue-100 to-yellow-50 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-6">
              {t("about.ctaTitle")}
            </h2>
            <p className="text-lg text-blue-900 dark:text-blue-100 mb-8">
              {t("about.ctaDesc")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
            >
              {t("about.ctaButton")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default AboutUs;
