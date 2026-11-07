export const skillGroups = [
  {
    title: "Mobile Engineering",
    capabilities: [
      "Architecting production cross-platform applications in Flutter and Dart with clean separation of concerns",
      "State management using Riverpod and BLoC with declarative, predictable UI architectures",
      "Native Android platform integration and component development using Kotlin and Jetpack Compose",
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
      "Authoring production payment SDKs, EcoCash Open API integrations, and webhook processing pipelines",
      "Designing resilient transaction flows with idempotent dispatch, retry strategies, and status polling",
      "Integrating Point of Sale (POS) hardware peripherals, barcode scanners, and thermal receipt printers",
    ],
    softwareSkills: [
      { skillName: "Payment Gateways", iconifyTag: "mdi:credit-card-outline" },
      { skillName: "EcoCash API", iconifyTag: "mdi:cash-fast" },
      { skillName: "Paynow", iconifyTag: "mdi:bank-transfer" },
      { skillName: "Mobile POS", iconifyTag: "mdi:point-of-sale" },
      { skillName: "Transaction Flow", iconifyTag: "mdi:swap-horizontal-bold" },
      { skillName: "Webhooks", iconifyTag: "mdi:transit-connection-variant" },
    ],
  },
  {
    title: "Application Security & Networking",
    capabilities: [
      "Designing resilient RESTful API client layers, token-based authentication (OAuth 2.0, JWT), and secure session lifecycles",
      "Securing mobile data and sensitive credentials using platform keychains and encrypted storage engines",
      "Client-side payload validation, data sanitization, and secure communication over HTTPS/TLS",
    ],
    softwareSkills: [
      { skillName: "REST APIs", iconifyTag: "mdi:api" },
      { skillName: "OAuth 2.0 & JWT", iconifyTag: "logos:oauth" },
      { skillName: "Secure Storage", iconifyTag: "mdi:shield-key-outline" },
      { skillName: "Data Encryption", iconifyTag: "mdi:lock-check-outline" },
      { skillName: "Network Security", iconifyTag: "mdi:shield-outline" },
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
