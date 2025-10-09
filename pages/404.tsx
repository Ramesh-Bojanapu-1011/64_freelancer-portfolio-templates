import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Custom404() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 caret-transparent">
        <div className="flex flex-col items-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            className="mb-6"
          >
            <circle cx="60" cy="60" r="60" fill="#38bdf8" fillOpacity="0.15" />
            <text
              x="50%"
              y="54%"
              textAnchor="middle"
              fill="#0ea5e9"
              fontSize="48"
              fontWeight="bold"
              dy=".3em"
            >
              404
            </text>
          </svg>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-100 mb-2 text-center drop-shadow-lg">
            Page Not Found
          </h1>
          <p className="text-lg text-blue-800 dark:text-blue-200 mb-8 text-center max-w-xl">
            Sorry, the page you are looking for does not exist or has been
            moved.
            <br />
            Let’s get you back to your portfolio!
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
          >
            Go Home
          </button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
