import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* =========================
              Mobile Menu Button
          ========================== */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // X Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* =========================
              Logo
          ========================== */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-9 w-auto sm:h-10"
            />
          </a>

          {/* =========================
              Desktop Navigation
          ========================== */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-pink-500"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* =========================
              Auth Buttons
          ========================== */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="hidden text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-pink-500 sm:block"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:scale-105 hover:opacity-90 sm:px-5"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* =========================
            Mobile Navigation
        ========================== */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleMenuClick}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-pink-500"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Sign In */}
              <button
                type="button"
                onClick={handleMenuClick}
                className="mt-2 rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;