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
    <nav>
      <a href="/" className="n-logo">
        <svg viewBox="0 0 72 80" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13,66 L13,37 A23,23 0 0 1 59,37 L59,66 L47,66 L47,37 A11,11 0 0 0 25,37 L25,66 Z"
            fill="#C9A84C"
          />
          <circle cx="36" cy="48" r="5" fill="#C95E3A" />
        </svg>
        <div className="n-logo-text">
          <div className="n-logo-name">AUROMAX</div>
          <div className="n-logo-tag">Hong Kong · Indonesia</div>
        </div>
      </a>
      <div className="n-mid">Trust First. Desire Always.</div>
      <div className="n-r">
        <a href="/about">About</a>
        <div className="n-dd">
          <a href="/services">Services ▾</a>
          <ul className="n-ddm">
            <li>
              <a href="/services#trading">Trading &amp; Commodities</a>
            </li>
            <li>
              <a href="/services#property">Property Development</a>
            </li>
            <li>
              <a href="/services#mes">Market Entry (MES)</a>
            </li>
            <li>
              <a href="/services#csr">Community &amp; CSR</a>
            </li>
          </ul>
        </div>
        <a href="/about#indonesia">Indonesia</a>

        <a href="/contact" className="n-cta">
          Contact
        </a>
      </div>
    </nav>
  );
}
