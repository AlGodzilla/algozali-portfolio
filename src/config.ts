// Site configuration
// Muhammad Rizqy Al Gozali - Data Engineer Portfolio

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Muhammad Rizqy Al Gozali | Data Engineer & Analyst",
  description: "Data Engineer and Analyst specializing in Business Intelligence, ETL/ELT pipelines, Power BI, and enterprise data architecture. IEEE published researcher based in Indonesia.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Al Gozali",
  links: [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Research", href: "#research" },
  ],
  contactLabel: "Get in Touch",
  contactHref: "mailto:contact@algozali.page",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  subtitle: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Muhammad Rizqy Al Gozali",
  subtitle: "Rizqy Al Gozali",
  roles: ["Data Engineer", "Data Analyst", "ETL Developer", "BI Specialist"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I build data pipelines and dashboards that help organizations make better decisions. Based in Tangerang, Indonesia, I have worked with companies across finance, telecommunications, and education sectors. I graduated from Bina Nusantara University with a degree in Computer Science (GPA 3.74/4.00). My experience spans from legacy systems like SSIS to modern data stacks including Apache Airflow, dbt, and Meltano. In 2024, I published research on Chat Generative AI usage among university students in IEEE Xplore.",
  experienceValue: "3+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "15+", label: "Enterprise Projects" },
    { value: "IEEE", label: "Publication" },
    { value: "3.74", label: "GPA Score" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Data visualization workspace" },
    { src: "/images/about-2.jpg", alt: "Power BI dashboard development" },
    { src: "/images/about-3.jpg", alt: "Database architecture design" },
    { src: "/images/about-4.jpg", alt: "ETL pipeline implementation" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Expertise",
  heading: "What I Do",
  services: [
    {
      iconName: "Database",
      title: "Data Engineering",
      description: "I work with both modern and legacy data stacks. On the modern side, I use Python, Apache Airflow, Meltano, dbt, and Singer for building scalable ETL/ELT pipelines. I also have extensive experience with legacy tools like SSIS (SQL Server Integration Services) for traditional enterprise environments. This dual expertise lets me bridge old and new systems effectively.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "BarChart3",
      title: "Business Intelligence",
      description: "I develop interactive dashboards and reports using Power BI, Google Looker Studio, and Tableau. My work includes semantic data modeling, DAX calculations, and implementing row-level security for enterprise reporting.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Server",
      title: "Data Architecture",
      description: "I design data warehouse architectures and integrate systems like Oracle ERP, SQL Server, and cloud platforms. My focus is on creating scalable solutions that support enterprise reporting needs.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Workflow",
      title: "Process Automation",
      description: "I implement RPA solutions using UIPath and Power Automate to streamline document retrieval, data entry, and repetitive tasks. This reduces manual effort and improves accuracy.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
  githubUrl?: string;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Selected Projects",
  description: "A collection of dashboards, data pipelines, and business intelligence solutions I have built for clients across finance, telecommunications, and political sectors.",
  projects: [
    {
      title: "Market Share Dashboard",
      category: "Created in PowerBI",
      year: "2024",
      image: "/images/portfolio-market.png",
      featured: true,
      githubUrl: "https://community.fabric.microsoft.com/t5/Data-Stories-Gallery/VanArsdel-Ltd-Market-Share-Assignment-Finals/m-p/4752706",
    },
    {
      title: "Google Ads Campaign Tracker",
      category: "Created in Google Looker",
      year: "2024",
      image: "/images/portfolio-google.png",
      githubUrl: "https://lookerstudio.google.com/u/0/reporting/5c508f8a-324f-4509-b290-e4df4810e9e0",
    },
    {
      title: "Restaurant Dashboard",
      category: "Created in Tableau",
      year: "2024",
      image: "/images/portfolio-restaurant.png",
      githubUrl: "https://public.tableau.com/app/profile/muhammad.rizqy.al.gozali/viz/UAS_DV_2440029196/Dashboard2",
    },
    {
      title: "User Behaviour Analysis",
      category: "Python Data Analytics",
      year: "2025",
      image: "/images/github-logo.png",
      githubUrl: "https://github.com/AlGodzilla/User-Behaviour-Analysis-Insights-from-Public-Card-Transaction-Data",
    },
    {
      title: "Kafka ETL Pipeline",
      category: "Real-time Data Streaming",
      year: "2026",
      image: "/images/github-logo.png",
      githubUrl: "https://github.com/AlGodzilla/kafka_etl_data_valid_test",
    },
  ],
  cta: {
    label: "Have a project in mind?",
    heading: "Let's discuss how I can help with your data needs.",
    linkText: "Get in Touch",
    linkHref: "mailto:contact@algozali.page",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Research",
  heading: "Published Work",
  testimonials: [
    {
      quote: "Beyond Chatting: An Analysis of the Full Potential Use of Chat Generative AI for University Students in the Greater Jakarta Area. This study examines how students engage with ChatGPT, exploring usage patterns across different demographics and the factors that influence adoption in academic settings.",
      author: "Muhammad Rizqy Al Gozali",
      role: "Author",
      company: "IEEE Xplore, December 2024",
      image: "/images/ieee-logo.png",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Data Engineer", "Data Analyst", "ETL Developer", "BI Specialist"],
  heading: "Let's Build Something Together",
  description: "I am always open to discussing new projects, data challenges, or opportunities to collaborate. Whether you need a dashboard, a data pipeline, or help with data architecture, feel free to reach out.",
  buttonText: "Send an Email",
  buttonHref: "mailto:contact@algozali.page",
  email: "contact@algozali.page",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Al Gozali",
  description: "Data Engineer and Analyst specializing in Business Intelligence, ETL/ELT pipelines, and enterprise data solutions. Based in Tangerang, Indonesia.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Expertise", href: "#expertise" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Research", href: "#research" },
      ],
    },
    {
      title: "Expertise",
      links: [
        { label: "Data Engineering", href: "#expertise" },
        { label: "Power BI", href: "#expertise" },
        { label: "ETL/ELT", href: "#expertise" },
        { label: "Data Architecture", href: "#expertise" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "contact@algozali.page", href: "mailto:contact@algozali.page" },
        { label: "+62 813 1060 3517", href: "https://wa.me/6281310603517" },
        { label: "Tangerang, Indonesia", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/gozali/", label: "LinkedIn" },
    { iconName: "Github", href: "https://github.com/AlGodzilla/", label: "GitHub" },
    { iconName: "Mail", href: "mailto:contact@algozali.page", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates on my latest projects and research.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2026 Muhammad Rizqy Al Gozali. All rights reserved.",
  credit: "Built with React & Tailwind CSS",
};
