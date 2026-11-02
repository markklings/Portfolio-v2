export type Organization = {
  name: string;
  role: string;
  logo: string; // route to an svg/png in /public
  invertOnDark?: boolean; // true for black logos; false for logos that already work on dark
};

export type CommunityStat = {
  value: string;
  label: string;
  href?: string;
};

export const organizations: Organization[] = [
  {
    name: "GDG Cloud - Manila",
    role: "Member",
    logo: "/logos/org-1.svg",
    invertOnDark: true,
  },
  {
    name: "The Technocrats",
    role: "Lead Graphic Designer",
    logo: "/logos/org-2.svg",
    invertOnDark: true,
  },
];

export const communityStats: CommunityStat[] = [
  {
    value: "3,854",
    label: "Members",
    href: "https://g.dev/markjulianguerrero",
  },
  {
    value: "18",
    label: "Organization Members",
    href: "https://www.facebook.com/profile.php?id=61565134869336",
  },
];
