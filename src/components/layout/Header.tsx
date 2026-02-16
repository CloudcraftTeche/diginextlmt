"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { slugify } from "@/lib/utils";

import {
  CONTENT_WRAPPER_CLASSES,
  PRIMARY_ORANGE_TEXT,
} from "@/constants/layoutConstants";
import { TITLE_SIZE, FONT_WEIGHT } from "@/constants/typographyConstants";
import { LayoutService } from "@/services/LayoutService";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchNavbarData } from "@/store/features/layoutSlice";

interface SubItem {
  id: number;
  name: string;
  slug: string;
}

interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  services: SubItem[];
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownType?: "services" | "solutions";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
  const [mobileOpenCategory, setMobileOpenCategory] = useState<string | null>(
    null,
  );
  const [servicesData, setServicesData] = useState<ServiceItem[]>([]);
  const [solutionsData, setSolutionsData] = useState<ServiceItem[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownType: "services",
    },
    {
      name: "Solutions",
      href: "/solutions",
      hasDropdown: true,
      dropdownType: "solutions",
    },
    { name: "Our Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Fetch navbar data from Redux if not present
  const { navbarData } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!navbarData) {
      dispatch(fetchNavbarData());
    }
  }, [dispatch, navbarData]);

  useEffect(() => {
    if (navbarData && navbarData.success) {
      const { services, solutions } = navbarData.data;

      // Transform services data
      const transformedServices: ServiceItem[] = services.map(
        (service: any) => ({
          id: service.id,
          title: service.service_name,
          slug: service.slug || slugify(service.service_name),
          services: service.subservices.map((sub: any) => ({
            id: sub.id,
            name: sub.subservice_name,
            slug: sub.slug || slugify(sub.subservice_name),
          })),
        }),
      );

      // Transform solutions data
      const transformedSolutions: ServiceItem[] = solutions.map(
        (solution: any) => ({
          id: solution.id,
          title: solution.solutions_name,
          slug: solution.slug || slugify(solution.solutions_name),
          services: solution.solutions.map((sub: any) => ({
            id: sub.id,
            name: sub.solutions_name,
            slug: sub.slug || slugify(sub.solutions_name),
          })),
        }),
      );

      setServicesData(transformedServices);
      setSolutionsData(transformedSolutions);
    }
  }, [navbarData]);

  const isActiveRoute = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isTransparent && !forceTransparent && !forceSolid) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isTransparent, forceTransparent, forceSolid]);

  const shouldBeTransparent =
    isTransparent && !forceSolid && (forceTransparent || !isScrolled);
  const shouldBeSolid =
    !isTransparent || forceSolid || (!forceTransparent && isScrolled);

  const getDropdownData = (type: "services" | "solutions") => {
    return type === "services" ? servicesData : solutionsData;
  };

  const renderFullScreenMegaMenu = (item: NavItem) => {
    if (!item.dropdownType) return null;
    const data = getDropdownData(item.dropdownType);

    if (data.length === 0) return null;

    return (
      <div
        className="fixed left-0 right-0 top-20 bg-black z-40 h-[70vh] overflow-y-auto"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <div className={`${CONTENT_WRAPPER_CLASSES} py-12`}>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
            {data.map((category) => (
              <div key={category.slug} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-gray-800 pb-3">
                  <h3 className="text-lg lg:text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${item.dropdownType}/${service.slug}`}
                      onClick={() => setOpenDropdown(null)}
                      className="block text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm lg:text-base"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-in-out ${
          shouldBeSolid ? "bg-white backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        {shouldBeTransparent && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" />
        )}

        <nav className="relative" ref={dropdownRef}>
          <div
            className={`${CONTENT_WRAPPER_CLASSES} flex justify-between items-center h-20 border-b`}
          >
            {/* Logo */}
            <div className="flex-shrink-0 z-10">
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Image
                    src={ImageConstants.BLACK_LOGO}
                    alt="Diginext Logo"
                    width={120}
                    height={40}
                    className={`h-10 w-auto transition-all duration-500 transform group-hover:scale-110 ${
                      shouldBeSolid ? "brightness-100" : "brightness-0 invert"
                    }`}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = isActiveRoute(item.href);
                  const hasDropdown = item.hasDropdown;
                  const isDropdownOpen = openDropdown === item.name;

                  return (
                    <div key={item.name} className="relative">
                      {hasDropdown ? (
                        <div onMouseEnter={() => setOpenDropdown(item.name)}>
                          <Link
                            href={item.href}
                            className="group relative px-4 py-2 overflow-hidden rounded-full transition-all duration-300 flex items-center gap-1"
                          >
                            <span
                              className={`relative z-10 text-sm font-semibold tracking-wide transition-all duration-300 ${
                                shouldBeSolid
                                  ? isActive || isDropdownOpen
                                    ? PRIMARY_ORANGE_TEXT
                                    : "text-gray-700 hover:text-orange-500"
                                  : isActive || isDropdownOpen
                                    ? "text-orange-400 drop-shadow-lg"
                                    : "text-white drop-shadow-lg hover:text-orange-300"
                              }`}
                            >
                              {item.name}
                            </span>
                          </Link>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="group relative px-4 py-2 overflow-hidden rounded-full transition-all duration-300 block"
                        >
                          <span
                            className={`relative z-10 text-sm font-semibold tracking-wide transition-all duration-300 ${
                              shouldBeSolid
                                ? isActive
                                  ? PRIMARY_ORANGE_TEXT
                                  : "text-gray-700 hover:text-orange-500"
                                : isActive
                                  ? "text-orange-400 drop-shadow-lg"
                                  : "text-white drop-shadow-lg hover:text-orange-300"
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 z-10">
              <Link
                href="/contact"
                className={`hidden md:block px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl ${
                  shouldBeSolid
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-900"
                }`}
              >
                Get Started
              </Link>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className={`xl:hidden relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 group ${
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
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`${CONTENT_WRAPPER_CLASSES} py-4 space-y-2 rounded-2xl`}
            >
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                const hasDropdown = item.hasDropdown;
                const isDropdownOpen = mobileOpenDropdown === item.name;

                return (
                  <div key={item.name}>
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => {
                            setMobileOpenDropdown(
                              isDropdownOpen ? null : item.name,
                            );
                            setMobileOpenCategory(null);
                          }}
                          className={`flex items-center justify-between w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                            isActive
                              ? PRIMARY_ORANGE_TEXT
                              : "text-gray-700 hover:text-orange-500"
                          }`}
                        >
                          <span>{item.name}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {isDropdownOpen && item.dropdownType && (
                          <div className="px-4 mt-2 mb-2 space-y-4">
                            {getDropdownData(item.dropdownType).map(
                              (category) => (
                                <div
                                  key={category.slug}
                                  className="rounded-xl ml-4 overflow-hidden"
                                >
                                  <button
                                    onClick={() =>
                                      setMobileOpenCategory(
                                        mobileOpenCategory === category.slug
                                          ? null
                                          : category.slug,
                                      )
                                    }
                                    className={`${TITLE_SIZE} w-full flex items-center justify-between px-4 py-2.5 border-b`}
                                  >
                                    <div
                                      className={`${FONT_WEIGHT.medium} text-sm`}
                                    >
                                      {category.title}
                                    </div>
                                    <svg
                                      className={`w-4 h-4 flex-shrink-0 ml-2 transition-transform duration-300 ${
                                        mobileOpenCategory === category.slug
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  </button>
                                  {mobileOpenCategory === category.slug && (
                                    <div className="p-2 space-y-1">
                                      {category.services.map((service) => (
                                        <Link
                                          key={service.slug}
                                          href={`/${item.dropdownType}/${service.slug}`}
                                          className={`${TITLE_SIZE} block px-3 py-2 text-sm font-normal text-gray-700 hover:bg-white hover:text-orange-500 rounded-lg transition-all duration-200`}
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                          isActive
                            ? PRIMARY_ORANGE_TEXT
                            : "text-gray-700 hover:text-orange-500"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Full Screen Mega Menu (Desktop) - Only on Hover */}
      {openDropdown &&
        navItems.find((item) => item.name === openDropdown)?.hasDropdown && (
          <div className="hidden xl:block">
            {renderFullScreenMegaMenu(
              navItems.find((item) => item.name === openDropdown)!,
            )}
          </div>
        )}

      {/* Backdrop overlay */}
      {(isMenuOpen || openDropdown) && (
        <div
          className="fixed inset-0 z-30 top-20"
          onClick={() => {
            setIsMenuOpen(false);
            setOpenDropdown(null);
          }}
        />
      )}
    </>
  );
};

export default Header;
