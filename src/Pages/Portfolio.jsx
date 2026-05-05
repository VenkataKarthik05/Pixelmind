import { useState, useEffect, useRef } from "react";

const STYLES = `
@keyframes fadeUp   { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeDown { from { opacity:0; transform:translateY(-30px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
@keyframes scaleIn  { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
@keyframes slideLeft{ from { opacity:0; transform:translateX(60px); } to { opacity:1; transform:translateX(0); } }
@keyframes slideRight{from { opacity:0; transform:translateX(-60px); } to { opacity:1; transform:translateX(0); } }
@keyframes waveMove { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
@keyframes blobPulse{ 0%,100%{transform:scale(1) translate(0,0)} 33%{transform:scale(1.08) translate(2%,2%)} 66%{transform:scale(0.95) translate(-1%,1%)} }
@keyframes shimmer  { 0%{background-position:200% center} 100%{background-position:-200% center} }
@keyframes glowPulse{ 0%,100%{box-shadow:0 0 0 0 rgba(201,169,110,0)} 50%{box-shadow:0 0 24px 4px rgba(201,169,110,0.18)} }

.anim-fadeUp   { animation: fadeUp   0.7s cubic-bezier(0.22,1,0.36,1) both; }
.anim-fadeDown { animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) both; }
.anim-fadeIn   { animation: fadeIn   0.8s ease both; }
.anim-scaleIn  { animation: scaleIn  0.6s cubic-bezier(0.34,1.56,0.64,1) both; }

.gold-shimmer {
  background: linear-gradient(120deg, #c9a96e 0%, #e8c97e 40%, #c9a96e 60%, #a0784e 100%);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s linear infinite;
}

.wave-svg-anim { animation: waveMove 18s linear infinite; }
.blob-anim     { animation: blobPulse 10s ease-in-out infinite; }
.blob-anim2    { animation: blobPulse 14s ease-in-out infinite reverse; }
.blob-anim3    { animation: blobPulse 11s ease-in-out 3s infinite; }

.card-hover {
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.3s ease,
              border-color 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-10px) scale(1.02) !important;
  box-shadow: 0 8px 16px rgba(160,120,78,0.12), 0 32px 64px rgba(160,120,78,0.16) !important;
  border-color: rgba(201,169,110,0.5) !important;
}
.card-hover:hover .card-icon-wrap {
  transform: scale(1.15) rotate(-5deg);
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
.card-icon-wrap { transition: transform 0.3s ease; }

.stat-card:hover {
  transform: translateY(-5px) scale(1.03) !important;
  box-shadow: 0 0 0 2px rgba(201,169,110,0.3), 0 16px 40px rgba(160,120,78,0.12) !important;
}
.stat-card { transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1); }

.filter-btn { transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1); }
.filter-btn:hover { transform: scale(1.06); }
.filter-btn:active { transform: scale(0.96); }

.nav-link { position: relative; transition: color 0.2s; }
.nav-link::after { content:''; position:absolute; left:0; bottom:-2px; width:0; height:1.5px; background:#c9a96e; transition: width 0.3s ease; }
.nav-link:hover::after { width:100%; }
.nav-link:hover { color:#c9a96e !important; }

.tag-chip:hover { background:rgba(201,169,110,0.18) !important; border-color:rgba(201,169,110,0.5) !important; color:#8a6840 !important; transform:scale(1.05); }
.tag-chip { transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1); cursor:default; }

.cta-btn { transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); position:relative; overflow:hidden; }
.cta-btn:hover { transform:scale(1.06) !important; box-shadow:0 8px 32px rgba(201,169,110,0.5) !important; }
.cta-btn:active { transform:scale(0.98) !important; }

.stripe-anim { transition: width 0.5s cubic-bezier(0.22,1,0.36,1); width:0; }
.card-hover:hover .stripe-anim { width:100% !important; }

.result-num { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), color 0.3s; }
.card-hover:hover .result-num { transform: scale(1.08); }

.view-arrow { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s; opacity:0; transform:translateX(-8px); }
.card-hover:hover .view-arrow { opacity:1 !important; transform:translateX(0) !important; }

.logo-btn { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
.logo-btn:hover { transform: rotate(-8deg) scale(1.1); }

/* Card enter animation triggered by .card-visible class */
.project-card {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
}
.project-card.card-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .anim-fadeDown {
    padding: 1rem 1.25rem !important;
  }
  
  .card-icon-wrap {
    width: 38px !important;
    height: 38px !important;
  }
  
  .result-num {
    font-size: 1.4rem !important;
  }
  
  .view-arrow span {
    font-size: 0.65rem !important;
  }
  
  .cta-btn {
    padding: 0.4rem 1rem !important;
    font-size: 0.75rem !important;
  }
}

@media (max-width: 640px) {
  .nav-link {
    font-size: 0.7rem !important;
  }
  
  .tag-chip {
    font-size: 0.6rem !important;
    padding: 2px 6px !important;
  }
}

@media (max-width: 480px) {
  .stat-card {
    padding: 1rem 0.75rem !important;
  }
  
  .stat-card div:first-child {
    font-size: 1.3rem !important;
  }
  
  .filter-btn {
    padding: 0.35rem 1rem !important;
    font-size: 0.7rem !important;
  }
}
`;

const projects = [
  { id:1, category:"SEO", title:"OrganicLeap", subtitle:"SaaS Brand",
    description:"Drove 340% organic traffic growth in 6 months through technical SEO, content clusters, and authoritative link-building.",
    tags:["Technical SEO","Content Strategy","Link Building"], result:"+340%", resultLabel:"Traffic Growth",
    color:"#059669", bg:"#ecfdf5",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> },

  { id:2, category:"SEO", title:"FreshBite", subtitle:"Food Delivery",
    description:"Dominated local pack rankings across 12 cities and boosted organic orders by 280% in under one year.",
    tags:["Local SEO","GMB","Schema Markup"], result:"+280%", resultLabel:"Organic Orders",
    color:"#16a34a", bg:"#f0fdf4",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg> },

  { id:3, category:"SEO", title:"EduGuru", subtitle:"EdTech Platform",
    description:"Increased keyword rankings for 500+ high-intent terms, resulting in 215% growth in course enrollments.",
    tags:["Keyword Research","On-Page SEO","Content Marketing"], result:"+215%", resultLabel:"Enrollment Growth",
    color:"#0284c7", bg:"#f0f9ff",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },

  { id:4, category:"SEO", title:"TravelTribe", subtitle:"Travel Blog",
    description:"Scaled from 5K to 250K monthly visitors by implementing pillar-cluster strategy and programmatic SEO.",
    tags:["Pillar Pages","Programmatic SEO","Affiliate"], result:"+4900%", resultLabel:"Traffic Growth",
    color:"#ea580c", bg:"#fff7ed",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20z"/><path d="M2 12h20"/></svg> },

  { id:5, category:"Google Ads", title:"MediCare Plus", subtitle:"Healthcare",
    description:"Reduced cost-per-lead by 52% while tripling qualified patient inquiries through smart bidding and audience segmentation.",
    tags:["Smart Bidding","Conversion Tracking","Audience"], result:"–52%", resultLabel:"Cost Per Lead",
    color:"#4f46e5", bg:"#eef2ff",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },

  { id:6, category:"Google Ads", title:"AutoElite", subtitle:"Automotive Dealership",
    description:"Achieved 8.3× ROAS with optimized Performance Max campaigns and strategic keyword pruning across 50+ vehicle models.",
    tags:["PMax","Keyword Optimization","ROAS"], result:"8.3×", resultLabel:"Return on Ad Spend",
    color:"#2563eb", bg:"#eff6ff",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M8 6V4h8v2"/><circle cx="18" cy="18" r="2"/><circle cx="6" cy="18" r="2"/></svg> },

  { id:7, category:"Google Ads", title:"LuxuryStays", subtitle:"Hotel Chain",
    description:"Scaled direct bookings by 189% through RSA testing, audience layering, and seasonal bid adjustments.",
    tags:["RSAs","Audience Targeting","Seasonal Bidding"], result:"+189%", resultLabel:"Direct Bookings",
    color:"#7c3aed", bg:"#f5f3ff",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },

  { id:8, category:"Social Media", title:"Urban Threads", subtitle:"Fashion Retail",
    description:"Built a 120K community and scaled revenue 4× in 8 months through data-driven influencer campaigns and reels strategy.",
    tags:["Instagram","Influencer","Reels Strategy"], result:"4×", resultLabel:"Revenue Scale",
    color:"#db2777", bg:"#fdf2f8",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },

  { id:9, category:"Social Media", title:"FitLife", subtitle:"Fitness Brand",
    description:"Grew TikTok following 0 to 450K in 5 months with viral content strategy, generating 2.5M monthly impressions.",
    tags:["TikTok","Viral Marketing","Influencer"], result:"450K", resultLabel:"TikTok Followers",
    color:"#e11d48", bg:"#fff1f2",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },

  { id:10, category:"Social Media", title:"HomeChef", subtitle:"Meal Kit Service",
    description:"Generated 45K+ user-generated content pieces through strategic hashtag campaign and community engagement.",
    tags:["UGC","Community","Hashtag Campaign"], result:"45K+", resultLabel:"UGC Pieces",
    color:"#d97706", bg:"#fffbeb",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="3"/></svg> },

  { id:11, category:"PPC", title:"TechNova", subtitle:"Electronics",
    description:"Achieved 9.2× ROAS on Google Shopping and Performance Max campaigns during the peak holiday sale season.",
    tags:["Shopping Ads","Performance Max","ROAS"], result:"9.2×", resultLabel:"Return on Ad Spend",
    color:"#d97706", bg:"#fffbeb",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },

  { id:12, category:"PPC", title:"BookHub", subtitle:"Online Bookstore",
    description:"Reduced CPA by 64% while doubling ROAS through audience segmentation and dynamic remarketing campaigns.",
    tags:["Remarketing","Audience Segmentation","CPA"], result:"–64%", resultLabel:"Cost Per Acquisition",
    color:"#0891b2", bg:"#ecfeff",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> },

  { id:13, category:"PPC", title:"HomeStyle", subtitle:"Home Decor",
    description:"Scaled revenue 3.5× during BFCM using smart bidding, custom audiences, and cross-channel attribution modeling.",
    tags:["Smart Bidding","BFCM","Attribution"], result:"3.5×", resultLabel:"Revenue Growth",
    color:"#4338ca", bg:"#eef2ff",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },

  { id:14, category:"Lead Gen", title:"BuildRight", subtitle:"Real Estate",
    description:"Generated 1,200+ qualified property leads per month through hyper-local Facebook and Google campaigns.",
    tags:["Facebook Ads","Lead Forms","Hyper-local"], result:"1,200+", resultLabel:"Leads / Month",
    color:"#7c3aed", bg:"#f5f3ff",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },

  { id:15, category:"Lead Gen", title:"SecureSafe", subtitle:"Insurance",
    description:"Drove 3,500+ qualified insurance quotes monthly through multi-channel lead gen and automated nurture sequences.",
    tags:["Multi-channel","Lead Nurturing","Quotes"], result:"3,500+", resultLabel:"Monthly Quotes",
    color:"#0d9488", bg:"#f0fdfa",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },

  { id:16, category:"Lead Gen", title:"CareerPath", subtitle:"Job Portal",
    description:"Generated 50K+ verified job seeker registrations through LinkedIn lead gen forms and email marketing campaigns.",
    tags:["LinkedIn Ads","Lead Forms","Email Marketing"], result:"50K+", resultLabel:"Registrations",
    color:"#0284c7", bg:"#f0f9ff",
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
];

const categories = ["All","SEO","Google Ads","Social Media","PPC","Lead Gen"];

const stats = [
  { value:"150+", label:"Projects Delivered" },
  { value:"98%",  label:"Client Retention"   },
  { value:"12×",  label:"Average ROI"        },
  { value:"6 yrs",label:"In The Industry"    },
];

function WavyBg() {
  return (
    <div style={{position:"fixed",inset:0,zIndex:0,overflow:"hidden",pointerEvents:"none"}}>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(160deg,#faf7f2 0%,#f5ede0 40%,#faf7f2 70%,#eef0f7 100%)"}}/>
      <div className="blob-anim" style={{position:"absolute",top:"-10%",right:"-5%",width:"55vw",height:"55vw",borderRadius:"50%",background:"radial-gradient(circle,rgba(251,232,200,0.55) 0%,rgba(251,232,200,0) 70%)"}}/>
      <div className="blob-anim2" style={{position:"absolute",bottom:"5%",left:"-8%",width:"50vw",height:"50vw",borderRadius:"50%",background:"radial-gradient(circle,rgba(214,218,248,0.4) 0%,rgba(214,218,248,0) 70%)"}}/>
      <div className="blob-anim3" style={{position:"absolute",top:"40%",left:"30%",width:"40vw",height:"40vw",borderRadius:"50%",background:"radial-gradient(circle,rgba(209,238,231,0.35) 0%,rgba(209,238,231,0) 70%)"}}/>
      <div style={{position:"absolute",top:0,left:0,width:"200%",height:"100vh",overflow:"hidden"}}>
        <svg className="wave-svg-anim" style={{width:"100%",height:"100%"}} viewBox="0 0 2880 900" preserveAspectRatio="none">
          <path d="M-100,200 C200,120 400,280 700,200 C1000,120 1200,260 1540,180 C1840,100 2040,260 2340,180 C2640,100 2740,220 2980,180" fill="none" stroke="#c9a96e" strokeWidth="1" strokeOpacity="0.22"/>
          <path d="M-100,310 C150,220 350,390 650,290 C950,190 1150,370 1540,280 C1840,190 2040,370 2340,280 C2640,190 2780,340 2980,280" fill="none" stroke="#c9a96e" strokeWidth="0.7" strokeOpacity="0.15"/>
          <path d="M-100,440 C250,360 500,520 800,420 C1100,320 1280,480 1540,400 C1840,320 2040,480 2340,400 C2640,320 2780,460 2980,400" fill="none" stroke="#d4a0b0" strokeWidth="1" strokeOpacity="0.18"/>
          <path d="M-100,560 C200,480 480,640 750,540 C1020,440 1200,600 1540,520 C1840,440 2040,600 2340,520 C2640,440 2780,580 2980,520" fill="none" stroke="#8b8fcc" strokeWidth="0.8" strokeOpacity="0.17"/>
          <path d="M-100,680 C300,600 550,760 850,660 C1150,560 1300,720 1540,640 C1840,560 2040,720 2340,640 C2640,560 2780,700 2980,640" fill="none" stroke="#5ba89a" strokeWidth="1" strokeOpacity="0.15"/>
          <path d="M-100,800 C250,720 480,880 780,780 C1080,680 1280,840 1540,760 C1840,680 2040,840 2340,760 C2640,680 2780,820 2980,760" fill="none" stroke="#c9a96e" strokeWidth="0.7" strokeOpacity="0.12"/>
        </svg>
      </div>
      <div style={{position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.4) 30%,rgba(201,169,110,0.6) 50%,rgba(201,169,110,0.4) 70%,transparent)"}}/>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  // Key increments every time active changes — forces full remount of grid so cards re-animate
  const [gridKey, setGridKey] = useState(0);
  const cardRefs = useRef({});

  const filtered = active === "All"
    ? projects
    : projects.filter(p => p.category === active);

  // Change category: bump key so grid remounts cleanly
  function handleFilter(cat) {
    setActive(cat);
    setGridKey(k => k + 1);
    cardRefs.current = {};
  }

  // Scroll-reveal: runs fresh whenever gridKey changes (i.e. after every filter switch)
  useEffect(() => {
    const els = Object.values(cardRefs.current).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("card-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    // Small delay so DOM settles after remount
    const t = setTimeout(() => {
      Object.values(cardRefs.current).filter(Boolean).forEach(el => obs.observe(el));
    }, 50);

    return () => { obs.disconnect(); clearTimeout(t); };
  }, [gridKey]);

  return (
    <>
      <style>{STYLES}</style>

      <div style={{minHeight:"100vh",fontFamily:"'Georgia',serif"}}>
        <WavyBg />

        {/* ── HEADER ── */}
        <header className="anim-fadeDown" style={{animationDelay:"0.1s",position:"relative",zIndex:20,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1.75rem 2.5rem",maxWidth:"80rem",margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
            <div className="logo-btn" style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#c9a96e,#a0784e)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
              <span style={{color:"white",fontWeight:700,fontSize:"0.7rem",fontFamily:"system-ui,sans-serif"}}>PM</span>
            </div>
            <span style={{fontWeight:600,fontSize:"0.9rem",color:"#3d2e1e",fontFamily:"system-ui,sans-serif",letterSpacing:"0.01em"}}>PixelMind Solutions</span>
          </div>
          <nav style={{display:"flex",alignItems:"center",gap:"2rem"}}>
            {["Services","Portfolio","About","Contact"].map(n => (
              <a key={n} href="#" className="nav-link" style={{fontSize:"0.82rem",color: n==="Portfolio" ? "#c9a96e" : "#7a6652",fontFamily:"system-ui,sans-serif",textDecoration:"none",fontWeight: n==="Portfolio"? 600:400}}>
                {n}
              </a>
            ))}
          </nav>
          <button className="cta-btn" style={{fontSize:"0.8rem",fontFamily:"system-ui,sans-serif",fontWeight:600,padding:"0.5rem 1.4rem",borderRadius:9999,background:"linear-gradient(135deg,#c9a96e,#a0784e)",color:"white",border:"none",cursor:"pointer",boxShadow:"0 4px 16px rgba(201,169,110,0.3)"}}>
            Get Started
          </button>
        </header>

        {/* ── HERO ── */}
        <section style={{position:"relative",zIndex:10,padding:"4rem 1.5rem 2rem",textAlign:"center",maxWidth:"60rem",margin:"0 auto"}}>
          <div className="anim-fadeUp" style={{animationDelay:"0.25s",display:"inline-flex",alignItems:"center",gap:"0.5rem",marginBottom:"1.8rem",padding:"0.4rem 1.2rem",borderRadius:9999,background:"rgba(255,255,255,0.7)",border:"1px solid rgba(201,169,110,0.35)",backdropFilter:"blur(8px)"}}>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#c9a96e",animation:"glowPulse 2s infinite"}}/>
            <span style={{fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#a0784e",fontFamily:"system-ui,sans-serif"}}>Our Work</span>
          </div>

          <h1 className="anim-fadeUp" style={{animationDelay:"0.4s",fontFamily:"'Georgia',serif",fontSize:"clamp(2.8rem,7vw,5.5rem)",fontWeight:700,lineHeight:1.08,color:"#2a1e12",letterSpacing:"-0.02em",marginBottom:"1.5rem"}}>
            Campaigns that
            <span className="gold-shimmer" style={{display:"block"}}>move the needle.</span>
          </h1>

          <p className="anim-fadeUp" style={{animationDelay:"0.55s",fontFamily:"system-ui,sans-serif",fontSize:"1.1rem",color:"#7a6652",maxWidth:480,margin:"0 auto 2.5rem",lineHeight:1.8}}>
            Every project starts with a bold idea and ends with numbers that matter. Here's what we've built.
          </p>

          <div className="anim-fadeIn" style={{animationDelay:"0.7s",display:"flex",justifyContent:"center",marginBottom:"0.5rem"}}>
            <svg width="180" height="20" viewBox="0 0 180 20" fill="none">
              <path d="M0,10 C22,3 45,17 67,10 C89,3 112,17 134,10 C156,3 168,15 180,10" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M20,14 C42,7 65,21 87,14 C109,7 132,21 154,14" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round" opacity="0.35"/>
            </svg>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{position:"relative",zIndex:10,padding:"0 1.5rem",marginBottom:"5rem"}}>
          <div style={{maxWidth:"52rem",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"1rem"}}>
            {stats.map((s,i) => (
              <div key={s.label} className="stat-card anim-scaleIn"
                style={{animationDelay:`${0.7+i*0.1}s`,position:"relative",overflow:"hidden",borderRadius:"1.25rem",textAlign:"center",background:"rgba(255,255,255,0.65)",backdropFilter:"blur(14px)",border:"1px solid rgba(201,169,110,0.2)",padding:"1.6rem 1rem",boxShadow:"0 1px 3px rgba(160,120,78,0.07),0 8px 24px rgba(160,120,78,0.06)",cursor:"default"}}>
                <div style={{position:"absolute",top:0,right:0,width:48,height:48,background:"linear-gradient(225deg,rgba(201,169,110,0.18),transparent)",borderBottomLeftRadius:16,pointerEvents:"none"}}/>
                <div style={{fontSize:"1.75rem",fontFamily:"'Georgia',serif",fontWeight:700,color:"#2a1e12",marginBottom:"0.3rem"}}>{s.value}</div>
                <div style={{fontSize:"0.65rem",color:"#9a8270",fontFamily:"system-ui,sans-serif",fontWeight:500,letterSpacing:"0.07em",textTransform:"uppercase"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FILTER TABS ── */}
        <section className="anim-fadeUp" style={{animationDelay:"1s",position:"relative",zIndex:10,padding:"0 1.5rem",marginBottom:"1.2rem"}}>
          <div style={{maxWidth:"56rem",margin:"0 auto",display:"flex",flexWrap:"wrap",gap:"0.6rem",justifyContent:"center"}}>
            {categories.map(cat => (
              <button key={cat} onClick={() => handleFilter(cat)} className="filter-btn"
                style={{fontFamily:"system-ui,sans-serif",fontSize:"0.78rem",fontWeight:600,padding:"0.45rem 1.3rem",borderRadius:9999,cursor:"pointer",
                  border: active===cat ? "1.5px solid #c9a96e" : "1.5px solid rgba(201,169,110,0.25)",
                  background: active===cat ? "linear-gradient(135deg,#c9a96e,#a0784e)" : "rgba(255,255,255,0.62)",
                  color: active===cat ? "white" : "#7a6652",
                  backdropFilter:"blur(8px)",letterSpacing:"0.02em",
                  boxShadow: active===cat ? "0 4px 16px rgba(201,169,110,0.28)" : "none",
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Result count line */}
          <div style={{textAlign:"center",marginTop:"1rem"}}>
            <span style={{fontSize:"0.72rem",fontFamily:"system-ui,sans-serif",color:"#9a8270",letterSpacing:"0.04em"}}>
              Showing <strong style={{color:"#c9a96e"}}>{filtered.length}</strong> case {filtered.length === 1 ? "study" : "studies"}
              {active !== "All" && <span> in <strong style={{color:"#7a6652"}}>{active}</strong></span>}
            </span>
          </div>
        </section>

        {/* ── PROJECT GRID ── */}
        <section style={{position:"relative",zIndex:10,padding:"1.5rem 1.5rem 6rem",maxWidth:"76rem",margin:"0 auto"}}>
          {/* key={gridKey} forces a full remount when category changes so cards re-animate */}
          <div key={gridKey} style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1.5rem"}}>
            {filtered.map((project, i) => (
              <div
                key={project.id}
                data-id={project.id}
                ref={el => { cardRefs.current[project.id] = el; }}
                className="project-card card-hover"
                style={{
                  transitionDelay: `${i * 0.07}s`,
                  position:"relative",borderRadius:"1.5rem",overflow:"hidden",
                  background:"rgba(255,255,255,0.72)",backdropFilter:"blur(16px)",
                  border:"1px solid rgba(255,255,255,0.9)",
                  boxShadow:"0 2px 4px rgba(160,120,78,0.06),0 12px 32px rgba(160,120,78,0.08)",
                  cursor:"pointer",
                }}
              >
                {/* Animated top stripe */}
                <div style={{height:3,background:`linear-gradient(90deg,${project.color}55,${project.color},${project.color}77)`,position:"relative"}}>
                  <div className="stripe-anim" style={{position:"absolute",top:0,left:0,height:"100%",background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)",pointerEvents:"none"}}/>
                </div>

                <div style={{padding:"1.6rem 1.6rem 1.4rem"}}>
                  {/* Icon + header */}
                  <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1.2rem"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                      <div className="card-icon-wrap" style={{width:44,height:44,borderRadius:13,background:project.bg,display:"flex",alignItems:"center",justifyContent:"center",color:project.color,flexShrink:0,boxShadow:`0 4px 12px ${project.color}22`}}>
                        {project.icon}
                      </div>
                      <div>
                        <div style={{fontSize:"1rem",fontFamily:"'Georgia',serif",fontWeight:700,color:"#2a1e12",lineHeight:1.2}}>{project.title}</div>
                        <div style={{fontSize:"0.65rem",fontFamily:"system-ui,sans-serif",color:"#9a8270",fontWeight:500,letterSpacing:"0.05em",textTransform:"uppercase"}}>{project.subtitle}</div>
                      </div>
                    </div>
                    <span style={{fontSize:"0.6rem",fontFamily:"system-ui,sans-serif",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",padding:"3px 10px",borderRadius:9999,background:project.bg,color:project.color,flexShrink:0}}>
                      {project.category}
                    </span>
                  </div>

                  <p style={{fontSize:"0.84rem",fontFamily:"system-ui,sans-serif",color:"#7a6652",lineHeight:1.75,marginBottom:"1.1rem"}}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{display:"flex",flexWrap:"wrap",gap:"0.4rem",marginBottom:"1.2rem"}}>
                    {project.tags.map(tag => (
                      <span key={tag} className="tag-chip" style={{fontSize:"0.68rem",fontFamily:"system-ui,sans-serif",fontWeight:500,color:"#9a8270",background:"rgba(245,237,225,0.8)",border:"1px solid rgba(201,169,110,0.2)",padding:"2px 9px",borderRadius:9999}}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{height:1,background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.25),transparent)",marginBottom:"1rem"}}/>

                  {/* Result row */}
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div>
                      <div className="result-num" style={{fontSize:"1.8rem",fontFamily:"'Georgia',serif",fontWeight:700,color:project.color,lineHeight:1}}>{project.result}</div>
                      <div style={{fontSize:"0.68rem",fontFamily:"system-ui,sans-serif",color:"#9a8270",fontWeight:500,marginTop:2}}>{project.resultLabel}</div>
                    </div>
                    <div className="view-arrow" style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
                      <span style={{fontSize:"0.72rem",fontFamily:"system-ui,sans-serif",fontWeight:600,color:project.color}}>View case</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{position:"relative",zIndex:10,padding:"0 1.5rem 7rem",maxWidth:"44rem",margin:"0 auto"}}>
          <div style={{position:"relative",overflow:"hidden",borderRadius:"2rem",textAlign:"center",background:"linear-gradient(135deg,#2a1e12 0%,#3d2e1e 50%,#2a1e12 100%)",padding:"4rem 3rem"}}>
            <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.15,pointerEvents:"none"}} viewBox="0 0 800 280" preserveAspectRatio="none">
              <path d="M-50,80 C150,30 350,130 550,80 C700,45 760,100 850,80" fill="none" stroke="#c9a96e" strokeWidth="1.5"/>
              <path d="M-50,130 C150,80 350,180 550,130 C700,95 760,150 850,130" fill="none" stroke="#c9a96e" strokeWidth="1"/>
              <path d="M-50,180 C150,130 350,230 550,180 C700,145 760,200 850,180" fill="none" stroke="#c9a96e" strokeWidth="0.7"/>
            </svg>
            <div style={{position:"absolute",top:0,right:0,width:200,height:200,background:"radial-gradient(circle,rgba(201,169,110,0.2) 0%,transparent 70%)",pointerEvents:"none"}}/>
            <div style={{position:"absolute",bottom:0,left:0,width:200,height:200,background:"radial-gradient(circle,rgba(201,169,110,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>

            <div style={{position:"relative",zIndex:1}}>
              <div style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",marginBottom:"1.5rem",padding:"0.35rem 1rem",borderRadius:9999,border:"1px solid rgba(201,169,110,0.35)",background:"rgba(201,169,110,0.08)"}}>
                <span style={{width:6,height:6,borderRadius:"50%",background:"#c9a96e"}}/>
                <span style={{fontSize:"0.65rem",fontFamily:"system-ui,sans-serif",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#c9a96e"}}>Let's work together</span>
              </div>
              <h2 style={{fontFamily:"'Georgia',serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:700,color:"#faf7f2",lineHeight:1.15,marginBottom:"1rem"}}>
                Ready to be our next
                <span className="gold-shimmer" style={{display:"block"}}>success story?</span>
              </h2>
              <p style={{fontFamily:"system-ui,sans-serif",fontSize:"1rem",color:"#a08c78",lineHeight:1.75,maxWidth:400,margin:"0 auto 2rem"}}>
                Our team is ready to build your next high-performance campaign from the ground up.
              </p>
              <button className="cta-btn" style={{fontFamily:"system-ui,sans-serif",fontSize:"0.9rem",fontWeight:700,padding:"0.85rem 2.4rem",borderRadius:9999,background:"linear-gradient(135deg,#c9a96e,#a0784e)",color:"white",border:"none",cursor:"pointer",letterSpacing:"0.02em",boxShadow:"0 4px 20px rgba(201,169,110,0.4)"}}>
                Start your project →
              </button>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{position:"relative",zIndex:10,textAlign:"center",paddingBottom:"2.5rem",borderTop:"1px solid rgba(201,169,110,0.15)"}}>
          <p style={{fontFamily:"system-ui,sans-serif",fontSize:"0.72rem",color:"#9a8270",marginTop:"1.5rem",letterSpacing:"0.04em"}}>
            © 2025 PixelMind Solutions · Hyderabad, India
          </p>
        </footer>
      </div>
    </>
  );
}