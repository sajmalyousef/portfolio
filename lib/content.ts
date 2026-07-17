// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Metrics wrapped in ‹ › are
// PLACEHOLDERS — Sajmal to replace with real, cleared numbers.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sajmal Yousef",
  role: "Product Manager, Cashfree Payments",
  location: "Bengaluru, India",
  thesis:
    "I take ambiguous, high-stakes problems — the ones where real money is on the line — and turn them into products people trust.",
  subthesis:
    "For five years that's meant checkout, credit, and payments. Next, I want to do it for AI.",
  // ‹PLACEHOLDER› — swap in real links
  links: {
    email: "hello@example.com", // ‹PLACEHOLDER›
    linkedin: "https://linkedin.com/in/your-handle", // ‹PLACEHOLDER›
    github: "https://github.com/your-handle", // ‹PLACEHOLDER›
    resume: "/resume.pdf", // ‹PLACEHOLDER› drop a PDF in /public
  },
  heroStats: [
    { value: "₹‹X›Cr+", label: "GMV influenced across checkout & credit" },
    { value: "‹X›%", label: "peak checkout conversion lift" },
    { value: "‹X›k+", label: "merchants onboarded" },
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
  // ── 1. RTO ────────────────────────────────────────────────
  {
    slug: "rto",
    order: 1,
    title: "Killing the return before it ships",
    kicker: "Return to Origin",
    oneLiner:
      "COD orders that never get delivered quietly bleed D2C brands. I built the risk layer that stops the bad ones at checkout.",
    role: "Product lead — RTO & risk",
    timeframe: "‹2023–2024›",
    tags: ["Risk modelling", "COD", "Checkout", "D2C"],
    heroMetrics: [
      { value: "‹X›%", label: "reduction in RTO rate", sub: "on protected orders" },
      { value: "₹‹X›Cr", label: "shipping loss avoided", sub: "annualised" },
      { value: "‹X›%", label: "orders auto-cleared", sub: "no friction added" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "A return that costs you twice",
        body: [
          "In Indian e-commerce, Cash on Delivery still rules. And COD hides an ugly tax: Return to Origin. The customer places an order, the courier drives it out, nobody answers the door — or the buyer changes their mind — and the parcel travels all the way back. The brand eats forward shipping, reverse shipping, packaging, and a dead SKU that's now been on a two-week road trip.",
          "For a mid-size D2C brand, RTO can quietly swallow a fifth of every COD rupee. It's the kind of problem everyone knows about and nobody owns, because it lives in the seam between payments, logistics, and the customer's intent — none of which talk to each other.",
        ],
        pull: "RTO is a tax nobody agreed to pay and everybody keeps paying.",
      },
      {
        label: "The constraint",
        heading: "You can't just ban COD",
        body: [
          "The obvious fix — turn off COD for risky orders — is also the worst one. COD is the trust mechanism that lets a first-time buyer in a tier-3 town click 'buy'. Kill it and you kill conversion, especially exactly where growth comes from.",
          "So the real problem wasn't 'stop returns.' It was 'separate the order that will come back from the one that won't — at the instant of checkout, in a few hundred milliseconds, without making the good customer feel accused.'",
        ],
      },
      {
        label: "What I did",
        heading: "A risk score that acts, not just warns",
        body: [
          "I scoped an RTO risk engine that scores every COD order the moment it's placed — pulling signals from address quality, buyer history across the network, pincode-level delivery performance, cart composition, and velocity patterns.",
          "The score alone is useless; it has to do something. So the product wasn't a dashboard, it was a set of graded interventions the merchant could tune:",
        ],
        list: [
          { title: "Green orders", text: "sail through untouched — the vast majority. Zero added friction is the whole point." },
          { title: "Amber orders", text: "get a nudge: a prepaid incentive, a lightweight OTP address confirmation, or a small COD fee that reframes intent." },
          { title: "Red orders", text: "convert to prepaid-only, or route to a confirmation step — the brand's own rule, not ours." },
        ],
        pull: "The score is the easy part. Deciding what to do at each threshold is the product.",
      },
      {
        label: "How it worked",
        heading: "Tuned to the merchant's own economics",
        body: [
          "The lever that made it land was letting each merchant set their own risk appetite. A brand with fat margins wants to protect conversion and accept some RTO; a thin-margin brand wants to clamp down. Same engine, different thresholds — so the product fit a fashion label and a supplements brand without a rebuild.",
          "We shipped it as a default-on layer inside checkout with a live view of what was being caught and what it was saving, so the merchant could see the trade in rupees and trust the machine.",
        ],
      },
    ],
    impact: [
      { value: "‹X›%", label: "RTO reduction on protected orders" },
      { value: "₹‹X›Cr", label: "annualised loss avoided" },
      { value: "‹X›%", label: "of orders needed zero intervention" },
      { value: "‹X›", label: "merchants live on the risk layer" },
    ],
    learned:
      "The hardest part of a risk product isn't the model — it's earning the right to act on it. Merchants won't hand you the checkout unless they can see, in their own numbers, that you're saving more than you're scaring away. Ship the proof alongside the product, not after it.",
  },

  // ── 2. One-Click Checkout + Offer Engine ─────────────────
  {
    slug: "one-click-checkout",
    order: 2,
    title: "Turning intent into a single tap",
    kicker: "One-Click Checkout + Offer Engine",
    oneLiner:
      "Every extra field in checkout is a place to lose the sale. I built the one-tap flow and the offer engine that decides, in real time, what to show to close it.",
    role: "Product lead — OCC & offers",
    timeframe: "‹2023–2025›",
    tags: ["Conversion", "Checkout", "Offer engine", "Shopify"],
    heroMetrics: [
      { value: "‹X›%", label: "conversion lift vs. native checkout" },
      { value: "‹X›s", label: "median time to pay" },
      { value: "‹X›k+", label: "merchants onboarded" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "The checkout is where growth goes to die",
        body: [
          "A brand spends everything getting a shopper to 'add to cart.' Then the native checkout asks them to type a name, an address, a pincode, a phone number, hunt for an OTP, pick a payment method — and a huge share simply leave. Every field is a cliff edge.",
          "The fix everyone wanted was 'Amazon-style one-click.' The catch: Amazon owns the account, the saved address, and the card. A payments company has to recreate that magic across thousands of independent merchants who share nothing.",
        ],
        pull: "The shopper doesn't abandon carts. They abandon forms.",
      },
      {
        label: "The constraint",
        heading: "One identity across a thousand stores",
        body: [
          "The unlock is a shopper network: recognise a returning buyer by phone number, pull their saved addresses and payment preferences, and let them check out on a store they've never visited before as if they had an account there.",
          "That only works if the network is big enough to recognise most shoppers, which is a cold-start problem — the flow is magical at scale and mediocre on day one. Getting from one to the other was the real product work.",
        ],
      },
      {
        label: "What I did",
        heading: "Collapse the flow, then sweeten it",
        body: [
          "First, collapse checkout to its irreducible core: enter phone, verify, confirm a prefilled address, pay. Everything that could be remembered, we remembered. Everything that could be inferred, we inferred.",
          "Then the second half of conversion: the offer. A discount shown at the wrong moment trains people to always wait for one; the right offer at the right moment tips a hesitating shopper over the line. So I built an offer engine that evaluates every cart in real time against merchant-configured rules.",
        ],
        list: [
          { title: "Contextual triggers", text: "first-time buyer, cart value threshold, payment method, prepaid vs COD, time-of-day — offers fire on conditions, not blanket codes." },
          { title: "Prepaid nudges", text: "a small incentive to pay online instead of COD — which also feeds straight into the RTO problem." },
          { title: "Merchant self-serve", text: "brands compose their own offers in the dashboard and see redemption and margin impact live." },
        ],
        pull: "A discount is a blunt instrument. An offer engine makes it a scalpel.",
      },
      {
        label: "Onboarding",
        heading: "Getting Shopify brands live in minutes, not weeks",
        body: [
          "None of this matters if a merchant can't turn it on. The bulk of the market runs on Shopify, so onboarding had to be near-zero-touch: install, connect, map the theme, go live — without a solutions engineer holding your hand.",
          "I owned the activation funnel end to end: cutting steps between 'signed up' and 'first live order,' instrumenting where brands dropped off, and turning the messy long tail of theme quirks and edge-case configs into a self-serve flow. The metric I cared about wasn't signups — it was time-to-first-live-order and the share of merchants who got there alone.",
        ],
        list: [
          { title: "App-store install", text: "one-click install from the Shopify app store, no contract-first gate." },
          { title: "Guided go-live", text: "a checklist that takes a brand from connected to live checkout with clear, reversible steps." },
          { title: "Funnel instrumentation", text: "every drop-off point measured, so onboarding improved on evidence, not anecdote." },
        ],
      },
    ],
    impact: [
      { value: "‹X›%", label: "conversion lift vs. native checkout" },
      { value: "‹X›k+", label: "merchants onboarded" },
      { value: "‹X›%", label: "of merchants self-serve to go-live" },
      { value: "‹X›%", label: "of returning shoppers recognised" },
    ],
    learned:
      "Conversion isn't one big win — it's the sum of a dozen removed frictions and one well-timed offer. And the product that removes friction for the shopper is worthless until you've removed the friction for the merchant to switch it on. Onboarding is a conversion problem too.",
  },

  // ── 3. EMI & BNPL ─────────────────────────────────────────
  {
    slug: "emi-bnpl",
    order: 3,
    title: "Making the price feel affordable",
    kicker: "Consumer EMI & BNPL",
    oneLiner:
      "A ₹12,000 cart scares a shopper. '₹999/month' doesn't. I built the affordability layer that reframes the price at the moment of decision.",
    role: "Product lead — EMI & BNPL",
    timeframe: "‹2022–2024›",
    tags: ["Credit", "BNPL", "EMI", "Checkout"],
    heroMetrics: [
      { value: "‹X›%", label: "AOV uplift on EMI-eligible carts" },
      { value: "‹X›", label: "lenders & card networks integrated" },
      { value: "‹X›%", label: "of high-ticket orders on EMI/BNPL" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "Sticker shock kills high-ticket carts",
        body: [
          "For anything above a few thousand rupees, the price itself becomes the objection. The shopper wants the product, has the intent, and still hesitates at the total. Affordability — not desire — is the wall.",
          "EMI and BNPL are the answer, but in India they're a tangle: card-based EMI across a dozen banks each with their own tenures and rules, cardless EMI, and BNPL lenders with their own eligibility and underwriting. To the shopper it should feel like one clean choice. Behind the glass it's anything but.",
        ],
        pull: "People don't buy prices. They buy monthly payments they can picture.",
      },
      {
        label: "The constraint",
        heading: "Complexity that has to disappear",
        body: [
          "Every lender has different eligibility, tenure options, interest treatment, and no-cost-EMI subvention math. Surface all of it and you paralyse the shopper. Hide too much and you break trust when the real number appears.",
          "The design problem was ruthless editing: show the smallest true set of options that lets someone decide, compute the real monthly number honestly, and make eligibility feel instant even when three systems have to agree behind the scenes.",
        ],
      },
      {
        label: "What I did",
        heading: "Affordability, surfaced early",
        body: [
          "The biggest lever wasn't the checkout step — it was moving the affordability message upstream. '₹999/month' on the product page reframes the decision before sticker shock ever hits. By the time the shopper reaches checkout, they've already decided in monthly terms.",
          "At checkout, I unified the options into a single affordability layer: card EMI, cardless EMI, and BNPL presented as one ranked list with honest monthly numbers and no-cost-EMI called out where it applied.",
        ],
        list: [
          { title: "On-page EMI widget", text: "the lowest monthly figure shown on the product page, so affordability leads the decision." },
          { title: "Unified plan selector", text: "one screen ranking every eligible plan by real monthly cost, no-cost EMI flagged." },
          { title: "Instant eligibility", text: "cardless and BNPL eligibility resolved in the flow, so the shopper never hits a dead end after committing." },
        ],
        pull: "Move affordability upstream and checkout stops being where the doubt begins.",
      },
    ],
    impact: [
      { value: "‹X›%", label: "AOV uplift on EMI-eligible carts" },
      { value: "‹X›%", label: "of high-ticket GMV on EMI/BNPL" },
      { value: "‹X›", label: "lenders & networks live" },
      { value: "‹X›%", label: "eligibility resolved in-flow" },
    ],
    learned:
      "Financial products win on framing as much as on rates. The same loan is a 'no' as a lump sum and a 'yes' as a monthly line — and where you show it matters more than what it costs. Design the moment, not just the mechanism.",
  },

  // ── 4. B2B BNPL & Credit ──────────────────────────────────
  {
    slug: "b2b-credit",
    order: 4,
    title: "Underwriting the businesses banks won't",
    kicker: "B2B BNPL & Credit",
    oneLiner:
      "Consumer credit is a solved shape. B2B credit is a different animal — bigger tickets, thinner data, real balance-sheet risk. I built the product that extends terms to businesses banks ignore.",
    role: "Product lead — B2B credit",
    timeframe: "‹2023–2025›",
    tags: ["B2B", "Credit", "Underwriting", "Working capital"],
    heroMetrics: [
      { value: "₹‹X›Cr", label: "credit disbursed to businesses" },
      { value: "‹X›%", label: "approval on thin-file applicants" },
      { value: "‹X›%", label: "portfolio delinquency", sub: "held below target" },
    ],
    sections: [
      {
        label: "The problem",
        heading: "A missing rung on the ladder",
        body: [
          "A small business buying inventory from a supplier has a cash-flow gap: pay now, sell over the next 30–60 days. A bank line of credit for that gap takes weeks of paperwork and often a 'no' — small businesses are thin-file, informal, and expensive to underwrite one at a time.",
          "So they run on their own cash, or on the supplier's goodwill, and growth is capped by whatever's in the bank this week. There's a whole rung missing on the ladder between consumer BNPL and a proper bank facility.",
        ],
        pull: "The businesses that most need credit are the ones the system finds hardest to read.",
      },
      {
        label: "The constraint",
        heading: "Real money, real losses",
        body: [
          "This is where it stops being a UX problem and becomes a balance-sheet one. Every approval is a bet with real capital; every default is a real loss. You can't A/B-test your way out of a bad credit policy.",
          "The tickets are larger, the data is thinner and messier than a consumer's, and the downside is asymmetric — approve too loosely and the portfolio bleeds, too tightly and the product has no reason to exist. Correctness isn't a nice-to-have; it's the entire game.",
        ],
      },
      {
        label: "What I did",
        heading: "Underwrite on the data you actually have",
        body: [
          "Instead of demanding the bank-grade documents businesses don't have, I built underwriting around the data that already flows through a payments platform: transaction history, settlement patterns, GST signals, and repayment behaviour on the network.",
          "The product wrapped that into a credit line a business could draw on to pay suppliers, with terms that matched their real cash-conversion cycle — and a risk framework that could say a fast, defensible yes or no.",
        ],
        list: [
          { title: "Data-native underwriting", text: "score businesses on payment and settlement flows they already generate, not paperwork they don't have." },
          { title: "Drawable credit line", text: "revolving terms sized to the business's actual working-capital cycle, not a one-size ticket." },
          { title: "Risk guardrails", text: "exposure limits, cohort monitoring, and early-warning signals to keep delinquency inside target as volume scaled." },
        ],
        pull: "The winning move was underwriting on the exhaust the business already produces.",
      },
    ],
    impact: [
      { value: "₹‹X›Cr", label: "credit disbursed" },
      { value: "‹X›%", label: "approval on thin-file applicants" },
      { value: "‹X›%", label: "delinquency held below target" },
      { value: "‹X›", label: "businesses with active lines" },
    ],
    learned:
      "In credit, the product and the risk model are the same object — you can't ship a beautiful flow on top of a policy that loses money. Building it taught me to hold two disciplines at once: the empathy to say yes to underserved businesses, and the rigour to make each yes one you can defend on the balance sheet.",
  },

  // ── 5. Simplq ─────────────────────────────────────────────
  {
    slug: "simplq",
    order: 5,
    title: "Simplq — the product I built to prove I could",
    kicker: "Personal 0→1 project",
    oneLiner:
      "No team, no roadmap, no cover. Just an idea, and the discipline to ship it end to end. Simplq is where I go from PM to builder.",
    role: "Solo — everything",
    timeframe: "‹2022–present›",
    tags: ["0→1", "Solo build", "Full-stack", "Product"],
    heroMetrics: [
      { value: "1", label: "person: design, build, ship" },
      { value: "‹X›", label: "users / signups", sub: "‹PLACEHOLDER›" },
      { value: "100%", label: "of the stack, owned" },
    ],
    sections: [
      {
        label: "Why",
        heading: "Because specs aren't proof",
        body: [
          "A PM can spend a career describing products other people build. I wanted to know I could take an idea the whole way myself — problem, design, code, launch — without a team to hand off to.",
          "Simplq is ‹one-line description of what Simplq does — Sajmal to fill in›. I built it solo: the product decisions, the interface, the code, and every unglamorous thing in between.",
        ],
        pull: "The gap between 'I think this should exist' and 'here, use it' is where you find out who you are.",
      },
      {
        label: "What it taught me",
        heading: "The whole stack, no hand-offs",
        body: [
          "Building alone strips away the abstractions. There's no 'engineering will handle it.' Every trade-off between scope and ship date is yours; every rough edge is yours to sand or live with. It made me a sharper PM because I've now paid the cost of my own decisions.",
          "It's also where I got hands-on with modern build tooling and AI-assisted development — the same instincts I'd bring to building products at an AI company.",
        ],
      },
    ],
    impact: [
      { value: "0→1", label: "conceived, built, shipped solo" },
      { value: "‹X›", label: "users / signups ‹PLACEHOLDER›" },
      { value: "‹X›", label: "‹key metric — Sajmal to define›" },
    ],
    learned:
      "You don't fully understand a product until you've had to build it, not just brief it. Simplq is my proof that I can — and the reason I'm confident I can go from PM to builder inside an AI company from day one.",
  },
];

export const vibeProjects = [
  {
    name: "CareerFind",
    tagline: "Science-based career guidance for Indian students",
    description:
      "A web app that turns a scenario-based personality and interest assessment (Big Five + RIASEC) into concrete career and college recommendations — with a downloadable report at the end. Built with Next.js and a rule-based matching engine.",
    stack: ["Next.js", "TypeScript", "Psychometrics", "PDF export"],
    href: "#", // ‹PLACEHOLDER live URL›
  },
  {
    name: "AI CRO Audit — CROScore",
    tagline: "AI-powered conversion-rate-optimization audits",
    description:
      "An AI tool that audits a brand's checkout and conversion funnel and returns a prioritised set of fixes — putting the CRO instincts I've built at Cashfree into an automated, self-serve product.",
    stack: ["AI / LLM", "Next.js", "CRO", "Growth"],
    href: "#", // ‹PLACEHOLDER live URL›
  },
];

export const about = {
  intro: [
    "I'm Sajmal — a product manager who has spent the last few years in the least forgiving corner of product: payments, where a bug isn't a bad UX, it's someone's money.",
    "My work sits at the seam of checkout, credit, and risk at Cashfree. I've shipped the layer that stops returns before they ship, the one-tap checkout and offer engine that turns intent into revenue, the affordability tools that make big carts feel small, and the B2B credit product that underwrites businesses the banks won't touch.",
  ],
  throughline: [
    "The thread through all of it is the same: take a problem where real money and real trust are on the line, live in the ambiguity long enough to actually understand it, and ship something people rely on.",
    "That's also why I want to build in AI next. It's the same shape of problem at a bigger scale — high stakes, deep ambiguity, and a need for products that earn trust. I've already started building with it: CareerFind, an AI CRO audit tool, and Simplq, all shipped on the side. I want to do that as the main thing.",
  ],
  values: [
    { title: "Ship the proof, not just the product", text: "A number a merchant can see beats a promise a merchant has to believe." },
    { title: "Live in the ambiguity", text: "The best problems don't come pre-scoped. Judgment is knowing which edge to sand and which to keep." },
    { title: "Own the whole cost", text: "Every trade-off has a bill. I'd rather be the one who pays it than the one who passes it on." },
  ],
};
