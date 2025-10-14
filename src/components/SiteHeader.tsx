import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme/ModeToggle";
import { NextRouter, useRouter } from "next/router";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const navLinks = [
  {
    label: "nav.home",
    dropdown: [
      { label: "nav.home1", href: "/home1" },
      { label: "nav.home2", href: "/home2" },
    ],
  },
  { label: "nav.about", href: "/about-us" },
  {
    label: "nav.services",
    dropdown: [
      { label: "nav.allServices", href: "/services" },
      { label: "nav.webDesign", href: "/web-design" },
      { label: "nav.uiux", href: "/ui-ux-design" },
      { label: "nav.branding", href: "/branding" },
      { label: "nav.seo", href: "/seo" },
      { label: "nav.contentWriting", href: "/content-writing" },
      { label: "nav.digitalMarketing", href: "/digital-marketing" },
    ],
  },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/contact-us" },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "he", label: "HE" },
];

/**
 * Renders the main site header with navigation, logo, language switcher, profile dropdown, and dark mode toggle.
 *
 * The `SiteHeader` component provides a responsive navigation bar that adapts to desktop and mobile layouts.
 * It includes support for dropdown menus, language selection, user profile actions, and a theme mode toggle.
 *
 * @param props - The properties for the SiteHeader component.
 * @returns The rendered header element containing navigation and interactive controls.
 *
 * @remarks
 * - Uses Tailwind CSS for styling and layout.
 * - Expects `navLinks` and `languages` arrays to be available in the component scope.
 * - Designed for use at the top of the site as a sticky header.
 */
const SiteHeader = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState<string | null>(null);
  const [langOpen, setLangOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  type User = {
    firstname?: string;
    lastname?: string;
    email?: string;
    role?: string;
    registerTime?: string;
    loginTime?: string;
  };
  const [user, setUser] = React.useState<User | null>(null);
  // No need to keep currentLang in state if not used elsewhere

  // Get user details from localStorage on mount
  // RTL/LTR effect and user load
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const userStr = localStorage.getItem("currentUser");
        if (userStr) {
          setUser(JSON.parse(userStr));
        } else {
          setUser(null);
        }
        const lang = localStorage.getItem("selectedLanguageCode") || "en";
        i18n.changeLanguage(lang);
        // Set RTL or LTR on html/body
        if (lang !== "en") {
          document.documentElement.setAttribute("dir", "rtl");
          document.body.classList.add("rtl");
        } else {
          document.documentElement.setAttribute("dir", "ltr");
          document.body.classList.remove("rtl");
        }
      } catch {
        setUser(null);
      }
    }
  }, []);

  const HandleLogout = (router: NextRouter) => {
    if (typeof window !== "undefined" && user && user.email) {
      // Update logoutTime in currentUser
      const now = new Date().toISOString();
      const updatedUser = { ...user, logoutTime: now };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      // Update users array
      try {
        const usersStr = localStorage.getItem("users");
        if (usersStr) {
          const usersArr = JSON.parse(usersStr);
          const idx = usersArr.findIndex(
            (u: { email?: string }) => u.email === user.email,
          );
          if (idx !== -1) {
            usersArr[idx] = {
              ...usersArr[idx],
              logoutTime: now,
            };
            localStorage.setItem("users", JSON.stringify(usersArr));
          }
        }
      } catch {}
      localStorage.removeItem("currentUser");
    }
    router.push("/auth");
  };

  const setLang = (code: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguageCode", code);
      i18n.changeLanguage(code);
      // Set RTL or LTR on html/body
      if (code !== "en") {
        document.documentElement.setAttribute("dir", "rtl");
        document.body.classList.add("rtl");
      } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.body.classList.remove("rtl");
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 shadow-xl caret-transparent text-nowrap">
      <nav className="  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/home1"
            className="flex items-center gap-2 text-yellow-300 font-extrabold text-2xl tracking-wide drop-shadow-lg"
          >
            <Image
              src={"https://i.postimg.cc/DwdH9gv8/logo-stackly.png"}
              width={100}
              height={100}
              alt={""}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden min-[769px]:flex items-center gap-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className="px-3 py-2 rounded-md text-blue-50 font-semibold hover:bg-cyan-700/30 focus:outline-none flex items-center gap-1 transition-colors duration-150"
                    onMouseEnter={() => setDropdownOpen(link.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    {t(link.label)}
                    <ChevronDown
                      className={` ${
                        dropdownOpen === link.label && "rotate-180"
                      } `}
                    />
                  </button>
                  <div
                    className={`absolute right-0   bg-blue-50 dark:bg-gray-900 rounded shadow-lg py-2 transition-all duration-150 z-20 border border-blue-200 dark:border-blue-900 ${
                      dropdownOpen === link.label ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => setDropdownOpen(link.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    {link.dropdown.map((item) => (
                      <Link key={item.label} href={item.href}>
                        <span className="block w-full text-left text-nowrap px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-cyan-100 dark:hover:bg-blue-950 rounded transition-colors duration-100">
                          {t(item.label)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="">
                  <span className="text-blue-50 hover:text-yellow-200 transition-colors duration-100">
                    {t(link.label)}
                  </span>
                </Link>
              ),
            )}

            {/* Language Switcher */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-md text-blue-50 font-semibold hover:bg-cyan-700/30 flex items-center gap-1 transition-colors duration-150"
                onClick={() => setLangOpen((v) => !v)}
              >
                {t("nav.language", "Language")}
                <ChevronDown className={` ${langOpen && "rotate-180"} `} />
              </button>
              <div
                className={`absolute right-0 mt-2 w-28 bg-blue-50 dark:bg-gray-900 rounded shadow-lg py-2 transition-all duration-150 z-20 border border-blue-200 dark:border-blue-900 ${
                  langOpen ? "block" : "hidden"
                }`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLang(lang.code);
                      setLangOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-cyan-100 dark:hover:bg-blue-950 rounded transition-colors duration-100"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-full bg-yellow-300/20 hover:bg-yellow-300/40 text-yellow-200 flex items-center gap-2 focus:outline-none transition-colors duration-150"
                onClick={() => setProfileOpen((v) => !v)}
              >
                <span className="hidden lg:inline">
                  {user && (user.firstname || user.lastname)
                    ? `${
                        user.firstname && user.firstname.charAt(0).toUpperCase()
                      }${
                        user.lastname && user.lastname.charAt(0).toUpperCase()
                      }`.trim()
                    : "AD"}
                </span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute ${
                  i18n.language == "en" ? "right-0" : "left-0"
                } mt-2   bg-blue-50 dark:bg-gray-900 rounded shadow-lg py-2 transition-all duration-150 z-20 border border-blue-200 dark:border-blue-900 ${
                  profileOpen ? "block" : "hidden"
                }`}
              >
                {user ? (
                  <div className="px-4 py-2 text-blue-900 dark:text-blue-100 border-b border-blue-100 dark:border-blue-800">
                    <div className="font-semibold">
                      {user.firstname || user.lastname
                        ? `${user.firstname || ""} ${
                            user.lastname || ""
                          }`.trim()
                        : user.email}
                    </div>
                    {user.email && (
                      <div className="text-xs text-blue-700 dark:text-blue-300 truncate">
                        {user.email}
                      </div>
                    )}
                  </div>
                ) : null}
                <button
                  onClick={() => HandleLogout(router)}
                  className="block w-full text-left px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-cyan-100 dark:hover:bg-blue-950 rounded transition-colors duration-100"
                >
                  {t("nav.logout")}
                </button>
                {user &&
                  user.role === "admin" &&
                  typeof window !== "undefined" &&
                  window.location.pathname != "/admin-dashbord" && (
                    <>
                      <Link
                        href="/admin-dashbord"
                        className="block w-full text-left px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-cyan-100 dark:hover:bg-blue-950 rounded transition-colors duration-100"
                      >
                        {t("nav.adminDashboard")}
                      </Link>
                    </>
                  )}
              </div>
            </div>

            <ModeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="min-[769px]:hidden flex items-center">
            <button
              className="text-yellow-200 p-2 rounded-md focus:outline-none hover:bg-yellow-300/20 transition-colors duration-150"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`min-[769px]:hidden transition-all duration-300 bg-blue-50/95 dark:bg-gray-950/95 rounded-b-lg shadow-lg overflow-hidden ${
            navOpen ? "max-h-[600px] py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col gap-2 px-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 rounded-md text-blue-900 dark:text-blue-100 font-semibold hover:bg-cyan-100 dark:hover:bg-blue-950 focus:outline-none transition-colors duration-150"
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === link.label ? null : link.label,
                      )
                    }
                  >
                    {t(link.label)}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-4 mt-1 ${
                      dropdownOpen === link.label ? "block" : "hidden"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-cyan-100 dark:hover:bg-blue-950 rounded transition-colors duration-100"
                      >
                        {t(item.label)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-blue-900 dark:text-blue-100 font-semibold hover:bg-cyan-100 dark:hover:bg-blue-950 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Language Switcher */}
            <div className="relative">
              <button
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-blue-900 dark:text-blue-100 font-semibold hover:bg-cyan-100 dark:hover:bg-blue-950 transition-colors duration-150"
                onClick={() => setLangOpen((v) => !v)}
              >
                {t("nav.language")}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={`pl-4 mt-1 ${langOpen ? "block" : "hidden"}`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLang(lang.code);
                      setLangOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-cyan-100 dark:hover:bg-blue-950 rounded transition-colors duration-100"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-yellow-700 dark:text-yellow-200 font-semibold hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-150"
                onClick={() => setProfileOpen((v) => !v)}
              >
                {user && (user.firstname || user.lastname)
                  ? `$${
                      user.firstname && user.firstname.charAt(0).toUpperCase()
                    }${
                      user.lastname && user.lastname.charAt(0).toUpperCase()
                    }`.trim()
                  : user && user.email && t("nav.profile", "Profile")}
              </button>
              <div className={`pl-4 mt-1 ${profileOpen ? "block" : "hidden"}`}>
                <button
                  onClick={() => HandleLogout(router)}
                  className="block w-full text-left px-4 py-2 text-yellow-700 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded transition-colors duration-100"
                >
                  {t("nav.logout", "Logout")}
                </button>
                {user &&
                  user.role === "admin" &&
                  typeof window !== "undefined" &&
                  window.location.pathname != "/admin-dashbord" && (
                    <>
                      <Link
                        href="/admin-dashbord"
                        className="block w-full text-left px-4 py-2 text-yellow-700 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded transition-colors duration-100"
                      >
                        {t("nav.adminDashboard", "Admin Dashboard")}
                      </Link>
                    </>
                  )}
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
