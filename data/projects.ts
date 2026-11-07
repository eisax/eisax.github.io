export interface ProjectItem {
  name: string;
  desc: string;
  tags?: string[];
  link?: string;
  github?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Havano POS",
    desc: "Production mobile Point of Sale and payments application live on Google Play, integrated with enterprise ERP services. Features real-time sales processing, offline transaction queueing, inventory reconciliation, barcode scanning, and hardware receipt printing.",
    tags: ["Flutter", "Dart", "Google Play", "POS", "Payments"],
    link: "https://play.google.com/store/apps/details?id=com.havano.pos.havano_pos&hl=en",
  },
  {
    name: "Tumela Seller",
    desc: "Production merchant and seller mobile application live on Google Play for managing commercial stores, multi-channel product catalogs, customer sales orders, real-time inventory tracking, and payment reconciliations.",
    tags: ["Flutter", "Dart", "Google Play", "Merchant", "E-Commerce"],
    link: "https://play.google.com/store/apps/details?id=shop.tumela.seller&hl=en",
  },
  {
    name: "PaGrill",
    desc: "Live consumer mobile food ordering and checkout application on Google Play. Features real-time menu browsing, cart checkout, push notifications via Firebase Cloud Messaging, and digital payment gateway integrations.",
    tags: ["Flutter", "Dart", "Google Play", "Payments", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=shop.pagrill.user&hl=en",
  },
  {
    name: "Showline Intelect",
    desc: "Enterprise mobile application live on Google Play supporting commercial operations, customer account workflows, field business data synchronisation, and offline document drafts.",
    tags: ["Flutter", "Android", "Google Play", "Enterprise", "Mobile App"],
    link: "https://play.google.com/store/apps/details?id=zw.co.showlineintelect&hl=en",
  },
  {
    name: "ecocash_dart_sdk",
    desc: "Comprehensive, production-ready Dart SDK for integrating with the EcoCash Open API. Provides enterprise-grade features for processing mobile payments, customer refunds, transaction status polling, circuit breakers, and secure financial logging.",
    tags: ["Dart", "Flutter", "EcoCash", "Wallets", "Fintech"],
    github: "https://github.com/eisax/ecocash_dart_sdk",
    link: "https://github.com/eisax/ecocash_dart_sdk",
  },
  {
    name: "pixo_flutter",
    desc: "High-performance Flutter plugin wrapping the Rust pixo image compression engine via Dart FFI. Delivers fast client-side image compression optimized for mobile KYC identity verification, document uploads, and camera capture.",
    tags: ["Flutter", "Rust", "Dart FFI", "KYC Verification", "Mobile"],
    github: "https://github.com/eisax/pixo_flutter",
    link: "https://github.com/eisax/pixo_flutter",
  },
  {
    name: "zim_phone_utils_dart",
    desc: "Open-source Dart package for validating, formatting, and detecting network carriers (Econet, NetOne, Telecel) for Zimbabwean phone numbers across mobile networks. Widely adopted across 250+ integrations for user onboarding and remittance routing.",
    tags: ["Dart", "Flutter", "Onboarding", "Validation", "Remittance"],
    github: "https://github.com/eisax/zim_phone_utils_dart",
    link: "https://github.com/eisax/zim_phone_utils_dart",
  },
  {
    name: "Mobile Wallet & Remittance Architecture",
    desc: "Production mobile wallet reference architecture in Flutter. Features biometric authentication (Fingerprint & FaceID), encrypted secure storage, certificate pinning, JWT/OAuth 2.0 token management, and compliance with OWASP Mobile Top 10 standards.",
    tags: ["Flutter", "Biometrics", "Cert Pinning", "OWASP", "Wallets"],
    github: "https://github.com/eisax",
  }
];
