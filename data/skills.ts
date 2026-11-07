export const skillGroups = [
  {
    title: "Mobile Engineering",
    capabilities: [
      "Architecting production mobile applications in Flutter and Dart with clean separation of concerns",
      "Predictable reactive state management using Riverpod and BLoC with declarative UI patterns",
      "Bridging native Android platform capabilities and SDKs using Kotlin and Jetpack Compose",
    ],
    softwareSkills: [
      { skillName: "Flutter", iconifyTag: "logos:flutter" },
      { skillName: "Dart", iconifyTag: "logos:dart" },
      { skillName: "Android", iconifyTag: "logos:android-icon" },
      { skillName: "Kotlin", iconifyTag: "logos:kotlin-icon" },
      { skillName: "Jetpack Compose", iconifyTag: "simple-icons:jetpackcompose" },
      { skillName: "Riverpod", iconifyTag: "simple-icons:flutter" },
      { skillName: "BLoC", iconifyTag: "mdi:cube-outline" },
    ],
  },
  {
    title: "Payments & Financial Systems",
    capabilities: [
      "Authoring production payment SDKs, EcoCash Open API integrations, and webhook processing engines",
      "Designing resilient transaction pipelines with idempotent dispatch, circuit breakers, and status polling",
      "Integrating Point of Sale (POS) hardware peripherals, barcode scanners, and thermal receipt printers",
    ],
    softwareSkills: [
      { skillName: "Payment Gateways", iconifyTag: "mdi:credit-card-outline" },
      { skillName: "EcoCash API", iconifyTag: "mdi:cash-fast" },
      { skillName: "POS Systems", iconifyTag: "mdi:point-of-sale" },
      { skillName: "Transaction Processing", iconifyTag: "mdi:bank-transfer" },
      { skillName: "Idempotency & Queues", iconifyTag: "mdi:tray-full" },
      { skillName: "Webhooks", iconifyTag: "mdi:transit-connection-variant" },
    ],
  },
  {
    title: "Application Security & Networking",
    capabilities: [
      "Hardening mobile applications with TLS certificate pinning, biometrics, and encrypted key storage",
      "Implementing secure RESTful network layers, OAuth 2.0 / JWT token lifecycles, and payload validation",
      "Mitigating client-side security risks aligned with industry defense-in-depth security best practices",
    ],
    softwareSkills: [
      { skillName: "REST APIs", iconifyTag: "mdi:api" },
      { skillName: "OAuth 2.0 & JWT", iconifyTag: "logos:oauth" },
      { skillName: "Biometric Auth", iconifyTag: "mdi:fingerprint" },
      { skillName: "Cryptography", iconifyTag: "mdi:shield-key-outline" },
      { skillName: "Network Security", iconifyTag: "mdi:lock-check-outline" },
      { skillName: "JSON", iconifyTag: "mdi:code-json" },
    ],
  },
  {
    title: "Data Persistence & Backend Services",
    capabilities: [
      "Offline-first relational data modeling with SQLite and Drift for resilient offline synchronization",
      "Firebase services integration: Cloud Messaging (FCM), Crashlytics telemetry, and Remote Config",
      "Connecting mobile clients with enterprise backend services built on Laravel, ASP.NET Core, and Spring Boot",
    ],
    softwareSkills: [
      { skillName: "SQLite", iconifyTag: "logos:sqlite" },
      { skillName: "Drift", iconifyTag: "mdi:database-cog-outline" },
      { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
      { skillName: "Firebase", iconifyTag: "logos:firebase" },
      { skillName: "Laravel", iconifyTag: "logos:laravel" },
      { skillName: "ASP.NET Core", iconifyTag: "logos:dotnet" },
    ],
  },
  {
    title: "DevOps, Testing & Quality Assurance",
    capabilities: [
      "Automating multi-environment CI/CD release pipelines and managing Google Play Store releases",
      "Comprehensive test suites with unit, widget, and end-to-end integration test coverage",
      "Source control management, semantic versioning, and open-source package publishing on pub.dev and GitHub",
    ],
    softwareSkills: [
      { skillName: "Google Play Console", iconifyTag: "logos:google-play-icon" },
      { skillName: "Automated Testing", iconifyTag: "mdi:test-tube" },
      { skillName: "CI/CD", iconifyTag: "mdi:source-branch-sync" },
      { skillName: "Git & GitHub", iconifyTag: "logos:git-icon" },
      { skillName: "Docker", iconifyTag: "logos:docker-icon" },
      { skillName: "Linux", iconifyTag: "logos:linux-tux" },
    ],
  },
];
