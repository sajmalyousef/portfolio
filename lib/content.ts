// ─────────────────────────────────────────────────────────────
// All portfolio content. Numbers are sourced from Sajmal's résumé,
// his interview-prep notes, and Cashfree's public Checkout360 page.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sajmal Yousef",
  role: "Product Manager, Cashfree Payments",
  location: "Bengaluru, India",
  headlineTop: "I build and scale",
  headlineAccent: "checkout for SMBs",
  headlineBottom: "from 0 to 1 and beyond.",
  thesis:
    "Product Manager across payments, fintech, and D2C commerce.",
  subthesis:
    "Founding PM for D2C checkout at Cashfree, scaled to $100M in annual TPV, 1,000+ merchants, and a 40% lift in conversion. Right now I am playing with AI, and I want to make it big.",
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
    { value: "1,000+", label: "D2C merchants onboarded" },
  ],
};

export type Section = {
  label: string;
  heading: string;
  body: string[];
  list?: { title: string; text: string }[];
  pull?: string;
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
      "As founding PM, I built and scaled Cashfree's D2C checkout to 1,000+ merchants and $100M in annual TPV, lifting conversion 40% with a 300+ construct offer engine on top.",
    role: "Founding PM, D2C Checkout",
    timeframe: "Cashfree Payments, 2025 to present",
    tags: ["0 to 1", "Conversion", "Offer engine", "Shopify"],
    heroMetrics: [
      { value: "$100M", label: "annual TPV", sub: "built from zero" },
      { value: "+40%", label: "checkout conversion lift", sub: "via A/B experiments" },
      { value: "1,000+", label: "merchants onboarded" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "Every field in checkout is a place to lose the sale",
        body: [
          "A D2C brand spends its entire marketing budget getting a shopper to add to cart. Then the native checkout asks for a name, an address, a pincode, a phone number, an OTP, and a payment method, and a large share of shoppers simply leave. In Indian e-commerce, that drop-off is where growth quietly dies.",
          "I joined as the founding PM for the D2C checkout vertical with a blank slate and a hard target: build a checkout good enough that brands would switch their entire funnel to it, then scale it into a real revenue line.",
        ],
        pull: "Shoppers do not abandon carts. They abandon forms.",
      },
      {
        label: "The build",
        heading: "One tap, powered by a shopper network",
        body: [
          "The core unlock is a shopper network. A returning buyer is recognised by phone number through WhatsApp OTP login, their saved address is prefilled from a base of 120M+ verified profiles, and they check out on a store they have never visited as if they already had an account there. Cart to paid drops to under 30 seconds.",
          "I ran a continuous A/B experimentation loop on every step of the funnel. Removing friction one measured cut at a time is what turned a good checkout into a 40% conversion lift.",
        ],
      },
      {
        label: "Monetisation",
        heading: "An offer engine with 300+ constructs",
        body: [
          "Conversion is only half the story. The other half is the offer, and a discount shown at the wrong moment just trains shoppers to wait for one. So I built an offer engine that evaluates every cart in real time and fires the right incentive at the right moment.",
          "It ships with 300+ offer constructs (buy-one-get-one, free gifts, bank offers, no-cost EMI, and more) that merchants compose themselves, with margin caps, BIN targeting, and per-customer limits so growth never runs ahead of unit economics.",
        ],
        list: [
          { title: "Redemption 3% to 65%", text: "offer adoption grew more than twentyfold once offers became contextual instead of blanket codes." },
          { title: "+25% conversion", text: "the offer engine alone lifted checkout conversion a further 25%." },
          { title: "5X redemption", text: "overall offer redemption scaled five times across the merchant base." },
        ],
        pull: "A blanket coupon is a blunt instrument. A 300 construct offer engine is a scalpel.",
      },
      {
        label: "Onboarding",
        heading: "Getting Shopify brands live without a solutions engineer",
        body: [
          "None of this matters if a merchant cannot switch it on. Most of the market runs on Shopify, so onboarding had to be near zero touch: install, connect, sync discounts, go live. I owned the activation funnel end to end and lifted sign-up to activation from 41% to 55%.",
          "I then extended the addressable market beyond Shopify with custom checkout integrations for 400+ brands, and drove product-led growth through developer-first self-serve APIs, plugins, and a merchant dashboard that reached 300+ daily active users.",
        ],
        list: [
          { title: "41% to 55% activation", text: "cut the steps between sign-up and first live order, measured every drop-off." },
          { title: "400+ brands beyond Shopify", text: "custom integrations expanded the addressable market past the app store." },
          { title: "300+ DAU", text: "self-serve APIs, plugins, and dashboard drove PLG adoption." },
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
      "Conversion is not one big win. It is the sum of a dozen removed frictions and one well-timed offer. And a checkout that is magical for the shopper is worthless until it is trivial for the merchant to switch on, so onboarding is a conversion problem too.",
  },

  // ── 2. RTO ────────────────────────────────────────────────
  {
    slug: "rto",
    order: 2,
    title: "Cutting RTO from 25% to 4%",
    kicker: "Return to Origin",
    oneLiner:
      "COD returns were eating merchant margins. I defined the COD strategy and built RTO Intelligence plus Partial COD, taking return rates from 25% to 4% and unlocking $2.5M in annual revenue.",
    role: "Product Manager, D2C Checkout",
    timeframe: "Cashfree Payments, 2025 to present",
    tags: ["Risk", "COD", "Logistics", "Revenue"],
    heroMetrics: [
      { value: "25→4%", label: "RTO rate on managed orders" },
      { value: "$2.5M", label: "annual revenue unlocked", sub: "Partial COD" },
      { value: "30%", label: "RTO reduction overall" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "A return that costs the brand twice",
        body: [
          "Cash on Delivery still dominates Indian e-commerce, and it hides an ugly tax: Return to Origin. The customer places a COD order, the courier drives it out, nobody answers the door, and the parcel travels all the way back. The brand eats forward shipping, reverse shipping, packaging, and a dead SKU. RTO can quietly swallow a fifth of every COD rupee.",
          "I owned the COD charter end to end, including logistics partnerships, and set out to separate the order that will come back from the one that will not, at the instant of checkout.",
        ],
        pull: "RTO is a tax nobody agreed to pay and everybody keeps paying.",
      },
      {
        label: "The tension",
        heading: "The obvious fix made conversion worse",
        body: [
          "The first lever was Partial COD, asking for a small upfront prepayment on COD orders to filter out low-intent buyers. It reduced RTO sharply, but it also hurt conversion, because friction hits good customers and bad ones alike.",
          "So I reframed the problem. This was not a case of turning COD off. It was a risk-segmentation problem: apply friction only where the risk actually sits, and let everyone else through untouched.",
        ],
      },
      {
        label: "The build",
        heading: "RTO Intelligence, tuned to each merchant",
        body: [
          "I built RTO Intelligence, a risk layer that scores every COD order the moment it is placed, drawing on address quality, buyer history, pincode-level delivery performance, and a base of 2.5B+ logistics data points. The score then drives graded COD controls the merchant configures themselves: allow, block, convert to prepaid, or ask for Partial COD.",
          "Because each brand sets its own risk appetite, a fat-margin label and a thin-margin one run the same engine at different thresholds. That is what let it scale across the merchant base without a rebuild, and what lifted prepaid share along the way.",
        ],
        list: [
          { title: "RTO Intelligence", text: "real-time risk scoring on every COD order, trained on 2.5B+ logistics data points." },
          { title: "Partial COD", text: "upfront prepayment that filtered low-intent orders and unlocked $2.5M in annual revenue." },
          { title: "COD controls", text: "allow, block, prepaid, or partial, set per merchant against their own margins." },
        ],
        pull: "The score is the easy part. Deciding what to do at each threshold is the product.",
      },
    ],
    impact: [
      { value: "25→4%", label: "RTO rate on managed orders" },
      { value: "30%", label: "overall RTO reduction" },
      { value: "$2.5M", label: "annual revenue from Partial COD" },
      { value: "2.5B+", label: "logistics data points modelled" },
    ],
    learned:
      "The hardest part of a risk product is earning the right to act on it. A blanket rule is easy and wrong. The real work was reframing RTO as risk segmentation, then giving each merchant controls tuned to their own economics so they trusted the machine with their checkout.",
  },

  // ── 3. EMI & BNPL ─────────────────────────────────────────
  {
    slug: "emi-bnpl",
    order: 3,
    title: "Scaling checkout financing 1 to 10",
    kicker: "Consumer EMI & BNPL",
    oneLiner:
      "I owned the EMI and BNPL charter across 15+ banks and lenders, scaling card EMI GMV 3X, lifting payment success 45%, and embedding credit at checkout with a whitelabel Pay-in-3.",
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
        heading: "Sticker shock kills high-ticket carts",
        body: [
          "For anything above a few thousand rupees, the price itself becomes the objection. The shopper has the intent and still hesitates at the total, because affordability, not desire, is the wall. EMI and BNPL are the answer, but in India they are a tangle of card EMI across a dozen banks, cardless EMI, and BNPL lenders, each with their own eligibility and rules.",
          "I owned the EMI and BNPL charter across 15+ banks and partners, responsible for the full lifecycle: onboarding, payments, refunds, settlements, and reconciliation.",
        ],
        pull: "People do not buy prices. They buy monthly payments they can picture.",
      },
      {
        label: "The build",
        heading: "Automate onboarding, route intelligently, embed credit",
        body: [
          "Card EMI was held back by manual onboarding and brittle routing. I automated lender onboarding and built dynamic routing that sends each transaction down the path most likely to succeed, which drove 3X GMV and a 45% lift in success rate.",
          "I then went further than card EMI. I built a whitelabel Pay-in-3 that embeds credit directly at checkout for credit-first buyers, and launched BNPL rails with Axio, Lazypay, and Simpl as first-class payment methods.",
        ],
        list: [
          { title: "3X GMV, +45% success", text: "automated onboarding and dynamic routing turned card EMI into a growth engine." },
          { title: "Whitelabel Pay-in-3", text: "embedded credit at checkout for credit-first buyers, driving a 12% conversion uplift." },
          { title: "+30% merchants", text: "launching BNPL (Axio, Lazypay, Simpl) as a payment rail expanded the merchant base 30%." },
        ],
        pull: "Move affordability upstream and checkout stops being where the doubt begins.",
      },
      {
        label: "The rails underneath",
        heading: "Compliance is a feature, not an afterthought",
        body: [
          "Credit at checkout only works if the payment rails are trusted. I led 3DS 2.0 and network tokenization across Visa, Mastercard, and RuPay, improving authentication success while keeping the whole stack compliant with RBI mandates.",
          "That is the unglamorous half of fintech product work, and it is the half that decides whether any of the growth is real or just a demo.",
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
      "Financial products win on framing and on plumbing in equal measure. The same loan is a no as a lump sum and a yes as a monthly line, but neither matters unless onboarding, routing, settlements, and compliance actually hold up underneath.",
  },

  // ── 4. B2B BNPL & Credit ──────────────────────────────────
  {
    slug: "b2b-credit",
    order: 4,
    title: "Embedding credit for B2B marketplaces",
    kicker: "B2B BNPL & Credit",
    oneLiner:
      "I piloted B2B embedded credit for marketplaces like Reliance and Flipkart, partnering with lending providers to extend working capital at the point of purchase.",
    role: "Product Manager, Core Payments",
    timeframe: "Cashfree Payments, 2022 to 2025",
    tags: ["B2B", "Embedded credit", "Working capital", "0 to 1"],
    heroMetrics: [
      { value: "0 to 1", label: "new B2B credit charter" },
      { value: "Reliance, Flipkart", label: "marquee marketplace pilots" },
      { value: "15+", label: "lending partners across the credit charter" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "A missing rung on the ladder",
        body: [
          "A business buying inventory on a marketplace has a cash-flow gap: pay the supplier now, sell over the next 30 to 60 days. A bank line for that gap takes weeks of paperwork and often a no, because small businesses are thin-file and expensive to underwrite one at a time. There is a whole rung missing between consumer BNPL and a proper bank facility.",
          "Coming off the consumer EMI and BNPL charter, I took embedded credit into B2B, a very different animal: larger tickets, thinner data, and real balance-sheet risk.",
        ],
        pull: "The businesses that most need credit are the ones the system finds hardest to read.",
      },
      {
        label: "The build",
        heading: "Credit at the point of purchase",
        body: [
          "I piloted B2B embedded credit for marketplaces like Reliance and Flipkart, partnering with lending providers rather than taking the balance-sheet risk ourselves. The buyer draws working capital at the moment of purchase, sized to their real cash-conversion cycle, and the marketplace closes more and larger orders.",
          "The product work was in the seams: underwriting against the transaction and settlement data that already flows through the platform, and designing the integration so credit felt like a native payment method rather than a separate loan application.",
        ],
      },
    ],
    impact: [
      { value: "0 to 1", label: "B2B embedded credit, launched as a pilot" },
      { value: "Reliance, Flipkart", label: "marquee marketplace partners" },
      { value: "Data-native", label: "underwriting on existing payment flows" },
    ],
    learned:
      "In B2B credit the product and the risk model are the same object. You cannot ship a beautiful flow on top of a policy that loses money. It taught me to hold two disciplines at once: the empathy to say yes to underserved businesses, and the rigour to make each yes one you can defend.",
  },

  // ── 5. SimplQ ─────────────────────────────────────────────
  {
    slug: "simplq",
    order: 5,
    title: "SimplQ, an open-source queue manager",
    kicker: "Open-source project",
    oneLiner:
      "A crowd management platform I ideated and built with 100+ open-source contributors. Piloted at IIM Bangalore student stores, scaled to 2,000+ monthly active users, and selected for incubation at AGBI.",
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
        heading: "Because specs are not proof",
        body: [
          "A PM can spend a career describing products other people build. I wanted to prove I could take an idea the whole way myself. SimplQ came from a simple observation during the pandemic: crowds needed to be managed, and every existing tool needed complex setup.",
          "So I built the opposite, inspired by frictionless tools like Jitsi and Skribbl.io. You generate a queue with a shareable link, send it out, and manage everyone from an admin panel with notifications and direct contact. No installs, no accounts to stand in a line.",
        ],
        pull: "The gap between I think this should exist and here, use it is where you find out who you are.",
      },
      {
        label: "The build",
        heading: "React, Java, and a real community",
        body: [
          "I built it open source with a React frontend and a Java backend, and rallied a community of 100+ contributors around it. That meant doing the actual product-management job on a volunteer team: writing issues, setting direction, keeping it simple against constant pressure to add features.",
          "I led the push for product-market fit, piloted it at student-run stores across IIM Bangalore, and grew it to 2,000+ monthly active users. It was selected for incubation at AGBI.",
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
      "You do not fully understand a product until you have had to build it, not just brief it. SimplQ is why I am confident I can go from PM to builder from day one, and why building alongside a community taught me more about prioritisation than any roadmap ever did.",
  },
];

export const aiProjects = [
  {
    name: "CROScore",
    tagline: "AI conversion-rate-optimization audits",
    description:
      "An AI tool that audits a brand's checkout and conversion funnel and returns a prioritised set of fixes. It takes the CRO instincts I built scaling checkout at Cashfree and puts them into an automated, self-serve product.",
    stack: ["AI / LLM", "Next.js", "CRO", "Growth"],
    href: "#", // ‹PLACEHOLDER live URL›
  },
  {
    name: "CareerScore",
    tagline: "AI career guidance for students",
    description:
      "An AI tool that turns a science-based personality and interests assessment into concrete career and college recommendations, with a downloadable report. Built to make good career guidance accessible at scale.",
    stack: ["AI / LLM", "Next.js", "Psychometrics", "PDF"],
    href: "#", // ‹PLACEHOLDER live URL›
  },
];

export const about = {
  intro: [
    "I am Sajmal, a Product Manager across payments, fintech, and D2C commerce. I spend my time in the least forgiving corner of product, where a bug is not a bad UX, it is someone's money.",
    "As the founding PM for D2C checkout at Cashfree, I built the vertical from zero to $100M in annual TPV and 1,000+ merchants. Before that I owned the EMI, BNPL, and core payments charter, scaling checkout financing 3X. I started as a software engineer at JP Morgan, where I built an AI engine serving 4,000+ banking clients and cut email servicing time by 95%.",
  ],
  throughline: [
    "The thread through all of it is the same: life is hard enough, so I find the thing quietly making it harder, sit with it long enough to truly understand it, and build something that makes people's lives easier and earns big for the business. I care about growth and monetisation as outcomes, not vanity metrics.",
    "Right now I am playing with AI, and I want to make it big with it. I have built with AI since JP Morgan, where I shipped an engine for 4,000+ banking clients, then an AI insights mailer for 1,000+ merchants, and I am now building CROScore and CareerScore on the side. Same shape of problem, bigger canvas.",
  ],
  values: [
    { title: "Ship the proof, not just the product", text: "A number a merchant can see beats a promise a merchant has to believe." },
    { title: "Reframe before you build", text: "Partial COD hurt conversion until I reframed RTO as risk segmentation. The best move is often a better question." },
    { title: "Own the whole stack", text: "Growth is worthless if settlements, routing, and compliance do not hold up underneath it. I own both halves." },
  ],
  credentials: [
    { label: "MBA, IIM Bangalore", detail: "Post Graduate Programme, 2020 to 2022" },
    { label: "B.Tech CSE, NIT Calicut", detail: "Computer Science, 2014 to 2018" },
    { label: "Community Winner, UN Hackathon", detail: "1 of 8 from 2,000+ teams, 2022" },
    { label: "National Finalist, PwC Innovation Challenge", detail: "12 of 1,500+ teams, 2021" },
    { label: "2 IEEE papers on AI malware detection", detail: "40+ citations, 2017" },
  ],
};
