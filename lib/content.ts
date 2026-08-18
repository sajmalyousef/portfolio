// ─────────────────────────────────────────────────────────────
// All portfolio content. Numbers are sourced from Sajmal's résumé,
// his interview-prep notes, and Cashfree's public Checkout360 page.
// Plain, factual voice. No named clients.
// ─────────────────────────────────────────────────────────────

// Google Analytics 4 Measurement ID (e.g. "G-XXXXXXXXXX").
// Leave empty to disable analytics. Public value, safe to commit.
export const GA_MEASUREMENT_ID = "G-6YRCZBYMVM";

export const profile = {
  name: "Sajmal Yousef",
  role: "Product Manager",
  location: "Bengaluru, India",
  headshot: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/headshot.jpg`,
  headlineLead: "I build and scale",
  headlineAccent: "acquisition and growth products",
  headlineRest: "for SMBs, from 0 to 1 and beyond.",
  thesis:
    "Product Manager across payments, fintech, and D2C commerce.",
  subthesis:
    "Founding PM for D2C checkout at Cashfree. I scaled it to $100M in annual TPV, 3,000+ businesses, and a 40% lift in conversion.",
  links: {
    email: "yousefsajmal1@gmail.com",
    phone: "+91-8714268343",
    linkedin: "https://www.linkedin.com/in/sajmal-yousef/",
    github: "https://github.com/SimplQ",
    resume: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`,
  },
  companies: [
    "Cashfree Payments",
    "JP Morgan Chase",
    "IIM Bangalore",
    "NIT Calicut",
  ],
  heroStats: [
    { value: "$100M", label: "annual TPV scaled from zero" },
    { value: "+40%", label: "checkout conversion lift" },
    { value: "3,000+", label: "D2C businesses onboarded" },
  ],
};

export type Section = {
  label: string;
  heading: string;
  body: string[];
};

export type Metric = { value: string; label: string; sub?: string };

export type CaseStudy = {
  slug: string;
  order: number;
  title: string;
  kicker: string;
  oneLiner: string;
  role: string;
  timeframe: string;
  tags: string[];
  heroMetrics: Metric[];
  sections: Section[];
  impact: Metric[];
  learned: string;
};

export const caseStudies: CaseStudy[] = [
  // ── 1. One-Click Checkout + Offer Engine ─────────────────
  {
    slug: "one-click-checkout",
    order: 1,
    title: "Scaling D2C checkout from 0 to $100M TPV",
    kicker: "One-Click Checkout + Offer Engine",
    oneLiner:
      "As founding PM, I built and scaled Cashfree's D2C checkout to 3,000+ businesses and $100M in annual TPV, with conversion up 40% and a 300+ construct offer engine on top.",
    role: "Founding PM, D2C Checkout",
    timeframe: "Cashfree Payments, 2025 to present",
    tags: ["0 to 1", "Conversion", "Offer engine", "Shopify"],
    heroMetrics: [
      { value: "$100M", label: "annual TPV", sub: "built from zero" },
      { value: "+40%", label: "checkout conversion lift" },
      { value: "3,000+", label: "businesses onboarded" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "Checkout is where D2C conversion leaks",
        body: [
          "Most of a D2C brand's budget goes into getting a shopper to add to cart. The native checkout then asks for name, address, pincode, phone, OTP, and a payment method, and a large share of shoppers drop off.",
          "I joined as the founding PM for D2C checkout with a blank slate. The goal was a checkout good enough for brands to move their whole funnel to it, then to scale it into a revenue line.",
        ],
      },
      {
        label: "What I built",
        heading: "One-tap checkout on a shopper network",
        body: [
          "Returning buyers are recognised by phone through WhatsApp OTP. Addresses prefill from 120M+ verified profiles, so a shopper can check out on a store they have never visited. Cart to paid takes under 30 seconds.",
          "I ran continuous A/B tests on every step of the funnel. Removing friction one measured cut at a time lifted conversion 40%.",
        ],
      },
      {
        label: "Monetisation",
        heading: "An offer engine with 300+ constructs",
        body: [
          "I built an offer engine that evaluates each cart in real time. It ships with 300+ offer constructs, including buy-one-get-one, free gifts, bank offers, and no-cost EMI, all configured by the merchant with margin caps and BIN targeting.",
          "Offer redemption went from 3% to 65%, grew 5X across the base, and added another 25% to conversion.",
        ],
      },
      {
        label: "Onboarding",
        heading: "Near zero-touch activation for Shopify",
        body: [
          "Most brands run on Shopify, so onboarding is install, connect, sync discounts, go live. I owned the activation funnel and took sign-up to activation from 41% to 55%, measuring every drop-off.",
          "I then added 400+ non-Shopify brands through custom integrations and drove self-serve adoption through developer-first APIs, plugins, and a dashboard with 300+ daily active users.",
        ],
      },
    ],
    impact: [
      { value: "$100M", label: "annual TPV, from zero" },
      { value: "+40%", label: "checkout conversion" },
      { value: "5X", label: "offer redemption" },
      { value: "41→55%", label: "sign-up to activation" },
    ],
    learned:
      "Conversion came from removing friction step by step and timing offers well. Getting merchants live with no friction mattered just as much as the checkout itself.",
  },

  // ── 2. RTO ────────────────────────────────────────────────
  {
    slug: "rto",
    order: 2,
    title: "Cutting RTO from 25% to 4%",
    kicker: "Return to Origin",
    oneLiner:
      "COD returns were eating merchant margins. I built RTO Intelligence and Partial COD controls, cutting return rates from 25% to 4%.",
    role: "Product Manager, D2C Checkout",
    timeframe: "Cashfree Payments, 2025 to present",
    tags: ["Risk", "COD", "Logistics", "Revenue"],
    heroMetrics: [
      { value: "25% → 4%", label: "RTO rate on managed orders" },
      { value: "30%", label: "RTO reduction overall" },
      { value: "2.5B+", label: "logistics data points modelled" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "COD returns eat the margin",
        body: [
          "Cash on Delivery dominates Indian e-commerce and comes with high Return to Origin. A COD order is placed, the courier delivers, nobody accepts it, and the parcel ships back. The brand pays forward and reverse shipping on a sale it never made. RTO ran around 25%.",
          "I owned the COD charter end to end, including logistics partnerships.",
        ],
      },
      {
        label: "What I built",
        heading: "RTO Intelligence and Partial COD",
        body: [
          "Partial COD asks for a small upfront payment on COD orders to filter low-intent buyers. It cut RTO but also hurt conversion, so I reframed it as risk segmentation: add friction only to risky orders.",
          "RTO Intelligence scores every COD order in real time on address quality, buyer history, pincode performance, and 2.5B+ logistics data points. Merchants set their own controls per order: allow, block, convert to prepaid, or Partial COD. RTO fell from 25% to 4%.",
        ],
      },
    ],
    impact: [
      { value: "25% → 4%", label: "RTO rate on managed orders" },
      { value: "30%", label: "overall RTO reduction" },
      { value: "2.5B+", label: "logistics data points modelled" },
      { value: "Real-time", label: "scoring on every COD order" },
    ],
    learned:
      "A risk product only works if merchants trust it enough to act on the score. Giving each merchant controls tuned to their own margins is what earned that trust.",
  },

  // ── 3. EMI & BNPL ─────────────────────────────────────────
  {
    slug: "checkout-financing",
    order: 3,
    title: "Scaling checkout financing",
    kicker: "Core Payments",
    oneLiner:
      "I owned the EMI, BNPL, and core payments credit charter across 15+ banks and PSPs. I scaled Card EMI 3X, added new ways to pay at checkout, and piloted B2B credit for marketplaces.",
    role: "Product Manager, Core Payments",
    timeframe: "Cashfree Payments, 2022 to 2025",
    tags: ["Credit", "EMI", "BNPL", "B2B"],
    heroMetrics: [
      { value: "3X", label: "card EMI GMV growth" },
      { value: "+45%", label: "payment success rate" },
      { value: "15+", label: "banks and PSPs integrated" },
    ],
    sections: [
      {
        label: "The charter",
        heading: "One credit charter, 15+ banks and PSPs",
        body: [
          "I owned the EMI and BNPL charter, integrating 15+ banks and PSPs and running the full flow behind it: payments, refunds, settlements, and reconciliation.",
          "In India this market is fragmented. Card EMI alone spans a dozen banks, each with its own eligibility, tenures, and rules, so a lot of the work was making all of it feel like one clean option to the shopper.",
        ],
      },
      {
        label: "Card EMI",
        heading: "Dynamic routing, 3X GMV",
        body: [
          "I scaled Card EMI across the merchant base. The biggest lever was dynamic routing, which sends each transaction down the path most likely to go through. That took the success rate up 45% and grew GMV 3X.",
        ],
      },
      {
        label: "New ways to pay",
        heading: "More payment options at checkout",
        body: [
          "From there I kept adding ways to pay that fit how Indian shoppers actually buy. I built a whitelabel Pay-in-3 that embeds credit at checkout for credit-first buyers, which lifted conversion 12%. I launched BNPL with Axio, Lazypay, and Simpl as a full payment rail through top lending PSPs, which grew the merchant base 30%.",
          "I also introduced partial payments on COD, a localized construct that lets a shopper pay part of the order upfront. It became a real revenue line at around $25M a year. And I integrated gift cards as a new prepaid paymode, widening alternative payment coverage and adding another way to convert.",
        ],
      },
      {
        label: "B2B credit and the rails",
        heading: "B2B credit, and the plumbing underneath",
        body: [
          "I piloted B2B embedded credit for large marketplaces, partnering with lending providers so businesses could draw working capital right at the point of purchase, underwritten on the payment data they already generate.",
          "Underneath all of it, I led 3DS 2.0 and tokenization across Visa, Mastercard, and RuPay, which improved authentication and kept the stack compliant with RBI mandates.",
        ],
      },
    ],
    impact: [
      { value: "3X", label: "card EMI GMV" },
      { value: "+45%", label: "payment success rate" },
      { value: "$25M", label: "annual revenue from Partial COD" },
      { value: "+30%", label: "merchants via BNPL rails" },
    ],
    learned:
      "Framing and plumbing matter equally. A big cart is a no as a lump sum and a yes as a monthly line or a part-payment, but only if onboarding, routing, settlements, and compliance hold up underneath.",
  },

  // ── 4. SimplQ ─────────────────────────────────────────────
  {
    slug: "simplq",
    order: 4,
    title: "SimplQ, an open-source queue manager",
    kicker: "Open-source project",
    oneLiner:
      "An open-source crowd-management tool I built with 100+ contributors. Piloted at IIM Bangalore, grew to 2,000+ monthly active users, and selected for incubation at AGBI.",
    role: "Creator and product lead",
    timeframe: "2020 to 2022",
    tags: ["0 to 1", "Open source", "PMF", "Full-stack"],
    heroMetrics: [
      { value: "2,000+", label: "monthly active users" },
      { value: "100+", label: "open-source contributors" },
      { value: "AGBI", label: "selected for incubation" },
    ],
    sections: [
      {
        label: "Why",
        heading: "Build it end to end, not just spec it",
        body: [
          "I wanted to take an idea the whole way myself. SimplQ came from a simple problem during the pandemic: managing crowds without complex setup.",
        ],
      },
      {
        label: "What I built",
        heading: "Shareable queues, React and Java, open source",
        body: [
          "You create a queue with a shareable link and manage everyone from an admin panel with notifications. I built it open source with a React frontend and a Java backend, and rallied 100+ contributors around it.",
          "I led product-market fit, piloted it at IIM Bangalore student stores, grew it to 2,000+ monthly active users, and it was selected for incubation at AGBI.",
        ],
      },
    ],
    impact: [
      { value: "2,000+", label: "monthly active users" },
      { value: "100+", label: "open-source contributors" },
      { value: "IIMB", label: "piloted at student-run stores" },
      { value: "AGBI", label: "selected for incubation" },
    ],
    learned:
      "Building it myself taught me more about prioritisation than any roadmap. You understand a product differently once you have had to build it.",
  },
];

export const aiProjects = [
  {
    name: "CROScore",
    tagline: "AI conversion-rate-optimization audits",
    description:
      "An AI tool that audits a brand's checkout and conversion funnel and returns a prioritised set of fixes. It takes the CRO work I did at Cashfree and turns it into a self-serve product.",
    stack: ["AI / LLM", "Next.js", "CRO", "Growth"],
    href: "#", // ‹PLACEHOLDER live URL›
  },
  {
    name: "CareerFind",
    tagline: "Career decisions, made logical",
    description:
      "Most Indian kids choose a career from what relatives say at dinner, what their friends pick, or which coaching institute has the biggest banner. They are 15-year-olds making 40-year decisions. CareerFind uses real psychological frameworks instead: 20 questions, a detailed report, and a clear read on what fits and what does not.",
    stack: ["AI / LLM", "Next.js", "Psychometrics", "PDF"],
    href: "https://careerfindapp.vercel.app/",
  },
  {
    name: "Watch This",
    tagline: "AI that finds what to watch",
    description:
      "Picking a movie usually means digging through Reddit threads, Instagram reels, and review sites first. Watch This does that for you: it reads the social web for real opinions and tells you what is worth watching.",
    stack: ["AI / LLM", "Recommendations", "Social signals"],
    href: "https://watch-this--sajmaly.replit.app/",
  },
];

export const featured = {
  posts: [
    {
      tag: "Conversion",
      line: "Why checkout conversion is the cheapest growth lever when CAC keeps rising.",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404492798001020928?compact=1",
    },
    {
      tag: "RTO",
      line: "Optimising for orders delivered, not just orders placed.",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7450766407153397761?compact=1",
    },
  ],
  press: [
    {
      source: "YourStory",
      title:
        "How Cashfree's One-Click Checkout and Sepoy & Co cracked the D2C conversion code",
      href: "https://yourstory.com/2026/06/cashfree-payments-one-click-checkout-sepoy-co-crack-d2c-conversion-code",
    },
    {
      source: "Livemint",
      title:
        "KreditBee partners Cashfree Payments to offer online checkout finance",
      href: "https://www.livemint.com/companies/news/kreditbee-partners-cashfree-payments-to-offer-online-checkout-finance-11661240748876.html",
    },
    {
      source: "Times of India",
      title:
        "FreeCharge partners with Cashfree Payments, offers Buy Now Pay Later",
      href: "https://timesofindia.indiatimes.com/business/india-business/freecharge-partners-with-cashfree-payments-offers-buy-now-pay-later/articleshow/94479258.cms",
    },
  ],
};

export const about = {
  intro: [
    "I am a product manager working at the intersection of fintech and e-commerce. I studied Computer Science at NIT Calicut and started out as an engineer at JP Morgan.",
    "Product pulled me in for a simple reason: I liked watching people use something I built and having it make their day easier. I found out that has a name in 2020, did an MBA at IIM Bangalore, and have built products ever since.",
    "Today I build payments, checkout, and credit for small businesses. It is careful work, real money is moving, and I like that it forces you to get the details right.",
  ],
  throughline: [
    "I have built with AI since JP Morgan, where I shipped an engine for 4,000+ banking clients, and later an AI insights mailer for 1,000+ merchants. Lately I build with it on the side: CareerFind, CROScore, and Watch This.",
  ],
  values: [
    { title: "Stay close to the user", text: "The best calls come from watching real people use what I built." },
    { title: "Ask the better question", text: "A reframe usually beats more building." },
    { title: "Show the number", text: "Proof someone can see beats a promise they have to trust." },
  ],
  credentials: [
    { label: "MBA, IIM Bangalore", detail: "Post Graduate Programme, 2020 to 2022" },
    { label: "B.Tech CSE, NIT Calicut", detail: "Computer Science, 2014 to 2018" },
    { label: "Community Winner, UN Hackathon", detail: "1 of 8 from 2,000+ teams, 2022" },
    { label: "National Finalist, PwC Innovation Challenge", detail: "12 of 1,500+ teams, 2021" },
    { label: "2 IEEE papers on AI malware detection", detail: "40+ citations, 2017" },
  ],
};
