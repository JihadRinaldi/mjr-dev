export interface WorkExperience {
  company: string;
  role: string;
  description: string[];
  startDate: string;
  endDate?: string;
  logo?: string;
  technologies: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "Good Doctor Technology",
    role: "Senior Software Engineer",
    description: [
      "Joined during a major migration from external services to fully in-house systems",
      "Rebuilt key platforms from scratch: Good Doctor Plugin (SaaS solution for partners like Allianz and Grab), Merchant Portal Web, and internal AdminCMS",
      "Developed the Plugin as a WebView for seamless integration into native partner applications",
      "Built the Merchant Portal enabling pharmacies to manage orders, inventory, and pricing",
      "Created internal AdminCMS supporting operations teams with payment/voucher management, drug bank, and insurance configuration",
      "Developed Merchant Onboarding features for efficient pharmacy onboarding",
      "Integrated QRIS Indonesia QR payment system and voucher management in checkout",
      "Mentored junior engineers and led biweekly frontend sharing sessions"
    ],
    startDate: "2023-08",
    technologies: ["Next.js", "TypeScript", "Redux-toolkit", "Tailwind", "Go", "PostgreSQL", "Redis", "RabbitMQ", "Firebase"]
  },
  {
    company: "Kargo Technologies",
    role: "Frontend Engineer (SDE 1C)",
    description: [
      "Contributed as a Front-End Developer at Kargo, a transformative player in Indonesia's US$250 billion trucking industry",
      "Maintained Kargo's ReactJS-based SaaS (Vendor) and Brokerage platform, addressing the nation's high logistics costs",
      "Improved system visibility and operational productivity by 30% through successful implementation of a matching engine",
      "Optimized the operating journey by 25% through the development of all-platform integration"
    ],
    startDate: "2022-08",
    endDate: "2023-08",
    technologies: ["React", "Hooks", "Javascript", "GraphQL", "Styled-components", "React Testing Library", "Google-maps-react", "i18next"]
  },
  {
    company: "Shopee",
    role: "Frontend Engineer",
    description: [
      "Worked as a Frontend Engineer at Shopee, the leading e-commerce platform in Southeast Asia and Taiwan",
      "Contributed to user engagement and retention initiatives",
      "Increased voucher sales by 50% through the Shopee Food voucher subscription system",
      "Enhanced user experience through comprehensive contact management features like view, add, delete, and edit using GraphQL",
      "Grew Shopee new user by 50% via referral campaign"
    ],
    startDate: "2020-08",
    endDate: "2022-08",
    technologies: ["React", "Webview", "Hooks", "TypeScript", "Redux", "Styled-components", "React Testing Library", "i18next"]
  }
];

export function getCurrentJob(): WorkExperience | undefined {
  return workExperience.find(job => !job.endDate);
}

export function getAllWorkExperience(): WorkExperience[] {
  return workExperience;
}