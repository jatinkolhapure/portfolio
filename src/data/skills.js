export const engineeringDomains = [
  {
    id: "backend",
    title: "Backend Architecture",
    tagline: "High-concurrency servers, multithreaded logic, and enterprise APIs",
    accentColor: "#3b82f6",
    technologies: [
      { name: "Java 8–21", highlight: true },
      { name: "Spring Boot", highlight: true },
      { name: "REST APIs", highlight: false },
      { name: "JPA / Hibernate", highlight: false },
      { name: "Maven", highlight: false }
    ],
    concepts: [
      "Multithreading",
      "OOP Design Patterns",
      "Idempotent API Contracts",
      "Layered Architecture",
      "Exception Pipelines"
    ]
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    tagline: "Asynchronous messaging, distributed caching, and service decoupling",
    accentColor: "#8b5cf6",
    technologies: [
      { name: "Apache Kafka", highlight: true },
      { name: "Redis", highlight: true },
      { name: "Microservices", highlight: true },
      { name: "Resilience4j", highlight: false }
    ],
    concepts: [
      "Event-Driven Architecture",
      "Distributed Caching",
      "Idempotency Keys",
      "Token-Bucket Rate Limiting",
      "Dead Letter Queues"
    ]
  },
  {
    id: "security",
    title: "Security & Authentication",
    tagline: "Stateless filter chains, tokenized access, and cryptographic defense",
    accentColor: "#06b6d4",
    technologies: [
      { name: "Spring Security", highlight: true },
      { name: "JWT", highlight: true },
      { name: "OAuth2", highlight: false },
      { name: "HMAC", highlight: false }
    ],
    concepts: [
      "Stateless Filter Chains",
      "Role-Based Access (RBAC)",
      "HMAC Signature Verification",
      "Token Rotation & Refresh",
      "Tamper-Resistant Audit Logs"
    ]
  },
  {
    id: "data",
    title: "Data & Persistence",
    tagline: "ACID relational modeling, connection pooling, and transaction integrity",
    accentColor: "#10b981",
    technologies: [
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: false },
      { name: "Redis Cache", highlight: false },
      { name: "MongoDB", highlight: false }
    ],
    concepts: [
      "ACID Transactions",
      "Double-Entry Ledger",
      "Index Optimization",
      "HikariCP Pooling",
      "Relational Schema Design"
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    tagline: "Component-driven interfaces, responsive layouts, and API integration",
    accentColor: "#38bdf8",
    technologies: [
      { name: "React", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "HTML5 & CSS3", highlight: false },
      { name: "Vite", highlight: false }
    ],
    concepts: [
      "Component Architecture",
      "State & Custom Hooks",
      "REST Client Integration",
      "Responsive Layouts",
      "Accessibility & UX"
    ]
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    tagline: "Containerization, API contracts, environment reproducibility, and builds",
    accentColor: "#f59e0b",
    technologies: [
      { name: "Docker", highlight: true },
      { name: "Docker Compose", highlight: true },
      { name: "Git & GitHub", highlight: false },
      { name: "Swagger / OpenAPI", highlight: false },
      { name: "Linux / Bash", highlight: false }
    ],
    concepts: [
      "Multi-Container Environments",
      "Isolated Bridge Networks",
      "API Contract Specs",
      "Branching Workflows",
      "Linux Server Config"
    ]
  }
];

export const quickStatsPillars = [
  { label: "Core Language", value: "Java 8–21" },
  { label: "Backend", value: "Spring Boot" },
  { label: "Streaming", value: "Apache Kafka" },
  { label: "Cache / DB", value: "Redis & PostgreSQL" },
  { label: "Frontend", value: "React & JS" },
  { label: "DevOps", value: "Docker" }
];
