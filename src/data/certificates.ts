export type Certificate = {
  title: string;
  issuer: string;
  logo: string;
  verifyUrl?: string;
  invertOnDark?: boolean;
  featured?: boolean; // shown on the landing page (first 3)
};

export type CertificateGroup = { name: string; items: Certificate[] };

export const certificatesIntro =
  "Credentials across AI, cloud, and engineering, each verifiable at its source.";

export const certificateGroups: CertificateGroup[] = [
  {
    name: "AI",
    items: [
      {
        title: "Introduction To Modern AI",
        issuer: "Cisco Netacad",
        logo: "/certs/cisco.svg",
        verifyUrl: "/certs/introduction-to-modern-ai.png",
        invertOnDark: true,
        featured: true,
      },
      {
        title: "Prompt Like An Engineer",
        issuer: "Cisco Netacad",
        logo: "/certs/cisco.svg",
        verifyUrl: "/certs/prompt-like-an-engineer.png",
        invertOnDark: true,
        featured: false,
      },
    ],
  },
  {
    name: "Engineering",
    items: [
      {
        title: "JavaScript Basics",
        issuer: "Hacker Rank",
        logo: "/certs/hacker_rank.svg",
        verifyUrl: "/certs/javascript-basics.png",
        invertOnDark: true,
        featured: true,
      },
      {
        title: "SQL Basics",
        issuer: "Hacker Rank",
        logo: "/certs/hacker_rank.svg",
        verifyUrl: "/certs/sql-basics.png",
        invertOnDark: true,
        featured: false,
      },
    ],
  },
  {
    name: "Systems & Operating System",
    items: [
      {
        title: "Operating System Basics",
        issuer: "DICT-ITU DTC & Cisco Netacad",
        logo: "/certs/dict.svg",
        verifyUrl: "/certs/operating-system-basics.png",
        invertOnDark: true,
        featured: true,
      },
    ],
  },
];
