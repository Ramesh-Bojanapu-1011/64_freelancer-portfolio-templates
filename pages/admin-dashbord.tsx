import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  LineChart,
  Line,
} from "recharts";

const COLORS = [
  "#34d399",
  "#60a5fa",
  "#fbbf24",
  "#f87171",
  "#a78bfa",
  "#f472b6",
];

type User = {
  firstname?: string;
  lastname?: string;
  email?: string;
  role?: string;
  registerTime?: string;
  loginTime?: string;
  logoutTime?: string;
};
const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loggedInCount, setLoggedInCount] = useState(0);
  const { t } = useTranslation();
  const [recentLogins, setRecentLogins] = useState<User[]>([]);
  const [regPerDay, setRegPerDay] = useState<{ date: string; count: number }[]>(
    [],
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const usersStr = localStorage.getItem("users");
        const usersArr: User[] = usersStr ? JSON.parse(usersStr) : [];
        setUsers(usersArr);
        // Count users with loginTime in last 24h
        const now = new Date();
        const logged = usersArr.filter(
          (u: User) =>
            u.loginTime &&
            (!u.logoutTime || new Date(u.loginTime) > new Date(u.logoutTime)),
        );
        setLoggedInCount(logged.length);
        // Recent logins (last 7 days)
        const last7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        setRecentLogins(
          usersArr.filter(
            (u: User) => u.loginTime && new Date(u.loginTime) > last7,
          ),
        );
        // Registrations per day (last 7 days)
        const regMap: { [date: string]: number } = {};
        usersArr.forEach((u: User) => {
          if (u.registerTime) {
            const d = new Date(u.registerTime).toISOString().slice(0, 10);
            regMap[d] = (regMap[d] || 0) + 1;
          }
        });
        const regArr = Object.entries(regMap)
          .map(([date, count]) => ({ date, count }))
          .sort((a, b) => a.date.localeCompare(b.date))
          .slice(-7);
        setRegPerDay(regArr);
      } catch {}
    }
  }, []);

  const pieData = [
    { name: "Total Users", value: users.length },
    { name: "Logged In", value: loggedInCount },
    { name: "Logged Out", value: users.length - loggedInCount },
  ];

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard Overview" />
      </Head>
      <SiteHeader />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 p-2 sm:p-4 md:p-6 caret-transparent">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-blue-900 dark:text-yellow-100 mb-6 sm:mb-8 text-center drop-shadow-lg">
          {t("admin.title")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center w-full">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-600 dark:text-yellow-200">
              {users.length}
            </div>
            <div className="text-base sm:text-lg text-blue-900 dark:text-blue-100">
              {t("admin.totalUsers")}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center w-full">
            <div className="text-3xl sm:text-4xl font-bold text-green-500 dark:text-green-300">
              {loggedInCount}
            </div>
            <div className="text-base sm:text-lg text-blue-900 dark:text-blue-100">
              {t("admin.loggedIn")}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center w-full">
            <div className="text-3xl sm:text-4xl font-bold text-yellow-500 dark:text-yellow-200">
              {users.length - loggedInCount}
            </div>
            <div className="text-base sm:text-lg text-blue-900 dark:text-blue-100">
              {t("admin.loggedOut")}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center w-full min-w-0">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-blue-900 dark:text-yellow-100">
              {t("admin.userDistribution")}
            </h2>
            <div className="w-full h-64 sm:h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, idx) => (
                      <Cell
                        key={`cell-${idx}`}
                        fill={COLORS[idx % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center w-full min-w-0">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-blue-900 dark:text-yellow-100">
              {t("admin.registrationsLast7")}
            </h2>
            <div className="w-full h-64 sm:h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regPerDay}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <XAxis dataKey="date" stroke="#60a5fa" fontSize={12} />
                  <YAxis allowDecimals={false} fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#34d399" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-2 sm:p-6 mb-6 sm:mb-8 overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-blue-900 dark:text-yellow-100">
            {t("admin.recentLoginsTitle")}
          </h2>
          <div className="w-full min-w-[350px]">
            <table className="min-w-full text-left text-xs sm:text-sm md:text-base">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <th className="py-2 px-2 sm:px-4">{t("admin.table.email")}</th>
                  <th className="py-2 px-2 sm:px-4">{t("admin.table.loginTime")}</th>
                  <th className="py-2 px-2 sm:px-4">{t("admin.table.logoutTime")}</th>
                </tr>
              </thead>
              <tbody>
                {recentLogins.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-4 text-center text-blue-400">
                      {t("admin.noRecentLogins")}
                    </td>
                  </tr>
                )}
                {recentLogins.map((u, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-blue-50 dark:border-blue-900"
                  >
                    <td className="py-2 px-2 sm:px-4">{u.email}</td>
                    <td className="py-2 px-2 sm:px-4">
                      {u.loginTime
                        ? new Date(u.loginTime).toLocaleString()
                        : "-"}
                    </td>
                    <td className="py-2 px-2 sm:px-4">
                      {u.logoutTime
                        ? new Date(u.logoutTime).toLocaleString()
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-blue-900 dark:text-yellow-100">
            {t("admin.userActivityTrend")}
          </h2>
          <div className="w-full h-64 sm:h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={regPerDay}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="date" stroke="#fbbf24" fontSize={12} />
                <YAxis allowDecimals={false} fontSize={12} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#f87171"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default AdminDashboard;
