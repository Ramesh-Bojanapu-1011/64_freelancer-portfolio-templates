import Head from "next/head";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import React from "react";
import Image from "next/image";

const blogs = [
  {
    title: "Building a Standout Freelancer Portfolio",
    desc: "Discover how to craft a portfolio that attracts clients and showcases your unique skills as a freelancer.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    href: " /standout-portfolio",
    date: "Oct 1, 2025",
  },
  {
    title: "Winning Clients: Outreach Strategies for 2025",
    desc: "Learn proven methods for connecting with clients and landing more freelance projects in a competitive market.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    href: " /client-outreach",
    date: "Sep 20, 2025",
  },
  {
    title: "Remote Work Success: Tips for Freelancers",
    desc: "Master the art of remote work with productivity hacks, workspace ideas, and communication tips for freelancers.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    href: " /remote-work-tips",
    date: "Sep 10, 2025",
  },
];

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog - Freelancer Portfolio</title>
        <meta
          name="description"
          content="Insights, tips, and stories for creative freelancers and agencies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] py-20 px-4 text-center bg-gradient-to-br from-cyan-50 via-blue-100 to-yellow-50 dark:from-cyan-950 dark:via-gray-950 dark:to-blue-950/80 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"></div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-100 mb-4 drop-shadow-lg">
            Insights & Inspiration
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Tips, stories, and resources for creative freelancers and agencies.
          </p>
        </section>

        {/* Featured Blogs Section */}
        <section className="relative py-24 px-4 bg-gradient-to-tr from-white via-cyan-50 to-yellow-50 dark:from-gray-900 dark:via-cyan-950 dark:to-yellow-900 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-12 text-center">
              Latest from the Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {blogs.map((blog, id) => (
                <div key={id} className="group">
                  <div className="relative rounded-3xl border border-cyan-100 dark:border-cyan-900 bg-white/80 dark:bg-gray-900/80 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                    <div className="relative w-full h-58 overflow-hidden">
                      <Image
                        width={150}
                        height={150}
                        src={blog.img}
                        alt={blog.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-2xl opacity-20 pointer-events-none"></span>
                    </div>
                    <div className="flex-1 flex flex-col p-6">
                      <span className="text-xs text-cyan-700 dark:text-cyan-300 font-bold mb-2">
                        {blog.date}
                      </span>
                      <h3 className="font-bold text-xl text-blue-900 dark:text-yellow-200 mb-2 group-hover:text-cyan-700 dark:group-hover:text-yellow-300 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-blue-800 dark:text-blue-200 mb-4 flex-1">
                        {blog.desc}
                      </p>
                      <Link
                        href={blog.href}
                        className="inline-block mt-auto px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-sm shadow group-hover:from-yellow-300 group-hover:to-yellow-400 group-hover:text-blue-900 transition-all duration-200 text-center"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Blog Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-32 h-32 bg-gradient-to-br from-yellow-200 via-cyan-200 to-blue-100 dark:from-yellow-900 dark:via-cyan-900 dark:to-blue-950 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-yellow-200 mb-8 drop-shadow-lg tracking-tight text-center">
              Client{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <div className="flex flex-col gap-10">
              {[
                {
                  title: "From Zero to Booked Out",
                  desc: "A designer revamped their portfolio and landed 5 new clients in a month.",
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
                  title: "Remote Work, Real Results",
                  desc: "A freelancer used productivity tools to double their project output remotely.",
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
                  title: "Branding That Wins",
                  desc: "A creative’s new personal brand led to a feature in a top industry blog.",
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
              ].map((story, idx) => (
                <div
                  key={story.title}
                  className={`relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border border-cyan-100 dark:border-cyan-900 bg-white/80 dark:bg-gray-900/80 shadow-xl transition-all duration-300 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-shrink-0">{story.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-700 dark:text-yellow-300 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 text-lg">
                      {story.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow/Process Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-blue-900 dark:text-yellow-200 mb-8 drop-shadow-lg">
              How We Curate Content
            </h2>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
              {[
                {
                  step: 1,
                  title: "Research",
                  desc: "We track trends, interview experts, and listen to our community.",
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
                  title: "Write & Design",
                  desc: "Our team crafts engaging articles and visuals for every post.",
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
                  title: "Publish & Share",
                  desc: "We launch new content and promote it across our channels.",
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
              ].map((step) => (
                <div
                  key={step.title}
                  className="relative bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-cyan-100 dark:border-cyan-900 p-8 flex-1 flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[220px] max-w-[300px] mx-auto"
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-2xl opacity-20 pointer-events-none"></span>
                  {step.icon}
                  <div className="text-2xl font-bold text-cyan-700 dark:text-yellow-300 mb-2">
                    Step {step.step}
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

        {/* Testimonials Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-b border-cyan-100 dark:border-cyan-900 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-8 drop-shadow-lg">
              What Readers Say
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
              {[
                {
                  name: "Priya S.",
                  text: "The blog is my go-to for fresh ideas and practical advice. Love the design!",
                  img: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                {
                  name: "David L.",
                  text: "Every post is packed with value. It’s helped me grow my freelance business.",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Sara K.",
                  text: "I always find something inspiring and actionable. Highly recommended!",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="relative bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-cyan-100 dark:border-cyan-900 p-8 flex-1 flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[260px] max-w-[340px] mx-auto"
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-cyan-200 via-blue-200 to-yellow-100 dark:from-cyan-900 dark:via-blue-950 dark:to-yellow-900 rounded-full blur-2xl opacity-20 pointer-events-none"></span>
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-4 border-cyan-200 dark:border-cyan-800 shadow-lg mb-4 object-cover"
                  />
                  <blockquote className="italic text-blue-900 dark:text-blue-100 mb-4">
                    “{t.text}”
                  </blockquote>
                  <div className="font-bold text-cyan-700 dark:text-yellow-300">
                    {t.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-yellow-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          <div className="max-w-xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-blue-900 dark:text-yellow-200 mb-8 drop-shadow-lg">
              Stay Inspired
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest blog updates, tips, and
              exclusive resources.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-full border border-cyan-200 dark:border-cyan-800 bg-white/80 dark:bg-gray-900/80 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full sm:w-auto"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 text-yellow-200 font-bold text-base shadow hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default BlogPage;
