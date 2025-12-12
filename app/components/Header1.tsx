import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h1
              className={`
            text-2xl font-bold transition-all text-black
          `}
            >
              AuroMax
            </h1>
            {/* <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="h-8 w-auto"
            /> */}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-6 w-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        {/* <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-sm font-semibold text-gray-900">
            About
          </Link>
          <Link to="/welcome" className="text-sm font-semibold text-gray-900">
            Welcome
          </Link>
          <Link to="/features" className="text-sm font-semibold text-gray-900">
            Features
          </Link>
        </div> */}
        <ul className="flex items-center gap-8 font-medium transition-all">
          {["Home", "About", "Services", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                href={`/${item.toLowerCase()}`}
                className={`hover:opacity-70 transition
                  ${scrolled ? "text-black" : "text-white"}
                `}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Login button */}
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="text-sm font-semibold text-gray-900 hover:text-gray-700"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div> */}
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/25">
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-6 w-6"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 flex flex-col space-y-4">
              <Link to="/" className="text-gray-900 font-semibold text-lg">
                Home
              </Link>
              <Link to="/about" className="text-gray-900 font-semibold text-lg">
                About
              </Link>
              <Link
                to="/welcome"
                className="text-gray-900 font-semibold text-lg"
              >
                Welcome
              </Link>
              <Link
                to="/features"
                className="text-gray-900 font-semibold text-lg"
              >
                Features
              </Link>
              <Link
                to="/login"
                className="text-gray-900 font-semibold text-lg mt-4"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
