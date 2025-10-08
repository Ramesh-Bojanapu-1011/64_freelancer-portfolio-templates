import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme/ModeToggle";

const navLinks = [
  {
    label: "Home",
    dropdown: [
      { label: "Home 1", href: "/home1" },
      { label: "Home 2", href: "/home2" },
    ],
  },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    dropdown: [
      { label: "All Services", href: "/services" },
      { label: "Web Design", href: "/web-design" },
      { label: "UI/UX Design", href: "/ui-ux" },
      { label: "Branding", href: "/branding" },
      { label: "SEO", href: "/seo" },
      { label: "Content Writing", href: "/content-writing" },
      { label: "Digital Marketing", href: "/marketing" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
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
  const [navOpen, setNavOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState<string | null>(null);
  const [langOpen, setLangOpen] = React.useState(false);
  const setLang = (code: string) => {
    if (typeof window !== "undefined") {
      if (code === "en") {
        localStorage.setItem("selectedLanguage", "English");
        window.location.reload();
      } else if (code === "ar") {
        localStorage.setItem("selectedLanguage", "Arabic");
        window.location.reload();
      } else if (code === "he") {
        localStorage.setItem("selectedLanguage", "Hebrew");
        window.location.reload();
      }
    }
  };
  const [profileOpen, setProfileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 shadow-xl caret-transparent">
      <nav className="  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
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
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className="px-3 py-2 rounded-md text-blue-50 font-semibold hover:bg-cyan-700/30 focus:outline-none flex items-center gap-1 transition-colors duration-150"
                    onMouseEnter={() => setDropdownOpen(link.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    {link.label}
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
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="">
                  <span className="text-blue-50 hover:text-yellow-200 transition-colors duration-100">
                    {link.label}
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
                Language
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
                    onClick={() => setLang(lang.code)}
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
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
                </svg>
                <span className="hidden lg:inline">Profile</span>
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
                className={`absolute right-0 mt-2 w-32 bg-blue-50 dark:bg-gray-900 rounded shadow-lg py-2 transition-all duration-150 z-20 border border-blue-200 dark:border-blue-900 ${
                  profileOpen ? "block" : "hidden"
                }`}
              >
                <button className="block w-full text-left px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-cyan-100 dark:hover:bg-blue-950 rounded transition-colors duration-100">
                  Logout
                </button>
              </div>
            </div>

            <ModeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
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
          className={`md:hidden transition-all duration-300 bg-blue-50/95 dark:bg-gray-950/95 rounded-b-lg shadow-lg overflow-hidden ${
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
                    {link.label}
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
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-cyan-100 dark:hover:bg-blue-950 rounded transition-colors duration-100"
                      >
                        {item.label}
                      </a>
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
                Language
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
                Profile
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
              <div className={`pl-4 mt-1 ${profileOpen ? "block" : "hidden"}`}>
                <button className="block w-full text-left px-4 py-2 text-yellow-700 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded transition-colors duration-100">
                  Logout
                </button>
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
