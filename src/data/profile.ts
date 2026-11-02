export type Social = { label: string; href: string };

export const profile = {
  name: "Mark Julian Guerrero",
  photo: {
    src: "/images/profile.svg", // replace with /images/your-photo.jpg
    alt: "Portrait of Your Name",
    halftone: true, // set false to show the photo without the dot-screen effect
  },
  bio: [
    "I build a community-focused web, mobile, and AI solutions designed to simplify workflows for students and local organizations.",
    "Right now I'm currently pursuing a B.S. in Computer Science, my current technical focus is centered on AI engineering, prompt engineering, and implementing AI features into production-ready software.",
  ],
  socials: [
    { label: "github", href: "https://www.github.com/markklings" },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/mark-julian-guerrero",
    },
    { label: "instagram", href: "https://www.instagram.com/mark.dev.ai" },
    { label: "facebook", href: "https://www.facebook.com/im.not.marklings" },
  ] satisfies Social[],
};
