import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ModeToggle } from "@/components/theme/ModeToggle";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: "user";
  registerTime: string;
  loginTime?: string;
};

const AuthPage = () => {
  const [tab, setTab] = useState<"user" | "admin">("user");
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [userRegForm, setUserRegForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [userForgot, setUserForgot] = useState({ email: "" });
  const [adminForm, setAdminForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const router = useRouter();

  // LocalStorage helpers
  const getUsers = (): User[] => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("users") || "[]");
    } catch {
      return [];
    }
  };
  const setUsers = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  // User Login
  const handleUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const users = getUsers();
    const user = users.find(
      (u) => u.email === userForm.email && u.password === userForm.password,
    );
    if (user) {
      user.loginTime = new Date().toISOString();
      setUsers(users);
      localStorage.setItem("currentUser", JSON.stringify(user));
      router.push("/home1");
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };

  // User Register
  const handleUserRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    if (!userRegForm.email || !userRegForm.password) {
      setMessage("All fields are required.");
      return;
    }
    if (userRegForm.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    const users = getUsers();
    if (users.find((u) => u.email === userRegForm.email)) {
      setMessage("User already exists.");
      return;
    }
    const now = new Date().toISOString();
    const newUser: User = {
      firstname: userRegForm.firstname,
      lastname: userRegForm.lastname,
      email: userRegForm.email,
      password: userRegForm.password,
      role: "user",
      registerTime: now,
    };
    users.push(newUser);
    setUsers(users);
    setMessage("Registration successful! You can now log in.");
    setShowRegister(false);
    setUserRegForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  // User Forgot Password
  const handleUserForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const users = getUsers();
    const user = users.find((u) => u.email === userForgot.email);
    if (user) {
      setMessage(`Password: ${user.password}`);
    } else {
      setMessage("No user found with that email.");
    }
  };

  // Admin Login
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    if (
      adminForm.email === "admin@enkonix.in" &&
      adminForm.password === "admin123"
    ) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email: adminForm.email, role: "admin" }),
      );
      router.push("/admin-dashbord");
    } else {
      setMessage("Invalid admin credentials.");
    }
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[100vh] py-12 px-4 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <div className="w-full max-w-md bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-2xl p-8">
          <div className="flex justify-center mb-8">
            <Image
              src={"https://i.postimg.cc/DwdH9gv8/logo-stackly.png"}
              alt={""}
              width={150}
              height={150}
            />
          </div>

          <div className="mb-8">
            <div className="flex border-b border-blue-200 dark:border-blue-800 relative">
              <button
                className={`w-1/2 py-3 text-center font-bold text-lg transition-colors duration-200 z-10 ${
                  tab === "user"
                    ? "text-cyan-600"
                    : "text-gray-500 hover:text-cyan-500"
                }`}
                onClick={() => {
                  setTab("user");
                  setMessage("");
                }}
              >
                User
              </button>
              <button
                className={`w-1/2 py-3 text-center font-bold text-lg transition-colors duration-200 z-10 ${
                  tab === "admin"
                    ? "text-cyan-600"
                    : "text-gray-500 hover:text-cyan-500"
                }`}
                onClick={() => {
                  setTab("admin");
                  setMessage("");
                }}
              >
                Admin
              </button>
              <span
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-700 rounded transition-all duration-300 ${
                  tab === "admin" ? "translate-x-full" : "translate-x-0"
                }`}
                style={{ width: "50%" }}
              />
            </div>
          </div>

          {/* User Tab */}
          {tab === "user" && (
            <>
              {!showRegister && !showForgot && (
                <form onSubmit={handleUserLogin} className="space-y-5">
                  <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                    User Login
                  </h2>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    value={userForm.email}
                    onChange={(e) =>
                      setUserForm((f) => ({ ...f, email: e.target.value }))
                    }
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    value={userForm.password}
                    onChange={(e) =>
                      setUserForm((f) => ({ ...f, password: e.target.value }))
                    }
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded bg-gradient-to-r from-cyan-600 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
                  >
                    Login
                  </button>
                  <div className="flex justify-between mt-2 text-sm">
                    <button
                      type="button"
                      className="text-cyan-700 hover:underline"
                      onClick={() => {
                        setShowForgot(true);
                        setMessage("");
                      }}
                    >
                      Forgot Password?
                    </button>
                    <button
                      type="button"
                      className="text-cyan-700 hover:underline"
                      onClick={() => {
                        setShowRegister(true);
                        setMessage("");
                      }}
                    >
                      Register
                    </button>
                  </div>
                </form>
              )}
              {showRegister && (
                <form onSubmit={handleUserRegister} className="space-y-5">
                  <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                    User Register
                  </h2>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    value={userRegForm.firstname}
                    onChange={(e) =>
                      setUserRegForm((f) => ({
                        ...f,
                        firstname: e.target.value,
                      }))
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    value={userRegForm.lastname}
                    onChange={(e) =>
                      setUserRegForm((f) => ({
                        ...f,
                        lastname: e.target.value,
                      }))
                    }
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    value={userRegForm.email}
                    onChange={(e) =>
                      setUserRegForm((f) => ({ ...f, email: e.target.value }))
                    }
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    value={userRegForm.password}
                    onChange={(e) =>
                      setUserRegForm((f) => ({
                        ...f,
                        password: e.target.value,
                      }))
                    }
                    required
                  />

                  <button
                    type="submit"
                    className="w-full py-2 rounded bg-gradient-to-r from-cyan-600 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
                  >
                    Register
                  </button>
                  <div className="flex justify-between mt-2 text-sm">
                    <button
                      type="button"
                      className="text-cyan-700 hover:underline"
                      onClick={() => {
                        setShowRegister(false);
                        setMessage("");
                      }}
                    >
                      Back to Login
                    </button>
                  </div>
                </form>
              )}
              {showForgot && (
                <form onSubmit={handleUserForgot} className="space-y-5">
                  <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                    Forgot Password
                  </h2>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    value={userForgot.email}
                    onChange={(e) => setUserForgot({ email: e.target.value })}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded bg-gradient-to-r from-cyan-600 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
                  >
                    Get Password
                  </button>
                  <div className="flex justify-between mt-2 text-sm">
                    <button
                      type="button"
                      className="text-cyan-700 hover:underline"
                      onClick={() => {
                        setShowForgot(false);
                        setMessage("");
                      }}
                    >
                      Back to Login
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

          {/* Admin Tab */}
          {tab === "admin" && (
            <form onSubmit={handleAdminLogin} className="space-y-5">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                Admin Login
              </h2>
              <input
                type="email"
                placeholder="Admin Email"
                className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={adminForm.email}
                onChange={(e) =>
                  setAdminForm((f) => ({ ...f, email: e.target.value }))
                }
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={adminForm.password}
                onChange={(e) =>
                  setAdminForm((f) => ({ ...f, password: e.target.value }))
                }
                required
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-gradient-to-r from-cyan-600 to-blue-700 text-yellow-200 font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:text-blue-900 transition-all duration-200"
              >
                Login as Admin
              </button>
            </form>
          )}

          {/* Message */}
          {message && (
            <div className="mt-6 text-center text-red-600 dark:text-yellow-300 font-semibold">
              {message}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default AuthPage;
