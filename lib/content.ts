// ─────────────────────────────────────────────────────────────
// All portfolio content. Numbers are sourced from Sajmal's résumé,
// his interview-prep notes, and Cashfree's public Checkout360 page.
// Plain, factual voice. No named clients.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sajmal Yousef",
  role: "Product Manager, Cashfree Payments",
  location: "Bengaluru, India",
  headshot: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/headshot.jpg`,
  headlineTop: "I build and scale",
  headlineAccent: "checkout for SMBs",
  headlineBottom: "from 0 to 1 and beyond.",
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
  embedUrl?: string;
  press?: { label: string; href: string };
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
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404492798001020928?collapsed=1",
    press: {
      label: "Featured in YourStory",
      href: "https://yourstory.com/2026/06/cashfree-payments-one-click-checkout-sepoy-co-crack-d2c-conversion-code",
    },
  },

  // ── 2. RTO ────────────────────────────────────────────────
  {
    slug: "rto",
    order: 2,
    title: "Cutting RTO from 25% to 4%",
    kicker: "Return to Origin",
    oneLiner:
      "COD returns were eating merchant margins. I built RTO Intelligence and Partial COD, cutting return rates from 25% to 4% and unlocking $2.5M in annual revenue.",
    role: "Product Manager, D2C Checkout",
    timeframe: "Cashfree Payments, 2025 to present",
    tags: ["Risk", "COD", "Logistics", "Revenue"],
    heroMetrics: [
      { value: "25% → 4%", label: "RTO rate on managed orders" },
      { value: "$2.5M", label: "annual revenue unlocked", sub: "Partial COD" },
      { value: "30%", label: "RTO reduction overall" },
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
          "RTO Intelligence scores every COD order in real time on address quality, buyer history, pincode performance, and 2.5B+ logistics data points. Merchants set their own controls per order: allow, block, convert to prepaid, or Partial COD. RTO fell from 25% to 4%, and Partial COD added $2.5M in annual revenue.",
        ],
      },
    ],
    impact: [
      { value: "25% → 4%", label: "RTO rate on managed orders" },
      { value: "30%", label: "overall RTO reduction" },
      { value: "$2.5M", label: "annual revenue from Partial COD" },
      { value: "2.5B+", label: "logistics data points modelled" },
    ],
    learned:
      "A risk product only works if merchants trust it enough to act on the score. Giving each merchant controls tuned to their own margins is what earned that trust.",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7450766407153397761?collapsed=1",
  },

  // ── 3. EMI & BNPL ─────────────────────────────────────────
  {
    slug: "emi-bnpl",
    order: 3,
    title: "Scaling checkout financing 1 to 10",
    kicker: "Consumer EMI & BNPL",
    oneLiner:
      "I owned the EMI and BNPL charter across 15+ banks and lenders. Card EMI GMV grew 3X, payment success rose 45%, and I embedded credit at checkout with a whitelabel Pay-in-3.",
    role: "Product Manager, Core Payments",
    timeframe: "Cashfree Payments, 2022 to 2025",
    tags: ["Credit", "BNPL", "EMI", "Growth"],
    heroMetrics: [
      { value: "3X", label: "card EMI GMV growth" },
      { value: "+45%", label: "payment success rate" },
      { value: "15+", label: "banks and lending partners" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "Above a few thousand rupees, price is the objection",
        body: [
          "EMI and BNPL fix affordability, but in India that means card EMI across a dozen banks, cardless EMI, and several BNPL lenders, each with their own eligibility and rules.",
          "I owned the full charter across 15+ banks and partners: onboarding, payments, refunds, settlements, and reconciliation.",
        ],
      },
      {
        label: "What I built",
        heading: "Automated onboarding, dynamic routing, embedded credit",
        body: [
          "I automated lender onboarding and built dynamic routing that sends each transaction down the path most likely to succeed. Card EMI GMV grew 3X and success rose 45%.",
          "I built a whitelabel Pay-in-3 that embeds credit at checkout, which lifted conversion 12%, and launched BNPL rails with top lenders, expanding the merchant base 30%. I also led 3DS 2.0 and tokenization across Visa, Mastercard, and RuPay to keep the stack RBI-compliant.",
        ],
      },
    ],
    impact: [
      { value: "3X", label: "card EMI GMV" },
      { value: "+45%", label: "payment success rate" },
      { value: "+12%", label: "conversion from Pay-in-3" },
      { value: "+30%", label: "merchants via BNPL rails" },
    ],
    learned:
      "Framing and plumbing matter equally. A loan is a no as a lump sum and a yes as a monthly payment, but only if onboarding, routing, and settlements hold up underneath.",
  },

  // ── 4. B2B BNPL & Credit ──────────────────────────────────
  {
    slug: "b2b-credit",
    order: 4,
    title: "Embedding credit for B2B marketplaces",
    kicker: "B2B BNPL & Credit",
    oneLiner:
      "I piloted B2B embedded credit for large marketplaces, partnering with lenders to extend working capital at the point of purchase.",
    role: "Product Manager, Core Payments",
    timeframe: "Cashfree Payments, 2022 to 2025",
    tags: ["B2B", "Embedded credit", "Working capital", "0 to 1"],
    heroMetrics: [
      { value: "0 to 1", label: "new B2B credit charter" },
      { value: "15+", label: "lending partners integrated" },
      { value: "Embedded", label: "credit at the point of purchase" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "A cash-flow gap banks are slow to fund",
        body: [
          "A business buying inventory on a marketplace pays the supplier now and sells over the next 30 to 60 days. Bank credit for that gap is slow and often declined, because small businesses are thin-file.",
          "Coming off the consumer credit charter, I took embedded credit into B2B: bigger tickets, thinner data, and real balance-sheet risk.",
        ],
      },
      {
        label: "What I built",
        heading: "Credit at the point of purchase",
        body: [
          "I piloted embedded credit for large marketplaces, partnering with lenders rather than holding the risk ourselves. Buyers draw working capital at purchase, sized to their cash cycle.",
          "Underwriting runs on the transaction and settlement data already on the platform, so credit works like a payment method, not a separate loan application.",
        ],
      },
    ],
    impact: [
      { value: "0 to 1", label: "B2B embedded credit, launched as a pilot" },
      { value: "15+", label: "lending partners integrated" },
      { value: "Data-native", label: "underwriting on existing payment flows" },
    ],
    learned:
      "In B2B credit the product and the risk model are the same thing. You cannot ship a good flow on top of a policy that loses money.",
  },

  // ── 5. SimplQ ─────────────────────────────────────────────
  {
    slug: "simplq",
    order: 5,
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

export const about = {
  intro: [
    "I was raised on three things: do your best, be kind, and stay humble. Nobody in my world talked about IITs or IIMs or how big a life could get, so I just tried to be good at whatever was in front of me.",
    "People I met along the way believed in me and helped me reach NIT Calicut, which gave me something I had never been given permission to do: dream. I studied Computer Science because it looked like a safe, well-paying desk job.",
    "My first job checked off the small ambitions I grew up with. But the real pull came from something quieter, seeing a person use what I built and watching their day get simpler. That, it turned out, is called product management, and until 2020 I did not even know it was a job.",
    "I built things with friends, chased real adoption, and found deep satisfaction in it. IIM Bangalore sharpened me and surrounded me with big dreamers. Today I build payments and checkout for small businesses, always close to the people using it, trying to make their lives easier and the business bigger.",
  ],
  throughline: [
    "I have built with AI since JP Morgan, where I shipped an engine for 4,000+ banking clients, then an AI insights mailer for 1,000+ merchants. I am now building CareerFind, CROScore, and Watch This on the side.",
  ],
  values: [
    { title: "Ship the proof, not just the product", text: "A number a merchant can see beats a promise a merchant has to believe." },
    { title: "Reframe before you build", text: "Partial COD hurt conversion until I reframed RTO as risk segmentation. The better move is often a better question." },
    { title: "Own the whole stack", text: "Growth is worthless if settlements, routing, and compliance do not hold up underneath it." },
  ],
  credentials: [
    { label: "MBA, IIM Bangalore", detail: "Post Graduate Programme, 2020 to 2022" },
    { label: "B.Tech CSE, NIT Calicut", detail: "Computer Science, 2014 to 2018" },
    { label: "Community Winner, UN Hackathon", detail: "1 of 8 from 2,000+ teams, 2022" },
    { label: "National Finalist, PwC Innovation Challenge", detail: "12 of 1,500+ teams, 2021" },
    { label: "2 IEEE papers on AI malware detection", detail: "40+ citations, 2017" },
  ],
};
