/**
 * Infrazen Mega Projects Private Limited
 * Single Source of Truth Content Configuration
 * 
 * All copy, stats, registration records, and contact channels are strictly driven
 * from verified company documentation. Edit this file to update site content or toggle fields.
 */

export interface RegistrationItem {
  id: string;
  label: string;
  value: string;
  notes?: string;
  visible: boolean;
}

export interface SiteConfig {
  company: {
    name: string;
    legalName: string;
    shortName: string;
    tagline: string;
    taglineQuote: string;
    headquarters: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      pincode: string;
      full: string;
    };
    contact: {
      phoneDisplay: string;
      phoneRaw: string;
      whatsappDisplay: string;
      whatsappNumber: string;
      whatsappMessage: string;
      email: string;
      formspreeEndpoint: string;
    };
    social: {
      linkedinPlaceholder: string;
    };
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
    keywords: string[];
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
  numbers: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      number: number;
      prefix?: string;
      suffix: string;
      label: string;
      sub: string;
    }>;
  };
  about: {
    title: string;
    whoWeAre: {
      title: string;
      description: string;
    };
    headquartersPune: {
      title: string;
      bullets: string[];
    };
    vision: {
      title: string;
      statement: string;
      pillars: Array<{
        title: string;
        description: string;
        iconName: string;
      }>;
    };
    mission: {
      title: string;
      cards: Array<{
        title: string;
        description: string;
        tag: string;
      }>;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      summary: string;
      features: string[];
      iconName: string;
    }>;
  };
  megaInfrastructure: {
    sectionId: string;
    title: string;
    tag: string;
    capability: {
      title: string;
      description: string;
    };
    steps: Array<{
      step: number;
      title: string;
      description: string;
      highlights: string[];
    }>;
  };
  healthcareEPC: {
    sectionId: string;
    title: string;
    tag: string;
    subtitle: string;
    pillars: Array<{
      title: string;
      description: string;
      iconName: string;
    }>;
    activitiesTitle: string;
    activities: Array<{
      title: string;
      description: string;
      iconName: string;
    }>;
  };
  governmentLiaisoning: {
    sectionId: string;
    title: string;
    tag: string;
    description: string;
    services: Array<{
      title: string;
      description: string;
      iconName: string;
    }>;
  };
  advisoryServices: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      iconName: string;
    }>;
  };
  approach: {
    sectionId: string;
    title: string;
    subtitle: string;
    phases: Array<{
      phase: number;
      name: string;
      description: string;
      keyDeliverables: string[];
    }>;
  };
  whyChooseInfrazen: {
    sectionId: string;
    title: string;
    cards: Array<{
      title: string;
      description: string;
      iconName: string;
    }>;
    trackRecord: {
      experience: {
        value: string;
        label: string;
        desc: string;
      };
      commitment: {
        value: string;
        label: string;
        desc: string;
      };
    };
  };
  registrations: {
    sectionId: string;
    title: string;
    badge: string;
    complianceNotice: string;
    items: RegistrationItem[];
  };
  contact: {
    sectionId: string;
    title: string;
    subtitle: string;
    taglineQuote: string;
    officeAddress: string;
    projectTypes: string[];
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: "Infrazen Mega Projects",
    legalName: "Infrazen Mega Projects Private Limited",
    shortName: "Infrazen",
    tagline: "Building the future with world-class infrastructure solutions.",
    taglineQuote: "Let us help you build the future with world-class infrastructure solutions!",
    headquarters: "Pune, Maharashtra",
    address: {
      line1: "Office No: A 95, Ground Floor",
      line2: "Patil Plaza, Mitra Mandal Chowk",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411009",
      full: "Office No: A 95, Ground Floor, Patil Plaza, Mitra Mandal Chowk, Pune – 411009",
    },
    contact: {
      phoneDisplay: "+91 20 2553 0000",
      phoneRaw: "+912025530000",
      whatsappDisplay: "+91 98220 00000",
      whatsappNumber: "919822000000",
      whatsappMessage: "Hello Infrazen Mega Projects, I would like to enquire regarding an infrastructure / EPC project.",
      email: "info@infrazen.co.in",
      formspreeEndpoint: "https://formspree.io/f/xbjnerkp",
    },
    social: {
      linkedinPlaceholder: "https://www.linkedin.com/company/infrazen-mega-projects",
    },
  },

  seo: {
    title: "Infrazen Mega Projects | World-Class Infrastructure & Healthcare EPC",
    description: "Infrazen Mega Projects Private Limited (Pune, Maharashtra) specializes in Roads & Highways, Dams, Bridges, Hospital Turnkey EPC, and Government Liaisoning across India.",
    siteUrl: "https://infrazen.co.in",
    ogImage: "/og-infrazen.png",
    keywords: [
      "Infrazen Mega Projects",
      "Infrastructure Pune",
      "EPC Healthcare India",
      "Hospital Construction Pune",
      "Roads and Highways Contractor",
      "Government Liaisoning Maharashtra",
      "NABH compliant hospital construction",
      "Turnkey civil construction",
    ],
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Mega Infra", href: "#infrastructure" },
    { label: "Healthcare EPC", href: "#healthcare" },
    { label: "Liaisoning", href: "#liaisoning" },
    { label: "Approach", href: "#approach" },
    { label: "Why Infrazen", href: "#why-us" },
    { label: "Compliance", href: "#compliance" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "PUNE • MAHARASHTRA • PAN-INDIA EXECUTION",
    headline: "Building the Future with World-Class Infrastructure.",
    subheadline: "Mega projects. Healthcare EPC. Government liaisoning. Delivered from Pune across India.",
    primaryCta: {
      label: "Start a Project",
      href: "#contact",
    },
    secondaryCta: {
      label: "Our Services",
      href: "#services",
    },
  },

  numbers: {
    title: "Financial Highlights & Growth Story",
    subtitle: "Infrazen is on a rapid growth trajectory, demonstrating strong execution capability and growing market trust across India.",
    items: [
      {
        id: "fy-rev-24",
        number: 12,
        prefix: "₹",
        suffix: " Cr+",
        label: "FY 2024–25 Revenue",
        sub: "Delivered in 1 Year — a strong market entry.",
      },
      {
        id: "fy-proj-25",
        number: 20,
        prefix: "₹",
        suffix: " Cr+",
        label: "FY 2025–26 Projected",
        sub: "Over 65% year-on-year growth projected for upcoming fiscal year.",
      },
      {
        id: "order-book",
        number: 50,
        prefix: "₹",
        suffix: " Cr+",
        label: "Current Order Book",
        sub: "Strong revenue visibility with high-value contracts in hand.",
      },
      {
        id: "experience",
        number: 15,
        suffix: "+ Years",
        label: "Combined Experience",
        sub: "Industry professionals with deep expertise in infrastructure.",
      },
    ],
  },

  about: {
    title: "Company Overview",
    whoWeAre: {
      title: "Who We Are",
      description:
        "Infrazen Mega Projects Private Limited is a dynamic infrastructure company specializing in large-scale project execution across India — serving both government and private sector clients with engineering excellence.",
    },
    headquartersPune: {
      title: "Headquartered in Pune, Maharashtra",
      bullets: [
        "Strong foundation in engineering & construction",
        "Rapidly scaling across India's booming infrastructure sector",
        "Trusted partner for mega-scale civil and healthcare projects",
      ],
    },
    vision: {
      title: "Our Vision",
      statement:
        "To be India's leading infrastructure development company — recognized for excellence, innovation, and sustainability in large-scale project execution.",
      pillars: [
        {
          title: "Excellence",
          description: "World-class engineering standards delivered on every project, every time.",
          iconName: "ShieldCheck",
        },
        {
          title: "Innovation",
          description: "Cutting-edge technologies and methodologies that redefine infrastructure delivery.",
          iconName: "Lightbulb",
        },
        {
          title: "Sustainability",
          description: "Shaping India's landscape with infrastructure built to last generations.",
          iconName: "Leaf",
        },
      ],
    },
    mission: {
      title: "Our Mission",
      cards: [
        {
          title: "World-Class Solutions",
          description:
            "Delivering infrastructure through cutting-edge engineering and strong project management — serving public and private sector clients with distinction.",
          tag: "01 / Engineering",
        },
        {
          title: "Quality & Safety First",
          description:
            "Every project is executed with an unwavering commitment to quality, safety, and timely delivery — no exceptions.",
          tag: "02 / Execution",
        },
        {
          title: "Built to Last",
          description:
            "We build infrastructure that serves communities and endures across generations — this is our promise.",
          tag: "03 / Legacy",
        },
      ],
    },
  },

  services: {
    title: "Core Services Overview",
    subtitle: "Precision engineering, institutional EPC, and end-to-end statutory mastery across the infrastructure lifecycle.",
    items: [
      {
        id: "mega-infra",
        title: "Mega Infrastructure Projects",
        category: "Civil & Public Works",
        summary:
          "High-capacity transportation arteries, structural bridges, and public civil assets engineered to international standards.",
        features: [
          "National & State Highway Development",
          "Urban Road Networks & Bypass Corridors",
          "Water Resource Structures & Bridges",
        ],
        iconName: "Building2",
      },
      {
        id: "construction-mgmt",
        title: "Construction Management",
        category: "Project Oversight",
        summary:
          "Disciplined lifecycle stewardship ensuring zero schedule drift, cost containment, and rigorous QA/QC protocols.",
        features: [
          "End-to-End Project Supervision",
          "Rigorous QA/QC Lifecycle Audits",
          "Proactive Risk Mitigation & Reporting",
        ],
        iconName: "HardHat",
      },
      {
        id: "healthcare-epc",
        title: "EPC for Healthcare",
        category: "Turnkey Medical Facilities",
        summary:
          "Full turnkey delivery from greenfield design to commissioning for super-specialty and multi-specialty hospitals.",
        features: [
          "Greenfield to Operational Handover",
          "NABH & Infection Control Compliance",
          "Medical Gas Pipeline Systems (MGPS)",
        ],
        iconName: "Cross",
      },
      {
        id: "specialized-hospital",
        title: "Specialized Hospital Services",
        category: "Clinical Engineering",
        summary:
          "High-specification medical environments including modular operating theatres, ICUs, clean rooms, and MEP retrofits.",
        features: [
          "Modular OT & Critical Care ICU Systems",
          "Clean Rooms & Medical Grade HVAC",
          "Expansion, Fit-Outs & Vertical Extensions",
        ],
        iconName: "Activity",
      },
      {
        id: "govt-liaisoning",
        title: "Government Liaisoning",
        category: "Regulatory Clearance",
        summary:
          "Unlocking approvals across central, state, and municipal tiers with deep domain expertise and swift turnaround.",
        features: [
          "Central, State & Municipal Permits",
          "Complex Environmental & Statutory Navigation",
          "End-to-End Tender & Bid Documentation",
        ],
        iconName: "Landmark",
      },
      {
        id: "advisory-services",
        title: "Advisory & Related Services",
        category: "Strategic Feasibility",
        summary:
          "Front-end feasibility studies, Environmental Impact Assessments (EIA), land acquisition support, and site intelligence.",
        features: [
          "Investment & Technical Feasibility Studies",
          "Environmental Impact Assessments (EIA)",
          "Land Acquisition & Site Survey Coordination",
        ],
        iconName: "Compass",
      },
    ],
  },

  megaInfrastructure: {
    sectionId: "infrastructure",
    title: "Mega Infrastructure Projects",
    tag: "CIVIL ENGINEERING CAPABILITY",
    capability: {
      title: "End-to-End Execution Capability",
      description:
        "From feasibility and design through procurement, construction, and handover — we manage every phase with precision.",
    },
    steps: [
      {
        step: 1,
        title: "Roads & Highways",
        description:
          "National and state highway development, high-speed arterial connections, urban road networks, and bypass corridors engineered for peak traffic load and longevity.",
        highlights: [
          "Heavy-duty pavement engineering",
          "Multi-lane expressways & bypass alignments",
          "Integrated drainage, lighting & smart safety barriers",
        ],
      },
      {
        step: 2,
        title: "Dams & Bridges",
        description:
          "Large-scale water resource management structures, river-crossing viaducts, multi-span bridges, and critical flyovers built to withstand seismic and hydrological stresses.",
        highlights: [
          "Deep foundation caissons & reinforced concrete piers",
          "Pre-stressed girders & high-tensile stay cables",
          "Irrigation dams, canals & water barrier structures",
        ],
      },
      {
        step: 3,
        title: "Public Works & Civil",
        description:
          "Government-commissioned large civil infrastructure delivered from concept to final commissioning with complete statutory clearances.",
        highlights: [
          "Civic administrative campuses & transit plazas",
          "Bulk utility pipelines & industrial earthworks",
          "Institutional civil structures built for generations",
        ],
      },
    ],
  },

  healthcareEPC: {
    sectionId: "healthcare",
    title: "EPC for Hospitals & Healthcare Infrastructure",
    tag: "TURNKEY HEALTHCARE SOLUTIONS",
    subtitle:
      "Infrazen delivers full turnkey Engineering, Procurement & Construction for modern healthcare facilities — from greenfield to operational handover.",
    pillars: [
      {
        title: "Turnkey Construction",
        description:
          "Greenfield to operational handover for multi-specialty & super-specialty hospitals with zero clinical workflow compromise.",
        iconName: "Hospital",
      },
      {
        title: "Specialized MEP & Systems",
        description:
          "Medical Gas Pipeline Systems (MGPS), specialized HVAC, modular Operation Theatres (OT), ICU infrastructure, and clean room installations.",
        iconName: "Cpu",
      },
      {
        title: "NABH Compliance",
        description:
          "Construction fully aligned with NABH, infection control protocols, radiation shielding, and biomedical waste regulatory standards.",
        iconName: "CheckCircle",
      },
    ],
    activitiesTitle: "Specialized Hospital & Healthcare Activities",
    activities: [
      {
        title: "Interior Fit-Outs & Renovation",
        description:
          "Hospital interiors, medical equipment rooms, catheterization labs, and structural readiness tailored to precision clinical workflows.",
        iconName: "Layout",
      },
      {
        title: "Green & Energy-Efficient Design",
        description:
          "Sustainable hospital architecture that reduces operational lifecycle costs, thermal load, and environmental impact.",
        iconName: "Zap",
      },
      {
        title: "Fire & Life Safety Systems",
        description:
          "Comprehensive fire suppression, smoke compartmentation, and life safety installations strictly adhering to healthcare building codes.",
        iconName: "Flame",
      },
      {
        title: "Expansion & Vertical Extension",
        description:
          "Expanding existing running hospital campuses with phased structural additions, facility planning, and live layout optimization.",
        iconName: "Maximize2",
      },
    ],
  },

  governmentLiaisoning: {
    sectionId: "liaisoning",
    title: "Government Liaisoning Services",
    tag: "STATUTORY EXPEDITION",
    description:
      "Navigating India's complex regulatory landscape is a core Infrazen competency — we remove bureaucratic friction so projects move forward.",
    services: [
      {
        title: "Approvals & Clearances",
        description:
          "Securing vital government permits, land conversion sanctions, no-objection certificates, and utility clearances across central, state, and municipal levels.",
        iconName: "FileCheck",
      },
      {
        title: "Regulatory Navigation",
        description:
          "Handling complex compliance environments with deep domain expertise, town planning boards, highway authorities, and pollution control departments.",
        iconName: "Compass",
      },
      {
        title: "Tender & Bid Support",
        description:
          "End-to-end tender documentation, technical qualification packaging, joint-venture structuring, and competitive bid management support.",
        iconName: "FileSpreadsheet",
      },
    ],
  },

  advisoryServices: {
    title: "Other Related Services",
    subtitle: "Front-end strategic engineering advisory validating capital allocation and project viability.",
    items: [
      {
        title: "Feasibility & Consulting",
        description:
          "In-depth feasibility studies, traffic analysis, geological assessments, and expert project consulting to validate investment decisions.",
        iconName: "LineChart",
      },
      {
        title: "Environmental Impact Assessments",
        description:
          "Thorough EIA documentation and clearance filings ensuring projects meet state and central ecological and environmental standards.",
        iconName: "Globe",
      },
      {
        title: "Land & Site Services",
        description:
          "Land acquisition coordination, cadastral site surveys, boundary demarcation, and project finance advisory support.",
        iconName: "MapPin",
      },
    ],
  },

  approach: {
    sectionId: "approach",
    title: "Our Approach",
    subtitle:
      "A disciplined four-phase methodology that ensures every project is delivered on time, within budget, and to the highest standard.",
    phases: [
      {
        phase: 1,
        name: "Understand",
        description: "Deep-dive into requirements, site conditions, soil profiles, stakeholder demands, and client expectations.",
        keyDeliverables: [
          "Site survey & topological reconnaissance",
          "Statutory feasibility verification",
          "Preliminary risk assessment",
        ],
      },
      {
        phase: 2,
        name: "Plan",
        description: "Comprehensive planning with synchronized master timelines, cash-flow budgeting, and resource allocation.",
        keyDeliverables: [
          "BIM & structural detail drafting",
          "Procurement schedule & vendor vetting",
          "Regulatory milestone roadmap",
        ],
      },
      {
        phase: 3,
        name: "Execute",
        description: "Disciplined execution with regular quality audits, safety compliance checks, and transparent progress reviews.",
        keyDeliverables: [
          "Active site engineering oversight",
          "Multi-stage QA/QC laboratory tests",
          "Digital milestone tracking",
        ],
      },
      {
        phase: 4,
        name: "Deliver",
        description: "On-time, within-budget handover with complete documentation, compliance certificates, and operational training.",
        keyDeliverables: [
          "As-built documentation & commissioning",
          "Statutory completion certificates",
          "Post-handover lifecycle support",
        ],
      },
    ],
  },

  whyChooseInfrazen: {
    sectionId: "why-us",
    title: "Why Choose Infrazen?",
    cards: [
      {
        title: "Quality, Safety & Sustainability",
        description:
          "Non-negotiable standards embedded into every phase of every project, safeguarding worker welfare and structural integrity.",
        iconName: "ShieldAlert",
      },
      {
        title: "Complex Project Expertise",
        description:
          "From conception to completion — handling the most demanding infrastructure challenges across civil and medical EPC verticals.",
        iconName: "Boxes",
      },
      {
        title: "Efficient, Transparent Delivery",
        description:
          "Cost-effective execution with milestone-based reporting, honest accounting, and dedicated domain engineering teams.",
        iconName: "TrendingUp",
      },
    ],
    trackRecord: {
      experience: {
        value: "15+",
        label: "Years Combined Experience",
        desc: "Industry professionals with deep expertise in infrastructure and construction.",
      },
      commitment: {
        value: "100%",
        label: "Client Commitment",
        desc: "Strong network and relationships built on delivery, trust, and transparency.",
      },
    },
  },

  registrations: {
    sectionId: "compliance",
    title: "Registrations & Compliance",
    badge: "FULLY COMPLIANT & REGISTERED ENTITY",
    complianceNotice:
      "All registrations are current and in good standing. Infrazen operates with full statutory compliance across all applicable regulatory frameworks in India.",
    items: [
      {
        id: "cin",
        label: "Corporate Identity Number (CIN)",
        value: "U41001PN2024PTC233435",
        notes: "Registered with Ministry of Corporate Affairs (RoC Pune)",
        visible: true,
      },
      {
        id: "pan",
        label: "Permanent Account Number (PAN)",
        value: "AAHCI8006L",
        notes: "Income Tax Department of India",
        visible: true,
      },
      {
        id: "tan",
        label: "Tax Deduction Account Number (TAN)",
        value: "PNEI12999A",
        notes: "Tax Withholding Compliance (Pune)",
        visible: true,
      },
      {
        id: "gstin",
        label: "Goods & Services Tax Identification (GSTIN)",
        value: "27AAHCI8006L1ZA",
        notes: "State of Maharashtra",
        visible: true,
      },
      {
        id: "esic",
        label: "Employees' State Insurance Corporation (ESIC)",
        value: "33001418900000999",
        notes: "Worker welfare statutory registration",
        visible: true,
      },
      {
        id: "epfo",
        label: "Employees' Provident Fund Organisation (EPFO)",
        value: "PUPUN3357065000",
        notes: "Pune Regional Provident Fund Office",
        visible: true,
      },
    ],
  },

  contact: {
    sectionId: "contact",
    title: "Let's Build the Future Together",
    subtitle: "Connect with our engineering directors and project specialists at our Pune headquarters.",
    taglineQuote: "\"Let us help you build the future with world-class infrastructure solutions!\"",
    officeAddress: "Office No: A 95, Ground Floor, Patil Plaza, Mitra Mandal Chowk, Pune – 411009",
    projectTypes: [
      "Mega Infrastructure (Highways, Bridges, Public Civil)",
      "Healthcare EPC (Turnkey Hospital Construction)",
      "Specialized Hospital Systems (MGPS, Clean Rooms, OT/ICU)",
      "Government Liaisoning & Clearances",
      "Advisory, Feasibility & EIA Studies",
      "Other Civil Construction / Partnership",
    ],
  },
};
