export interface ProjectItem {
  name: string;
  desc: string;
  tags?: string[];
  link?: string;
  github?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "EcoCash Dart SDK",
    desc: "Open-source Dart SDK for integrating EcoCash payment services into mobile applications. Features payment validation, retry handling, circuit breakers, transaction monitoring, offline queueing, and secure logging.",
    tags: ["Flutter", "Dart", "EcoCash", "Fintech", "SDK"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "im_phone_utils_dart",
    desc: "Open-source Dart package for Zimbabwean phone-number validation, network provider identification (Econet, NetOne, Telecel), formatting, and utility helpers. Adopted across 250+ integrations.",
    tags: ["Dart", "Open Source", "Package", "Validation"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Havano POS",
    desc: "Production Flutter-based mobile Point of Sale application integrated with enterprise ERP services. Supports business workflows involving sales, inventory, barcode scanning, and receipt printing.",
    tags: ["Flutter", "Dart", "POS", "ERP Integration", "Retail"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Offline-First Mobile Sync Engine",
    desc: "Resilient mobile data persistence architecture utilizing SQLite and Drift with bidirectional REST sync. Guarantees zero data loss during network disruptions in field and retail environments.",
    tags: ["Flutter", "SQLite", "Drift", "REST API", "Sync"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Mobile E-Commerce & Checkout Suite",
    desc: "Production Flutter mobile e-commerce application featuring product catalog management, cart persistence, real-time stock verification, and multi-option payment workflows.",
    tags: ["Flutter", "Dart", "E-Commerce", "Payments"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Mobile POS Peripheral & Printer Bridge",
    desc: "Hardware integration layer connecting mobile POS devices with ESC/POS Bluetooth and USB thermal receipt printers, cash drawers, and optical barcode scanners.",
    tags: ["Flutter", "Android", "Hardware", "POS"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Fintech Transaction Monitor & Circuit Breaker",
    desc: "Fault-tolerant transaction processing pipeline ensuring idempotent payment execution, automated exponential backoff retries, and dead-letter queueing for financial apps.",
    tags: ["Dart", "Fintech", "Payments", "Architecture"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Enterprise ERP Mobile Client",
    desc: "Cross-platform mobile application for enterprise ERP operations, enabling field sales agents to generate quotations, manage customer records, and review live stock levels.",
    tags: ["Flutter", "Dart", "Enterprise", "REST API"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Laravel & Mobile REST API Gateway",
    desc: "Secure API backend gateway built with Laravel, providing token authentication, rate limiting, and webhooks for mobile clients and third-party payment providers.",
    tags: ["Laravel", "REST API", "OAuth", "Backend"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Dart Payment Utilities Collection",
    desc: "A suite of reusable Dart utility packages and helpers for financial currency formatting, payload validation, and cross-platform mobile transaction safety.",
    tags: ["Dart", "Open Source", "Payments", "Utilities"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
];
