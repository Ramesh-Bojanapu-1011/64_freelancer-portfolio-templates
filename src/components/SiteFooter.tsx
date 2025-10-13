import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const services = [
  { label: "nav.webDesign", href: "/web-design" },
  { label: "nav.uiux", href: "/ui-ux-design" },
  { label: "nav.branding", href: "/branding" },
  { label: "nav.seo", href: "/seo" },
  { label: "nav.contentWriting", href: "/content-writing" },
  { label: "nav.digitalMarketing", href: "/digital-marketing" },
];

const quickLinks = [
  { label: "nav.home1", href: "/home1" },
  { label: "nav.home2", href: "/home2" },
  { label: "nav.about", href: "/about-us" },
  { label: "nav.services", href: "/services" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/contact-us" },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#fff" rx={60}></rect>
          <rect width={256} height={256} fill="#1d9bf0" rx={60}></rect>
          <path
            fill="#fff"
            d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#fff" rx={60}></rect>
          <rect width={256} height={256} fill="#0a66c2" rx={60}></rect>
          <path
            fill="#fff"
            d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 48 48"
      >
        <g fillRule="evenodd" clipRule="evenodd">
          <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"></path>
          <path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z"></path>
        </g>
      </svg>
    ),
  },
];

const SiteFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 text-blue-50 dark:text-blue-100 pt-12 pb-6 px-4 sm:px-6 lg:px-8 caret-transparent">
      <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <p className="mb-4 text-blue-100/80 text-sm">
            {t(
              "footer.about",
              "Elevate your freelance business with our modern portfolio templates. Showcase your skills, attract clients, and grow your brand with style and confidence.",
            )}
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 dark:bg-blue-950 hover:bg-yellow-300 hover:text-blue-900 dark:hover:bg-yellow-300 dark:hover:text-blue-900 p-2 rounded-full transition-colors duration-150"
                aria-label={s.label}
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-300 font-bold text-lg mb-4">
            {t("footer.quickLinks", "Quick Links")}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-yellow-200 transition-colors duration-100"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-300 font-bold text-lg mb-4">
            {t("footer.services", "Services")}
          </h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.label}>
                <a
                  href={service.href}
                  className="hover:text-yellow-200 transition-colors duration-100"
                >
                  {t(service.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-yellow-300 font-bold text-lg mb-4">
            {t("footer.contactUs", "Contact Us")}
          </h3>
          <ul className="space-y-2 text-blue-100/80 text-sm">
            <li>
              <span className="font-semibold">
                {t("footer.email", "Email:")}
              </span>{" "}
              info@freelancer.com
            </li>
            <li>
              <span className="font-semibold">
                {t("footer.phone", "Phone:")}
              </span>{" "}
              +1 234 567 890
            </li>
            <li>
              <span className="font-semibold">
                {t("footer.address", "Address:")}
              </span>{" "}
              123 Freelancer Ave, Remote City
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-blue-200 dark:border-blue-900 pt-6 text-center text-xs text-blue-100/60">
        &copy; {new Date().getFullYear()}{" "}
        {t(
          "footer.copyright",
          "Freelancer Portfolio Templates. All rights reserved.",
        )}
      </div>
    </footer>
  );
};

export default SiteFooter;
