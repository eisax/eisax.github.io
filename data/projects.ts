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
    desc: "Open-source Dart SDK for integrating EcoCash payment services into applications. Features payment validation, retry handling, circuit breakers, transaction monitoring, offline queueing, and secure logging.",
    tags: ["Flutter", "Dart", "EcoCash", "Payments", "SDK"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "im_phone_utils_dart",
    desc: "Open-source Dart package for Zimbabwean phone-number validation, network provider identification (Econet, NetOne, Telecel), formatting, and utility helpers. Used across 250+ integrations.",
    tags: ["Dart", "Open Source", "Package", "Validation"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Havano POS",
    desc: "Production Flutter-based mobile POS application integrated with enterprise ERP services. Supports business workflows involving sales, inventory, barcode scanning, and receipt printing.",
    tags: ["Flutter", "Dart", "POS", "ERP Integration", "Retail"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Commercial Web Application",
    desc: "Web application features and administrative workflows developed using Laravel and Angular, integrated with backend REST APIs for commercial operations.",
    tags: ["Laravel", "Angular", "TypeScript", "REST API", "Web"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Offline-Capable Mobile Sync Engine",
    desc: "Resilient data persistence architecture utilizing SQLite and Drift with bidirectional REST sync to ensure reliable offline-first operation and zero data loss.",
    tags: ["Flutter", "SQLite", "Drift", "REST API", "Sync"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Mobile E-Commerce & Retail Platform",
    desc: "Mobile application for e-commerce, commercial retail operations, and payment workflows, featuring catalog browsing, cart management, and inventory tracking.",
    tags: ["Flutter", "Dart", "E-Commerce", "Payments", "Retail"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Mobile POS Hardware & Peripheral Bridge",
    desc: "Integration layer connecting mobile applications to physical POS peripherals, including Bluetooth thermal receipt printers, USB cash drawers, and barcode readers.",
    tags: ["Flutter", "Android", "Hardware", "POS"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Enterprise Backend & REST API Gateway",
    desc: "Backend service endpoints and API authentication layers built with ASP.NET Core and Java / Spring Boot, connecting mobile and web applications to databases.",
    tags: ["ASP.NET Core", "Java", "Spring Boot", "REST API"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Database Migration & Storage Pipeline",
    desc: "Relational data modeling, query optimization, and storage management across PostgreSQL, SQL Server, MySQL, and embedded SQLite databases.",
    tags: ["PostgreSQL", "SQL Server", "MySQL", "Database"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
  {
    name: "Dart Open Source Toolkits",
    desc: "Collection of reusable Dart and Flutter utility packages providing data formatting, validation helpers, and network resilience across applications.",
    tags: ["Dart", "Open Source", "Utilities"],
    link: "https://github.com/eisax",
    github: "https://github.com/eisax",
  },
];
