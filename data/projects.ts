export interface ProjectItem {
  name: string;
  desc: string;
  tags?: string[];
  link?: string;
  github?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Havano All-In-One",
    desc: "The grand masterpiece suite of interconnected modules, serving as the ultimate backbone for enterprise operations and seamless API extensions.",
    tags: ["Odoo", "Enterprise", "Architecture"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Havano Odoo API",
    desc: "Native Odoo session-based REST API for seamless POS synchronization. Features intelligent SKU matching, idempotent sales processing, and real-time stock queries.",
    tags: ["Odoo", "REST API", "Python"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Havano Payments",
    desc: "Odoo payment provider integrating Paynow and EcoCash gateway solutions with automated transaction processing, custom form templates, and web frontend interactions.",
    tags: ["Odoo", "Payment Gateway", "Paynow", "EcoCash"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Finminds Financial AI Agent",
    desc: "Autonomous financial AI agent engineered for multi-step market reasoning, tool-based execution pipelines with real-time financial data, and self-reflective evaluation loops.",
    tags: ["AI Agents", "Python", "Finance"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Pairedminds AI Assistant",
    desc: "AI assistant system with persistent memory and multi-tool integration. Designed modular architecture connecting external APIs with hybrid memory concepts for long-term contextual awareness.",
    tags: ["AI Assistant", "Memory", "TypeScript"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Sentinel AI Security Testing",
    desc: "Autonomous AI security testing system simulating penetration testing workflows across multi-phase pipelines: reconnaissance, analysis, exploitation, and automated reporting.",
    tags: ["Security", "Autonomous AI", "Automation"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Odoo to Frappe/ERPNext Sync",
    desc: "Bi-directional data synchronization bridge connecting Odoo instances with Frappe/ERPNext systems for distributed operations and multi-entity environments.",
    tags: ["Odoo", "Frappe", "ERPNext", "Sync"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Desktop POS ERP",
    desc: "Custom desktop Point of Sale application tightly integrated with Odoo ERP for robust offline and online sales handling with local caching.",
    tags: ["Odoo", "POS", "Desktop", "C#"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Odoo Sage API",
    desc: "Bi-directional synchronization between Odoo and Sage Pastel Evolution SDK via C# API covering sales, users, quotes, invoices, and cashbook operations.",
    tags: ["Odoo", "Sage API", "C#", "Integration"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Linux Odoo 19 Deployment Engine",
    desc: "Automated deployment engine for Odoo 19 on Linux. Configures PostgreSQL, handles instance management, service orchestration, and streamlines full setup.",
    tags: ["Odoo 19", "Linux", "DevOps"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Odoo SaaS Master",
    desc: "Docker-based multi-tenant Odoo SaaS orchestration engine supporting automated instance provisioning (v15-v19), custom domain routing, SSH keypair management, remote PostgreSQL orchestration, automated backups, and eCommerce subscription checkout.",
    tags: ["Odoo 19", "Docker", "SaaS", "DevOps"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Custom Financial Statements Suite",
    desc: "Advanced financial reporting modules delivering customizable Profit and Loss, dynamic Balance Sheets, and Statement of Financial Position insights.",
    tags: ["Odoo", "Accounting", "Reporting", "QWeb"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "WhatsApp API Integration",
    desc: "Seamlessly send automated notifications, invoices, payment reminders, and quotations directly to clients via WhatsApp from Odoo business records.",
    tags: ["Odoo", "WhatsApp API", "Python"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "CRM Bulk Data Import Engine",
    desc: "High-performance migration engine to import users, leads, lead sources, and activities directly from CSV/Excel into Odoo CRM with validation and field mapping.",
    tags: ["CRM", "Import", "Data Migration"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "Odoo Data Sentinel",
    desc: "A comprehensive Odoo application for automated database backups, data quality monitoring, schema validation, and health analysis across ERP ecosystems.",
    tags: ["Odoo", "Data Management", "Security"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
  {
    name: "White Label & Multi-Company Branding",
    desc: "Enterprise theming module to position corporate identity on top-left navigation, provide real-time theme controls, and eliminate default vendor branding.",
    tags: ["Odoo", "Branding", "UI/UX"],
    link: "https://ozzene.com/developers/josphatkndhlovu",
  },
];
