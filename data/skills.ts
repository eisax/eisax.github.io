export const skillGroups = [
  {
    title: "Mobile App Development",
    capabilities: [
      "Building and maintaining production customer apps in Flutter and Dart for Android and iOS",
      "State management with Riverpod and BLoC, clean architecture, and responsive, fluid mobile UIs",
      "Native Android development with Kotlin, Jetpack Compose, and platform-channel integrations",
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
    title: "Fintech, Wallets & Payments",
    capabilities: [
      "Integrating backend APIs for customer onboarding, KYC verification, mobile wallets, and money transfers",
      "EcoCash Open API integrations, payment processing, transaction lookups, and automated refunds",
      "Engineering fault-tolerant payment workflows with circuit breakers, idempotent requests, and offline queues",
    ],
    softwareSkills: [
      { skillName: "Mobile Wallets", iconifyTag: "mdi:wallet-outline" },
      { skillName: "EcoCash", iconifyTag: "mdi:cash-fast" },
      { skillName: "Transfers & Payments", iconifyTag: "mdi:bank-transfer" },
      { skillName: "KYC & Onboarding", iconifyTag: "mdi:account-check-outline" },
      { skillName: "POS Systems", iconifyTag: "mdi:point-of-sale" },
      { skillName: "Payment APIs", iconifyTag: "mdi:credit-card-outline" },
    ],
  },
  {
    title: "Mobile Security & Architecture",
    capabilities: [
      "Implementing mobile security: encrypted secure storage, biometric authentication, and certificate pinning",
      "Adhering to OWASP Mobile Top 10 standards and applying security audit remediations",
      "Secure token management, OAuth 2.0, JWT authentication, and encrypted API communication",
    ],
    softwareSkills: [
      { skillName: "Biometrics", iconifyTag: "mdi:fingerprint" },
      { skillName: "Secure Storage", iconifyTag: "mdi:shield-lock-outline" },
      { skillName: "Certificate Pinning", iconifyTag: "mdi:certificate-outline" },
      { skillName: "OWASP Mobile", iconifyTag: "mdi:security" },
      { skillName: "OAuth 2.0 & JWT", iconifyTag: "logos:oauth" },
      { skillName: "REST APIs", iconifyTag: "mdi:api" },
    ],
  },
  {
    title: "Data, Storage & Backend Systems",
    capabilities: [
      "Embedded mobile databases with SQLite and Drift for offline-first transactional integrity",
      "Firebase suite integration: Cloud Messaging (FCM), Crashlytics, and Remote Config",
      "Connecting mobile clients with backend REST APIs across Laravel, ASP.NET Core, and Spring Boot",
    ],
    softwareSkills: [
      { skillName: "SQLite", iconifyTag: "logos:sqlite" },
      { skillName: "Drift", iconifyTag: "mdi:database-cog-outline" },
      { skillName: "Firebase", iconifyTag: "logos:firebase" },
      { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
      { skillName: "Laravel", iconifyTag: "logos:laravel" },
      { skillName: "ASP.NET Core", iconifyTag: "logos:dotnet" },
    ],
  },
  {
    title: "Testing, Release & Engineering",
    capabilities: [
      "Managing Google Play Store and App Store releases, versioning, and staged rollouts",
      "Writing unit, widget, and integration tests to ensure app stability and high-frame-rate performance",
      "Continuous integration & deployment (CI/CD) pipelines, automated build scripts, and production monitoring",
    ],
    softwareSkills: [
      { skillName: "Google Play", iconifyTag: "logos:google-play-icon" },
      { skillName: "Testing (Unit & Widget)", iconifyTag: "mdi:test-tube" },
      { skillName: "CI/CD", iconifyTag: "mdi:source-branch-sync" },
      { skillName: "Git & GitHub", iconifyTag: "logos:git-icon" },
      { skillName: "Docker", iconifyTag: "logos:docker-icon" },
      { skillName: "Linux", iconifyTag: "logos:linux-tux" },
    ],
  },
];
