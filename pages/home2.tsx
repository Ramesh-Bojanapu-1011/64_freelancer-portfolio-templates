import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Home2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("home2.title", "Freelancer Portfolio - Home 2")}</title>
        <meta
          name="description"
          content={t("home2.metaDescription", "Freelancer Portfolio Home 2")}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 max-w-screen overflow-x-hidden caret-transparent">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[100vh] py-16 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-100 mb-4 drop-shadow-lg">
            {t("home2.heroTitle", "Build Your Dream Portfolio")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            {t(
              "home2.heroDesc",
              "Showcase your talent, attract clients, and grow your freelance business with a modern, professional portfolio.",
            )}
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
          >
            {t("home2.getStarted", "Get Started")}
          </Link>
        </section>

        {/* About Section */}
        <section className="relative py-24 px-4 bg-gradient-to-tr from-cyan-50 via-blue-100 to-yellow-50 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-y border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="relative   mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className=" flex-1   flex flex-col items-center md:items-end z-10">
              <div className="relative md:ml-8 shadow-2xl">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1725472983249-01c107da16d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                  width={1000}
                  height={1000}
                  className="rounded-3xl border-4 border-cyan-400 shadow-xl object-cover bg-white dark:bg-gray-900"
                />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 text-yellow-100 font-bold text-base shadow-lg tracking-wide border-2 text-nowrap border-white dark:border-gray-900">
                  {t("home2.badge", "Freelancer / Portfolio Expert")}
                </span>
              </div>
            </div>
            {/* Floating card and vertical stepper */}
            <div className=" flex-1  flex flex-col items-center md:items-start z-20">
              <div className="bg-white/95 dark:bg-gray-900/95 rounded-3xl shadow-2xl border border-cyan-100 dark:border-cyan-900 p-10 w-full max-w-xl relative mb-8 md:mb-0">
                <h2 className="text-4xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-6 flex items-center gap-3">
                  <svg
                    className="w-9 h-9 text-cyan-400"
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
                  {t("home2.aboutTitle", "About Me")}
                </h2>
                <p className="text-xl text-blue-900 dark:text-blue-100 mb-8 leading-relaxed">
                  {t("home2.aboutDesc1", "I am a ")}
                  <span className="font-semibold text-cyan-700 dark:text-cyan-300">
                    {t("home2.aboutPassion", "creative freelancer")}
                  </span>
                  {t("home2.aboutDesc2", " with a passion for ")}
                  <span className="font-semibold">
                    {t("nav.webDesign", "web design")}
                  </span>
                  ,
                  <span className="font-semibold">
                    {t("nav.branding", "branding")}
                  </span>
                  ,{t("home2.aboutDesc3", " and ")}
                  <span className="font-semibold">
                    {t("nav.digitalMarketing", "digital marketing")}
                  </span>
                  .
                  {t(
                    "home2.aboutDesc4",
                    " My mission is to help you stand out online with a stunning, effective portfolio.",
                  )}
                </p>
                {/* Vertical stepper timeline */}
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
                      {t("home2.experienceTitle", "5+ Years Experience")}
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-base">
                      {t(
                        "home2.experienceDesc",
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
                      {t("home2.projectsTitle", "100+ Projects")}
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-base">
                      {t(
                        "home2.projectsDesc",
                        "Successfully completed for happy clients.",
                      )}
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 px-4 bg-gradient-to-tr from-cyan-50 via-blue-100 to-blue-200 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-y border-cyan-100 dark:border-cyan-900 overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-cyan-200 via-blue-200 to-transparent dark:from-cyan-900 dark:via-blue-900 dark:to-transparent rotate-12 rounded-full blur-2xl opacity-20 pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-cyan-100 via-blue-100 to-transparent dark:from-cyan-900 dark:via-blue-950 dark:to-transparent -rotate-12 rounded-full blur-2xl opacity-10 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-12 text-center tracking-tight">
              {t("home2.servicesTitle", "What I Offer")}
            </h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center items-stretch">
              {[
                {
                  title: t("nav.webDesign", "Web Design"),
                  desc: t(
                    "home2.serviceWebDesc",
                    "Modern, responsive websites tailored to your brand.",
                  ),
                  iconBg:
                    "bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-200 dark:from-cyan-700 dark:via-blue-800 dark:to-blue-900",
                  icon: (
                    <svg
                      className="w-10 h-10"
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
                  title: t("nav.branding", "Branding"),
                  desc: t(
                    "home2.serviceBrandingDesc",
                    "Unique visual identity to make your business memorable.",
                  ),
                  iconBg:
                    "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-100 dark:from-yellow-700 dark:via-yellow-800 dark:to-yellow-900",
                  icon: (
                    <svg
                      className="w-10 h-10"
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
                  title: t("nav.digitalMarketing", "Digital Marketing"),
                  desc: t(
                    "home2.serviceMarketingDesc",
                    "Grow your reach and attract more clients online.",
                  ),
                  iconBg:
                    "bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-100 dark:from-blue-700 dark:via-cyan-800 dark:to-blue-900",
                  icon: (
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className={`relative group flex-1 flex flex-col items-center text-center rounded-3xl shadow-2xl border border-cyan-100 dark:border-cyan-900 px-8 py-12 bg-white/90 dark:bg-gray-900/90 overflow-hidden transition-all duration-200 hover:-translate-y-2 hover:shadow-3xl  `}
                >
                  <span
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full shadow-lg border-4 border-white dark:border-gray-900 mb-6 text-white text-3xl ${s.iconBg} group-hover:scale-110 transition-transform duration-200`}
                  >
                    {s.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300 mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-lg mb-2">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="relative py-28 px-4 bg-gradient-to-br from-white via-yellow-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-y border-cyan-100 dark:border-cyan-900 overflow-hidden">
          {/* Decorative accent shapes */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-yellow-200 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 rounded-full blur-3xl opacity-25 pointer-events-none animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-cyan-100 via-blue-100 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-16 text-center tracking-tight drop-shadow-lg">
              {t("home2.portfolioTitle", "Portfolio")}{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t("home2.portfolioShowcase", "Showcase")}
              </span>
            </h2>
            {/* Portfolio cards array */}
            {(() => {
              const portfolioCards = [
                {
                  key: 1,
                  border: "border-cyan-100 dark:border-cyan-900",
                  bg: "bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950",
                  accent:
                    "absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-200 via-cyan-200 to-blue-200 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-900",
                  image:
                    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
                  alt: t("home2.portfolio1Title", "Creative Web App"),
                  overlayFrom: "from-cyan-900/70",
                  badge: "bg-cyan-600 text-yellow-100",
                  badgeText: "#01",
                  title: t("home2.portfolio1Title", "Creative Web App"),
                  titleColor: "text-cyan-700 dark:text-cyan-300",
                  overlayTitle: "text-yellow-100",
                  desc: t(
                    "home2.portfolio1Desc",
                    "A modern web application for a tech startup, featuring real-time collaboration and a sleek UI.",
                  ),
                  overlayDesc: "text-blue-100",
                  cardDesc: "text-blue-800 dark:text-blue-200",
                  mt: "",
                },
                {
                  key: 2,
                  border: "border-yellow-100 dark:border-yellow-900",
                  bg: "bg-gradient-to-br from-cyan-50 via-yellow-50 to-blue-100 dark:from-cyan-950 dark:via-yellow-950 dark:to-blue-950",
                  accent:
                    "absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-200 via-yellow-200 to-blue-200 dark:from-cyan-900 dark:via-yellow-900 dark:to-blue-900",
                  image:
                    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
                  alt: t("home2.portfolio2Title", "Branding Project"),
                  overlayFrom: "from-yellow-900/70",
                  badge: "bg-yellow-400 text-cyan-900",
                  badgeText: "#02",
                  title: t("home2.portfolio2Title", "Branding Project"),
                  titleColor: "text-yellow-600 dark:text-yellow-300",
                  overlayTitle: "text-yellow-100",
                  desc: t(
                    "home2.portfolio2Desc",
                    "A unique branding identity for a creative agency, blending bold colors and modern typography.",
                  ),
                  overlayDesc: "text-blue-100",
                  cardDesc: "text-blue-800 dark:text-blue-200",
                  mt: "mt-10 md:mt-0",
                },
                {
                  key: 3,
                  border: "border-blue-100 dark:border-blue-900",
                  bg: "bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-100 dark:from-blue-950 dark:via-cyan-950 dark:to-yellow-950",
                  accent:
                    "absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-200 via-cyan-200 to-yellow-200 dark:from-blue-900 dark:via-cyan-900 dark:to-yellow-900",
                  image:
                    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
                  alt: t("home2.portfolio3Title", "Marketing Campaign"),
                  overlayFrom: "from-blue-900/70",
                  badge: "bg-blue-600 text-yellow-100",
                  badgeText: "#03",
                  title: t("home2.portfolio3Title", "Marketing Campaign"),
                  titleColor: "text-blue-700 dark:text-blue-300",
                  overlayTitle: "text-yellow-100",
                  desc: t(
                    "home2.portfolio3Desc",
                    "A digital marketing campaign that increased client engagement by 200% through creative strategy.",
                  ),
                  overlayDesc: "text-blue-100",
                  cardDesc: "text-blue-800 dark:text-blue-200",
                  mt: "mt-10 lg:mt-0",
                },
              ];
              return (
                <div className=" flex flex-wrap justify-center gap-y-20 gap-x-10">
                  {portfolioCards.map((card) => (
                    <div
                      key={card.key}
                      className={`relative group flex flex-col items-center justify-end min-h-[420px] w-[380px] rounded-[2.5rem] shadow-2xl border-2 ${card.border} ${card.bg} overflow-hidden hover:scale-105 hover:shadow-3xl transition-all duration-300 ${card.mt}`}
                    >
                      {/* Floating accent */}
                      <div
                        className={`${card.accent} rounded-full blur-2xl opacity-30 pointer-events-none`}
                      ></div>
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={400}
                        height={300}
                        className="object-cover w-full h-56 rounded-t-[2.5rem] group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${card.overlayFrom} via-transparent to-yellow-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8`}
                      >
                        <h3
                          className={`text-2xl font-bold ${card.overlayTitle} mb-2 drop-shadow-lg`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`${card.overlayDesc} text-base drop-shadow mb-4`}
                        >
                          {card.desc}
                        </p>
                      </div>
                      {/* Card content for non-hover */}
                      <div className="p-8 group-hover:opacity-0 transition-opacity duration-200 w-full">
                        <span
                          className={`absolute top-6 left-6 ${card.badge} font-bold text-lg px-5 py-1 rounded-full shadow-lg z-10 opacity-90 group-hover:scale-110 transition-transform duration-200`}
                        >
                          {card.badgeText}
                        </span>
                        <h3
                          className={`text-xl font-bold ${card.titleColor} mb-2`}
                        >
                          {card.title}
                        </h3>
                        <p className={`${card.cardDesc} text-base`}>
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-gradient-to-tr from-blue-100 via-cyan-100 to-yellow-50 dark:from-blue-950 dark:via-cyan-950 dark:to-yellow-950 border-y border-cyan-100 dark:border-cyan-900  ">
          <div className=" mx-auto">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-14 text-center">
              {t("home2.testimonialsTitle", "What Clients Say")}
            </h2>
            {/* Horizontal scrollable carousel */}
            <div className="flex flex-wrap justify-center gap-10   pb-4    ">
              {[
                {
                  name: t("home2.testimonial1Name", "Emily R."),
                  role: t("home2.testimonial1Role", "Entrepreneur"),
                  text: t(
                    "home2.testimonial1Text",
                    "The new website brought my business to life! Professional, creative, and easy to work with.",
                  ),
                  avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                  bg: "bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950",
                  accent: "from-yellow-300 via-cyan-300 to-blue-300",
                },
                {
                  name: t("home2.testimonial2Name", "Michael B."),
                  role: t("home2.testimonial2Role", "Consultant"),
                  text: t(
                    "home2.testimonial2Text",
                    "Outstanding service and attention to detail. My portfolio stands out and attracts more clients.",
                  ),
                  avatar: "https://randomuser.me/api/portraits/men/43.jpg",
                  bg: "bg-gradient-to-br from-blue-50 via-cyan-50 to-yellow-100 dark:from-blue-900 dark:via-cyan-900 dark:to-yellow-900",
                  accent: "from-blue-300 via-cyan-300 to-yellow-200",
                },
                {
                  name: t("home2.testimonial3Name", "Sara K."),
                  role: t("home2.testimonial3Role", "Designer"),
                  text: t(
                    "home2.testimonial3Text",
                    "A fantastic experience! The site is beautiful and the process was smooth from start to finish.",
                  ),
                  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                  bg: "bg-gradient-to-br from-cyan-50 via-yellow-50 to-blue-100 dark:from-cyan-900 dark:via-yellow-900 dark:to-blue-950",
                  accent: "from-cyan-300 via-yellow-200 to-blue-200",
                },
              ].map((t, idx) => (
                <div
                  key={idx}
                  className={`snap-center min-w-[340px] max-w-xs md:min-w-[400px] md:max-w-md flex-shrink-0 rounded-3xl shadow-2xl border-2 border-cyan-100 dark:border-cyan-900 ${t.bg} p-8 flex flex-col items-center relative transition-transform duration-300 hover:-translate-y-2`}
                >
                  {/* Decorative quote icon */}
                  <span
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${t.accent} shadow-lg text-cyan-700 dark:text-cyan-200 text-4xl`}
                  >
                    <svg
                      width="36"
                      height="36"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v2a4 4 0 01-4 4H7zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v2a4 4 0 01-4 4h-2z"
                      />
                    </svg>
                  </span>
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={72}
                    height={72}
                    className="rounded-full border-4 border-cyan-300 shadow mb-4 object-cover"
                  />
                  <blockquote className="text-blue-900 dark:text-blue-100 italic mb-4 text-lg text-center">
                    “{t.text}”
                  </blockquote>
                  <span className="font-bold text-cyan-700 dark:text-cyan-300 text-lg">
                    {t.name}
                  </span>
                  <span className="text-sm text-blue-700 dark:text-blue-300">
                    {t.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative py-24 px-4 bg-gradient-to-br from-cyan-50 via-blue-100 to-yellow-50 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950 border-y border-cyan-100 dark:border-cyan-900 overflow-hidden"
        >
          {/* Decorative accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
            <h2 className="text-4xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-8 tracking-tight">
              {t("home2.contactTitle", "Let's Collaborate!")}
            </h2>
            <p className="text-xl text-blue-900 dark:text-blue-100 mb-10 max-w-2xl">
              {t(
                "home2.contactDesc",
                "Interested in working together on your next project? Whether you need a stunning website, a fresh brand identity, or a digital marketing boost, I'm here to help you shine online.",
              )}
            </p>
            <div className="w-full max-w-xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl border border-cyan-100 dark:border-cyan-900 p-10 mb-8 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300 mb-4 flex items-center gap-2">
                <svg
                  className="w-7 h-7 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 21l5-5m0 0l-5-5m5 5H9"
                  />
                </svg>
                {t("home2.contactFormTitle", "Project Inquiry")}
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-6">
                {t(
                  "home2.contactFormDesc",
                  "Tell me about your goals, timeline, and vision. I'll get back to you with ideas and a plan to make your project a success.",
                )}
              </p>
              <Link
                href="/contact-us"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200 mb-2"
              >
                {t("home2.contactButton", "Contact Us")}
              </Link>
              <div className="flex gap-4 justify-center mt-4">
                <Link
                  href="https://www.linkedin.com/"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Home2;
