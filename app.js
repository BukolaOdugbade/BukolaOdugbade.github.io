/* ==========================================================================
   BUKOLA ODUGBADE — PORTFOLIO  (main file you will edit)
   --------------------------------------------------------------------------
   HOW TO FIND THINGS
   1. Change a project / service / insight text  -> look for "CONTENT DATA"
   2. Change WhatsApp number or email link        -> look for "CONTACT LINKS"
   3. Change layout or wording of a section       -> look for "SECTION" + number
   4. Change the profile photo                    -> replace assets/profile.jpg
   5. Colours / fonts                             -> styles.css (top of file)
   NOTE: styling uses ready-made utility classes (className="..."). Classes that
   are not already in styles.css will have no effect.
   ========================================================================== */
import { React, ReactDOMClient, jsx, jsxs } from "./vendor.js";
import {
  ArrowUpRightIcon,
  AwardIcon,
  BotIcon,
  CalculatorIcon,
  ChartColumnIcon,
  ChartLineIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  ClockIcon,
  DatabaseIcon,
  FileTextIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  SparklesIcon,
  TrendingDownIcon,
  UsersIcon,
  WalletIcon,
} from "./icons.js";

/* ##########################################################################
   PROFILE PHOTO — the image file is assets/profile.jpg (replace that file to change the photo)
   ########################################################################## */
var PROFILE_PHOTO = "assets/profile.jpg";

/* ##########################################################################
   CONTACT LINKS — change the WhatsApp number / email links here
   ########################################################################## */
var WHATSAPP_URL =
    "https://wa.me/2347044850921?text=Hello%20Bukola%2C%20I%20saw%20your%20portfolio.%20I%20need%20help%20with%20my%20business%20profit%20analysis.",
  EMAIL_URL =
    "mailto:bukolaodugbade90@gmail.com?subject=Business%20Analytics%20Help%20-%20From%20Portfolio&body=Hello%20Bukola%2C%0A%0AI%20saw%20your%20portfolio%20and%20need%20help%20with%3A%0A";

/* ##########################################################################
   WHATSAPP ICON (small helper component)
   ########################################################################## */
function WhatsAppIcon({ className: className }) {
  return jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: className,
    "aria-hidden": "true",
    children: jsx("path", {
      d: "M19.05 4.94A9.91 9.91 0 0 0 12.04 2C6.53 2 2.04 6.48 2.04 12c0 1.76.46 3.48 1.33 5L2 22l5.19-1.35a9.86 9.86 0 0 0 4.85 1.24h.01c5.51 0 10-4.48 10-10a9.88 9.88 0 0 0-2.9-7.0l-.1-.95ZM12.05 19.9h-.01a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.08.8.82-3-.19-.31A8.2 8.2 0 0 1 4.13 12c0-4.56 3.72-8.27 8.3-8.27a8.24 8.24 0 0 1 5.86 2.43 8.17 8.17 0 0 1 2.42 5.84c0 4.56-3.72 8.27-8.3 8.27-.12 0-.24 0-.36-.02ZM15.88 14.27c-.2-.1-1.18-.58-1.36-.65-.18-.06-.32-.1-.45.1-.13.2-.52.65-.64.78-.12.14-.23.15-.43.05-.2-.1-.85-.31-1.62-.99-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.24-.02-.34-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.34.05-.52.24-.18.2-.7.68-.7 1.66s.72 1.93.82 2.06c.1.13 1.42 2.17 3.44 3.04.48.21.86.33 1.15.43.48.15.92.13 1.27.08.39-.06 1.18-.48 1.35-.95.17-.47.17-.87.12-.95-.05-.08-.18-.13-.38-.23Z",
    }),
  });
}

/* ##########################################################################
   CONTENT DATA — edit text here:
   projects  = the 5 project cards
   services  = the Services section cards
   insights  = the Insights cards
   ########################################################################## */
var projects = [
    {
      id: 1,
      badge: "700 records",
      badgeLabel: "Financial Sample",
      title: "Sales, Profit & Discount Dashboard",
      businessValue: "Show which product brings real profit after hidden costs.",
      description:
        "Analyzed 700 records from a public financial sample dataset to show how profit changes once hidden costs are included. Built a margin model with assumed costs for transport, packaging and data, so owners can see what to push.",
      tech: ["Power BI", "Excel", "DAX"],
      metric: "700",
      metricLabel: "Sales Records",
      insight: "Shows loss-making SKUs hidden by gross profit",
      color: "#0F62FE",
    },
    {
      id: 2,
      badge: "3.1% repeat rate",
      badgeLabel: "Growth Blocker",
      title: "Olist E-Commerce: Business Performance",
      businessValue: "Found 3.1% repeat rate is biggest growth limit.",
      description:
        "Analyzed about 100k orders from the public Olist dataset to find why growth stalls. Delivery speed directly drives 5-star reviews: 10.6 days vs 21.3 days average. Repeat rate is the leak to fix first.",
      tech: ["SQL", "MySQL", "Power BI"],
      metric: "3.1%",
      metricLabel: "Repeat Rate",
      insight: "Fastest delivery = 2x higher 5-star rate",
      color: "#002D9C",
    },
    {
      id: 3,
      badge: "16.1% attrition",
      badgeLabel: "People Risk",
      title: "Employee Attrition Drivers",
      businessValue: "Job role strongest driver, overtime triples risk.",
      description:
        "Analyzed a public HR dataset of 1,470 employees. Overtime employees attrite at 30% vs 10% for others. Mapped attrition by role, age, and satisfaction to stop costly churn before it starts.",
      tech: ["Power BI", "Excel", "HR Analytics"],
      metric: "16.1%",
      metricLabel: "Attrition Rate",
      insight: "Overtime triples attrition risk",
      color: "#0F62FE",
    },
    {
      id: 4,
      badge: "500 records",
      badgeLabel: "Revenue Clarity",
      title: "Sales Performance: Pivot to Profit",
      businessValue: "Net revenue, orders, gross sales, discounts — in one view.",
      description:
        "Cleaned and modeled 500 sample sales records into an executive pivot system. Tracks net revenue vs gross, discount bleed, and order frequency for instant decisions.",
      tech: ["Excel", "Pivot Tables", "Power Query"],
      metric: "500",
      metricLabel: "Orders Tracked",
      insight: "Discount leakage quantified",
      color: "#0043CE",
    },
    {
      id: 5,
      badge: "100 orders",
      badgeLabel: "City ROI",
      title: "Orders Revenue & AOV Analysis",
      businessValue: "Revenue, AOV, product categories by city — where to double down.",
      description:
        "100-order sample deep dive into city-level profitability. Identifies which cities buy high-AOV categories and which drain margin with delivery costs.",
      tech: ["Excel", "Power BI", "City Analysis"],
      metric: "100",
      metricLabel: "Orders",
      insight: "City-level AOV variance >40%",
      color: "#0F62FE",
    },
  ],
  services = [
    {
      icon: CalculatorIcon,
      title: "Financial Analysis",
      subtitle: "Real Cost Formula",
      desc: "Most SMEs use Price - Product Cost. I add transport, data, time, packaging, free delivery. Finally see TRUE profit per product.",
      points: ["True Profit Formula", "Hidden Cost Audit", "SKU Profit Ranking"],
    },
    {
      icon: UsersIcon,
      title: "Business Analytics",
      subtitle: "Customer Segmentation",
      desc: "Find your Profit Givers vs Stress Givers. 20% of customers bring 80% of profit. Stop chasing everyone.",
      points: ["80/20 Analysis", "Profit Givers Map", "Stress Givers Filter"],
    },
    {
      icon: FileTextIcon,
      title: "Data Reporting",
      subtitle: "Chat to Gold List",
      desc: "Turn scattered WhatsApp chats into a customer gold list. Know who buys what, when, and how often.",
      points: ["WhatsApp to CRM", "Customer Gold List", "Repeat Buyer Triggers"],
    },
    {
      icon: BotIcon,
      title: "No-Code AI Chatbots",
      subtitle: "IBM Course 91.42%",
      desc: "Reply at 2AM while you sleep. Qualify leads, take orders, answer FAQs — no code, no sleepless nights.",
      points: ["No-Code Chatbot Builders", "24/7 Auto-Reply", "Lead Qualification"],
    },
  ],
  insights = [
    {
      day: "Insight 1",
      title: "Profit Formula",
      insight:
        "Profit ≠ Price - Cost. Real formula: (Price - Product Cost - Transport - Data - Time - Packaging - Free Delivery). Most SMEs lose money because they skip the second half.",
      tag: "Financial Truth",
    },
    {
      day: "Insight 2",
      title: "Chat Goldmine",
      insight:
        "Your WhatsApp is not chat, it's data. Every 'how much?' and 'do you deliver?' is a lead. I structure it into Name, Need, Budget, Last Buy — your gold list.",
      tag: "Data Reporting",
    },
    {
      day: "Insight 3",
      title: "80/20 Customer Truth",
      insight:
        "20% of customers = 80% of profit. The rest are Stress Givers: small orders, high complaints, free delivery demands. Focus beats hustle.",
      tag: "Business Analytics",
    },
    {
      day: "Insight 4",
      title: "Morning Cash Ritual",
      insight:
        "Before you post, check yesterday: What sold? What profit? Who didn't pay? 10 mins every morning stops month-end shocks.",
      tag: "Ops Habit",
    },
    {
      day: "Insight 5",
      title: "Data to Decision",
      insight:
        "Dashboard without action is decoration. I track what to stop selling, what to double, and who to call first. Profit is a daily decision, not month-end surprise.",
      tag: "Decision System",
    },
  ];

/* ##########################################################################
   THE PAGE — layout of every section. Search for "SECTION" to jump between sections.
   ########################################################################## */
function Portfolio() {
  let [hoveredProjectId, setHoveredProjectId] = React.useState(null),
    projectsSectionRef = React.useRef(null),
    contactSectionRef = React.useRef(null),
    [activeNav, setActiveNav] = React.useState("top"),
    [toastMessage, setToastMessage] = React.useState(null);
  React.useEffect(() => {
    document.title = "Bukola Odugbade | Data Analyst";
  }, []);
  let showToast = (f) => {
      (setToastMessage(f), setTimeout(() => setToastMessage(null), 2500));
    },
    scrollToSection = (f, K, E) => {
      (f.current?.scrollIntoView({ behavior: "smooth", block: "start" }), setActiveNav(K));
      try {
        window.location.hash = K;
      } catch {}
      showToast(E);
    };
  return jsxs("div", {
    className:
      "min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--ibm-blue)] selection:text-white",
    children: [
      /* ================= SECTION 0: TOP SPACER (phone safe area) ================= */
      jsx("div", { className: "h-[var(--safe-area-inset-top)] bg-[var(--bg)]" }),
      /* ================= SECTION 1: TOAST MESSAGE (small popup shown after clicking a nav button) ================= */
      toastMessage &&
        jsxs("div", {
          className:
            "fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-[var(--navy)] text-white text-[12px] font-semibold px-4 py-2 rounded-full shadow-lg border border-white/10 pointer-events-none",
          children: [toastMessage, " ✓"],
        }),
      /* ================= SECTION 2: HEADER / NAVIGATION BAR ================= */
      jsx("header", {
        className:
          "sticky top-0 z-40 backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] border-b border-[var(--border)]",
        children: jsxs("div", {
          className:
            "mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 h-[64px] flex items-center justify-between",
          children: [
            jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                jsx("div", {
                  className:
                    "h-8 w-8 bg-[var(--ibm-blue)] text-white grid place-items-center font-black text-[11px] tracking-[0.12em]",
                  children: "BO",
                }),
                jsxs("div", {
                  className: "leading-[1.1]",
                  children: [
                    jsx("div", {
                      className: "font-extrabold tracking-[0.14em] text-[13px] md:text-[14px]",
                      children: "BUKOLA ODUGBADE",
                    }),
                    jsxs("div", {
                      className: "flex items-center gap-2 mt-[2px]",
                      children: [
                        jsx("span", {
                          className:
                            "text-[11px] font-semibold tracking-wide text-[var(--ink-muted)] uppercase",
                          children: "Data Analyst",
                        }),
                        jsx("span", {
                          className: "h-[3px] w-[3px] rounded-full bg-[var(--border-strong)]",
                        }),
                        jsx("span", {
                          className:
                            "inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 bg-[var(--ibm-blue)] text-white rounded-[2px] tracking-wide whitespace-nowrap",
                          children: "IBM Course",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            jsxs("nav", {
              className: "hidden md:flex items-center gap-7 text-[13px] font-medium",
              children: [
                jsx("button", {
                  "data-active": activeNav === "top",
                  onClick: () => {
                    (window.scrollTo({ top: 0, behavior: "smooth" }), setActiveNav("top"));
                    try {
                      window.location.hash = "top";
                    } catch {}
                    showToast("Back to top — About");
                  },
                  className: `hover:text-[var(--ibm-blue)] transition-colors ${activeNav === "top" ? "text-[var(--ibm-blue)] font-bold" : ""}`,
                  children: "About",
                }),
                jsx("button", {
                  "data-active": activeNav === "projects",
                  onClick: () =>
                    scrollToSection(
                      projectsSectionRef,
                      "projects",
                      "Viewing Projects — 5 business-value dashboards",
                    ),
                  className: `hover:text-[var(--ibm-blue)] transition-colors ${activeNav === "projects" ? "text-[var(--ibm-blue)] font-bold" : ""}`,
                  children: "Projects",
                }),
                jsx("button", {
                  "data-active": activeNav === "contact",
                  onClick: () =>
                    scrollToSection(contactSectionRef, "contact", "Contact — Available Remotely"),
                  className: `hover:text-[var(--ibm-blue)] transition-colors ${activeNav === "contact" ? "text-[var(--ibm-blue)] font-bold" : ""}`,
                  children: "Contact",
                }),
                jsxs("a", {
                  href: "https://www.linkedin.com/in/odugbade-bukola-971704324",
                  target: "_blank",
                  rel: "noopener",
                  className:
                    "inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 rounded-full hover:border-[var(--ibm-blue)] hover:text-[var(--ibm-blue)] transition-colors",
                  children: ["LinkedIn ", jsx(ArrowUpRightIcon, { className: "h-3.5 w-3.5" })],
                }),
              ],
            }),
            jsx("div", {
              className: "md:hidden",
              children: jsx("a", {
                href: "https://www.linkedin.com/in/odugbade-bukola-971704324",
                target: "_blank",
                rel: "noopener",
                className:
                  "text-[12px] font-bold border border-[var(--border)] px-3 py-1.5 rounded-full",
                children: "LinkedIn",
              }),
            }),
          ],
        }),
      }),
      /* ================= SECTION 3: HERO (top intro: headline, buttons, photo) ================= */
      jsxs("section", {
        className: "relative overflow-hidden border-b border-[var(--border)]",
        children: [
          jsx("div", {
            className: "absolute inset-0 pointer-events-none opacity-[0.04]",
            style: {
              backgroundImage:
                "linear-gradient(var(--ibm-blue) 1px, transparent 1px), linear-gradient(90deg, var(--ibm-blue) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            },
          }),
          jsx("div", {
            className:
              "mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-10 md:py-16 lg:py-20 relative",
            children: jsxs("div", {
              className: "grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start",
              children: [
                jsxs("div", {
                  children: [
                    jsxs("div", {
                      className:
                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[11px] font-semibold tracking-wide mb-6",
                      children: [
                        jsx("span", {
                          className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse",
                        }),
                        jsxs("span", {
                          className: "flex items-center gap-1.5",
                          children: [
                            jsx(MapPinIcon, { className: "h-3 w-3" }),
                            " Available Remotely",
                          ],
                        }),
                        jsx("span", { className: "h-3 w-[1px] bg-[var(--border)]" }),
                        jsx("span", {
                          className: "text-[var(--ink-muted)]",
                          children: "Serving SMEs Across Nigeria",
                        }),
                      ],
                    }),
                    jsx("div", {
                      className: "flex items-center gap-3 mb-5 lg:hidden",
                      children: jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          jsxs("div", {
                            className: "relative",
                            children: [
                              jsx("div", {
                                className:
                                  "w-[140px] h-[140px] rounded-full border-[3px] border-[#0F62FE] overflow-hidden bg-white shadow-[0_10px_30px_rgba(15,98,254,0.18),0_4px_12px_rgba(0,0,0,0.08)]",
                                children: jsx("img", {
                                  src: PROFILE_PHOTO,
                                  alt: "Bukola Odugbade",
                                  className:
                                    "w-full h-full object-cover object-[center_22%] scale-[1.01]",
                                }),
                              }),
                              jsx("div", {
                                className:
                                  "absolute -bottom-1 -right-1 bg-[#0F62FE] text-white text-[9px] font-black tracking-wide px-2.5 py-1 rounded-full border-2 border-white shadow-md whitespace-nowrap",
                                children: "IBM Course 91.42%",
                              }),
                            ],
                          }),
                          jsxs("div", {
                            children: [
                              jsx("div", {
                                className: "font-extrabold tracking-[0.14em] text-[13px]",
                                children: "BUKOLA ODUGBADE",
                              }),
                              jsx("div", {
                                className: "text-[11px] font-semibold text-[var(--ink-muted)]",
                                children: "Data Analyst • IBM Course 91.42%",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    jsxs("h1", {
                      className:
                        "text-[32px] md:text-[48px] lg:text-[56px] font-[800] leading-[0.95] tracking-[-0.03em]",
                      children: [
                        "I turn business data",
                        jsx("span", {
                          className: "block text-[var(--ibm-blue)]",
                          children: "into clear, profitable",
                        }),
                        jsx("span", { className: "block", children: "decisions." }),
                      ],
                    }),
                    jsx("p", {
                      className:
                        "mt-6 text-[16px] md:text-[18px] leading-[1.5] text-[var(--ink-muted)] max-w-[58ch]",
                      children:
                        "I am a data analyst skilled in SQL, Excel and Power BI. I clean and check data, build dashboards and reports, and help small businesses see their true profit after hidden costs such as transport, data, packaging and free delivery.",
                    }),
                    jsxs("div", {
                      className: "mt-8 flex flex-wrap gap-3",
                      children: [
                        jsxs("button", {
                          onClick: () =>
                            scrollToSection(
                              projectsSectionRef,
                              "projects",
                              "Viewing Projects — business-value dashboards",
                            ),
                          className:
                            "h-11 px-6 bg-[var(--ibm-blue)] hover:bg-[var(--ibm-blue-hover)] text-white font-semibold text-[14px] tracking-wide rounded-[4px] inline-flex items-center gap-2 transition-colors data-[active=true]:ring-2 ring-white",
                          "data-active": activeNav === "projects",
                          children: [
                            "View Projects ",
                            jsx(ChevronRightIcon, { className: "h-4 w-4" }),
                          ],
                        }),
                        jsxs("button", {
                          onClick: () =>
                            scrollToSection(contactSectionRef, "contact", "Contact section opened"),
                          className:
                            "h-11 px-6 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] font-semibold text-[14px] rounded-[4px] inline-flex items-center gap-2 transition-colors data-[active=true]:border-[var(--ibm-blue)] data-[active=true]:text-[var(--ibm-blue)]",
                          "data-active": activeNav === "contact",
                          children: [
                            "Contact Me ",
                            jsx(MessageCircleIcon, { className: "h-4 w-4" }),
                          ],
                        }),
                        jsxs("a", {
                          href: "https://www.linkedin.com/in/odugbade-bukola-971704324",
                          target: "_blank",
                          rel: "noopener",
                          className:
                            "h-11 px-6 bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 font-semibold text-[14px] rounded-[4px] inline-flex items-center gap-2 transition-opacity",
                          children: ["LinkedIn ", jsx(ArrowUpRightIcon, { className: "h-4 w-4" })],
                        }),
                        jsxs("a", {
                          href: "https://github.com/BukolaOdugbade",
                          target: "_blank",
                          rel: "noopener",
                          className:
                            "h-11 px-6 bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 font-semibold text-[14px] rounded-[4px] inline-flex items-center gap-2 transition-opacity",
                          children: ["GitHub ", jsx(ArrowUpRightIcon, { className: "h-4 w-4" })],
                        }),
                      ],
                    }),
                    jsxs("div", {
                      className: "mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[520px]",
                      children: [
                        jsxs("a", {
                          href: WHATSAPP_URL,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "group h-[52px] px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[13px] rounded-[8px] inline-flex items-center gap-3 transition-colors shadow-[0_4px_16px_rgba(37,211,102,0.28)]",
                          children: [
                            jsx("span", {
                              className:
                                "h-9 w-9 rounded-full bg-white/15 grid place-items-center flex-shrink-0",
                              children: jsx(WhatsAppIcon, { className: "h-5 w-5" }),
                            }),
                            jsxs("span", {
                              className: "text-left leading-[1.1]",
                              children: [
                                jsx("span", {
                                  className: "block text-[12px] opacity-90 font-semibold",
                                  children: "Chat on WhatsApp",
                                }),
                                jsx("span", {
                                  className: "block text-[13px] tracking-wide",
                                  children: "+234 704 485 0921",
                                }),
                              ],
                            }),
                            jsx(ArrowUpRightIcon, {
                              className:
                                "h-4 w-4 ml-auto opacity-80 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform",
                            }),
                          ],
                        }),
                        jsxs("a", {
                          href: EMAIL_URL,
                          className:
                            "group h-[52px] px-4 bg-[var(--ibm-blue)] hover:bg-[var(--ibm-blue-hover)] text-white font-bold text-[13px] rounded-[8px] inline-flex items-center gap-3 transition-colors shadow-[0_4px_16px_rgba(15,98,254,0.28)]",
                          children: [
                            jsx("span", {
                              className:
                                "h-9 w-9 rounded-full bg-white/15 grid place-items-center flex-shrink-0",
                              children: jsx(MailIcon, { className: "h-5 w-5" }),
                            }),
                            jsxs("span", {
                              className: "text-left leading-[1.1]",
                              children: [
                                jsx("span", {
                                  className: "block text-[12px] opacity-90 font-semibold",
                                  children: "Send Email",
                                }),
                                jsx("span", {
                                  className:
                                    "block text-[11px] tracking-wide truncate max-w-[160px]",
                                  children: "bukolaodugbade90@gmail.com",
                                }),
                              ],
                            }),
                            jsx(ArrowUpRightIcon, {
                              className:
                                "h-4 w-4 ml-auto opacity-80 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform",
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsx("div", {
                      className: "mt-3 text-[11px] text-[var(--ink-faint)] font-medium",
                      children:
                        "Tap WhatsApp to open chat instantly • Tap Email to open your mail app",
                    }),
                    jsxs("div", {
                      className:
                        "mt-10 grid grid-cols-3 gap-4 max-w-[520px] border-t border-[var(--border)] pt-6",
                      children: [
                        jsxs("div", {
                          children: [
                            jsx("div", {
                              className: "text-[22px] font-bold leading-none",
                              children: "100k+",
                            }),
                            jsx("div", {
                              className:
                                "text-[11px] uppercase tracking-wide font-semibold text-[var(--ink-muted)] mt-1",
                              children: "Orders Analyzed",
                            }),
                          ],
                        }),
                        jsxs("div", {
                          children: [
                            jsx("div", {
                              className: "text-[22px] font-bold leading-none",
                              children: "91.42%",
                            }),
                            jsx("div", {
                              className:
                                "text-[11px] uppercase tracking-wide font-semibold text-[var(--ink-muted)] mt-1",
                              children: "IBM Course Grade",
                            }),
                          ],
                        }),
                        jsxs("div", {
                          children: [
                            jsx("div", {
                              className: "text-[22px] font-bold leading-none",
                              children: "80/20",
                            }),
                            jsx("div", {
                              className:
                                "text-[11px] uppercase tracking-wide font-semibold text-[var(--ink-muted)] mt-1",
                              children: "Profit Focus",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs("div", {
                  className: "relative flex flex-col items-center lg:items-stretch gap-6",
                  children: [
                    jsxs("div", {
                      className: "relative hidden lg:flex flex-col items-center",
                      children: [
                        jsxs("div", {
                          className: "relative",
                          children: [
                            jsxs("div", {
                              className:
                                "relative w-[180px] h-[180px] rounded-full border-[3px] border-[#0F62FE] bg-white overflow-hidden shadow-[0_12px_40px_rgba(15,98,254,0.20),0_4px_16px_rgba(0,0,0,0.08)]",
                              children: [
                                jsx("img", {
                                  src: PROFILE_PHOTO,
                                  alt: "Bukola Odugbade",
                                  className:
                                    "w-full h-full object-cover object-[center_18%] scale-[1.02]",
                                  onError: (f) => {
                                    let K = f.currentTarget;
                                    K.style.display = "none";
                                    let E = K.nextElementSibling;
                                    if (E) E.style.display = "grid";
                                  },
                                }),
                                jsx("div", {
                                  className:
                                    "hidden w-full h-full place-items-center bg-[var(--ibm-blue)] text-white font-black text-[28px] tracking-widest",
                                  children: "BO",
                                }),
                              ],
                            }),
                            jsxs("div", {
                              className:
                                "absolute -bottom-2 -right-2 bg-[#0F62FE] text-white text-[10px] font-black tracking-wide px-3 py-1.5 rounded-full border-[3px] border-white shadow-[0_4px_12px_rgba(15,98,254,0.3)] whitespace-nowrap flex items-center gap-1",
                              children: [
                                jsx(CircleCheckIcon, { className: "h-3 w-3" }),
                                " IBM Course 91.42%",
                              ],
                            }),
                          ],
                        }),
                        jsxs("div", {
                          className: "mt-6 text-center",
                          children: [
                            jsx("div", {
                              className: "font-extrabold tracking-[0.12em] text-[14px]",
                              children: "BUKOLA ODUGBADE",
                            }),
                            jsxs("div", {
                              className:
                                "mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold",
                              children: [
                                jsx("span", {
                                  className:
                                    "px-2.5 py-1 rounded-full bg-[var(--ibm-blue)] text-white font-bold tracking-wide",
                                  children: "Data Analyst",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxs("div", {
                      className:
                        "w-full rounded-[12px] border border-[var(--border)] bg-[var(--surface-2)] shadow-[var(--card-shadow)] overflow-hidden",
                      children: [
                        jsxs("div", {
                          className:
                            "h-[44px] flex items-center justify-between px-5 border-b border-[var(--border)] bg-[var(--surface)]",
                          children: [
                            jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F56]" }),
                                jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" }),
                                jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-[#27CA40]" }),
                              ],
                            }),
                            jsx("div", {
                              className: "text-[11px] font-mono text-[var(--ink-faint)]",
                              children: "profit_model.xlsx — EXAMPLE (illustrative figures)",
                            }),
                          ],
                        }),
                        jsxs("div", {
                          className: "p-5 md:p-6 space-y-5",
                          children: [
                            jsxs("div", {
                              className: "grid grid-cols-2 gap-3",
                              children: [
                                jsxs("div", {
                                  className:
                                    "rounded-[8px] border border-[var(--border)] p-4 bg-[var(--surface)]",
                                  children: [
                                    jsxs("div", {
                                      className:
                                        "text-[10px] font-bold tracking-widest uppercase text-[var(--ink-faint)] flex items-center gap-1",
                                      children: [
                                        jsx(WalletIcon, { className: "h-3 w-3" }),
                                        " Gross Profit",
                                      ],
                                    }),
                                    jsx("div", {
                                      className: "mt-2 text-[20px] font-bold",
                                      children: "₦420,000",
                                    }),
                                    jsxs("div", {
                                      className:
                                        "text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1",
                                      children: [
                                        jsx(TrendingDownIcon, { className: "h-3 w-3 rotate-180" }),
                                        " Looks good",
                                      ],
                                    }),
                                  ],
                                }),
                                jsxs("div", {
                                  className:
                                    "rounded-[8px] border border-[var(--ibm-blue)]/30 bg-[var(--ibm-blue)]/5 p-4",
                                  children: [
                                    jsxs("div", {
                                      className:
                                        "text-[10px] font-bold tracking-widest uppercase text-[var(--ibm-blue)] flex items-center gap-1",
                                      children: [
                                        jsx(CalculatorIcon, { className: "h-3 w-3" }),
                                        " True Profit",
                                      ],
                                    }),
                                    jsx("div", {
                                      className:
                                        "mt-2 text-[20px] font-bold text-[var(--ibm-blue)]",
                                      children: "₦86,500",
                                    }),
                                    jsx("div", {
                                      className:
                                        "text-[11px] text-[var(--ink-muted)] font-medium mt-1",
                                      children: "After hidden costs",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxs("div", {
                              className: "space-y-3",
                              children: [
                                jsx("div", {
                                  className: "text-[12px] font-bold tracking-wide uppercase",
                                  children: "Hidden Costs Most SMEs Forget",
                                }),
                                [
                                  { label: "Transport & Delivery", val: "-₦112k", pct: 68 },
                                  { label: "Data & Airtime", val: "-₦38k", pct: 42 },
                                  { label: "Packaging & Freebies", val: "-₦74k", pct: 55 },
                                  { label: "Time (unpaid labor)", val: "-₦109.5k", pct: 71 },
                                ].map((f) =>
                                  jsxs(
                                    "div",
                                    {
                                      className: "flex items-center gap-3 text-[12px]",
                                      children: [
                                        jsx("div", {
                                          className: "w-[132px] text-[var(--ink-muted)] truncate",
                                          children: f.label,
                                        }),
                                        jsx("div", {
                                          className:
                                            "flex-1 h-1.5 bg-[var(--surface)] rounded-full overflow-hidden",
                                          children: jsx("div", {
                                            className: "h-full bg-[var(--ibm-blue)]",
                                            style: { width: `${f.pct}%` },
                                          }),
                                        }),
                                        jsx("div", {
                                          className: "w-[64px] text-right font-mono font-semibold",
                                          children: f.val,
                                        }),
                                      ],
                                    },
                                    f.label,
                                  ),
                                ),
                              ],
                            }),
                            jsxs("div", {
                              className:
                                "rounded-[8px] bg-[var(--navy)] text-white p-4 flex items-start gap-3",
                              children: [
                                jsx("div", {
                                  className:
                                    "h-8 w-8 rounded-full bg-white/10 grid place-items-center flex-shrink-0",
                                  children: jsx(SparklesIcon, { className: "h-4 w-4" }),
                                }),
                                jsxs("div", {
                                  children: [
                                    jsx("div", {
                                      className: "text-[12px] font-bold",
                                      children: "Result: Sales look good, but profit is unclear.",
                                    }),
                                    jsx("div", {
                                      className: "text-[12px] leading-[1.4] text-white/70 mt-1",
                                      children:
                                        "I turn that scattered sales data into a real profit dashboard. You see what to push, what to pause, who to prioritize.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxs("div", {
                      className:
                        "absolute -bottom-4 -right-2 md:-right-3 hidden lg:flex bg-[var(--surface-2)] border border-[var(--border)] rounded-[10px] shadow-[var(--card-shadow)] px-4 py-3 items-center gap-3",
                      children: [
                        jsx("div", {
                          className:
                            "h-9 w-9 bg-[var(--ibm-blue)] text-white grid place-items-center font-black text-[11px]",
                          children: "IBM",
                        }),
                        jsxs("div", {
                          className: "leading-[1.1]",
                          children: [
                            jsx("div", {
                              className: "text-[12px] font-bold",
                              children: "No-Code AI Builder",
                            }),
                            jsx("div", {
                              className: "text-[11px] text-[var(--ink-muted)]",
                              children: "Course grade 91.42% • 2026",
                            }),
                          ],
                        }),
                        jsx(AwardIcon, { className: "h-5 w-5 text-[var(--ibm-blue)]" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      /* ================= SECTION 4: ABOUT (how I help + IBM course grade card) ================= */
      jsxs("section", {
        className: "mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-14 md:py-20",
        children: [
          jsx("div", {
            className:
              "text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--ibm-blue)] mb-6",
            children: "About — How I Help",
          }),
          jsxs("div", {
            className: "grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-14 items-start",
            children: [
              jsxs("div", {
                className: "relative lg:sticky lg:top-[88px]",
                children: [
                  jsx("div", {
                    className:
                      "rounded-[20px] border border-[var(--border)] bg-[var(--surface-2)] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)]",
                    children: jsxs("div", {
                      className:
                        "rounded-[14px] overflow-hidden aspect-[4/5] bg-[var(--surface)] relative",
                      children: [
                        jsx("img", {
                          src: PROFILE_PHOTO,
                          alt: "Bukola Odugbade",
                          className: "w-full h-full object-cover object-[center_16%] scale-[1.02]",
                        }),
                        jsx("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 h-[52%] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none",
                        }),
                        jsxs("div", {
                          className: "absolute bottom-4 left-4 right-4",
                          children: [
                            jsxs("div", {
                              className:
                                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold tracking-wide text-[var(--navy)] shadow",
                              children: [
                                jsx("span", {
                                  className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse",
                                }),
                                " Available Remotely",
                              ],
                            }),
                            jsxs("div", {
                              className: "mt-3 text-white",
                              children: [
                                jsx("div", {
                                  className: "font-extrabold text-[16px] tracking-[0.08em]",
                                  children: "BUKOLA ODUGBADE",
                                }),
                                jsx("div", {
                                  className: "text-[12px] text-white/80 font-medium mt-0.5",
                                  children:
                                    "Data Analyst • Ogun State • Serving SMEs Across Nigeria",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  jsxs("div", {
                    className: "mt-4 flex gap-3",
                    children: [
                      jsxs("div", {
                        className:
                          "flex-1 rounded-[12px] border border-[var(--border)] bg-[var(--surface)] p-3 flex items-center gap-3",
                        children: [
                          jsx("div", {
                            className:
                              "h-9 w-9 rounded-[8px] bg-[var(--ibm-blue)] text-white grid place-items-center font-black text-[11px]",
                            children: "IBM",
                          }),
                          jsxs("div", {
                            className: "leading-[1.15]",
                            children: [
                              jsx("div", {
                                className: "text-[12px] font-bold",
                                children: "91.42% Course Grade",
                              }),
                              jsx("div", {
                                className: "text-[11px] text-[var(--ink-muted)]",
                                children: "No-Code AI • 2026",
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxs("div", {
                        className:
                          "flex-1 rounded-[12px] border border-[var(--border)] bg-[var(--surface)] p-3",
                        children: [
                          jsx("div", {
                            className:
                              "text-[11px] font-bold tracking-widest uppercase text-[var(--ink-faint)]",
                            children: "Focus",
                          }),
                          jsx("div", {
                            className: "text-[13px] font-semibold mt-1",
                            children: "Profit-first • SME-grade",
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsx("div", {
                    className: "mt-3 hidden",
                    children: jsx("div", {
                      className:
                        "w-full h-[320px] rounded-[14px] bg-[var(--ibm-blue)] grid place-items-center text-white",
                      children: jsxs("div", {
                        className: "text-center",
                        children: [
                          jsx("div", {
                            className: "font-black text-[42px] tracking-widest",
                            children: "BO",
                          }),
                          jsx("div", {
                            className: "text-[11px] mt-2 opacity-80 max-w-[20ch]",
                            children: "",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              jsxs("div", {
                className: "space-y-6",
                children: [
                  jsxs("div", {
                    children: [
                      jsx("h2", {
                        className:
                          "text-[28px] md:text-[40px] font-[800] leading-[1] tracking-[-0.03em]",
                        children: "I help SMEs stop losing money without knowing.",
                      }),
                      jsxs("div", {
                        className: "mt-5 flex items-center gap-3",
                        children: [
                          jsx("div", {
                            className:
                              "w-[44px] h-[44px] rounded-full border-[2px] border-[#0F62FE] overflow-hidden bg-white shadow-[0_4px_12px_rgba(15,98,254,0.15)] flex-shrink-0",
                            children: jsx("img", {
                              src: PROFILE_PHOTO,
                              alt: "Bukola Odugbade",
                              className: "w-full h-full object-cover object-[center_20%]",
                            }),
                          }),
                          jsxs("div", {
                            children: [
                              jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  jsx("span", {
                                    className: "font-extrabold tracking-[0.12em] text-[13px]",
                                    children: "BUKOLA ODUGBADE",
                                  }),
                                  jsx("span", {
                                    className:
                                      "text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#0F62FE] text-white",
                                    children: "IBM Course 91.42%",
                                  }),
                                ],
                              }),
                              jsx("div", {
                                className: "text-[12px] font-medium text-[var(--ink-muted)] mt-0.5",
                                children:
                                  "Data Analyst, Ogun State • Available Remotely • Serving SMEs Across Nigeria",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className:
                      "rounded-[12px] border border-[var(--border)] bg-[var(--surface-2)] p-6 md:p-8 shadow-[var(--card-shadow)]",
                    children: [
                      jsxs("div", {
                        className: "text-[15px] md:text-[17px] leading-[1.6] text-[var(--ink-2)]",
                        children: [
                          jsx("p", {
                            className: "font-semibold text-[var(--ink)]",
                            children: "Most think Profit = Price - Product Cost.",
                          }),
                          jsxs("p", {
                            className: "mt-3",
                            children: [
                              "They forget ",
                              jsx("span", {
                                className:
                                  "font-semibold bg-[var(--surface-3)] px-1.5 py-0.5 rounded",
                                children: "transport, data, time, packaging, free delivery",
                              }),
                              ". Result:",
                              " ",
                              jsx("span", {
                                className: "font-bold text-[var(--ibm-blue)]",
                                children: "Sales look good, but profit is unclear.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsx("div", {
                        className: "mt-8 grid sm:grid-cols-2 gap-4",
                        children: [
                          {
                            icon: CalculatorIcon,
                            kicker: "What I do",
                            title: "Financial Analysis",
                            desc: "TRUE profit per product after hidden costs. No more guessing.",
                          },
                          {
                            icon: ChartColumnIcon,
                            kicker: "What I do",
                            title: "Business Analytics",
                            desc: "Profit Givers vs Stress Givers (80/20). Focus on who really pays.",
                          },
                          {
                            icon: DatabaseIcon,
                            kicker: "What I do",
                            title: "Data Reporting",
                            desc: "Turn WhatsApp chats into customer gold list. Structured, searchable, sellable.",
                          },
                          {
                            icon: BotIcon,
                            kicker: "IBM Course 91.42%",
                            title: "No-Code AI Chatbots",
                            desc: "Reply at 2AM while you sleep. Qualify, close, support — automated.",
                          },
                        ].map((f) =>
                          jsxs(
                            "div",
                            {
                              className:
                                "rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-4",
                              children: [
                                jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsx("div", {
                                      className:
                                        "h-8 w-8 rounded-[6px] bg-[var(--ibm-blue)] text-white grid place-items-center",
                                      children: jsx(f.icon, { className: "h-4 w-4" }),
                                    }),
                                    jsx("div", {
                                      className:
                                        "text-[10px] font-bold tracking-widest uppercase text-[var(--ink-faint)]",
                                      children: f.kicker,
                                    }),
                                  ],
                                }),
                                jsx("div", {
                                  className: "mt-3 font-bold text-[14px]",
                                  children: f.title,
                                }),
                                jsx("div", {
                                  className:
                                    "mt-1 text-[13px] leading-[1.5] text-[var(--ink-muted)]",
                                  children: f.desc,
                                }),
                              ],
                            },
                            f.title,
                          ),
                        ),
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "rounded-[10px] bg-[var(--navy)] text-white p-5 md:p-6 flex gap-4",
                    children: [
                      jsx(CircleCheckIcon, {
                        className: "h-5 w-5 text-white/80 mt-0.5 flex-shrink-0",
                      }),
                      jsxs("p", {
                        className: "text-[13px] leading-[1.6] text-white/80",
                        children: [
                          jsx("span", {
                            className: "text-white font-semibold",
                            children: "Nigerian SME reality:",
                          }),
                          " Sales on WhatsApp, expenses in your head, profit in doubt. I build systems that work with how you already sell — not textbooks.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* ================= SECTION 5: SERVICES (what I offer) ================= */
      jsx("section", {
        className: "bg-[var(--surface)] border-y border-[var(--border)]",
        children: jsxs("div", {
          className: "mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-14 md:py-20",
          children: [
            jsxs("div", {
              className: "flex flex-wrap items-end justify-between gap-6 mb-10",
              children: [
                jsxs("div", {
                  children: [
                    jsx("div", {
                      className:
                        "text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--ibm-blue)]",
                      children: "Services",
                    }),
                    jsx("h2", {
                      className:
                        "mt-3 text-[28px] md:text-[36px] font-[800] tracking-[-0.02em] leading-[1.05]",
                      children: "Built for how Nigerian SMEs actually sell",
                    }),
                  ],
                }),
                jsx("div", {
                  className: "text-[14px] text-[var(--ink-muted)] max-w-[42ch]",
                  children:
                    "Plain language. Just profit, customer clarity, and systems that reply when you’re offline.",
                }),
              ],
            }),
            jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5",
              children: services.map((f) =>
                jsxs(
                  "div",
                  {
                    className:
                      "group rounded-[12px] border border-[var(--border)] bg-[var(--surface-2)] p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-[2px] transition-all",
                    children: [
                      jsx("div", {
                        className:
                          "h-10 w-10 rounded-[8px] bg-[var(--ibm-blue)] text-white grid place-items-center",
                        children: jsx(f.icon, { className: "h-5 w-5" }),
                      }),
                      jsx("div", {
                        className:
                          "mt-5 text-[11px] font-bold tracking-widest uppercase text-[var(--ibm-blue)]",
                        children: f.subtitle,
                      }),
                      jsx("div", {
                        className: "mt-1 font-bold text-[18px] leading-[1.15]",
                        children: f.title,
                      }),
                      jsx("div", {
                        className: "mt-3 text-[13px] leading-[1.6] text-[var(--ink-muted)]",
                        children: f.desc,
                      }),
                      jsx("div", {
                        className: "mt-5 pt-4 border-t border-[var(--border)] space-y-2",
                        children: f.points.map((K) =>
                          jsxs(
                            "div",
                            {
                              className: "flex items-center gap-2 text-[12px] font-medium",
                              children: [
                                jsx("div", {
                                  className: "h-1.5 w-1.5 rounded-full bg-[var(--ibm-blue)]",
                                }),
                                " ",
                                K,
                              ],
                            },
                            K,
                          ),
                        ),
                      }),
                    ],
                  },
                  f.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* ================= SECTION 6: PROJECTS (featured project cards; data comes from `projects` at the top) ================= */
      jsxs("section", {
        ref: projectsSectionRef,
        className: "mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-14 md:py-20",
        children: [
          jsxs("div", {
            className: "flex flex-wrap items-baseline justify-between gap-4 mb-10",
            children: [
              jsxs("div", {
                children: [
                  jsx("div", {
                    className:
                      "text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--ibm-blue)]",
                    children: "Featured Projects — Business Value First",
                  }),
                  jsxs("h2", {
                    className:
                      "mt-3 text-[28px] md:text-[40px] font-[800] tracking-[-0.03em] leading-[0.95]",
                    children: ["Reframed from school titles", jsx("br", {}), "to profit outcomes."],
                  }),
                ],
              }),
              jsx("div", {
                className: "text-[13px] text-[var(--ink-muted)] font-medium",
                children: "5 projects • SME-focused • Power BI • SQL • Excel",
              }),
            ],
          }),
          jsxs("div", {
            className: "grid lg:grid-cols-12 gap-5",
            children: [
              jsx("div", {
                className: "lg:col-span-7",
                children: jsxs("div", {
                  onMouseEnter: () => setHoveredProjectId(projects[1].id),
                  onMouseLeave: () => setHoveredProjectId(null),
                  className: `group relative rounded-[14px] border bg-[var(--surface-2)] overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all h-full ${hoveredProjectId === projects[1].id ? "border-[var(--ibm-blue)]/50" : "border-[var(--border)]"}`,
                  children: [
                    jsx("div", {
                      className: "absolute top-0 left-0 right-0 h-[4px] bg-[var(--ibm-blue)]",
                    }),
                    jsxs("div", {
                      className: "p-6 md:p-8",
                      children: [
                        jsxs("div", {
                          className: "flex flex-wrap items-center gap-2 mb-4",
                          children: [
                            jsx("span", {
                              className:
                                "px-2.5 py-1 rounded-full bg-[var(--ibm-blue)] text-white text-[11px] font-bold tracking-wide",
                              children: projects[1].badge,
                            }),
                            jsx("span", {
                              className:
                                "px-2.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[11px] font-semibold",
                              children: projects[1].badgeLabel,
                            }),
                            jsx("span", {
                              className: "ml-auto text-[11px] font-mono text-[var(--ink-faint)]",
                              children: "100k orders",
                            }),
                          ],
                        }),
                        jsx("h3", {
                          className:
                            "text-[22px] md:text-[26px] font-[800] leading-[1.05] tracking-[-0.02em]",
                          children: projects[1].title,
                        }),
                        jsx("p", {
                          className: "mt-3 text-[14px] font-semibold text-[var(--ibm-blue)]",
                          children: projects[1].businessValue,
                        }),
                        jsx("p", {
                          className: "mt-3 text-[14px] leading-[1.6] text-[var(--ink-muted)]",
                          children: projects[1].description,
                        }),
                        jsxs("div", {
                          className: "mt-6 grid grid-cols-3 gap-3",
                          children: [
                            jsxs("div", {
                              className:
                                "rounded-[10px] bg-[var(--surface)] border border-[var(--border)] p-4",
                              children: [
                                jsx("div", {
                                  className:
                                    "text-[10px] uppercase tracking-widest font-bold text-[var(--ink-faint)]",
                                  children: "Repeat Rate",
                                }),
                                jsx("div", {
                                  className: "text-[24px] font-extrabold",
                                  children: "3.1%",
                                }),
                                jsx("div", {
                                  className: "text-[11px] text-[var(--ink-muted)]",
                                  children: "Biggest growth leak",
                                }),
                              ],
                            }),
                            jsxs("div", {
                              className:
                                "rounded-[10px] bg-[var(--surface)] border border-[var(--border)] p-4",
                              children: [
                                jsx("div", {
                                  className:
                                    "text-[10px] uppercase tracking-widest font-bold text-[var(--ink-faint)]",
                                  children: "Delivery",
                                }),
                                jsx("div", {
                                  className: "text-[20px] font-extrabold",
                                  children: "10.6d vs 21.3d",
                                }),
                                jsx("div", {
                                  className: "text-[11px] text-[var(--ink-muted)]",
                                  children: "5-star vs 1-star",
                                }),
                              ],
                            }),
                            jsxs("div", {
                              className: "rounded-[10px] bg-[var(--navy)] text-white p-4",
                              children: [
                                jsx("div", {
                                  className:
                                    "text-[10px] uppercase tracking-widest font-bold text-white/60",
                                  children: "Insight",
                                }),
                                jsx("div", {
                                  className: "text-[12px] leading-[1.4] mt-1 font-medium",
                                  children: projects[1].insight,
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxs("div", {
                          className: "mt-6 flex flex-wrap items-center gap-2",
                          children: [
                            projects[1].tech.map((f) =>
                              jsx(
                                "span",
                                {
                                  className:
                                    "text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)]",
                                  children: f,
                                },
                                f,
                              ),
                            ),
                            jsxs("a", {
                              href: "#",
                              className:
                                "ml-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-[var(--ibm-blue)] hover:underline",
                              children: [
                                "Open project ",
                                jsx(ArrowUpRightIcon, { className: "h-4 w-4" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              jsx("div", {
                className: "lg:col-span-5 grid gap-5",
                children: projects
                  .filter((f) => f.id !== 2)
                  .map((f) =>
                    jsxs(
                      "div",
                      {
                        className:
                          "group rounded-[12px] border border-[var(--border)] bg-[var(--surface-2)] p-5 md:p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-[1px] transition-all",
                        children: [
                          jsxs("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                              jsx("span", {
                                className:
                                  "px-2 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[11px] font-bold",
                                children: f.badge,
                              }),
                              jsx("span", {
                                className: "text-[11px] font-medium text-[var(--ink-muted)]",
                                children: f.badgeLabel,
                              }),
                            ],
                          }),
                          jsx("h3", {
                            className: "font-bold text-[16px] leading-[1.2]",
                            children: f.title,
                          }),
                          jsx("p", {
                            className:
                              "mt-2 text-[13px] font-semibold text-[var(--ibm-blue)] leading-[1.4]",
                            children: f.businessValue,
                          }),
                          jsx("p", {
                            className:
                              "mt-2 text-[13px] leading-[1.5] text-[var(--ink-muted)] line-clamp-2",
                            children: f.description,
                          }),
                          jsxs("div", {
                            className: "mt-4 flex items-center gap-2",
                            children: [
                              jsx("div", {
                                className: "flex gap-1.5",
                                children: f.tech
                                  .slice(0, 2)
                                  .map((K) =>
                                    jsx(
                                      "span",
                                      {
                                        className:
                                          "text-[10px] font-semibold px-2 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)]",
                                        children: K,
                                      },
                                      K,
                                    ),
                                  ),
                              }),
                              jsxs("a", {
                                href: "#",
                                className:
                                  "ml-auto text-[12px] font-bold inline-flex items-center gap-1 hover:text-[var(--ibm-blue)] transition-colors",
                                children: [
                                  "Open project ",
                                  jsx(ArrowUpRightIcon, { className: "h-3.5 w-3.5" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      f.id,
                    ),
                  ),
              }),
            ],
          }),
          jsx("div", {
            className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-3",
            children: [
              { k: "700", v: "sales records cleaned" },
              { k: "16.1%", v: "attrition diagnosed" },
              { k: "30% vs 10%", v: "overtime risk" },
              { k: "AOV by city", v: "where to scale" },
            ].map((f) =>
              jsxs(
                "div",
                {
                  className:
                    "rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-baseline gap-2",
                  children: [
                    jsx("span", { className: "font-extrabold text-[14px]", children: f.k }),
                    jsx("span", {
                      className: "text-[12px] text-[var(--ink-muted)]",
                      children: f.v,
                    }),
                  ],
                },
                f.k,
              ),
            ),
          }),
        ],
      }),
      /* ================= SECTION 7: AI CHATBOT / IBM COURSE SECTION ================= */
      jsx("section", {
        className: "bg-[var(--navy)] text-white border-y border-white/10",
        children: jsx("div", {
          className: "mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-12 md:py-16",
          children: jsxs("div", {
            className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center",
            children: [
              jsxs("div", {
                className: "flex gap-5 items-start",
                children: [
                  jsx("div", {
                    className:
                      "hidden md:grid h-16 w-16 bg-white text-[var(--navy)] place-items-center font-black tracking-[0.18em] text-[14px]",
                    children: "IBM",
                  }),
                  jsxs("div", {
                    children: [
                      jsxs("div", {
                        className:
                          "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold tracking-wide",
                        children: [
                          jsx(AwardIcon, { className: "h-3.5 w-3.5" }),
                          " IBM CERTIFIED • 91.42%",
                        ],
                      }),
                      jsxs("h2", {
                        className:
                          "mt-4 text-[28px] md:text-[36px] font-[800] leading-[0.95] tracking-[-0.02em]",
                        children: [
                          "No-Code AI Chatbot Builder",
                          jsx("span", {
                            className:
                              "block text-white/60 text-[20px] md:text-[22px] mt-2 font-semibold",
                            children: "IBM Course: Chatbots Without Code",
                          }),
                        ],
                      }),
                      jsx("p", {
                        className: "mt-4 text-[14px] leading-[1.6] text-white/70 max-w-[52ch]",
                        children:
                          "Completed IBM’s course on building AI chatbots without code. Chatbots can answer at 2AM, capture leads, take orders and handle FAQs, designed for WhatsApp-heavy SMEs.",
                      }),
                      jsx("div", {
                        className: "mt-6 flex flex-wrap gap-2",
                        children: [
                          "No-Code Chatbots",
                          "Conversation Flows",
                          "24/7 Automation",
                          "Lead Qualification",
                        ].map((f) =>
                          jsx(
                            "span",
                            {
                              className:
                                "text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/10",
                              children: f,
                            },
                            f,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              jsxs("div", {
                className:
                  "rounded-[12px] bg-white text-[var(--navy)] p-6 shadow-[var(--card-shadow)]",
                children: [
                  jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      jsx("div", {
                        className:
                          "text-[12px] font-bold tracking-widest uppercase text-[var(--ink-muted)]",
                        children: "Course Grade",
                      }),
                      jsx("div", {
                        className:
                          "text-[11px] font-mono px-2 py-1 rounded bg-[var(--surface)] border",
                        children: "Coursera course certificate",
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "mt-6 flex items-end gap-4",
                    children: [
                      jsx("div", {
                        className: "text-[64px] font-[900] leading-[0.8] tracking-[-0.04em]",
                        children: "91.42%",
                      }),
                      jsxs("div", {
                        className:
                          "mb-1 text-[13px] font-semibold text-emerald-600 flex items-center gap-1",
                        children: [
                          jsx(CircleCheckIcon, { className: "h-4 w-4" }),
                          " Passed • Top Tier",
                        ],
                      }),
                    ],
                  }),
                  jsx("div", {
                    className: "mt-6 h-2 bg-[var(--surface)] rounded-full overflow-hidden",
                    children: jsx("div", {
                      className: "h-full bg-[var(--ibm-blue)]",
                      style: { width: "91.42%" },
                    }),
                  }),
                  jsxs("div", {
                    className: "mt-4 grid grid-cols-3 gap-3 text-[11px]",
                    children: [
                      jsxs("div", {
                        className: "rounded-[8px] bg-[var(--surface)] border p-3",
                        children: [
                          jsx("div", { className: "font-bold", children: "Design" }),
                          jsx("div", {
                            className: "text-[var(--ink-muted)]",
                            children: "Conversational flows",
                          }),
                        ],
                      }),
                      jsxs("div", {
                        className: "rounded-[8px] bg-[var(--surface)] border p-3",
                        children: [
                          jsx("div", { className: "font-bold", children: "Deploy" }),
                          jsx("div", {
                            className: "text-[var(--ink-muted)]",
                            children: "WhatsApp + Web",
                          }),
                        ],
                      }),
                      jsxs("div", {
                        className: "rounded-[8px] bg-[var(--surface)] border p-3",
                        children: [
                          jsx("div", { className: "font-bold", children: "Measure" }),
                          jsx("div", {
                            className: "text-[var(--ink-muted)]",
                            children: "Drop-off & CSAT",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      /* ================= SECTION 8: INSIGHTS (short lessons; data comes from `insights`) ================= */
      jsxs("section", {
        className: "mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-14 md:py-20",
        children: [
          jsxs("div", {
            className: "flex items-start justify-between gap-6 flex-wrap mb-10",
            children: [
              jsxs("div", {
                children: [
                  jsx("div", {
                    className:
                      "text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--ibm-blue)]",
                    children: "Insights",
                  }),
                  jsx("h2", {
                    className:
                      "mt-3 text-[28px] md:text-[36px] font-[800] leading-[1] tracking-[-0.02em]",
                    children: "What I share with SME owners",
                  }),
                ],
              }),
              jsxs("div", {
                className:
                  "flex items-center gap-2 text-[12px] font-medium px-3 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)]",
                children: [jsx(ClockIcon, { className: "h-4 w-4" }), " Profit-first lessons"],
              }),
            ],
          }),
          jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5",
            children: insights.map((f) =>
              jsxs(
                "div",
                {
                  className:
                    "rounded-[12px] border border-[var(--border)] bg-[var(--surface-2)] p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow",
                  children: [
                    jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        jsx("span", {
                          className:
                            "text-[11px] font-black tracking-[0.18em] px-2.5 py-1 rounded-full bg-[var(--navy)] text-white",
                          children: f.day,
                        }),
                        jsx("span", {
                          className:
                            "text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)]",
                          children: f.tag,
                        }),
                      ],
                    }),
                    jsx("h3", {
                      className: "mt-5 font-bold text-[18px] leading-[1.1]",
                      children: f.title,
                    }),
                    jsx("p", {
                      className: "mt-3 text-[13px] leading-[1.6] text-[var(--ink-muted)]",
                      children: f.insight,
                    }),
                    jsxs("div", {
                      className:
                        "mt-5 flex items-center gap-2 text-[12px] font-semibold text-[var(--ibm-blue)]",
                      children: [
                        jsx(ChartLineIcon, { className: "h-4 w-4" }),
                        " Lesson for your business",
                      ],
                    }),
                  ],
                },
                f.day,
              ),
            ),
          }),
        ],
      }),
      /* ================= SECTION 9: CONTACT / FOOTER (WhatsApp, email, copyright) ================= */
      jsx("footer", {
        ref: contactSectionRef,
        className: "bg-[var(--surface)] border-t border-[var(--border)]",
        children: jsx("div", {
          className: "mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-12 md:py-16",
          children: jsxs("div", {
            className: "grid lg:grid-cols-[1.2fr_0.8fr] gap-10",
            children: [
              jsxs("div", {
                children: [
                  jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      jsx("div", {
                        className:
                          "h-10 w-10 bg-[var(--ibm-blue)] text-white grid place-items-center font-black text-[12px] tracking-widest",
                        children: "BO",
                      }),
                      jsxs("div", {
                        children: [
                          jsx("div", {
                            className: "font-extrabold tracking-[0.14em] text-[14px]",
                            children: "BUKOLA ODUGBADE",
                          }),
                          jsx("div", {
                            className: "text-[12px] text-[var(--ink-muted)] font-medium",
                            children: "Data Analyst • IBM Course 91.42% (No-Code AI)",
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsx("h3", {
                    className:
                      "mt-8 text-[24px] md:text-[32px] font-[800] leading-[1.05] tracking-[-0.02em] max-w-[18ch]",
                    children: "Let’s turn your scattered sales into real profit.",
                  }),
                  jsxs("div", {
                    className: "mt-6 flex flex-wrap gap-2",
                    children: [
                      jsxs("span", {
                        className:
                          "inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)]",
                        children: [
                          jsx(MapPinIcon, { className: "h-3.5 w-3.5" }),
                          " Available Remotely",
                        ],
                      }),
                      jsx("span", {
                        className:
                          "inline-flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[var(--ibm-blue)] text-white",
                        children: "Serving SMEs Across Nigeria",
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "mt-8 grid sm:grid-cols-2 gap-4 max-w-[560px]",
                    children: [
                      jsxs("a", {
                        href: WHATSAPP_URL,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "group rounded-[12px] border border-[#25D366]/30 bg-[var(--surface-2)] p-4 flex items-center gap-3 hover:border-[#25D366] hover:shadow-[0_8px_24px_rgba(37,211,102,0.12)] transition-all",
                        children: [
                          jsx("div", {
                            className:
                              "h-10 w-10 rounded-full bg-[#25D366] text-white grid place-items-center flex-shrink-0",
                            children: jsx(WhatsAppIcon, { className: "h-5 w-5" }),
                          }),
                          jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              jsx("div", {
                                className:
                                  "text-[11px] font-bold tracking-widest uppercase text-[#25D366]",
                                children: "WhatsApp",
                              }),
                              jsx("div", {
                                className: "text-[13px] font-bold mt-0.5",
                                children: "+234 704 485 0921",
                              }),
                              jsx("div", {
                                className: "text-[11px] text-[var(--ink-muted)] mt-0.5",
                                children: "Tap to chat instantly",
                              }),
                            ],
                          }),
                          jsx(ArrowUpRightIcon, {
                            className:
                              "h-4 w-4 text-[var(--ink-faint)] group-hover:text-[#25D366] transition-colors",
                          }),
                        ],
                      }),
                      jsxs("a", {
                        href: EMAIL_URL,
                        className:
                          "group rounded-[12px] border border-[var(--ibm-blue)]/20 bg-[var(--surface-2)] p-4 flex items-center gap-3 hover:border-[var(--ibm-blue)] hover:shadow-[0_8px_24px_rgba(15,98,254,0.10)] transition-all",
                        children: [
                          jsx("div", {
                            className:
                              "h-10 w-10 rounded-full bg-[var(--ibm-blue)] text-white grid place-items-center flex-shrink-0",
                            children: jsx(MailIcon, { className: "h-5 w-5" }),
                          }),
                          jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              jsx("div", {
                                className:
                                  "text-[11px] font-bold tracking-widest uppercase text-[var(--ibm-blue)]",
                                children: "Gmail",
                              }),
                              jsx("div", {
                                className: "text-[12px] font-bold mt-0.5 truncate",
                                children: "bukolaodugbade90@gmail.com",
                              }),
                              jsx("div", {
                                className: "text-[11px] text-[var(--ink-muted)] mt-0.5",
                                children: "Tap to send email",
                              }),
                            ],
                          }),
                          jsx(ArrowUpRightIcon, {
                            className:
                              "h-4 w-4 text-[var(--ink-faint)] group-hover:text-[var(--ibm-blue)] transition-colors",
                          }),
                        ],
                      }),
                      jsxs("a", {
                        href: "https://www.linkedin.com/in/odugbade-bukola-971704324",
                        target: "_blank",
                        rel: "noopener",
                        className:
                          "group rounded-[12px] border border-[var(--border)] bg-[var(--surface-2)] p-4 flex items-center gap-3 hover:border-[var(--ibm-blue)] transition-colors sm:col-span-2",
                        children: [
                          jsx("div", {
                            className:
                              "h-10 w-10 rounded-full bg-[var(--ink)] text-white grid place-items-center flex-shrink-0 font-black text-[11px]",
                            children: "in",
                          }),
                          jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              jsx("div", {
                                className:
                                  "text-[11px] font-bold tracking-widest uppercase text-[var(--ink-faint)]",
                                children: "LinkedIn",
                              }),
                              jsx("div", {
                                className: "text-[13px] font-semibold mt-0.5",
                                children: "linkedin.com/in/odugbade-bukola-971704324",
                              }),
                              jsx("div", {
                                className: "text-[11px] text-[var(--ink-muted)] mt-0.5",
                                children: "Professional profile",
                              }),
                            ],
                          }),
                          jsx(ArrowUpRightIcon, {
                            className:
                              "h-4 w-4 group-hover:text-[var(--ibm-blue)] transition-colors",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              jsxs("div", {
                className: "lg:pl-8",
                children: [
                  jsxs("div", {
                    className: "rounded-[12px] bg-[var(--navy)] text-white p-6 md:p-7",
                    children: [
                      jsx("div", {
                        className: "text-[11px] font-bold tracking-[0.2em] uppercase text-white/60",
                        children: "Quick CTA",
                      }),
                      jsx("div", {
                        className: "mt-4 text-[18px] font-bold leading-[1.2]",
                        children: "I audit your last 30 days of sales — free.",
                      }),
                      jsx("p", {
                        className: "mt-3 text-[13px] leading-[1.6] text-white/70",
                        children:
                          "Send your sales sheet (Excel / WhatsApp export). I’ll show your TRUE profit, Stress Givers, and 3 quick wins in 48hrs.",
                      }),
                      jsxs("div", {
                        className: "mt-6 space-y-3",
                        children: [
                          jsxs("a", {
                            href: WHATSAPP_URL,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-full h-12 bg-[#25D366] text-white font-bold text-[14px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors",
                            children: [
                              jsx(WhatsAppIcon, { className: "h-5 w-5" }),
                              " Chat on WhatsApp — +234 704 485 0921",
                            ],
                          }),
                          jsxs("a", {
                            href: EMAIL_URL,
                            className:
                              "w-full h-11 bg-white text-[var(--navy)] font-bold text-[14px] rounded-[6px] flex items-center justify-center gap-2 hover:bg-white/90 transition-colors",
                            children: [
                              jsx(MailIcon, { className: "h-4 w-4" }),
                              " Send Email — bukolaodugbade90@gmail.com",
                            ],
                          }),
                          jsx("button", {
                            onClick: () =>
                              scrollToSection(
                                projectsSectionRef,
                                "projects",
                                "Viewing Projects — proof",
                              ),
                            className:
                              "w-full h-11 bg-white/10 border border-white/20 text-white font-semibold text-[14px] rounded-[6px] hover:bg-white/15 transition-colors",
                            children: "View Proof — Projects",
                          }),
                        ],
                      }),
                      jsxs("div", {
                        className:
                          "mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/60",
                        children: [
                          jsx(CircleCheckIcon, { className: "h-4 w-4" }),
                          " No spam • SME-focused • Nigerian market",
                        ],
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "mt-4 text-[11px] leading-[1.5] text-[var(--ink-muted)]",
                    children: [
                      "© ",
                      new Date().getFullYear(),
                      " Bukola Odugbade (Abduljeleel). Built for SMEs across Nigeria. Clean, corporate, profit-first. IBM blue #0F62FE.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}

/* ##########################################################################
   START THE APP (do not edit)
   ########################################################################## */
ReactDOMClient.createRoot(document.getElementById("root")).render(
  jsx(React.StrictMode, { children: jsx(Portfolio, {}) }),
);
