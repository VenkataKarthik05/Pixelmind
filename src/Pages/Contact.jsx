// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedItems((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.2, triggerOnce: true }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    "SEO Services",
    "Google Ads",
    "Social Media Marketing",
    "PPC Management",
    "Lead Generation",
    "Content Marketing",
    "Email Marketing",
    "Other"
  ];

  const budgets = [
    "Under ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,50,000",
    "₹2,50,000 - ₹5,00,000",
    "₹5,00,000+",
    "Not sure yet"
  ];

  // Restrict input for phone number - only numbers, max 10 digits
  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Remove any non-digit characters
    value = value.replace(/\D/g, '');
    // Limit to 10 digits
    if (value.length <= 10) {
      setFormData({
        ...formData,
        phone: value
      });
      if (errors.phone) {
        setErrors({
          ...errors,
          phone: ""
        });
      }
    }
  };

  // Restrict input for email - only allowed characters
  const handleEmailChange = (e) => {
    let value = e.target.value;
    // Allow: letters, numbers, @, ., _, -, + (standard email characters)
    // Remove spaces and special characters that are not allowed in emails
    value = value.replace(/\s/g, '');

    setFormData({
      ...formData,
      email: value
    });
    if (errors.email) {
      setErrors({
        ...errors,
        email: ""
      });
    }
  };

  // Restrict input for name - only letters and spaces
  const handleNameChange = (e) => {
    let value = e.target.value;
    // Allow only letters, spaces, and basic punctuation for names
    value = value.replace(/[^a-zA-Z\s.'-]/g, '');

    setFormData({
      ...formData,
      name: value
    });
    if (errors.name) {
      setErrors({
        ...errors,
        name: ""
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com)";
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Please enter a valid 10-digit mobile number";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: ""
      });
      setErrors({});

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  // Floating animation for background elements
  const floatingStyle = {
    animation: "float 6s ease-in-out infinite"
  };

  const floatingStyle2 = {
    animation: "float2 8s ease-in-out infinite"
  };

  const pulseStyle = {
    animation: "pulseSlow 4s ease-in-out infinite"
  };

  // Handler for opening email client
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

 // Handler for opening location in Google Maps
const handleLocationClick = () => {
  const address = "PIXELMINDSOLUTIONS PVT.LTD, KPHB, Hyderabad, Telangana, India";
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
};

  // Handler for phone call
  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen font-serif pt-[100px] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f2] to-[#f5ede0]" />

        {/* Animated Orbs */}
        <div
          className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#c9a96e26] to-transparent"
          style={floatingStyle}
        />
        <div
          className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#c9a96e1a] to-transparent"
          style={floatingStyle2}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#c9a96e0d] to-transparent"
          style={pulseStyle}
        />

        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.03] animate-slow-spin" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #c9a96e 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Animated Lines */}
        <svg className="absolute top-20 left-0 w-full opacity-10 animate-slide" height="2">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#c9a96e" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8 relative z-10">
        {/* Header Section with Staggered Animation */}
        <div className="text-center mb-16">
          <div
            data-animate="badge"
            id="badge"
            className={`inline-flex items-center gap-2 mb-6 px-5 py-1.5 rounded-full bg-white/70 border border-[#c9a96e]/35 backdrop-blur-sm transition-all duration-700 ${animatedItems.includes("badge") ? "animate-fade-down opacity-100" : "opacity-0 -translate-y-10"
              }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
            <span className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#a0784e] font-sans">
              Get in Touch
            </span>
          </div>

          <h1
            data-animate="title"
            id="title"
            className={`font-serif text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#2a1e12] mb-4 transition-all duration-700 delay-100 ${animatedItems.includes("title") ? "animate-zoom-in opacity-100" : "opacity-0 scale-50"
              }`}
          >
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-[#c9a96e] to-[#e8c97e] bg-clip-text text-transparent animate-gradient">
              Conversation
            </span>
          </h1>

          <p
            data-animate="subtitle"
            id="subtitle"
            className={`font-sans text-lg text-[#7a6652] max-w-[600px] mx-auto leading-relaxed transition-all duration-700 delay-200 ${animatedItems.includes("subtitle") ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"
              }`}
          >
            Ready to take your digital presence to the next level?
            We'd love to hear about your goals and challenges.
          </p>

          {/* Animated underline */}
          <div className="flex justify-center mt-8">
            <div
              className={`h-1 w-0 bg-gradient-to-r from-[#c9a96e] to-[#e8c97e] rounded-full transition-all duration-1000 delay-300 ${animatedItems.includes("subtitle") ? "!w-20" : ""
                }`}
            />
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info Side with Flip Animation */}
          <div
            data-animate="info"
            id="info"
            className={`transition-all duration-700 delay-400 perspective-1000 ${animatedItems.includes("info") ? "animate-flip-in opacity-100" : "opacity-0 rotate-y-90"
              }`}
          >
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-[#c9a96e]/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <h2 className="text-3xl text-[#2a1e12] mb-6 font-serif relative inline-block">
                Contact Information
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#c9a96e] rounded-full animate-width-grow" />
              </h2>

              {/* Animated Contact Items */}
              <div className="mb-8 space-y-6">
                {[
                  { icon: "location", title: "Visit Us", text: "KPHB, Hyderabad, Telangana, India", delay: 0, onClick: handleLocationClick, isClickable: true },
                  { icon: "phone", title: "Call Us", text: "+91 98765 43210", delay: 100, onClick: () => handlePhoneClick("+919876543210"), isClickable: true },
                  { icon: "email", title: "Email Us", text: "info@pixelmindsolutions.com", delay: 200, onClick: () => handleEmailClick("info@pixelmindsolutions.com"), isClickable: true },
                  { icon: "hours", title: "Business Hours", text: "Mon - Fri: 9:00 AM - 7:00 PM\nSat: 10:00 AM - 4:00 PM", delay: 300, isClickable: false }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={item.isClickable ? item.onClick : undefined}
                    className={`flex items-center gap-4 group transition-all duration-500 hover:translate-x-2 animate-slide-in-right ${item.isClickable ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    style={{ animationDelay: `${item.delay}ms`, opacity: 0, animationFillMode: "forwards" }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a96e20] to-[#a0784e20] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon === "location" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      )}
                      {item.icon === "phone" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      )}
                      {item.icon === "email" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-10 7L2 7" />
                        </svg>
                      )}
                      {item.icon === "hours" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-base text-[#2a1e12] mb-1 font-semibold">{item.title}</h3>
                      <p className="text-[#7a6652] text-sm whitespace-pre-line group-hover:text-[#c9a96e] transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links with Bounce Animation */}
              <div>
                <h3 className="text-base text-[#2a1e12] mb-4 font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#c9a96e]/20 hover:rotate-6"
                    style={{ animation: "bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both", animationDelay: "400ms" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#c9a96e]/20 hover:rotate-6"
                    style={{ animation: "bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both", animationDelay: "500ms" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <line x1="18" y1="6" x2="18.01" y2="6" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#c9a96e]/20 hover:rotate-6"
                    style={{ animation: "bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both", animationDelay: "600ms" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#c9a96e]/20 hover:rotate-6"
                    style={{ animation: "bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both", animationDelay: "700ms" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
            
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side with Slide Animation */}
          <div
            data-animate="form"
            id="form"
            className={`transition-all duration-700 delay-500 ${animatedItems.includes("form") ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-20"
              }`}
          >
            <form onSubmit={handleSubmit} className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-[#c9a96e]/20 shadow-lg hover:shadow-xl transition-all duration-500">
              <h2 className="text-3xl text-[#2a1e12] mb-6 font-serif relative inline-block">
                Send us a Message
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#c9a96e] rounded-full animate-width-grow" />
              </h2>

              {/* Form Fields with Focus Animations */}
              <div className="space-y-6">
                {/* Name Field - Only letters and spaces allowed */}
                <div className="group">
                  <label className="block mb-2 text-[#2a1e12] text-sm font-medium font-sans transition-all duration-300 group-focus-within:text-[#c9a96e]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Enter your full name"
                    maxLength={50}
                    className={`w-full px-4 py-3 rounded-xl border-[1.5px] bg-white text-sm font-sans transition-all duration-300 outline-none focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)] focus:scale-[1.01] ${errors.name
                        ? "border-red-500 focus:border-red-500 animate-shake"
                        : "border-[#c9a96e]/30 focus:border-[#c9a96e]"
                      }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 font-sans animate-fade-in">{errors.name}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400 font-sans">Only letters, spaces, dots, apostrophes, and hyphens allowed</p>
                </div>

                {/* Email Field - Restricted characters */}
                <div className="group">
                  <label className="block mb-2 text-[#2a1e12] text-sm font-medium font-sans transition-all duration-300 group-focus-within:text-[#c9a96e]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl border-[1.5px] bg-white text-sm font-sans transition-all duration-300 outline-none focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)] focus:scale-[1.01] ${errors.email
                        ? "border-red-500 focus:border-red-500 animate-shake"
                        : "border-[#c9a96e]/30 focus:border-[#c9a96e]"
                      }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 font-sans animate-fade-in">{errors.email}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400 font-sans">Example: name@company.com</p>
                </div>

                {/* Phone Field - Only numbers, max 10 digits */}
                <div className="group">
                  <label className="block mb-2 text-[#2a1e12] text-sm font-medium font-sans transition-all duration-300 group-focus-within:text-[#c9a96e]">
                    Phone Number <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="9876543210"
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    className={`w-full px-4 py-3 rounded-xl border-[1.5px] bg-white text-sm font-sans transition-all duration-300 outline-none focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)] focus:scale-[1.01] ${errors.phone
                        ? "border-red-500 focus:border-red-500 animate-shake"
                        : "border-[#c9a96e]/30 focus:border-[#c9a96e]"
                      }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 font-sans animate-fade-in">{errors.phone}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400 font-sans">10-digit mobile number (numbers only)</p>
                </div>

                {/* Service Field */}
                <div className="group">
                  <label className="block mb-2 text-[#2a1e12] text-sm font-medium font-sans transition-all duration-300 group-focus-within:text-[#c9a96e]">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-[1.5px] bg-white text-sm font-sans transition-all duration-300 outline-none focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)] focus:scale-[1.01] cursor-pointer ${errors.service
                        ? "border-red-500 focus:border-red-500 animate-shake"
                        : "border-[#c9a96e]/30 focus:border-[#c9a96e]"
                      }`}
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-500 font-sans animate-fade-in">{errors.service}</p>
                  )}
                </div>

                {/* Budget Field */}
                <div className="group">
                  <label className="block mb-2 text-[#2a1e12] text-sm font-medium font-sans transition-all duration-300 group-focus-within:text-[#c9a96e]">
                    Budget Range <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-[#c9a96e]/30 bg-white text-sm font-sans transition-all duration-300 outline-none focus:border-[#c9a96e] focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)] focus:scale-[1.01] cursor-pointer"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block mb-2 text-[#2a1e12] text-sm font-medium font-sans transition-all duration-300 group-focus-within:text-[#c9a96e]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={1000}
                    placeholder="Tell us about your project, goals, or any questions you have..."
                    className={`w-full px-4 py-3 rounded-xl border-[1.5px] bg-white text-sm font-sans transition-all duration-300 outline-none resize-vertical focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)] focus:scale-[1.01] ${errors.message
                        ? "border-red-500 focus:border-red-500 animate-shake"
                        : "border-[#c9a96e]/30 focus:border-[#c9a96e]"
                      }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 font-sans animate-fade-in">{errors.message}</p>
                  )}
                  {!errors.message && formData.message && (
                    <p className="mt-1 text-xs text-gray-400 font-sans text-right animate-fade-in">
                      {formData.message.length}/1000 characters
                    </p>
                  )}
                </div>

                {/* Submit Button with Hover Animation */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#c9a96e] to-[#a0784e] text-white border-none text-base font-semibold font-sans cursor-pointer transition-all duration-300 shadow-md shadow-[#c9a96e]/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c9a96e]/40 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message →"}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#b8965a] to-[#8b6b42] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </button>

                {submitStatus === "success" && (
                  <div className="mt-4 p-3 rounded-xl bg-emerald-100 text-emerald-800 text-center text-sm font-sans animate-bounce-in">
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Map Section with Rotate Animation */}
        <div
          data-animate="map"
          id="map"
          className={`transition-all duration-700 delay-600 ${animatedItems.includes("map") ? "animate-rotate-in opacity-100" : "opacity-0 scale-75 rotate-6"
            }`}
        >
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-[#c9a96e]/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <h2 className="text-2xl text-[#2a1e12] mb-6 font-serif text-center relative">
              Find Us Here
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#c9a96e] rounded-full animate-width-grow-center" />
            </h2>
            <div className="rounded-2xl overflow-hidden h-[450px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5568604869986!2d78.39158967462899!3d17.48091150010526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc3f9ee6211d7041%3A0x57e8ab2675c2f578!2sPIXELMINDSOLUTIONS%20PVT.LTD%20-%20Software%20Company%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1778044888383!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pixelmind Solutions Office Location"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Keyframe Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes flipIn {
          from { opacity: 0; transform: rotateY(90deg); }
          to { opacity: 1; transform: rotateY(0); }
        }
        
        @keyframes rotateIn {
          from { opacity: 0; transform: scale(0.75) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0); }
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-10px); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        
        @keyframes widthGrow {
          from { width: 0; }
          to { width: 3rem; }
        }
        
        @keyframes widthGrowCenter {
          from { width: 0; }
          to { width: 3rem; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Animation Classes */
        .animate-fade-up {
          animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        .animate-fade-down {
          animation: fadeDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        .animate-slide-in-right {
          animation: slideRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        .animate-slide-in-left {
          animation: slideLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        .animate-zoom-in {
          animation: zoomIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        .animate-flip-in {
          animation: flipIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          perspective: 1000px;
        }
        
        .animate-rotate-in {
          animation: rotateIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }
        
        .animate-shake {
          animation: shake 0.4s ease-in-out both;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out both;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .animate-width-grow {
          animation: widthGrow 0.6s ease-out 0.5s both;
        }
        
        .animate-width-grow-center {
          animation: widthGrowCenter 0.6s ease-out 0.5s both;
        }
        
        .animate-slow-spin {
          animation: spin 60s linear infinite;
        }
        
        .animate-slide {
          animation: slide 10s linear infinite;
        }
        
        /* Utility Classes */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .resize-vertical {
          resize: vertical;
        }
      `}</style>
    </div>
  );
};

export default Contact;