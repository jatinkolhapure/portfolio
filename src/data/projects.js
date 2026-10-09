export const projects = [
  {
    id: "nexuspay",
    title: "NexusPay",
    badge: "FLAGSHIP ENGINEERING PROJECT",
    tagline: "Distributed Payment Infrastructure Platform",
    description: "A full-stack payment infrastructure platform engineered around secure payment workflows, distributed microservices, event-driven processing, fraud detection, idempotency, reliable transaction handling, and production-style security.",
    isLive: true,
    liveUrl: "https://nexuspayapp.online/",
    githubUrl: "https://github.com/jatinkolhapure",
    image: "/projects/nexuspay.png",
    signals: [
      { metric: "7", label: "Microservices" },
      { metric: "35+", label: "REST Endpoints" },
      { metric: "Event-Driven", label: "Kafka Architecture" },
      { metric: "Zero-Loss", label: "HMAC Webhooks" }
    ],
    techStack: [
      "Java 21",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "JWT & OAuth2",
      "Razorpay",
      "Resilience4j",
      "Swagger / OpenAPI"
    ],
    resumePoints: [
      "Architected a 7-service microservices payment platform (payment, merchant, fraud, ledger, notification, webhook + Spring Cloud Gateway) on Kafka and PostgreSQL, decoupling payments from fraud checks, ledger posting and alerts.",
      "Secured the platform with JWT/OAuth2, RBAC, Redis-backed rate limiting and audit logging, and enforced idempotency keys to prevent duplicate charges from client retries and message redelivery.",
      "Integrated Razorpay (TEST mode) with failure-aware handling for declined, timed-out and retried payments, plus HMAC-signed webhooks with exponential-backoff retry and a double-entry ledger for consistent financial state.",
      "Deployed on Azure ARM64 with Docker Compose and HTTPS Nginx on a custom domain; 35+ Swagger-documented REST APIs.",
      "Validated with 75 automated tests and 9/9 regression checks, achieving zero test failures before deployment."
    ]
  },
  {
    id: "pg-manager",
    title: "PG Manager",
    badge: "REAL-WORLD CLIENT PROJECT",
    tagline: "Commercial Property & Payment Management Platform",
    description: "A real-world payment-management application built to solve practical operational requirements with secure backend architecture, custom payment-processing logic, and automated dues tracking.",
    isLive: true,
    liveUrl: "https://pg-management-system-pink.vercel.app/",
    image: "/projects/pg-manager.png",
    clientContext: "Engineered to replace manual cash collections and scattered spreadsheets for commercial paying-guest property operations, providing transparent payment reconciliation and resident management.",
    techStack: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Razorpay",
      "Spring Security",
      "JWT",
      "RBAC",
      "Redis",
      "Docker"
    ],
    resumePoints: [
      "Built a full-stack property-management SaaS for PG/hostel operators as a client project, with a Spring Boot backend exposing 72 REST APIs secured by stateless JWT and role-based access control (Admin/Tenant).",
      "Implemented Razorpay online rent collection: order creation, payment verification and status reconciliation.",
      "Designed a 19-table PostgreSQL schema (Flyway-versioned) for properties, rooms, beds, tenants and rent; automated monthly dues, deposit deductions and bed-occupancy checks to prevent double-booking.",
      "Developed 50+ React/TypeScript components (Vite) with Dark/Light theming, centralized state mapped to backend DTOs, and an installable PWA with OS-aware install prompts for a native-like mobile experience.",
      "Diagnosed a Vite dev-server and Service Worker caching conflict that caused white-screen failures in an embedded cross-origin iframe; fixed it with cache-busting and revised sandbox policies, restoring 100% render success."
    ]
  },
  {
    id: "studenthub",
    title: "StudentHub",
    badge: "COLLABORATION + ML PLATFORM",
    tagline: "Peer Collaboration & ML-Driven Skill Diagnostic Platform",
    description: "A Spring Boot + React platform combining peer collaboration, coding-practice tracking, administrative monitoring, and machine-learning-driven personalized reporting.",
    isLive: false,
    githubUrl: "https://github.com/jatinkolhapure",
    techStack: [
      "Spring Boot",
      "React",
      "MySQL",
      "Random Forest ML",
      "REST APIs",
      "Spring Security",
      "Chart.js"
    ],
    signals: [
      { metric: "50+", label: "REST Endpoints" },
      { metric: "Random Forest", label: "Skill Diagnostic ML" },
      { metric: "Role-Based", label: "Peer Collaboration" },
      { metric: "Unified", label: "Admin Oversight" }
    ],
    highlights: [
      {
        title: "Role-Based Collaboration",
        desc: "Engineered discovery and join-request workflows allowing senior students to publish technical projects and junior peers to submit structured collaboration proposals."
      },
      {
        title: "Practice Submission Tracking",
        desc: "Built a centralized tracking system for logging algorithmic problem-solving practice from external coding platforms, establishing consistency records."
      },
      {
        title: "Machine Learning Reporting",
        desc: "Trained a Random Forest model on student performance datasets to analyze practice distribution and output personalized industry-readiness gap reports."
      },
      {
        title: "Administrative Monitoring",
        desc: "Created comprehensive monitoring endpoints and a dashboard for overseeing user activity, project lifecycle statuses, and submission verification."
      }
    ]
  }
];
