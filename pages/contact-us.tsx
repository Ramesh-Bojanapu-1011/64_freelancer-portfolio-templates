import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

// FAQ and testimonial data are loaded from i18n inside the component so content is fully translatable.

const ContactUs = () => {
  const { t } = useTranslation();
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  // Load translatable arrays from i18n resource files
  const faqs = t("contact.faqs", { returnObjects: true }) as Array<{
    q: string;
    a: string;
  }>;
  const testimonials = t("contact.testimonials", {
    returnObjects: true,
  }) as Testimonial[];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert(t("contact.form.error"));
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setForm({ name: "", email: "", message: "" });
        setSuccess(true);
      } else {
        alert(t("contact.form.error"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(t("contact.form.error"));
    }
  };
  return (
    <>
      <Head>
        <title>{t("contact.title")}</title>
        <meta name="description" content={t("contact.metaDescription")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] py-20 px-4 text-center bg-gradient-to-br from-cyan-50 via-blue-100 to-yellow-50 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-100 mb-4 drop-shadow-lg">
            {t("contact.heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            {t("contact.heroDesc")}
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-20 px-4 bg-gradient-to-tr from-white via-cyan-50 to-yellow-50 dark:from-gray-900 dark:via-cyan-950 dark:to-yellow-900 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-10 border border-cyan-100 dark:border-cyan-900">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-8 text-center">
              {t("contact.form.title")}
            </h2>
            {success && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
                <div className="relative flex flex-col items-center justify-center gap-2 p-8 bg-gradient-to-r from-cyan-500 via-emerald-400 to-yellow-400 text-white rounded-3xl text-center font-bold shadow-2xl min-w-[320px] max-w-[90vw] animate-fade-in-up">
                  <button
                    onClick={() => setSuccess(false)}
                    aria-label="Close"
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white text-2xl font-bold transition"
                  >
                    ×
                  </button>
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 border-2 border-white mb-2">
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="#21c2ad" />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-lg md:text-xl font-semibold tracking-tight">
                    {t("contact.form.successTitle")}
                  </span>
                  <span className="text-white/80 text-sm font-normal">
                    {t("contact.form.successDesc")}
                  </span>
                </div>
              </div>
            )}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xovlekvg"
              method="POST"
              className="flex flex-col gap-6"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder={t("contact.form.placeholderName")}
                onChange={handleChange}
                className="px-6 py-3 rounded-full border border-cyan-200 dark:border-cyan-800 bg-white/80 dark:bg-gray-900/80 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.form.placeholderEmail")}
                className="px-6 py-3 rounded-full border border-cyan-200 dark:border-cyan-800 bg-white/80 dark:bg-gray-900/80 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <textarea
                placeholder={t("contact.form.placeholderMessage")}
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="px-6 py-3 rounded-3xl border border-cyan-200 dark:border-cyan-800 bg-white/80 dark:bg-gray-900/80 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-lg shadow hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
              >
                {t("contact.form.submit")}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          {/* Animated Accent Gradients */}
          <div className="absolute -top-16 left-1/4 w-40 h-40 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <div className="absolute -bottom-16 right-1/4 w-40 h-40 bg-gradient-to-br from-yellow-100 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-6 drop-shadow-lg">
              {t("contact.info.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
              {/* Email Block */}
              <div className="flex-1 bg-white/90 dark:bg-gray-900/90 rounded-2xl p-8 border border-cyan-100 dark:border-cyan-900 shadow flex flex-col items-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <span className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-2xl opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity"></span>
                <span className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 shadow-lg">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#0891b2"
                      strokeWidth="2"
                      d="M3 8l9 6 9-6M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
                    />
                  </svg>
                </span>
                <div className="font-bold text-blue-900 dark:text-yellow-200 mb-2 text-lg">
                  {t("contact.info.email")}
                </div>
                <a
                  href="mailto:hello@yourportfolio.com"
                  className="text-cyan-700 dark:text-cyan-300 underline break-all font-semibold"
                >
                  {t("contact.info.emailValue")}
                </a>
              </div>
              {/* Location Block */}
              <div className="flex-1 bg-white/90 dark:bg-gray-900/90 rounded-2xl p-8 border border-cyan-100 dark:border-cyan-900 shadow flex flex-col items-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <span className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-yellow-100 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 rounded-full blur-2xl opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity"></span>
                <span className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 shadow-lg">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#eab308"
                      strokeWidth="2"
                      d="M12 21c-4.418 0-8-3.582-8-8a8 8 0 1 1 16 0c0 4.418-3.582 8-8 8zm0-11a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    />
                  </svg>
                </span>
                <div className="font-bold text-blue-900 dark:text-yellow-200 mb-2 text-lg">
                  {t("contact.info.location")}
                </div>
                <div className="text-cyan-700 dark:text-cyan-300 font-semibold">
                  {t("contact.info.locationValue")}
                </div>
              </div>
              {/* Social Block */}
              <div className="flex-1 bg-white/90 dark:bg-gray-900/90 rounded-2xl p-8 border border-cyan-100 dark:border-cyan-900 shadow flex flex-col items-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <span className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-100 via-cyan-200 to-yellow-100 dark:from-blue-900 dark:via-cyan-900 dark:to-yellow-900 rounded-full blur-2xl opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity"></span>
                <span className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-cyan-200 to-yellow-100 dark:from-blue-900 dark:via-cyan-900 dark:to-yellow-900 shadow-lg">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#2563eb"
                      strokeWidth="2"
                      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm-5 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                    />
                  </svg>
                </span>
                <div className="font-bold text-blue-900 dark:text-yellow-200 mb-2 text-lg">
                  {t("contact.info.social")}
                </div>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="#"
                    className="text-cyan-700 dark:text-cyan-300 hover:underline font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#fff"
                          rx={60}
                        ></rect>
                        <rect
                          width={256}
                          height={256}
                          fill="#0a66c2"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-cyan-700 dark:text-cyan-300 hover:underline font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#fff"
                          rx={60}
                        ></rect>
                        <rect
                          width={256}
                          height={256}
                          fill="#1d9bf0"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-cyan-700 dark:text-cyan-300 hover:underline font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="url(#SVGWRUqebek)"
                          rx={60}
                        ></rect>
                        <rect
                          width={256}
                          height={256}
                          fill="url(#SVGfkNpldMH)"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                        ></path>
                        <defs>
                          <radialGradient
                            id="SVGWRUqebek"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fd5"></stop>
                            <stop offset={0.1} stopColor="#fd5"></stop>
                            <stop offset={0.5} stopColor="#ff543e"></stop>
                            <stop offset={1} stopColor="#c837ab"></stop>
                          </radialGradient>
                          <radialGradient
                            id="SVGfkNpldMH"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3771c8"></stop>
                            <stop offset={0.128} stopColor="#3771c8"></stop>
                            <stop
                              offset={1}
                              stopColor="#60f"
                              stopOpacity={0}
                            ></stop>
                          </radialGradient>
                        </defs>
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl font-extrabold text-blue-900 dark:text-yellow-200 mb-8 drop-shadow-lg">
              {t("contact.faq.title")}
            </h2>
            {/* Animated Accent */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-16 bg-gradient-to-r from-cyan-200 via-yellow-100 to-blue-200 dark:from-cyan-900 dark:via-yellow-900 dark:to-blue-950 rounded-full blur-2xl opacity-30 pointer-events-none animate-pulse"></div>
            {/* FAQ Accordion */}
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* Testimonials Section - Creative Carousel Style */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          {/* Decorative SVG Accent */}
          <svg
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 opacity-20 pointer-events-none"
            viewBox="0 0 400 100"
            fill="none"
          >
            <ellipse
              cx="200"
              cy="50"
              rx="200"
              ry="50"
              fill="url(#testimonial-gradient)"
            />
            <defs>
              <linearGradient
                id="testimonial-gradient"
                x1="0"
                y1="0"
                x2="400"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#a7f3d0" />
                <stop offset="0.5" stop-color="#fef08a" />
                <stop offset="1" stop-color="#bae6fd" />
              </linearGradient>
            </defs>
          </svg>
          <div className="  mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-10 drop-shadow-lg tracking-tight">
              {t("contact.testimonialsTitle")}
            </h2>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          <div className="max-w-xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-blue-900 dark:text-yellow-200 mb-8 drop-shadow-lg">
              {t("contact.cta.title")}
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              {t("contact.cta.desc")}
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-lg shadow hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
            >
              {t("contact.cta.button")}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactUs;

// Testimonial Carousel Component (top-level, valid .tsx syntax)
type Testimonial = { name: string; text: string; img: string };
interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}
function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  // Show 2 testimonials per slide
  const perSlide = 2;
  const slides = [];
  for (let i = 0; i < testimonials.length; i += perSlide) {
    let slide = testimonials.slice(i, i + perSlide);
    // If this is the last slide and it has only 1 testimonial, add the first testimonial to fill
    if (slide.length === 1) {
      slide = [...slide, testimonials[0]];
    }
    slides.push(slide);
  }
  const [slideIdx, setSlideIdx] = React.useState(0);
  const prev = () => setSlideIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setSlideIdx((i) => (i === slides.length - 1 ? 0 : i + 1));

  // Auto-slide every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIdx((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full flex justify-center items-center">
        {/* Slide: 2 testimonials per slide */}
        <div className="flex flex-col md:flex-row gap-8 w-full   justify-center items-stretch transition-all duration-500">
          {slides[slideIdx].map((t, idx) => (
            <div
              key={idx}
              className="bg-white/90 dark:bg-gray-900/90 rounded-3xl p-10 border border-cyan-100 dark:border-cyan-900 shadow-xl flex flex-col items-center flex-1"
            >
              <span className="mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 shadow-lg border-4 border-cyan-200 dark:border-cyan-800 overflow-hidden">
                {t.img ? (
                  <Image
                    src={t.img}
                    width={96}
                    height={96}
                    alt={t.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-white/80 dark:bg-gray-800 flex items-center justify-center text-cyan-700 font-bold text-lg">
                    {t.name
                      .split(" ")
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </span>
              <blockquote className="italic text-2xl text-blue-900 dark:text-blue-100 mb-6 font-medium relative">
                <svg
                  className="absolute -top-8 left-0 w-8 h-8 text-cyan-200 dark:text-cyan-900 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6.17A7 7 0 0 0 2 13v1a4 4 0 0 0 4 4h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5a1 1 0 0 0 0-2a7 7 0 0 0-2.83.17z" />
                </svg>
                {`“${t.text}”`}
              </blockquote>
              <div className="font-bold text-cyan-700 dark:text-yellow-300 text-lg mb-2">
                {t.name}
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-100 dark:bg-cyan-900 rounded-full p-2 shadow hover:bg-cyan-200 dark:hover:bg-cyan-800 transition-all"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              stroke="#0891b2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-100 dark:bg-cyan-900 rounded-full p-2 shadow hover:bg-cyan-200 dark:hover:bg-cyan-800 transition-all"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 5l7 7-7 7"
              stroke="#0891b2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-6 justify-center">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === slideIdx
                ? "bg-cyan-500 dark:bg-yellow-300 scale-125"
                : "bg-cyan-200 dark:bg-cyan-800"
            }`}
            onClick={() => setSlideIdx(i)}
            aria-label={`Go to testimonial slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
// FAQAccordion component (final, above ContactUs)
type FaqType = { q: string; a: string };
interface FAQAccordionProps {
  faqs: FaqType[];
}
function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  return (
    <div className="flex flex-col gap-5 text-left mt-4">
      {faqs.map((faq, idx) => {
        const open = openIdx === idx;
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border border-cyan-100 dark:border-cyan-900 shadow-lg bg-gradient-to-br from-white/90 via-cyan-50 to-yellow-50 dark:from-gray-900/90 dark:via-cyan-950 dark:to-yellow-900 transition-all duration-300 ${
              open
                ? "ring-2 ring-cyan-400 scale-[1.02]"
                : "hover:ring-1 hover:ring-cyan-300"
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 focus:outline-none"
              onClick={() => setOpenIdx(open ? null : idx)}
              aria-expanded={open}
              type="button"
            >
              <span className="flex items-center gap-3 font-bold text-cyan-700 dark:text-yellow-300 text-lg">
                {/* Animated Icon */}
                <span
                  className={`transition-transform duration-300 ${
                    open ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="6"
                      fill="url(#faq-gradient)"
                    />
                    <path
                      d="M8 12h8"
                      stroke="#0891b2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 8v8"
                      stroke="#eab308"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={open ? "opacity-0" : "opacity-100"}
                    />
                    <defs>
                      <linearGradient
                        id="faq-gradient"
                        x1="2"
                        y1="2"
                        x2="22"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#a7f3d0" />
                        <stop offset="0.5" stopColor="#fef08a" />
                        <stop offset="1" stopColor="#bae6fd" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                {faq.q}
              </span>
              <span className="ml-2 text-cyan-500 dark:text-yellow-300 font-bold text-xl">
                {open ? "–" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                open ? "max-h-40 py-2 px-6" : "max-h-0 py-0 px-6"
              }`}
              style={{}}
            >
              <div className="text-blue-800 dark:text-blue-200 text-base">
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
