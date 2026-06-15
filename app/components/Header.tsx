import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <nav>
        <a href="/" className="n-logo">
          {/* <svg viewBox="0 0 72 80" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13,66 L13,37 A23,23 0 0 1 59,37 L59,66 L47,66 L47,37 A11,11 0 0 0 25,37 L25,66 Z"
              fill="#C9A84C"
            />
            <circle cx="36" cy="48" r="5" fill="#C95E3A" />
          </svg> */}
          <img src="/auromax-logo.png" />
          <div className="n-logo-text">
            <div className="n-logo-name">AUROMAX</div>
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

        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside className={`mobile-drawer ${open ? "show" : ""}`}>
        <div className="drawer-top">
          <a href="/" className="n-logo">
            <img src="/auromax-logo.png" />
            <div className="n-logo-text">
              <div className="n-logo-name">AUROMAX</div>
            </div>
          </a>

          <button className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className="drawer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/services#trading" onClick={() => setOpen(false)}>
            Trading & Commodities
          </a>
          <a href="/services#property" onClick={() => setOpen(false)}>
            Property Development
          </a>
          <a href="/services#mes" onClick={() => setOpen(false)}>
            Market Entry (MES)
          </a>
          <a href="/services#csr" onClick={() => setOpen(false)}>
            Community & CSR
          </a>
          <a href="/about#indonesia" onClick={() => setOpen(false)}>
            Indonesia
          </a>

          <a href="/contact" className="drawer-cta">
            Contact Us
          </a>
        </div>
      </aside>
    </>
  );
}
