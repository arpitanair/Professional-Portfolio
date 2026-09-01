export const profile = {
  name: "Arpita Nair",
  monogram: "AN",
  role: "B.Tech CSE — Data Science & Machine Learning",
  positioning: ["Aspiring Business Analyst", "Data & Analytics Enthusiast"],
  intro:
    "I'm a Computer Science Engineering student specializing in Data Science and Machine Learning, interested in transforming data into meaningful insights and connecting technology with real business decisions. I build practical analytical projects while continuously developing my technical, problem-solving and communication skills.",
  email: "nairarpita07@gmail.com",
  linkedin: "https://linkedin.com/in/arpitanair24",
  linkedinLabel: "linkedin.com/in/arpitanair24",
  github: "https://github.com/arpitanair",
  githubLabel: "github.com/arpitanair",
  resumeUrl: `${import.meta.env.BASE_URL}assets/Arpita_Nair_CV.pdf`,
resumeFileName: "Arpita_Nair_CV.pdf",
portrait: `${import.meta.env.BASE_URL}assets/arpita-portrait-2026.jpg`,
  tagline: "DATA • ANALYTICS • BUSINESS",
};

export const snapshot = [
  { label: "Current Program", value: "B.Tech Computer Science Engineering" },
  { label: "Specialization", value: "Data Science & Machine Learning" },
  { label: "University", value: "Lovely Professional University" },
  { label: "Current CGPA", value: "8.02", highlight: true },
  { label: "Career Direction", value: "Business Analytics" },
];

export const about = {
  statement: [
    { text: "TECHNOLOGY GIVES ME THE ", accent: "TOOLS", tone: "cobalt" },
    { text: "DATA GIVES ME THE ", accent: "EVIDENCE", tone: "ivory" },
    { text: "BUSINESS GIVES ME THE ", accent: "DIRECTION", tone: "rose" },
  ],
  copy: "I am a Computer Science Engineering student specializing in Data Science and Machine Learning at Lovely Professional University. My interests lie at the intersection of analytics, technology and business problem-solving. I enjoy transforming raw information into structured insights, building practical data-driven projects and understanding how technology can support better decision-making. Alongside technical development, I am continuously strengthening my communication, analytical thinking and business understanding as I work toward a career in Business Analytics.",
};

export const education = [
  {
    years: "2025 — PRESENT",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    lines: [
      "Bachelor of Technology — Computer Science and Engineering",
      "Specialization: Data Science & Machine Learning",
    ],
    scoreLabel: "Current CGPA",
    score: "8.02",
  },
  {
    years: "2025",
    institution: "Govt. Ganapath Girls Higher Secondary School",
    location: "Calicut, Kerala",
    lines: ["Higher Secondary Education"],
    scoreLabel: "Percentage",
    score: "94%",
  },
  {
    years: "2023",
    institution: "Govt. Girls Higher Secondary School, Cotton Hill",
    location: "Trivandrum, Kerala",
    lines: ["Secondary Education"],
    scoreLabel: "Percentage",
    score: "95%",
  },
];

export const skillGroups = [
  {
    title: "Programming / Languages",
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Data Visualization",
      "Exploratory Data Analysis (EDA)",
      "Business Analytics",
    ],
  },
  {
    title: "Visualization & Business Tools",
    skills: ["Plotly", "Tableau", "Microsoft Excel"],
  },
  {
    title: "Development & Platform Tools",
    skills: ["Streamlit", "Git", "GitHub", "VS Code"],
  },
  {
    title: "AI / Emerging Technology",
    skills: ["Generative AI Fundamentals"],
  },
  {
    title: "Professional Skills",
    skills: [
      "Analytical Thinking",
      "Problem-Solving",
      "Communication",
      "Teamwork",
      "Adaptability",
    ],
  },
];

export interface ProjectLink {
  label: string;
  href: string | null;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  date: string;
  tagline: string;
  problem: string;
  built: string;
  features: string[];
  stack: string[];
  learned: string;
  stats: { label: string; value: string }[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "bizguard",
    number: "01",
    name: "BizGuard.AI",
    category: "Business & Security Intelligence Dashboard",
    date: "August 2026",
    tagline:
      "An interactive business and security intelligence dashboard that consolidates operational metrics and protection-oriented information within a unified decision-support interface.",
    problem:
      "Bring business performance indicators and security-oriented monitoring into one centralized dashboard designed for improved operational visibility, instead of scattering them across disconnected views.",
    built:
      "Developed using Python and Streamlit, with Pandas for structured data handling and Plotly for interactive analytical visualizations. Integrated screenshot-based transaction assessment using Tesseract OCR to extract and process payment information through a structured review workflow.",
    features: [
      "Screenshot-based transaction assessment powered by Tesseract OCR",
      "Business intelligence modules for revenue, orders and customer-retention indicators",
      "Security intelligence modules covering fraud awareness and payment monitoring",
      "Protection-focused security alerts within a single decision-support interface",
    ],
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "Tesseract OCR"],
    learned:
      "Strengthened practical understanding of dashboard architecture, information hierarchy, data processing, OCR integration and designing analytical interfaces around business-oriented use cases.",
    stats: [],
    links: [
      { label: "GitHub", href: null },
      { label: "Live Demo", href: null },
    ],
  },
  {
    id: "netflix",
    number: "02",
    name: "Netflix Strategic Insights Platform",
    category: "Interactive Content Analytics & Strategic Insights Dashboard",
    date: "July 2026",
    tagline:
      "An interactive analytics platform spanning 8,807 Netflix titles, converting content-distribution, rating, country, genre and release-year data into executive-oriented analytical views.",
    problem:
      "Transform a large real-world content catalogue into structured, executive-oriented analytical views that simplify the evaluation of catalogue patterns and content trends.",
    built:
      "Processed catalogue-level data with Pandas to analyze movie and TV-show distribution and derive portfolio-level indicators, then translated the exploratory analysis into dynamic Plotly visualizations delivered through a Streamlit interface.",
    features: [
      "Executive Insights Panel",
      "Content distribution visualizations",
      "Rating analysis",
      "Release-year analysis",
      "Country analysis",
      "Genre analysis",
      "Interactive Content Explorer",
    ],
    stack: ["Python", "Pandas", "Streamlit", "Plotly"],
    learned:
      "Demonstrated the ability to transform a large real-world dataset into structured, interactive and decision-oriented analytical views.",
    stats: [
      { label: "Total Titles", value: "8,807" },
      { label: "Movies", value: "6,131" },
      { label: "TV Shows", value: "2,676" },
      { label: "Countries", value: "749" },
      { label: "Genres", value: "42" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/arpitanair/NETFLIX-STRATEGIC-INSIGHTS-PLATFORM",
      },
      { label: "Live Demo", href: null },
    ],
  },
];

export const experience = {
  title: "Deloitte Data Analytics Job Simulation",
  provider: "Forage",
  duration: "July 2026 – August 2026",
  focus: "Data Analytics & Forensic Technology",
  kind: "Job Simulation — Virtual Experience",
  description:
    "Completed a practical Deloitte Data Analytics Job Simulation through Forage, applying analytical thinking to operational and equality-related datasets.",
  tasks: [
    {
      label: "Task 01",
      text: "Evaluated Daikibo telemetry data in Tableau to identify downtime patterns by factory and device type, enabling structured operational comparison.",
    },
    {
      label: "Task 02",
      text: "Classified equality-score data into Fair, Unfair and Highly Discriminative categories to support systematic review and interpretation.",
    },
  ],
  skills: [
    "Data interpretation",
    "Tableau",
    "Operational analysis",
    "Classification",
    "Analytical reasoning",
  ],
};

export const certificates = [
  {
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "LinkedIn Learning / Microsoft",
    completion: "August 2026",
    topics: ["Generative AI Fundamentals", "Professional Learning"],
    credentialUrl: null as string | null,
  },
  {
    name: "Advanced Power BI Workshop",
    issuer: "upGrad",
    completion: "November 2025",
    topics: ["Business Intelligence", "Data Visualization"],
    credentialUrl: null as string | null,
  },
];

export const beyond = [
  {
    title: "Project Building",
    text: "Applying technical learning through independent analytical projects.",
  },
  {
    title: "Continuous Learning",
    text: "Developing industry-relevant skills through certifications and professional simulations.",
  },
  {
    title: "Analytical Thinking",
    text: "Exploring the relationship between technology, data and business decision-making.",
  },
];

export const direction = {
  flow: ["TECHNOLOGY", "DATA", "INSIGHTS", "BUSINESS DECISIONS"],
  statement:
    "BUILDING TOWARD A CAREER AT THE INTERSECTION OF ANALYTICS, TECHNOLOGY AND BUSINESS.",
  copy: "My career direction is focused on Business Analytics and Business Analysis, where I can combine technical understanding, analytical thinking and business context to contribute to data-informed decisions. I aim to continue strengthening both my technical and managerial capabilities through projects, industry exposure and continuous learning.",
};
