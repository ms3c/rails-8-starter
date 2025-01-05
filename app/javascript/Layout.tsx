import React from "react";

import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
const PulsatingButton = React.lazy(
  () => import("./components/ui/pulsating-button")
);

import Icon from "./assets/icon.svg";
import { Home, Info, Briefcase, Mail, Menu, Moon, Sun } from "lucide-react";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <img src={Icon} alt="Rails logo" className="w-12 h-12" />
                </Link>
                <nav className="hidden md:block ml-10">
                  <ul className="flex space-x-4">
                    <li>
                      <Link
                        href="/"
                        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                      >
                        <Home className="w-5 h-5 mr-1" />
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                      >
                        <Info className="w-5 h-5 mr-1" />
                        <span>About</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                      >
                        <Briefcase className="w-5 h-5 mr-1" />
                        <span>Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                      >
                        <Mail className="w-5 h-5 mr-1" />
                        <span>Contact</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="h-6 w-6" />
                  ) : (
                    <Moon className="h-6 w-6" />
                  )}
                </button>
                <div className="hidden md:block">
                  <PulsatingButton>Get Started Now!</PulsatingButton>
                </div>
                <div className="md:hidden">
                  <button className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <article>{children}</article>
    </main>
  );
}
