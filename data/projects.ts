export interface ProjectItem {
  name: string;
  desc: string;
  tags?: string[];
  link?: string;
  github?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Furrow.Payments",
    desc: "A standalone, production-ready C# / .NET library for integrating Paynow Zimbabwe payments. Features Paynow Web Checkout for standard redirection payments (Visa, MasterCard, ZimSwitch, EcoCash Web).",
    tags: ["C#", ".NET", "Paynow", "Fintech", "Payments"],
    github: "https://github.com/eisax/Furrow.Payments",
    link: "https://github.com/eisax/Furrow.Payments",
  },
  {
    name: "kg6-codex",
    desc: "A modular, open-source AI Developer Assistant designed to automate, accelerate, and improve the software development lifecycle. Helps developers review, understand, document, and refactor code from the CLI.",
    tags: ["TypeScript", "AI Assistant", "CLI", "Developer Tools", "Open Source"],
    github: "https://github.com/kg6-oss/kg6-codex",
    link: "https://github.com/kg6-oss/kg6-codex",
  },
  {
    name: "ecocash_dart_sdk",
    desc: "A comprehensive, production-ready Dart SDK for integrating with the EcoCash Open API. Provides enterprise-grade features for processing payments, refunds, and transaction lookups in Zimbabwe.",
    tags: ["Dart", "Flutter", "EcoCash", "SDK", "Fintech"],
    github: "https://github.com/eisax/ecocash_dart_sdk",
    link: "https://github.com/eisax/ecocash_dart_sdk",
  },
  {
    name: "pixo_flutter",
    desc: "Flutter plugin package that wraps the Rust pixo image compression library via Dart FFI for ultra-fast, memory-efficient native image compression on mobile devices.",
    tags: ["Flutter", "Rust", "Dart FFI", "Image Compression", "Mobile"],
    github: "https://github.com/eisax/pixo_flutter",
    link: "https://github.com/eisax/pixo_flutter",
  },
  {
    name: "zim-phone-utils",
    desc: "A comprehensive JavaScript utility library for validating, formatting, and detecting carriers (Econet, NetOne, Telecel) for Zimbabwean phone numbers across mobile and landline formats.",
    tags: ["JavaScript", "Utilities", "Validation", "Open Source"],
    github: "https://github.com/eisax/zim-phone-utils",
    link: "https://github.com/eisax/zim-phone-utils",
  },
  {
    name: "zim_phone_utils_dart",
    desc: "A comprehensive Dart utility library for validating, formatting, and detecting carriers for Zimbabwean phone numbers across mobile and landline networks. Widely adopted across 250+ integrations.",
    tags: ["Dart", "Flutter", "Utilities", "Package", "Open Source"],
    github: "https://github.com/eisax/zim_phone_utils_dart",
    link: "https://github.com/eisax/zim_phone_utils_dart",
  },
  {
    name: "Havano POS",
    desc: "Production mobile Point of Sale application live on Google Play, integrated with Havano ERP systems. Supports real-time sales, inventory reconciliation, barcode scanning, and hardware receipt printing.",
    tags: ["Flutter", "Android", "Google Play", "POS", "ERP"],
    link: "https://play.google.com/store/apps/details?id=com.havano.pos.havano_pos&hl=en",
  },
  {
    name: "Tumela Seller",
    desc: "Production merchant and seller mobile application live on Google Play for managing e-commerce stores, catalog listings, sales orders, inventory tracking, and transaction operations.",
    tags: ["Flutter", "Android", "Google Play", "Merchant", "E-Commerce"],
    link: "https://play.google.com/store/apps/details?id=shop.tumela.seller&hl=en",
  },
  {
    name: "PaGrill",
    desc: "Live Google Play mobile food ordering and restaurant e-commerce application. Features real-time menu browsing, cart checkout, push notifications, and digital payment integrations.",
    tags: ["Flutter", "Android", "Google Play", "E-Commerce", "Payments"],
    link: "https://play.google.com/store/apps/details?id=shop.pagrill.user&hl=en",
  },
  {
    name: "Showline Intelect",
    desc: "Enterprise mobile application live on Google Play supporting commercial operations, customer workflows, and field business processes for commercial clients.",
    tags: ["Flutter", "Android", "Google Play", "Enterprise", "Mobile App"],
    link: "https://play.google.com/store/apps/details?id=zw.co.showlineintelect&hl=en",
  },
];
