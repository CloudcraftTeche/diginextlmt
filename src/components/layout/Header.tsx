"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";
import { APP_ROUTES } from "@/Router/appRoutes";

interface NavItem {
  name: string;
  href: string;
}

interface HeaderProps {
  isTransparent?: boolean;
  forceTransparent?: boolean;
  forceSolid?: boolean;
}

const Header = ({
  isTransparent = false,
  forceTransparent = false,
  forceSolid = true,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", href: APP_ROUTES.HOME },
    { name: "About Us", href: APP_ROUTES.ABOUT },
    { name: "Services", href: APP_ROUTES.SERVICES },
    { name: "Solutions", href: APP_ROUTES.SOLUTIONS },
    { name: "Our Work", href: APP_ROUTES.WORK },
    { name: "Insights", href: APP_ROUTES.INSIGHTS },
    { name: "Contact Us", href: APP_ROUTES.CONTACT },
  ];

  const isActiveRoute = (href: string) => {
    if (href === APP_ROUTES.HOME) {
      return pathname === href || pathname === "/";
    }
    return pathname === href || pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    if (isTransparent && !forceTransparent && !forceSolid) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isMenuOpen]);

  const shouldBeTransparent =
    isTransparent && !forceSolid && (forceTransparent || !isScrolled);
  const shouldBeSolid =
    !isTransparent || forceSolid || (!forceTransparent && isScrolled);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        shouldBeSolid
          ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      {shouldBeTransparent && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" />
      )}

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 z-10">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src={ImageConstants.BLACK_LOGO}
                  alt="Diginext Logo"
                  width={140}
                  height={40}
                  className={`h-10 w-auto transition-all duration-500 transform group-hover:scale-110 ${
                    shouldBeSolid ? "brightness-100" : "brightness-0 invert"
                  }`}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-md" />
              </div>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-2 overflow-hidden rounded-full transition-all duration-300"
                  >
                    <span
                      className={`relative z-10 text-sm font-semibold tracking-wide transition-all duration-300 ${
                        shouldBeSolid
                          ? isActive
                            ? "text-orange-500"
                            : "text-gray-700 hover:text-orange-500"
                          : isActive
                          ? "text-orange-400 drop-shadow-lg"
                          : "text-white drop-shadow-lg hover:text-orange-300"
                      }`}
                    >
                      {item.name}
                    </span>

                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-3 z-10">
            <button
              className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 group ${
                shouldBeSolid
                  ? "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                  : "text-white hover:text-orange-300 hover:bg-white/10"
              }`}
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-md" />
            </button>

            <button
              className={`hidden md:block px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl ${
                shouldBeSolid
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                  : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-900"
              }`}
            >
              Get Started
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className={`lg:hidden relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 group ${
                shouldBeSolid
                  ? "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                  : "text-white hover:text-orange-300 hover:bg-white/10"
              }`}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current top-3 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-md" />
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-white/20">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block mx-4 px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="mx-4 pt-4 border-t border-gray-200">
              <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-orange-600 hover:to-orange-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
