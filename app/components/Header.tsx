import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Company", path: "/our-company" },
    { name: "News", path: "/news-and-opportunities" },
    { name: "Let’s Talk Opportunities", path: "/contact" },
  ];

  // Handle scroll style effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-white/70 backdrop-blur-lg shadow-lg" : "bg-transparent"}
    `}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="vd to/4 tc wf yf">
          <a href="/" className="flex items-center">
            <img
              className="om w-1/5 mr-4"
              src="images/AuroMax-logo-2.png"
              alt="Logo Light"
            />
            <span className="text-[#08442B] font-bold text-2xl">AuroMax</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10 nav-contact">
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-[#08442B] font-bold border-b-2 border-[#08442B]"
                      : "text-black hover:text-[#08442B]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            className={`h-7 w-7 transition`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm">
          <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 animate-slideIn">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[#08442B] text-2xl font-bold">AuroMax</span>

              <button
                className="p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive
                        ? "text-[#08442B] font-bold"
                        : "text-gray-900 hover:text-[#08442B]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
