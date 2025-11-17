"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";
import Link from "next/link";

interface SubItem {
  name: string;
  slug: string;
  subItems?: SubItem[];
}

interface ServiceItem {
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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const [mobileOpenCategory, setMobileOpenCategory] = useState<string | null>(
    null
  );
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState<
    string | null
  >(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = "/";

  const SERVICES_DATA: ServiceItem[] = [
    {
      title: "Design",
      slug: "design",
      services: [
        { name: "Branding", slug: "branding-graphics-design" },
        { name: "Product Design", slug: "product-packaging-design" },
        { name: "UI/UX Design", slug: "ui-ux-design" },
      ],
    },
    {
      title: "Development",
      slug: "development",
      services: [
        { name: "Web Design", slug: "website-design" },
        { name: "E-Commerce Web Development", slug: "ecommerce-development" },
        {
          name: "Mobile App Development",
          slug: "app-development",
        },
        { name: "Custom Web Application", slug: "custom-web-application" },
      ],
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      services: [
        {
          name: "Social Media Marketing",
          slug: "social-media-marketing",
        },
        {
          name: "Search Engine Optimization",
          slug: "search-engine-optimization",
        },
        { name: "Email Marketing", slug: "email-marketing" },
        { name: "PPC Advertising", slug: "ppc-advertising" },
      ],
    },
    {
      title: "Web Hosting",
      slug: "web-hosting",
      services: [
        { name: "Shared Web Hosting", slug: "shared-hosting" },
        { name: "Dedicated Hosting", slug: "dedicated-hosting" },
        { name: "Cloud Hosting", slug: "cloud-hosting" },
        { name: "Email Hosting", slug: "email-hosting" },
        { name: "G Suite", slug: "g-suite" },
      ],
    },
    {
      title: "Production",
      slug: "production",
      services: [
        { name: "Photography", slug: "photography" },
        { name: "Videography", slug: "videography" },
      ],
    },
    {
      title: "Entertainment & Events",
      slug: "entertainment-events",
      services: [
        { name: "Event Management", slug: "event-management" },
        { name: "Concerts & Shows", slug: "concerts-and-shows" },
        { name: "Corporate Events", slug: "corporate-events" },
        { name: "Media Coverage", slug: "media-coverage" },
      ],
    },
  ];

  const SOLUTIONS_DATA: ServiceItem[] = [
    {
      title: "Print & Signages",
      slug: "print-signages",
      services: [
        { name: "Digital Printing", slug: "digital-printing" },
        { name: "Signages", slug: "signages" },
        {
          name: "Exhibition Stand Builders",
          slug: "exhibition-stand-builders",
        },
        { name: "Corporate Gift", slug: "corporate-gift" },
      ],
    },
    {
      title: "Marketing",
      slug: "marketing",
      services: [
        { name: "Performance Marketing", slug: "performance-marketing" },
        { name: "Marketing Consultant", slug: "marketing-consultant" },
        { name: "Growth Marketing", slug: "growth-marketing" },
        { name: "Content Marketing", slug: "content-marketing" },
        { name: "Influencer Marketing", slug: "influencer-marketing" },
      ],
    },
    {
      title: "IT Infrastructure",
      slug: "it-infrastructure",
      services: [
        { name: "IT Services", slug: "it-services" },
        { name: "Enterprise Solutions", slug: "enterprise-solutions" },
        { name: "GIS Planning", slug: "gis-planning" },
        { name: "On Site Support", slug: "on-site-support" },
        { name: "Cyber Security", slug: "cyber-security" },
      ],
    },
    {
      title: "Custom Softwares",
      slug: "custom-softwares",
      services: [
        { name: "HR Software Development", slug: "hr-software-development" },
        { name: "Enterprise CRM Software", slug: "enterprise-crm-software" },
        {
          name: "ERP Development Consultation",
          slug: "erp-development-consultation",
        },
        { name: "Custom Dashboard Design", slug: "custom-dashboard-design" },
        { name: "ERP Data Migration", slug: "erp-data-migration" },
        { name: "ERP App Development", slug: "erp-app-development" },
        {
          name: "Learning Management System",
          slug: "learning-management-system",
        },
        { name: "DevOps", slug: "devops-and-cloud-solutions" },
      ],
    },
  ];

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

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(href);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setHoveredCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const shouldBeTransparent =
    isTransparent && !forceSolid && (forceTransparent || !isScrolled);
  const shouldBeSolid =
    !isTransparent || forceSolid || (!forceTransparent && isScrolled);

  const getDropdownData = (type: "services" | "solutions") => {
    return type === "services" ? SERVICES_DATA : SOLUTIONS_DATA;
  };

  const renderDesktopMegaMenu = (item: NavItem) => {
    if (!item.dropdownType) return null;
    const data = getDropdownData(item.dropdownType);

    return (
      <div
        onMouseLeave={() => {
          setOpenDropdown(null);
          setHoveredCategory(null);
        }}
        className="absolute left-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
      >
        <div className="flex">
          {/* Categories List */}
          <div
            className={`${
              hoveredCategory ? "w-64 border-r border-gray-100" : "w-full"
            } bg-gray-50`}
          >
            {data.map((category, index) => (
              <button
                key={category.slug}
                onMouseEnter={() => setHoveredCategory(category.slug)}
                onClick={() => setHoveredCategory(category.slug)}
                className={`w-full text-left px-6 py-3 text-sm font-semibold transition-all duration-200 border-l-4 whitespace-nowrap overflow-hidden text-ellipsis ${
                  hoveredCategory === category.slug
                    ? "bg-white border-orange-500 text-orange-500"
                    : "border-transparent text-gray-700 hover:bg-white hover:text-orange-500"
                } ${index !== data.length - 1 ? "" : ""}`}
                style={{ margin: 0, lineHeight: "1.4" }}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Services for Hovered Category */}
          {hoveredCategory && (
            <div className="w-80 p-4">
              {(() => {
                const category = data.find((c) => c.slug === hoveredCategory);
                if (!category) return null;

                return (
                  <div className="space-y-0">
                    {category.services.map((service, index) => (
                      <div
                        key={service.slug}
                        className={
                          index !== category.services.length - 1 ? "" : ""
                        }
                      >
                        <Link
                          href={`/${item.dropdownType}/${service.slug}`}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-all duration-200 font-medium whitespace-nowrap overflow-hidden text-ellipsis"
                          style={{ margin: 0, lineHeight: "1.4" }}
                        >
                          {service.name}
                        </Link>
                        {service.subItems && service.subItems.length > 0 && (
                          <div className="ml-4 space-y-0">
                            {service.subItems.map((subItem) => (
                              <Link
                                key={subItem.slug}
                                href={`/${item.dropdownType}/${service.slug}/${subItem.slug}`}
                                className="block px-4 py-1.5 text-xs text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-all duration-200 whitespace-nowrap overflow-hidden text-ellipsis"
                                style={{ margin: 0, lineHeight: "1.4" }}
                              >
                                • {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-in-out ${
        shouldBeSolid ? "bg-white backdrop-blur-xl " : "bg-transparent"
      }`}
    >
      {shouldBeTransparent && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" />
      )}

      <nav
        className="relative bg-white max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16"
        ref={dropdownRef}
      >
        <div className="flex justify-between items-center h-20 border-b ">
          {/* Logo */}
          <div className="flex-shrink-0 z-10 ">
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
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                const hasDropdown = item.hasDropdown;
                const isDropdownOpen = openDropdown === item.name;

                return (
                  <div key={item.name} className="relative">
                    {hasDropdown ? (
                      <Link
                        href={item.href}
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        className="group relative px-4 overflow-hidden rounded-full transition-all duration-300 flex items-center gap-1"
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
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        className="group relative px-4 py-2 overflow-hidden rounded-full transition-all duration-300 block"
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
                      </Link>
                    )}

                    {hasDropdown &&
                      isDropdownOpen &&
                      renderDesktopMegaMenu(item)}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 z-10">
            <button
              className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 group ${
                shouldBeSolid
                  ? "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                  : "text-white hover:text-orange-300 hover:bg-white/10"
              }`}
            ></button>

            <Link
              href={"contact"}
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
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 rounded-2xl ">
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
                            isDropdownOpen ? null : item.name
                          );
                          setMobileOpenCategory(null);
                        }}
                        className={`flex items-center justify-between w-full mx-4 px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                          isActive
                            ? "text-orange-500"
                            : "text-gray-700 hover:text-orange-500"
                        }`}
                      >
                        <span>{item.name}</span>
                      </button>

                      {isDropdownOpen && item.dropdownType && (
                        <div className="mx-4 mt-2 mb-2 space-y-0">
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
                                        : category.slug
                                    )
                                  }
                                  className="w-full flex items-center justify-between px-4 py-2.5 border-b whitespace-nowrap overflow-hidden text-ellipsis"
                                  style={{ margin: 0, lineHeight: "1.4" }}
                                >
                                  <div className="font-medium text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
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
                                  <div className="p-2 space-y-0">
                                    {category.services.map((service) => (
                                      <div key={service.slug}>
                                        {service.subItems &&
                                        service.subItems.length > 0 ? (
                                          <>
                                            <button
                                              onClick={() =>
                                                setMobileOpenSubDropdown(
                                                  mobileOpenSubDropdown ===
                                                    service.slug
                                                    ? null
                                                    : service.slug
                                                )
                                              }
                                              className="flex items-center justify-between w-full px-3 py-2 text-sm font-normal text-gray-700 hover:bg-white hover:text-orange-500 rounded-lg transition-all duration-200 whitespace-nowrap overflow-hidden text-ellipsis"
                                              style={{
                                                margin: 0,
                                                lineHeight: "1.4",
                                              }}
                                            >
                                              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                                                {service.name}
                                              </span>
                                              <svg
                                                className={`w-4 h-4 flex-shrink-0 ml-2 transition-transform duration-300 ${
                                                  mobileOpenSubDropdown ===
                                                  service.slug
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
                                            {mobileOpenSubDropdown ===
                                              service.slug && (
                                              <div className="ml-4 space-y-0">
                                                {service.subItems.map(
                                                  (subItem) => (
                                                    <Link
                                                      key={subItem.slug}
                                                      href={`/${item.dropdownType}/${service.slug}`}
                                                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-white hover:text-orange-500 rounded-lg transition-all duration-200 whitespace-nowrap overflow-hidden text-ellipsis"
                                                      onClick={() =>
                                                        setIsMenuOpen(false)
                                                      }
                                                      style={{
                                                        margin: 0,
                                                        lineHeight: "1.4",
                                                      }}
                                                    >
                                                      • {subItem.name}
                                                    </Link>
                                                  )
                                                )}
                                              </div>
                                            )}
                                          </>
                                        ) : (
                                          <Link
                                            href={`/${item.dropdownType}/${service.slug}`}
                                            className="block px-3 py-2 text-sm font-normal text-gray-700 hover:bg-white hover:text-orange-500 rounded-lg transition-all duration-200 whitespace-nowrap overflow-hidden text-ellipsis"
                                            onClick={() => setIsMenuOpen(false)}
                                            style={{
                                              margin: 0,
                                              lineHeight: "1.4",
                                            }}
                                          >
                                            {service.name}
                                          </Link>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
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
                  )}
                </div>
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
