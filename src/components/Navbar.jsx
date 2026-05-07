import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Update active state based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActive("home");
    } else if (path === "/portfolio") {
      setActive("portfolio");
    } else if (path === "/about") {
      setActive("about");
    } else if (path === "/contact") {
      setActive("contact");
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section navigation
  const goTo = (path, id = null) => {
    // If we're already on the target page
    if (window.location.pathname === path) {
      if (id) {
        // If an ID is provided, scroll to that element
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // If element not found, scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // No ID provided, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Navigating to a different page
      navigate(path);
      // Wait for page to render then scroll to top or element
      setTimeout(() => {
        if (id) {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#fffbf5]/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
      scrolled ? "shadow-md" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
            setActive("home");
            setMenuOpen(false);
          }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img src="/Logo.png" alt="logo" className="w-9 h-9 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-bold text-lg text-gray-900">
            Pixel<span className="text-[#00b8a9]">Mind</span>
            <p className="text-xs text-gray-500 -mt-1">Solutions Pvt Ltd</p>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">

          {/* HOME */}
          <button
            onClick={() => {
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
              setActive("home");
              setMenuOpen(false);
            }}
            className={`relative px-2 py-1 transition-all duration-300 group ${
              active === "home" 
                ? "text-[#00b8a9]" 
                : "hover:text-[#00b8a9]"
            }`}
          >
            Home
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00b8a9] transform transition-transform duration-300 ${
              active === "home" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}></span>
          </button>

          {/* Services */}
          <button
            onClick={() => {
              goTo("/", "services");
              setActive("services");
              setMenuOpen(false);
            }}
            className={`relative px-2 py-1 transition-all duration-300 group ${
              active === "services" 
                ? "text-[#00b8a9]" 
                : "hover:text-[#00b8a9]"
            }`}
          >
            Services
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00b8a9] transform transition-transform duration-300 ${
              active === "services" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}></span>
          </button>

          {/* Portfolio */}
          <button
            onClick={() => {
              goTo("/portfolio", "portfolio");
              setActive("portfolio");
              setMenuOpen(false);
            }}
            className={`relative px-2 py-1 transition-all duration-300 group ${
              active === "portfolio" 
                ? "text-[#00b8a9]" 
                : "hover:text-[#00b8a9]"
            }`}
          >
            Portfolio
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00b8a9] transform transition-transform duration-300 ${
              active === "portfolio" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}></span>
          </button>

          {/* About */}
          <button
            onClick={() => {
              navigate("/about");
              setActive("about");
              window.scrollTo(0, 0);
              setMenuOpen(false);
            }}
            className={`relative px-2 py-1 transition-all duration-300 group ${
              active === "about" 
                ? "text-[#00b8a9]" 
                : "hover:text-[#00b8a9]"
            }`}
          >
            About
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00b8a9] transform transition-transform duration-300 ${
              active === "about" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}></span>
          </button>

        </nav>

        {/* Contact Button */}
        <button
          onClick={() => {
            goTo("/contact", "contact");
            setActive("contact");
            setMenuOpen(false);
          }}
          className="hidden md:block bg-[#00b8a9] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-[#009688] hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Contact
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-gray-100"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fffbf5] border-t px-6 py-4 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              navigate("/");
              setActive("home");
              setMenuOpen(false);
            }}
            className={`text-left px-3 py-2 rounded-lg transition-all duration-300 ${
              active === "home" 
                ? "text-[#00b8a9] bg-[#00b8a9]/10" 
                : "hover:bg-gray-100 hover:text-[#00b8a9]"
            }`}
          >
            Home
          </button>

          <button 
            onClick={() => {
              goTo("/", "services");
              setActive("services");
              setMenuOpen(false);
            }}
            className={`text-left px-3 py-2 rounded-lg transition-all duration-300 ${
              active === "services" 
                ? "text-[#00b8a9] bg-[#00b8a9]/10" 
                : "hover:bg-gray-100 hover:text-[#00b8a9]"
            }`}
          >
            Services
          </button>

          <button 
            onClick={() => {
              goTo("/portfolio", "portfolio");
              setActive("portfolio");
              setMenuOpen(false);
            }}
            className={`text-left px-3 py-2 rounded-lg transition-all duration-300 ${
              active === "portfolio" 
                ? "text-[#00b8a9] bg-[#00b8a9]/10" 
                : "hover:bg-gray-100 hover:text-[#00b8a9]"
            }`}
          >
            Portfolio
          </button>

          <button
            onClick={() => {
              navigate("/about");
              setActive("about");
              setMenuOpen(false);
            }}
            className={`text-left px-3 py-2 rounded-lg transition-all duration-300 ${
              active === "about" 
                ? "text-[#00b8a9] bg-[#00b8a9]/10" 
                : "hover:bg-gray-100 hover:text-[#00b8a9]"
            }`}
          >
            About
          </button>

          <button
            onClick={() => {
              goTo("/contact", "contact");
              setActive("contact");
              setMenuOpen(false);
            }}
            className="mt-2 bg-[#00b8a9] text-white py-2 rounded-full transition-all duration-300 hover:bg-[#009688] hover:scale-105 active:scale-95"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}