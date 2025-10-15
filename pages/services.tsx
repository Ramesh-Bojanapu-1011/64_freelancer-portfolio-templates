import Head from "next/head";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import type { TFunction } from "i18next";

const useServices = (t: TFunction) => [
  {
    name: t("services.webDesign.title", t("nav.webDesign")),
    desc: t(
      "services.webDesign.desc",
      "Modern, responsive websites tailored to your brand.",
    ),
    icon: (
      <svg
        className="w-10 h-10 text-cyan-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
      </svg>
    ),
    href: "/web-design",
  },
  {
    name: t("services.uiux.title", t("nav.uiux")),
    desc: t(
      "services.uiux.desc",
      "Intuitive interfaces and seamless user experiences.",
    ),
    icon: (
      <svg
        className="w-10 h-10 text-yellow-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" />
        <path d="M9 9h.01M15 9h.01" />
      </svg>
    ),
    href: "/ui-ux-design",
  },
  {
    name: t("services.branding.title", t("nav.branding")),
    desc: t(
      "services.branding.desc",
      "Distinctive visual identities that stand out.",
    ),
    icon: (
      <svg
        className="w-10 h-10 text-pink-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    href: "/services/branding",
  },
  {
    name: t("services.development.title", "Development"),
    desc: t(
      "services.development.desc",
      "Robust, scalable web and app development.",
    ),
    icon: (
      <svg
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M16 18v-2a4 4 0 00-8 0v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    href: "/services/development",
  },
  {
    name: t("services.seoMarketing.title", "SEO & Marketing"),
    desc: t(
      "services.seoMarketing.desc",
      "Grow your reach with smart SEO and digital marketing.",
    ),
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    ),
    href: "/services/seo-marketing",
  },
  {
    name: t("services.contentCreation.title", "Content Creation"),
    desc: t(
      "services.contentCreation.desc",
      "Engaging copy, visuals, and media for your brand.",
    ),
    icon: (
      <svg
        className="w-10 h-10 text-purple-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
    href: "/services/content-creation",
  },
];

const ServicesPage = () => {
  const { t } = useTranslation();
  const services = useServices(t);
  return (
    <>
      <Head>
        <title>
          {t("services.metaTitle", "Our Services - Freelancer Portfolio")}
        </title>
        <meta
          name="description"
          content={t(
            "services.metaDescription",
            "Explore our creative services for freelancers and businesses.",
          )}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 min-h-screen overflow-x-hidden ">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center  py-20 px-4 text-center bg-gradient-to-br from-cyan-50 via-blue-100 to-yellow-50 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-b border-cyan-100 dark:border-cyan-900 min-h-screen overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-100 mb-4 drop-shadow-lg">
            {t("services.title", "Our Services")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            {t(
              "services.heroDesc",
              "Discover the creative solutions we offer to help you shine online.",
            )}
          </p>
        </section>

        {/* Services Grid Section */}
        <section className="relative py-24 px-4 bg-gradient-to-tr from-white via-cyan-50 to-yellow-50 dark:from-gray-900 dark:via-cyan-950 dark:to-yellow-900 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-12 text-center">
              {t("services.whatWeOffer", "What We Offer")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <Link key={service.name} href={service.href} className="group">
                  <div className="relative bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-cyan-100 dark:border-cyan-900 p-8 flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                    <span className="mb-4">{service.icon}</span>
                    <h3 className="font-bold text-cyan-700 dark:text-cyan-300 text-xl mb-2 group-hover:text-blue-700 dark:group-hover:text-yellow-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 text-base text-center mb-2">
                      {service.desc}
                    </p>
                    <span className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-sm shadow group-hover:from-yellow-300 group-hover:to-yellow-400 group-hover:text-blue-900 transition-all duration-200">
                      {t("services.learnMore", "Learn More")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-blue-900 dark:text-yellow-200 mb-8 drop-shadow-lg">
              {t("services.successStories.title", "Success Stories")}
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-16 max-w-2xl mx-auto">
              {t(
                "services.successStories.desc",
                "See how we’ve helped clients achieve their goals with creative, impactful solutions.",
              )}
            </p>
            <div className="relative flex flex-col gap-16 before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-cyan-200 before:via-blue-200 before:to-yellow-200 dark:before:from-cyan-900 dark:before:via-blue-950 dark:before:to-yellow-900 before:-translate-x-1/2">
              {[
                {
                  year: "2023",
                  title: t(
                    "services.successStories.stories.0.title",
                    "Brand Transformation for NovaTech",
                  ),
                  desc: t(
                    "services.successStories.stories.0.desc",
                    "We reimagined NovaTech’s digital presence, resulting in a 60% increase in engagement and a fresh, modern brand identity.",
                  ),
                  img: "https://i.pinimg.com/736x/70/52/ad/7052ad5f76a69b85133af4569959dc32.jpg",
                  align: "left",
                },
                {
                  year: "2024",
                  title: t(
                    "services.successStories.stories.1.title",
                    "E-Commerce Growth for UrbanStyle",
                  ),
                  desc: t(
                    "services.successStories.stories.1.desc",
                    "A new e-commerce platform and marketing strategy led to a 2x boost in sales and a loyal customer base.",
                  ),
                  img: "https://i.pinimg.com/1200x/b9/df/da/b9dfda82c560fcdcd211f47ddeb73e41.jpg",
                  align: "right",
                },
                {
                  year: "2025",
                  title: t(
                    "services.successStories.stories.2.title",
                    "App Launch for FitTrackr",
                  ),
                  desc: t(
                    "services.successStories.stories.2.desc",
                    "From concept to launch, we delivered a top-rated fitness app, praised for its design and usability.",
                  ),
                  img: "https://i.pinimg.com/1200x/78/ca/7f/78ca7f46460eb43506f1c168bf6d4782.jpg",
                  align: "left",
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
                    story.align === "right" ? "md:flex-row-reverse" : ""
                  } gap-8 md:gap-16`}
                >
                  <div className="flex-1 flex flex-col justify-center items-end md:items-center">
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-100 dark:border-cyan-900 bg-white/60 dark:bg-gray-900/60">
                      <Image
                        src={story.img}
                        alt={story.title}
                        width={224}
                        height={224}
                        className="object-cover object-center w-full h-full"
                      />
                      <span className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-2xl opacity-30 pointer-events-none"></span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center md:items-start text-left md:text-left">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 font-bold text-sm shadow">
                        {story.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-2xl text-blue-900 dark:text-yellow-200 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100 mb-2 max-w-md">
                      {story.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Creative Process Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          <div className=" mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-blue-900 dark:text-yellow-200 mb-8 drop-shadow-lg">
              {t("services.process.title", "Our Creative Process")}
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-12 max-w-2xl mx-auto">
              {t(
                "services.process.desc",
                "Every project is a journey. Here’s how we turn your ideas into impactful digital experiences:",
              )}
            </p>
            <div className="flex flex-col flex-wrap md:flex-row gap-10 justify-center items-stretch">
              {[
                {
                  step: 1,
                  title: t("services.process.steps.0.title", "Discovery"),
                  desc: t(
                    "services.process.steps.0.desc",
                    "We listen, research, and understand your goals, audience, and vision.",
                  ),
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center bg-cyan-100 dark:bg-cyan-900 rounded-full shadow-lg mb-4 mx-auto">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#0891b2"
                          strokeWidth="2"
                          d="M12 20v-6m0 0V4m0 10H6m6 0h6"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  step: 2,
                  title: t(
                    "services.process.steps.1.title",
                    "Design & Ideation",
                  ),
                  desc: t(
                    "services.process.steps.1.desc",
                    "We craft wireframes, moodboards, and creative concepts tailored to your brand.",
                  ),
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900 rounded-full shadow-lg mb-4 mx-auto">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#eab308"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  step: 3,
                  title: t("services.process.steps.2.title", "Development"),
                  desc: t(
                    "services.process.steps.2.desc",
                    "We build robust, scalable, and beautiful digital products using the latest tech.",
                  ),
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full shadow-lg mb-4 mx-auto">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#2563eb"
                          strokeWidth="2"
                          d="M4 12h16m-8-8v16"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  step: 4,
                  title: t(
                    "services.process.steps.3.title",
                    "Launch & Support",
                  ),
                  desc: t(
                    "services.process.steps.3.desc",
                    "We launch, monitor, and support your project for ongoing success.",
                  ),
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full shadow-lg mb-4 mx-auto">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#22c55e"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  ),
                },
              ].map((step, idx) => (
                <div
                  key={step.title}
                  className="relative bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-cyan-100 dark:border-cyan-900 p-8 flex-1 flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[300px] max-w-[350px] mx-auto"
                  style={{ zIndex: 10 + idx }}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-2xl opacity-20 pointer-events-none"></span>
                  {step.icon}
                  <div className="text-2xl font-bold text-cyan-700 dark:text-yellow-300 mb-2">
                    {t("services.process.stepLabel", "Step")} {step.step}
                  </div>
                  <div className="font-bold text-blue-900 dark:text-yellow-200 text-xl mb-2">
                    {step.title}
                  </div>
                  <div className="text-blue-800 dark:text-blue-100 mb-2">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Tools & Technologies Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-8 drop-shadow-lg">
              Our Tools & Technologies
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-12 max-w-2xl mx-auto">
              We use the latest, most reliable tools and technologies to deliver
              high-quality results for every project.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              {[
                {
                  name: "Next.js",
                  img: (
                    <span className="w-20 h-20 flex items-center justify-center bg-white/40 dark:bg-gray-800/40 rounded-full shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110">
                      {/* Next.js SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 256 256"
                      >
                        <g fill="none">
                          <rect
                            width={256}
                            height={256}
                            fill="#f4f2ed"
                            rx={60}
                          ></rect>
                          <path
                            fill="#000"
                            d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392"
                          />
                        </g>
                      </svg>
                    </span>
                  ),
                  anim: "animate-float-slow",
                },
                {
                  name: "React",
                  img: (
                    <span className="w-20 h-20 flex items-center justify-center bg-white/40 dark:bg-gray-800/40 rounded-full shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110">
                      {/* React SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 256 256"
                      >
                        <g fill="none">
                          <rect
                            width={256}
                            height={256}
                            fill="#242938"
                            rx={60}
                          ></rect>
                          <path
                            fill="#00d8ff"
                            d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
                          />
                          <path
                            stroke="#00d8ff"
                            strokeWidth={8.911}
                            d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
                            clipRule="evenodd"
                          />
                          <path
                            stroke="#00d8ff"
                            strokeWidth={8.911}
                            d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
                            clipRule="evenodd"
                          />
                          <path
                            stroke="#00d8ff"
                            strokeWidth={8.911}
                            d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
                            clipRule="evenodd"
                          />
                        </g>
                      </svg>
                    </span>
                  ),
                  anim: "animate-float-medium",
                },
                {
                  name: "Tailwind CSS",
                  img: (
                    <span className="w-20 h-20 flex items-center justify-center bg-white/40 dark:bg-gray-800/40 rounded-full shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110">
                      {/* Tailwind SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 256 256"
                      >
                        <g fill="none">
                          <rect
                            width={256}
                            height={256}
                            fill="#242938"
                            rx={60}
                          ></rect>
                          <path
                            fill="url(#SVGYCM7xdyn)"
                            fillRule="evenodd"
                            d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
                            clipRule="evenodd"
                          />
                          <defs>
                            <linearGradient
                              id="SVGYCM7xdyn"
                              x1={86.5}
                              x2={163.5}
                              y1={74}
                              y2={185.5}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#32b1c1"></stop>
                              <stop offset={1} stopColor="#14c6b7"></stop>
                            </linearGradient>
                          </defs>
                        </g>
                      </svg>
                    </span>
                  ),
                  anim: "animate-float-fast",
                },
                {
                  name: "TypeScript",
                  img: (
                    <span className="w-20 h-20 flex items-center justify-center bg-white/40 dark:bg-gray-800/40 rounded-full shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110">
                      {/* TypeScript SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 256 256"
                      >
                        <g fill="none">
                          <rect
                            width={256}
                            height={256}
                            fill="#007acc"
                            rx={60}
                          ></rect>
                          <path
                            fill="#fff"
                            d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"
                          />
                        </g>
                      </svg>
                    </span>
                  ),
                  anim: "animate-float-slow",
                },
                {
                  name: "Figma",
                  img: (
                    <span className="w-20 h-20 flex items-center justify-center bg-white/40 dark:bg-gray-800/40 rounded-full shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110">
                      {/* Figma SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 256 256"
                      >
                        <g fill="none">
                          <rect
                            width={256}
                            height={256}
                            fill="#242938"
                            rx={60}
                          ></rect>
                          <g clipPath="url(#SVG9U8Xmbth)">
                            <path
                              fill="#0acf83"
                              d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"
                            />
                            <path
                              fill="#a259ff"
                              d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"
                            />
                            <path
                              fill="#f24e1e"
                              d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"
                            />
                            <path
                              fill="#ff7262"
                              d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"
                            />
                            <path
                              fill="#1abcfe"
                              d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"
                            />
                          </g>
                          <defs>
                            <clipPath id="SVG9U8Xmbth">
                              <path
                                fill="#fff"
                                d="M61 28h133.36v200H61z"
                              ></path>
                            </clipPath>
                          </defs>
                        </g>
                      </svg>
                    </span>
                  ),
                  anim: "animate-float-medium",
                },
                {
                  name: "Vercel",
                  img: (
                    <span className="w-20 h-20 flex items-center justify-center bg-white/40 dark:bg-gray-800/40 rounded-full shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110">
                      {/* Vercel SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={20}
                        viewBox="0 0 512 116"
                      >
                        <path d="M255.42 28.976c-19.993 0-34.408 13.039-34.408 32.597c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.218 6.338-15.466 6.338c-8.674 0-16.045-4.527-18.78-11.771h50.744c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.409-32.58m-17.13 26.26c2.263-7.226 8.457-11.772 17.113-11.772c8.675 0 14.869 4.546 17.114 11.772zm212.138-26.26c-19.993 0-34.409 13.04-34.409 32.598c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.217 6.338-15.465 6.338c-8.675 0-16.046-4.527-18.78-11.771H484.2c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.408-32.58m-17.114 26.26c2.264-7.226 8.457-11.772 17.114-11.772c8.674 0 14.868 4.546 17.113 11.772zm-70.683 6.338c0 10.866 7.1 18.11 18.11 18.11c7.461 0 13.057-3.386 15.937-8.91l13.908 8.023c-5.759 9.598-16.552 15.375-29.845 15.375c-20.011 0-34.408-13.04-34.408-32.598s14.415-32.597 34.408-32.597c13.293 0 24.068 5.777 29.845 15.375l-13.908 8.023c-2.88-5.524-8.476-8.91-15.937-8.91c-10.992 0-18.11 7.243-18.11 18.11M512 9.055V92.36h-16.299V9.055zM66.916 0l66.915 115.903H0zm167.298 9.055l-50.182 86.927l-50.183-86.927h18.817l31.366 54.33l31.366-54.33zm106.685 21.732v17.548c-1.811-.525-3.73-.887-5.795-.887c-10.522 0-18.11 7.244-18.11 18.11V92.36h-16.299V30.787h16.299v16.66c0-9.2 10.703-16.66 23.905-16.66" />
                      </svg>
                    </span>
                  ),
                  anim: "animate-float-fast",
                },
              ].map((tech, idx) => (
                <div
                  key={tech.name}
                  className={`relative group flex flex-col items-center bg-white/60 dark:bg-gray-900/60 rounded-2xl shadow-xl border border-cyan-100 dark:border-cyan-900 p-6 min-w-[120px] min-h-[140px] transition-all duration-300 hover:scale-105 hover:shadow-2xl ${tech.anim}`}
                  style={{ zIndex: 10 + idx }}
                >
                  {/* Floating accent shape */}
                  <span className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-2xl opacity-20 pointer-events-none"></span>
                  {tech.img}
                  <span className="text-blue-900 dark:text-blue-100 font-semibold mt-1">
                    {tech.name}
                  </span>
                </div>
              ))}
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
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-8 drop-shadow-lg">
              {t("services.whyChooseUs.title", "Why Choose Us?")}
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-12 max-w-2xl mx-auto">
              {t(
                "services.whyChooseUs.desc",
                "We’re not just another agency. Here’s what makes us the perfect partner for your next project:",
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  title: t(
                    "services.whyChooseUs.items.0.title",
                    "Creative Excellence",
                  ),
                  desc: t(
                    "services.whyChooseUs.items.0.desc",
                    "Award-winning designs and innovative solutions that set you apart.",
                  ),
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900 rounded-full shadow-lg mb-4 mx-auto">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#eab308"
                          strokeWidth="2"
                          d="M12 2v20m10-10H2"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  title: t(
                    "services.whyChooseUs.items.1.title",
                    "Client-Centric",
                  ),
                  desc: t(
                    "services.whyChooseUs.items.1.desc",
                    "We listen, adapt, and deliver personalized experiences every time.",
                  ),
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center bg-cyan-100 dark:bg-cyan-900 rounded-full shadow-lg mb-4 mx-auto">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#06b6d4"
                          strokeWidth="2"
                        />
                        <path
                          stroke="#06b6d4"
                          strokeWidth="2"
                          d="M8 15s1.5-2 4-2 4 2 4 2"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  title: t(
                    "services.whyChooseUs.items.2.title",
                    "Full-Service Team",
                  ),
                  desc: t(
                    "services.whyChooseUs.items.2.desc",
                    "From strategy to launch, our experts cover every aspect of your project.",
                  ),
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full shadow-lg mb-4 mx-auto">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#2563eb"
                          strokeWidth="2"
                          d="M4 12h16m-8-8v16"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  title: t(
                    "services.whyChooseUs.items.3.title",
                    "Ongoing Support",
                  ),
                  desc: t(
                    "services.whyChooseUs.items.3.desc",
                    "We’re here for you after launch, ensuring your continued success.",
                  ),
                  icon: (
                    <span className="w-14 h-14 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full shadow-lg mb-4 mx-auto">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#22c55e"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="relative bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-cyan-100 dark:border-cyan-900 p-8 flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[220px] mx-auto"
                  style={{ zIndex: 10 + idx }}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-2xl opacity-20 pointer-events-none"></span>
                  {item.icon}
                  <div className="font-bold text-blue-900 dark:text-yellow-200 text-xl mb-2">
                    {item.title}
                  </div>
                  <div className="text-blue-800 dark:text-blue-100 mb-2">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ServicesPage;
