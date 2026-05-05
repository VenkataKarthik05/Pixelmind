// Pages/Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
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
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      fontFamily: "'Georgia', serif",
      paddingTop: "100px",
      position: "relative"
    }}>
      {/* Background gradient */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        background: "linear-gradient(135deg, #faf7f2 0%, #f5ede0 100%)",
        pointerEvents: "none"
      }}/>

      {/* Animated blobs */}
      <div style={{
        position: "fixed",
        top: "10%",
        right: "-5%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,169,110,0.15) 0%, rgba(201,169,110,0) 70%)",
        pointerEvents: "none",
        zIndex: 0
      }}/>
      
      <div style={{
        position: "fixed",
        bottom: "10%",
        left: "-5%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,169,110,0.1) 0%, rgba(201,169,110,0) 70%)",
        pointerEvents: "none",
        zIndex: 0
      }}/>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
        position: "relative",
        zIndex: 1
      }}>
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
            padding: "0.4rem 1.2rem",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(201,169,110,0.35)",
            backdropFilter: "blur(8px)"
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#c9a96e"
            }}/>
            <span style={{
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#a0784e",
              fontFamily: "system-ui, sans-serif"
            }}>Get in Touch</span>
          </div>

          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 700,
            color: "#2a1e12",
            marginBottom: "1rem",
            animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both"
          }}>
            Let's Start a{" "}
            <span style={{
              background: "linear-gradient(120deg, #c9a96e, #e8c97e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Conversation
            </span>
          </h1>

          <p style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "1.1rem",
            color: "#7a6652",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
            animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both"
          }}>
            Ready to take your digital presence to the next level? 
            We'd love to hear about your goals and challenges.
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "3rem",
          marginBottom: "4rem"
        }}>
          {/* Contact Info Side */}
          <div style={{
            animation: "slideRight 0.7s cubic-bezier(0.22,1,0.36,1) both"
          }}>
            <div style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              borderRadius: "2rem",
              padding: "2rem",
              border: "1px solid rgba(201,169,110,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.05)"
            }}>
              <h2 style={{
                fontSize: "1.8rem",
                color: "#2a1e12",
                marginBottom: "1.5rem",
                fontFamily: "'Georgia', serif"
              }}>
                Contact Information
              </h2>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #c9a96e20, #a0784e20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", color: "#2a1e12", marginBottom: "0.25rem" }}>Visit Us</h3>
                    <p style={{ color: "#7a6652", fontSize: "0.9rem" }}>
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #c9a96e20, #a0784e20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", color: "#2a1e12", marginBottom: "0.25rem" }}>Call Us</h3>
                    <p style={{ color: "#7a6652", fontSize: "0.9rem" }}>
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #c9a96e20, #a0784e20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-10 7L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", color: "#2a1e12", marginBottom: "0.25rem" }}>Email Us</h3>
                    <p style={{ color: "#7a6652", fontSize: "0.9rem" }}>
                      hello@pixelmind.com
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #c9a96e20, #a0784e20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", color: "#2a1e12", marginBottom: "0.25rem" }}>Business Hours</h3>
                    <p style={{ color: "#7a6652", fontSize: "0.9rem" }}>
                      Mon - Fri: 9:00 AM - 7:00 PM<br/>
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links - Just Icons, update links later */}
              <div>
                <h3 style={{ fontSize: "1rem", color: "#2a1e12", marginBottom: "1rem" }}>Follow Us</h3>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {/* LinkedIn */}
                  <a
                    href="#"  // Update this link later
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: "rgba(201,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.background = "rgba(201,169,110,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "rgba(201,169,110,0.1)";
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"  // Update this link later
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: "rgba(201,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.background = "rgba(201,169,110,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "rgba(201,169,110,0.1)";
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <line x1="18" y1="6" x2="18.01" y2="6"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"  // Update this link later
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: "rgba(201,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.background = "rgba(201,169,110,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "rgba(201,169,110,0.1)";
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>

                  {/* Twitter/X */}
                  <a
                    href="#"  // Update this link later
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: "rgba(201,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.background = "rgba(201,169,110,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "rgba(201,169,110,0.1)";
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.8">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div style={{
            animation: "slideLeft 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both"
          }}>
            <form onSubmit={handleSubmit} style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              borderRadius: "2rem",
              padding: "2rem",
              border: "1px solid rgba(201,169,110,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.05)"
            }}>
              <h2 style={{
                fontSize: "1.8rem",
                color: "#2a1e12",
                marginBottom: "1.5rem",
                fontFamily: "'Georgia', serif"
              }}>
                Send us a Message
              </h2>

              {/* Form Fields */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#2a1e12",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  fontFamily: "system-ui, sans-serif"
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(201,169,110,0.2)",
                    background: "white",
                    fontSize: "0.95rem",
                    fontFamily: "system-ui, sans-serif",
                    transition: "all 0.3s ease",
                    outline: "none"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a96e";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#2a1e12",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  fontFamily: "system-ui, sans-serif"
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(201,169,110,0.2)",
                    background: "white",
                    fontSize: "0.95rem",
                    fontFamily: "system-ui, sans-serif",
                    transition: "all 0.3s ease",
                    outline: "none"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a96e";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#2a1e12",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  fontFamily: "system-ui, sans-serif"
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(201,169,110,0.2)",
                    background: "white",
                    fontSize: "0.95rem",
                    fontFamily: "system-ui, sans-serif",
                    transition: "all 0.3s ease",
                    outline: "none"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a96e";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#2a1e12",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  fontFamily: "system-ui, sans-serif"
                }}>
                  Service Interested In *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(201,169,110,0.2)",
                    background: "white",
                    fontSize: "0.95rem",
                    fontFamily: "system-ui, sans-serif",
                    transition: "all 0.3s ease",
                    outline: "none",
                    cursor: "pointer"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a96e";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#2a1e12",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  fontFamily: "system-ui, sans-serif"
                }}>
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(201,169,110,0.2)",
                    background: "white",
                    fontSize: "0.95rem",
                    fontFamily: "system-ui, sans-serif",
                    transition: "all 0.3s ease",
                    outline: "none",
                    cursor: "pointer"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a96e";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <option value="">Select budget range</option>
                  {budgets.map(budget => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#2a1e12",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  fontFamily: "system-ui, sans-serif"
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    borderRadius: "12px",
                    border: "1.5px solid rgba(201,169,110,0.2)",
                    background: "white",
                    fontSize: "0.95rem",
                    fontFamily: "system-ui, sans-serif",
                    transition: "all 0.3s ease",
                    outline: "none",
                    resize: "vertical"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a96e";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="Tell us about your project and goals..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #c9a96e, #a0784e)",
                  color: "white",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontFamily: "system-ui, sans-serif",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(201,169,110,0.3)",
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,169,110,0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(201,169,110,0.3)";
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>

              {/* Success/Error Message */}
              {submitStatus === "success" && (
                <div style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  borderRadius: "12px",
                  background: "#d1fae5",
                  color: "#065f46",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  fontFamily: "system-ui, sans-serif"
                }}>
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(16px)",
          borderRadius: "2rem",
          padding: "2rem",
          border: "1px solid rgba(201,169,110,0.2)",
          marginTop: "2rem",
          animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both"
        }}>
          <h2 style={{
            fontSize: "1.5rem",
            color: "#2a1e12",
            marginBottom: "1.5rem",
            fontFamily: "'Georgia', serif",
            textAlign: "center"
          }}>
            Find Us Here
          </h2>
          <div style={{
            borderRadius: "1rem",
            overflow: "hidden",
            height: "300px",
            background: "#e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7a6652"
          }}>
            {/* Google Maps Embed - Replace with your actual location */}
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.830774981249!2d78.4861785148772!3d17.412413088052485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d8eb2ba3d5%3A0x5c8c2b9b6b8e4b6!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;