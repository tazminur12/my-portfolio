import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Canvas } from "@react-three/fiber";
import logo from "../assets/favicon.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const menuRef = useRef(null);
  const location = useLocation();
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  // Set active section based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveSection("home");
    else if (path === "/projects") setActiveSection("projects");
    else if (path === "/contact") setActiveSection("contact");
    else if (path === "/about") setActiveSection("about");
  }, [location]);

  // Scroll effect for navbar padding
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Apply theme to html data-theme attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { path: "/", name: "Home", id: "home" },
    { path: "/projects", name: "Projects", id: "projects" },
    { path: "/about", name: "About", id: "about" },
    { path: "/contact", name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/tazminur12",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/tazminur-rahman-tanim-305315336/",
      name: "LinkedIn",
    },
    { icon: <FaTwitter />, url: "https://x.com/tazminur12", name: "Twitter" },
    {
      icon: <FaStackOverflow />,
      url: "https://stackoverflow.com/users/30831837/tazminur-rahman-tanim",
      name: "Stack Overflow",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 bg-base-100/90 backdrop-blur-md shadow-md transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-base-content"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 mr-3 hidden sm:block">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Tanim.dev
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-base-100 p-1 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-base-content hover:bg-base-200"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary text-lg"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-base-200 hover:bg-base-300 transition text-xl flex items-center justify-center"
              aria-label="Toggle Theme"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="https://drive.google.com/file/d/12A0wqOpM_5yKMnLrVQ-Iaak8-wIoCoEu/view?usp=sharing"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-4" ref={menuRef}>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-base-content text-3xl p-2 rounded-md hover:bg-base-200 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-[64px] bg-base-100 z-40 shadow-lg rounded-b-lg overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-xl">
              {navLinks.map((link) => (
                <li key={link.id} className="w-full text-center">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block w-full px-6 py-3 rounded-lg font-semibold transition ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-base-content hover:bg-base-200"
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex justify-center gap-8 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-2xl text-base-content hover:text-primary transition p-2 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <Link
            to="https://drive.google.com/file/d/12A0wqOpM_5yKMnLrVQ-Iaak8-wIoCoEu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire Me
          </Link>

            {/* Mobile Theme Toggle */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="p-3 rounded-full bg-base-200 hover:bg-base-300 transition text-2xl"
                aria-label="Toggle Theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <FaSun className="text-yellow-400" />
                ) : (
                  <FaMoon className="text-gray-700" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
