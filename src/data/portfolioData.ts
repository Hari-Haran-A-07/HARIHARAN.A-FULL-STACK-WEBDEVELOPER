import {
  ProfileData,
  MetricItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  CertificationItem,
  EducationItem,
  ArchitectureLayer,
  NavItem,
} from "@/types";

export const profileData: ProfileData = {
  name: "HARI HARAN A",
  titles: [
    "FULL STACK DEVELOPER",
    "SOFTWARE ENGINEER",
    "DATA ANALYST",
    "GRAPHIC DESIGNER",
    "WEB DEVELOPER",
    "SEO & DIGITAL MARKETING",
  ],
  bio: "Full Stack Developer and Software Engineer with proven enterprise experience architecting high-throughput microservices, low-latency React interfaces, distributed databases, and responsive digital products.",
  tagline: "BUILDING RESILIENT DIGITAL SYSTEMS AT SCALE",
  statement:
    "Building scalable digital experiences across software engineering, full-stack development, data, design and modern web technologies.",
  location: "Dindigul, Tamil Nadu, India",
  email: "suryahari971@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahari-haran07",
  github: "https://github.com/Hari-Haran-A-07",
  resumePdfUrl: "/assets/Hari_Haran_A_Resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "WORK", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "ARCHITECTURE", href: "#architecture" },
  { label: "CODE × DESIGN", href: "#design" },
  { label: "DATA", href: "#data" },
  { label: "ABOUT", href: "#about" },
  { label: "EDUCATION", href: "#education" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "CONTACT", href: "#contact" },
];

export const metricsData: MetricItem[] = [
  {
    id: "m1",
    value: "32%",
    label: "Server Latency Reduced",
    sublabel: "Optimized Spring Boot microservices & API Gateway response times",
    verifiedSource: "Techzon Wide Pvt. Ltd.",
  },
  {
    id: "m2",
    value: "99.9%",
    label: "Platform Availability",
    sublabel: "Engineered fault-tolerant architecture with automated failover",
    verifiedSource: "Techzon Wide Pvt. Ltd.",
  },
  {
    id: "m3",
    value: "28%",
    label: "Page-Load Acceleration",
    sublabel: "Reusable mobile-first React architecture & code splitting",
    verifiedSource: "KIEYVERSE",
  },
  {
    id: "m4",
    value: "40+",
    label: "Software Defects Fixed",
    sublabel: "Cross-browser compatibility, automated unit tests & REST integrations",
    verifiedSource: "Dot Com Infoway",
  },
  {
    id: "m5",
    value: "88%",
    label: "Automated Test Coverage",
    sublabel: "Rigorous unit testing, OpenAPI schemas & rule engine pipelines",
    verifiedSource: "Tech LMS",
  },
  {
    id: "m6",
    value: "30%",
    label: "Prototype-to-Prod Speed",
    sublabel: "Streamlined user journey wireframes & enterprise UI guidelines",
    verifiedSource: "Mita IT Automations",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "TECHZON WIDE PVT. LTD.",
    role: "Full Stack Developer & Team Lead",
    location: "Bangalore, India",
    period: "Jun 2026 – Present",
    isCurrent: true,
    highlights: [
      "Architected and deployed enterprise full-stack applications and microservices using Java, Spring Boot, and React.js.",
      "Engineered high-throughput REST APIs and asynchronous data processing pipelines, reducing average server response time by 32%.",
      "Configured API Gateway routing, authentication filters, automated logging, and distributed monitoring, maintaining 99.9% platform availability.",
      "Led cross-functional developers through bi-weekly Agile sprints, code reviews, and authoring rigorous technical specifications & API schemas.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "Microservices",
      "API Gateway",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Agile/Scrum",
    ],
  },
  {
    id: "exp-2",
    company: "KIEYVERSE",
    role: "Full Stack Web Developer Intern",
    location: "Remote",
    period: "Feb 2026 – Jul 2026",
    isCurrent: false,
    highlights: [
      "Engineered reusable mobile-first React.js components utilizing JavaScript ES6+, HTML5, and modern CSS3 architectures.",
      "Integrated asynchronous RESTful endpoints and optimized client-side state management, reducing page-load latency by 28%.",
      "Improved site engagement metrics by 22% through responsive UI refactoring, SEO optimization, and interactive components.",
      "Authored frontend architecture documentation, component libraries, and corporate design standards.",
    ],
    technologies: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "REST APIs",
      "SEO Architecture",
      "State Management",
    ],
  },
  {
    id: "exp-3",
    company: "DOT COM INFOWAY",
    role: "Web Development Intern — React / Full Stack",
    location: "Madurai, India",
    period: "2025",
    isCurrent: false,
    certificateUrl: "/assets/certificates/dci-certificate.png",
    highlights: [
      "Developed modular, accessible React user interfaces connected to backend RESTful web services.",
      "Improved asynchronous data rendering performance by 25% across high-traffic data views.",
      "Diagnosed and resolved 40+ critical software defects and cross-browser rendering inconsistencies.",
      "Created automated unit test suites and contributed to comprehensive technical documentation.",
    ],
    technologies: [
      "React.js",
      "REST APIs",
      "JavaScript",
      "Unit Testing",
      "Cross-Browser Compatibility",
      "Technical Documentation",
    ],
  },
  {
    id: "exp-4",
    company: "MITA IT AUTOMATIONS PVT. LTD.",
    role: "UI/UX & Web Development Intern",
    location: "Dindigul, India",
    period: "2024",
    isCurrent: false,
    highlights: [
      "Mapped user journeys, designed high-fidelity wireframes, and constructed responsive interactive prototypes.",
      "Accelerated prototype-to-production implementation speed by 30% through modular component specifications.",
      "Collaborated closely with senior engineering leads to establish enterprise UI guidelines and accessibility benchmarks.",
    ],
    technologies: [
      "UI/UX Design",
      "Wireframing",
      "Responsive Prototyping",
      "HTML5/CSS3",
      "Design Systems",
    ],
  },
];

export const projectData: ProjectItem[] = [
  {
    id: "kieyverse",
    number: "01",
    title: "KIEYVERSE",
    subtitle: "Corporate Digital Marketing Web Platform",
    category: "Full Stack & Enterprise Web",
    year: "2026",
    technologies: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive Design", "SEO Architecture"],
    summary:
      "Enterprise digital marketing portal featuring modular services catalog, interactive agency showcase, dynamic lead capture pipelines, and high-performance SEO structures.",
    problem:
      "Modern agencies require high-speed, SEO-indexed web portals with rich media delivery, responsive inquiry mechanisms, and zero render blocking across mobile and desktop devices.",
    solution:
      "Constructed a component-driven React platform with server-friendly routing, automated metadata tags, fluid inquiry form handling, and optimized asset delivery.",
    architecture: [
      "Component-driven React architecture with atomic design hierarchy",
      "Dynamic inquiry pipelines with client-side validation & API routing",
      "Structured SEO metadata & automated OpenGraph generators",
      "High-speed CDN caching with responsive media delivery",
    ],
    keyFeatures: [
      "Corporate service portfolio with interactive showcases",
      "Dynamic lead generation with automated client inquiry routing",
      "SEO-friendly metadata tags and structured data schemas",
      "Cross-browser and cross-device verified responsiveness",
      "Interactive case study galleries and performance metrics",
    ],
    metrics: [
      "28% Reduction in page load latency",
      "22% Increase in visitor engagement",
      "100% Mobile responsiveness score",
    ],
    githubUrl: "https://github.com/Hari-Haran-A-07/kiey-verse.in",
    liveDemoUrl: "https://kiey-verse.in",
    badge: "Production Platform",
  },
  {
    id: "luxury-raw",
    number: "02",
    title: "LUXURY.RAW",
    subtitle: "Luxury E-Commerce Web Platform",
    category: "Distributed E-Commerce & Microservices",
    year: "2026",
    technologies: [
      "Spring Boot",
      "Java",
      "React.js",
      "SQL",
      "Hadoop Fundamentals",
      "Distributed Tracing",
      "REST APIs",
    ],
    summary:
      "High-concurrency luxury e-commerce engine engineered with Spring Boot microservices, resilient checkout validation, distributed transaction logging, and a dynamic React storefront.",
    problem:
      "High-value e-commerce demands atomic transaction integrity, zero cart state divergence, and secure payment processing with distributed log traceability under load.",
    solution:
      "Engineered a decoupled Spring Boot backend with ACID-compliant SQL transactions, payment gateway hooks, distributed logging, and an editorial dark-mode React interface.",
    architecture: [
      "Decoupled React.js frontend communicating via REST API Gateway",
      "Spring Boot microservices cluster handling product inventory & order flows",
      "Relational SQL store with indexing for sub-10ms catalog lookups",
      "Distributed transaction tracing and structured audit logs",
    ],
    keyFeatures: [
      "Atomic cart & inventory reservation pipeline",
      "Secure checkout flow with validation and tokenized payment hooks",
      "Distributed transaction tracing for all order lifecycles",
      "Dynamic luxury product showcase with multi-angle preview",
      "High-throughput SQL catalog indexing with caching layer",
    ],
    metrics: [
      "Sub-20ms cart checkout validation time",
      "Zero inventory over-allocation rate",
      "Scalable microservices service cluster",
    ],
    githubUrl: "https://github.com/Hari-Haran-A-07/Lux.raw",
    badge: "Enterprise Architecture",
  },
  {
    id: "tech-lms",
    number: "03",
    title: "TECH LMS",
    subtitle: "Learning Management System with Automated KYC Pipelines",
    category: "Microservices & Identity Automation",
    year: "2026",
    technologies: [
      "Spring Boot",
      "Python",
      "React",
      "MongoDB",
      "Rule Engines",
      "OpenAPI / Swagger",
      "RBAC",
      "Unit Testing",
    ],
    summary:
      "Enterprise learning platform featuring microservices orchestration, Python asynchronous KYC identity verification pipelines, RBAC permission models, and 88% test coverage.",
    problem:
      "Corporate learning platforms require strict identity compliance, automated student document onboarding, and granular role permissions without degrading system responsiveness.",
    solution:
      "Built a hybrid Java/Python microservices stack combining Spring Boot's robust RBAC security filters with Python's asynchronous document verification pipelines and MongoDB document storage.",
    architecture: [
      "Role-Based Access Control (RBAC) security filters in Spring Boot",
      "Asynchronous Python workers processing background KYC document verification",
      "Document-oriented MongoDB schema for flexible course & user profiles",
      "OpenAPI/Swagger documented endpoints with 88% automated test suite coverage",
    ],
    keyFeatures: [
      "Automated KYC pipeline with rule-based document validation",
      "Granular RBAC for students, instructors, and enterprise admins",
      "Asynchronous background verification queues",
      "Interactive student dashboard with progress tracking and course previews",
      "Complete OpenAPI 3.0 API schema documentation",
    ],
    metrics: [
      "88% Automated test coverage",
      "Under 2-second automated KYC document validation",
      "Multi-tenant document storage in MongoDB",
    ],
    githubUrl: "https://github.com/Hari-Haran-A-07/Tech.lms",
    badge: "Verified 88% Test Coverage",
  },
  {
    id: "v2v-communication",
    number: "04",
    title: "REAL-TIME V2V SYSTEM",
    subtitle: "Vehicle-to-Vehicle Communication & Telematics",
    category: "IoT & Real-Time Distributed Systems",
    year: "2025",
    technologies: [
      "Python",
      "Socket Programming",
      "IoT Protocols",
      "REST APIs",
      "Multi-Threading",
      "Telematics",
    ],
    summary:
      "Low-latency real-time vehicle-to-vehicle telematics network built with multi-threaded socket pipelines, collision avoidance alert dispatchers, and fault-tolerant node synchronization.",
    problem:
      "Autonomous and connected vehicles require ultra-low-latency, millisecond telemetry broadcast to negotiate proximity, detect collision trajectories, and propagate emergency hazards.",
    solution:
      "Engineered multi-threaded Python TCP/UDP socket listeners with dynamic packet parsing, heartbeat monitors, priority alert queuing, and live telematics telemetry dashboards.",
    architecture: [
      "Multi-threaded socket pipelines for concurrent telemetry ingestion",
      "Asynchronous event listeners for immediate proximity threshold triggers",
      "Fault-tolerant node state machine for vehicle mesh discovery",
      "Diagnostic telematics reporting with packet verification checksums",
    ],
    keyFeatures: [
      "Real-time collision alert broadcasting across adjacent vehicle nodes",
      "Live vehicle telematics telemetry (speed, heading, proximity, state)",
      "Multi-threaded socket pipelines with microsecond packet dispatch",
      "Fault-tolerant node discovery and automatic reconnect handling",
      "Dynamic diagnostic telemetry stream with logging",
    ],
    metrics: [
      "Sub-5ms telemetry broadcast latency between nodes",
      "Zero packet drop rate under simulated high mesh density",
      "Multi-threaded concurrent socket handling",
    ],
    badge: "IoT Telematics Engineering",
  },
  {
    id: "social-media-automation",
    number: "05",
    title: "SOCIAL CONTENT SCHEDULER",
    subtitle: "Strategy & Multi-Format Content Scheduling Platform",
    category: "Full Stack & Asynchronous Job Pipelines",
    year: "2026",
    technologies: [
      "React.js",
      "Spring Boot",
      "PostgreSQL",
      "Cron Triggers",
      "Job Queues",
      "REST APIs",
    ],
    summary:
      "Full-stack social content distribution engine enabling scheduled publishing across reels, video clips, and static posts backed by Spring Boot cron triggers and PostgreSQL job queues.",
    problem:
      "Managing omnichannel social distribution requires calendar coordination, media asset pre-flight validation, and cron-triggered queue execution with failure retries.",
    solution:
      "Engineered an interactive React calendar UI connected to a Spring Boot scheduling daemon that processes queued media jobs via PostgreSQL transactions and webhook dispatchers.",
    architecture: [
      "Interactive React calendar UI with drag-and-drop scheduling",
      "Spring Boot backend daemon managing cron-scheduled job dispatchers",
      "PostgreSQL relational schema with queue locks and status state machines",
      "Media asset validation pipeline with real-time publication status tracking",
    ],
    keyFeatures: [
      "Multi-format scheduling support (Reels, Videos, Carousels, Static Posts)",
      "Interactive dynamic visual calendar with date-slot conflict prevention",
      "Backend cron-based job execution with automated retry mechanisms",
      "Media asset preview and aspect-ratio validation checks",
      "Post-publication analytics tracking and engagement metrics",
    ],
    metrics: [
      "100% Reliable cron trigger execution rate",
      "Zero schedule collision via transactional locks",
      "Multi-format media pre-flight validation",
    ],
    badge: "Full Stack Automation",
  },
  {
    id: "agri-commerce",
    number: "06",
    title: "AGRI-COMMERCE PLATFORM",
    subtitle: "Agri-Commerce with Predictive Weather Analytics",
    category: "Data-Driven Web & E-Commerce",
    year: "2026",
    completion: "60% Completed",
    technologies: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "Weather APIs",
      "Predictive Analytics",
      "REST APIs",
    ],
    summary:
      "Farmer-to-buyer agricultural marketplace integrating real-time predictive weather forecasting, automated crop-care advisory engines, and direct commerce pipelines.",
    problem:
      "Agricultural commerce is heavily disrupted by unpredicted weather shifts, lack of transparent farmer-to-buyer pricing, and fragmented supply chains.",
    solution:
      "Constructed a unified Spring Boot & React platform combining live multi-day meteorological APIs, crop disease advisory rules, and a direct digital produce exchange.",
    architecture: [
      "React product catalog and meteorological dashboard interface",
      "Spring Boot API layer integrating external multi-day weather services",
      "MySQL database managing seasonal crop inventories and transactions",
      "Algorithmic crop-care recommendation engine based on humidity & temperature",
    ],
    keyFeatures: [
      "Direct farmer-to-buyer commerce transaction pipeline with zero middlemen",
      "Predictive multi-day meteorological forecasts and extreme weather alerts",
      "Automated crop-care and pesticide timing recommendations",
      "Seasonal harvest inventory tracking and demand forecasting",
      "Farmer dashboard with pricing analytics and order management",
    ],
    metrics: [
      "60% Core platform milestone achieved",
      "Integrated 5-day predictive weather telemetry",
      "Direct supplier-to-consumer digital workflow",
    ],
    badge: "Active Development (60%)",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "FRONTEND",
    description: "Architecting modular, performant, and accessible user interfaces",
    accentColor: "#A100FF",
    skills: [
      "React.js",
      "Redux",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "Component Testing",
      "Cross-Browser Compatibility",
    ],
  },
  {
    category: "BACKEND",
    description: "Designing high-throughput microservices, secure APIs, and event pipelines",
    accentColor: "#7C3AED",
    skills: [
      "Java",
      "Spring Boot",
      "Python",
      "RESTful APIs",
      "Microservices Architecture",
      "Rules Engines",
      "Asynchronous Processing",
      "API Gateway Patterns",
    ],
  },
  {
    category: "DATABASE",
    description: "Data modeling, distributed document stores, and ACID compliance",
    accentColor: "#9333EA",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQL Query Optimization",
      "Database Indexing",
      "Schema Design",
    ],
  },
  {
    category: "DEVOPS & TOOLS",
    description: "Streamlining deployment pipelines, containerization, and monitoring",
    accentColor: "#A855F7",
    skills: [
      "Git",
      "Docker",
      "Postman",
      "CI/CD Workflows",
      "API Gateway Configuration",
      "Agile/Scrum",
      "Technical Documentation",
    ],
  },
  {
    category: "DATA & ANALYTICS",
    description: "Telemetry processing, data pipelines, and analytics infrastructure",
    accentColor: "#C084FC",
    skills: [
      "SQL",
      "Hadoop Administration Fundamentals",
      "Data Analytics",
      "IoT Protocols",
      "Telematics Pipelines",
      "Performance Metrics",
    ],
  },
  {
    category: "DESIGN & CREATIVE",
    description: "Enterprise UI/UX systems, interaction design, and visual brand identity",
    accentColor: "#E879F9",
    skills: [
      "UI/UX Design",
      "Interactive Wireframing",
      "Responsive Prototyping",
      "Graphic Design",
      "Design Systems",
      "Digital Marketing Visuals",
    ],
  },
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    step: "01",
    title: "CLIENT & PRESENTATION LAYER",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    description:
      "Modular, atomic UI components engineered for zero-layout-shift rendering, keyboard accessibility, and state synchronization.",
    dataFlow: "User Interactions & HTTPS Requests",
  },
  {
    step: "02",
    title: "API GATEWAY & SECURITY INGRESS",
    tech: ["API Gateway", "JWT / OAuth2", "Rate Limiter", "CORS Filter"],
    description:
      "Unified routing gateway handling token validation, request authentication, rate-limiting, and distributed request tracing.",
    dataFlow: "Authenticated & Filtered Ingress Traffic",
  },
  {
    step: "03",
    title: "MICROSERVICES & BUSINESS LOGIC",
    tech: ["Spring Boot", "Java", "Python", "Rule Engines", "REST APIs"],
    description:
      "Decoupled microservices executing business logic, transactional validations, identity verification, and workflow state machines.",
    dataFlow: "Service-to-Service gRPC / REST Payloads",
  },
  {
    step: "04",
    title: "ASYNC QUEUES & WORKER ENGINES",
    tech: ["Asynchronous Workers", "Socket Listeners", "Cron Schedulers", "Python Pipelines"],
    description:
      "Non-blocking background workers managing telematics broadcasts, document KYC validation, and scheduled content publication.",
    dataFlow: "Decoupled Event Messages & Socket Telemetry",
  },
  {
    step: "05",
    title: "DISTRIBUTED PERSISTENCE LAYER",
    tech: ["PostgreSQL", "MongoDB", "MySQL", "Hadoop Fundamentals"],
    description:
      "Multi-model persistence tier with ACID transactional reliability, indexed relational records, and high-volume document schemas.",
    dataFlow: "Optimized SQL Queries & Document Reads/Writes",
  },
  {
    step: "06",
    title: "MONITORING & LOG TRACEABILITY",
    tech: ["Structured Logging", "Uptime Monitors", "Prometheus/Metrics", "OpenAPI Schemas"],
    description:
      "Continuous health monitoring, distributed trace logging, latency tracking, and 99.9% availability assurance.",
    dataFlow: "Telemetry Diagnostics & Health Status",
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-dci",
    title: "React Web Development Internship Certification",
    issuer: "Dot Com Infoway Ltd.",
    year: "2025",
    credentialUrl: "/assets/certificates/dci-certificate.png",
    imagePreview: "/assets/certificates/dci-certificate.png",
    isVerifiedAsset: true,
    description:
      "Verified internship certification for React web development, modular component development, REST API integration, performance optimization, and software defect remediation.",
    topics: [
      "React.js Interface Development",
      "RESTful Endpoint Integration",
      "Asynchronous Data Rendering",
      "Automated Unit Testing",
      "Cross-Browser Compatibility",
    ],
  },
  {
    id: "cert-codetantra",
    title: "Python Using Data Structures",
    issuer: "CodeTantra",
    description:
      "Comprehensive certification in algorithmic problem solving, linear/non-linear data structures, object-oriented programming, and computational optimization in Python.",
    topics: [
      "Linear & Non-Linear Data Structures",
      "Algorithm Time & Space Complexity",
      "Object-Oriented Python",
      "Tree & Graph Traversals",
    ],
  },
  {
    id: "cert-infosys",
    title: "Applied Generative AI",
    issuer: "Infosys Springboard",
    description:
      "Enterprise training program covering transformer architectures, prompt engineering, LLM application pipelines, ethical AI governance, and generative AI integration patterns.",
    topics: [
      "Generative AI Architectures",
      "Prompt Engineering Pipelines",
      "LLM Integration Patterns",
      "Enterprise AI Governance",
    ],
  },
  {
    id: "cert-naan-mudhalvan",
    title: "RPA Foundation Course",
    issuer: "Naan Mudhalvan",
    description:
      "Industry-aligned robotic process automation certification emphasizing bot orchestration, business process workflow automation, rule-based triggers, and exception handling.",
    topics: [
      "Robotic Process Automation",
      "Workflow Logic & Rules Engines",
      "Data Scraping & Extraction",
      "Automated Task Scheduling",
    ],
  },
  {
    id: "cert-zoho",
    title: "Zoho Young Creator Program",
    issuer: "Zoho Corporation",
    description:
      "Enterprise low-code and application development certification centered on rapid application architecture, database workflows, form automation, and business logic implementation.",
    topics: [
      "Enterprise Application Architecture",
      "Business Workflow Automation",
      "Relational Data Modeling",
      "Custom Scripting & Logic",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "edu-btech",
    institution: "SSM INSTITUTE OF ENGINEERING AND TECHNOLOGY",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Business Systems",
    location: "Dindigul, Tamil Nadu, India",
    period: "2022 – 2026",
    score: "8.6 / 10",
    scoreLabel: "CGPA",
    highlights: [
      "Rigorous dual-domain curriculum spanning core Computer Science (Data Structures, Algorithms, Distributed Systems, Software Engineering) and Enterprise Business Systems.",
      "Maintained top-tier academic standing with a cumulative CGPA of 8.6/10.",
      "Lead developer for university research initiatives in IoT telematics and real-time socket communication systems.",
      "Active participant in technical symposiums, hackathons, and software engineering colloquiums.",
    ],
  },
  {
    id: "edu-school",
    institution: "ST. MARY'S HIGHER SECONDARY SCHOOL",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science & Mathematics Stream",
    location: "Dindigul, Tamil Nadu, India",
    period: "Graduated 2022",
    highlights: [
      "Completed Higher Secondary education with focus on Advanced Mathematics, Physics, and Computer Science fundamentals.",
      "Excellence in analytical reasoning and foundational computational problem solving.",
    ],
  },
];

export const marqueeItems: string[] = [
  "FULL STACK DEVELOPER",
  "•",
  "JAVA & SPRING BOOT",
  "•",
  "REACT.JS & NEXT.JS",
  "•",
  "MICROSERVICES ARCHITECTURE",
  "•",
  "PYTHON & ASYNC PIPELINES",
  "•",
  "DATA ANALYTICS & SQL",
  "•",
  "UI/UX & GRAPHIC DESIGN",
  "•",
  "SEO & DIGITAL MARKETING",
  "•",
  "99.9% UPTIME PLATFORM ENGINEERING",
  "•",
  "TECHZON WIDE PVT. LTD.",
  "•",
  "KIEYVERSE",
  "•",
  "DOT COM INFOWAY",
];
