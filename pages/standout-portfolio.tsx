import Head from "next/head";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import React from "react";
import Image from "next/image";

const StandoutPortfolioBlog = () => {
  return (
    <>
      <Head>
        <title>Building a Standout Freelancer Portfolio | Blog</title>
        <meta
          name="description"
          content="Learn how to build a standout freelancer portfolio that attracts clients and showcases your unique skills. Tips, strategies, and inspiration for freelancers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br caret-transparent from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 min-h-screen overflow-hidden   ">
        {/* Blog Header/Meta Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[40vh] py-12 px-4 text-center bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-yellow-200 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 dark:text-yellow-100 mb-4 drop-shadow-lg">
            Building a Standout Freelancer Portfolio
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
              By <span className="font-semibold">Alex Creative</span>
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
              <span className="font-semibold">
                Portfolio, Freelancing, Tips
              </span>
            </span>
          </div>
          <div className="w-full flex justify-center mb-6">
            <Image
              src="/blog-portfolio-featured.jpg"
              alt="Standout Freelancer Portfolio"
              width={600}
              height={288}
              className="rounded-2xl shadow-xl max-h-72 object-cover border border-cyan-100 dark:border-cyan-900 w-full"
              style={{ maxWidth: "600px", width: "100%" }}
              priority
            />
          </div>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-2 max-w-2xl mx-auto">
            Your portfolio is your digital handshake. Discover how to craft a
            portfolio that wins clients and sets you apart in a crowded market.
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
                    Why Your Portfolio Matters
                  </h2>
                  <p>
                    In the world of freelancing, your portfolio is more than a
                    collection of work—it&#39;s your brand, your story, and your
                    best sales tool. A standout portfolio not only showcases
                    your skills but also builds trust and credibility with
                    potential clients.
                  </p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    1. Define Your Unique Value
                  </h3>
                  <p>
                    Start by identifying what makes you different. Are you a web
                    designer with a knack for storytelling? A developer who
                    loves clean, accessible code? Highlight your strengths and
                    the problems you solve best.
                  </p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    2. Curate, Don’t Just Collect
                  </h3>
                  <p>
                    Quality beats quantity. Select projects that reflect your
                    best work and align with the type of clients you want to
                    attract. For each project, share the story behind it—your
                    process, challenges, and the results you delivered.
                  </p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    3. Show, Don’t Tell
                  </h3>
                  <p>
                    Use visuals, case studies, and testimonials to bring your
                    work to life. Screenshots, before-and-after comparisons, and
                    client feedback add credibility and make your portfolio
                    memorable.
                  </p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    4. Make It Easy to Navigate
                  </h3>
                  <p>
                    A clean, intuitive layout helps visitors find what they’re
                    looking for. Use clear categories, project tags, and a
                    simple menu. Don’t forget a strong call-to-action—make it
                    easy for clients to contact you.
                  </p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    5. Keep It Fresh
                  </h3>
                  <p>
                    Update your portfolio regularly with new work, skills, and
                    achievements. An up-to-date portfolio signals that you’re
                    active, engaged, and always improving.
                  </p>
                  <blockquote className="border-l-4 border-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 px-6 py-4 rounded-xl shadow-md text-lg font-semibold text-blue-900 dark:text-yellow-100 my-8 animate-fade-in scale-105">
                    <span className="text-3xl mr-2 align-middle text-cyan-400 dark:text-yellow-200">
                      “
                    </span>
                    Your portfolio is the bridge between your talent and your
                    next big opportunity.
                    <span className="text-3xl ml-2 align-middle text-cyan-400 dark:text-yellow-200">
                      ”
                    </span>
                  </blockquote>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    Ready to Stand Out?
                  </h3>
                  <p>
                    Building a standout freelancer portfolio takes time and
                    intention, but the rewards are worth it. Start today, and
                    let your work open doors to new possibilities.
                  </p>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    Common Portfolio Mistakes to Avoid
                  </h3>
                  <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        Overloading with projects:
                      </span>{" "}
                      Too many items can overwhelm visitors. Curate your best
                      work.
                    </li>
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        Lack of context:
                      </span>{" "}
                      Don&#39;t just show the final result—explain your process
                      and the impact.
                    </li>
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        Outdated work:
                      </span>{" "}
                      Remove old or irrelevant projects to keep your portfolio
                      fresh.
                    </li>
                    <li>
                      <span className="font-semibold text-yellow-600 dark:text-yellow-300">
                        No clear call-to-action:
                      </span>{" "}
                      Make it easy for clients to contact you or start a
                      project.
                    </li>
                  </ul>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    Tips for Visual Storytelling
                  </h3>
                  <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                    <li>
                      <span className="font-semibold text-cyan-700 dark:text-yellow-200">
                        Use before-and-after images
                      </span>{" "}
                      to highlight your impact.
                    </li>
                    <li>
                      <span className="font-semibold text-cyan-700 dark:text-yellow-200">
                        Add short video walkthroughs
                      </span>{" "}
                      for interactive or animated projects.
                    </li>
                    <li>
                      <span className="font-semibold text-cyan-700 dark:text-yellow-200">
                        Incorporate client testimonials
                      </span>{" "}
                      with photos or logos for credibility.
                    </li>
                    <li>
                      <span className="font-semibold text-cyan-700 dark:text-yellow-200">
                        Show your process visually
                      </span>{" "}
                      with sketches, wireframes, or moodboards.
                    </li>
                  </ul>
                  <h3 className="font-extrabold text-cyan-700 dark:text-yellow-300 mt-10 animate-fade-in-up">
                    Inspiration: Portfolios That Shine
                  </h3>
                  <p>
                    Explore portfolios from top freelancers in your field.
                    Notice how they present their work, tell their story, and
                    guide visitors to take action. Let their creativity inspire
                    your own unique approach.
                  </p>
                  <blockquote className="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-6 py-4 rounded-xl shadow text-lg font-semibold text-blue-900 dark:text-yellow-100 my-8 animate-fade-in scale-105">
                    <span className="text-2xl mr-2 align-middle text-yellow-400 dark:text-yellow-200">
                      ★
                    </span>
                    &quot;A great portfolio is not just a gallery—it&#39;s a
                    journey through your creative mind.&quot;
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

export default StandoutPortfolioBlog;
