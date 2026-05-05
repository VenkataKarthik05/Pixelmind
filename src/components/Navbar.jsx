import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 Section navigation
  const goTo = (path, id = null) => {
    if (window.location.pathname === path) {
      if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        if (id) {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    setActive(id || "home");
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffbf5]/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
            setActive("home");
            setMenuOpen(false);
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="/Logo.png" alt="logo" className="w-9 h-9" />
          <span className="font-bold text-lg text-gray-900">
            Pixel<span className="text-[#00b8a9]">Mind</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">

          {/* ✅ HOME (ONLY NAVIGATE) */}
         <button
  onClick={() => {
    if (window.location.pathname === "/") {
      // already on home → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setActive("home");
  }}
  className={active === "home" ? "text-[#00b8a9]" : "hover:text-gray-900"}
>
  Home
</button>

          {/* Sections */}
          <button
            onClick={() => goTo("/", "services")}
            className={active === "services" ? "text-[#00b8a9]" : "hover:text-gray-900"}
          >
            Services
          </button>

          <button
            onClick={() => goTo("/portfolio", "portfolio")}
            className={active === "portfolio" ? "text-[#00b8a9]" : "hover:text-gray-900"}
          >
            Portfolio
          </button>

          {/* About Page */}
          <button
            onClick={() => {
              navigate("/about");
              setActive("");
            }}
            className="hover:text-gray-900"
          >
            About
          </button>

        </nav>

        {/* Contact */}
        <button
          onClick={() => goTo("/", "contact")}
          className="hidden md:block bg-[#00b8a9] text-white px-5 py-2 rounded-full text-sm"
        >
          Contact
        </button>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fffbf5] border-t px-6 py-4 flex flex-col gap-3">

          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="text-left"
          >
            Home
          </button>

          <button onClick={() => goTo("/", "services")} className="text-left">
            Services
          </button>

          <button onClick={() => goTo("/", "portfolio")} className="text-left">
            Portfolio
          </button>

          <button
            onClick={() => {
              navigate("/about");
              setMenuOpen(false);
            }}
            className="text-left"
          >
            About
          </button>

          <button
            onClick={() => goTo("/", "contact")}
            className="mt-2 bg-[#00b8a9] text-white py-2 rounded-full"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}