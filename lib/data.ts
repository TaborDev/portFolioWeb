import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Sooq from "@/public/sooq.png";
import Cosmo from "@/public/cosmo.png";
import Blade from "@/public/blade.png";
import Agency from "@/public/UXDesign.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed Bachelor of Computer Science",
    location: "Mekelle, Ethiopia",
    description:
      "I completed my bachelor's degree in Computer Science with a very Greate Distiniction.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2018 - June 2022",
  },
  {
    title: "Full-Stack developer",
    location: "Addis Ababa, Ethiopia",
    description:
      "I worked as a Full Stack Developer for 1 year and 2 months with focus in Frontend development. Used different technologies to achieve the companies vision.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2020 - Aug 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Addis Ababa, Ethiopia",
    description:
      "I'm now a full-stack developer. directed a team of frontend developers at Sooq.et, leading to improved website responsiveness and a bolstered competitive position in the e-commmerce market",
    icon: React.createElement(FaReact),
    date: "May 2021 - July 2023",
  },
  {
    title: "software Engineering Mentor",
    location: "Atlanta, Georgia",
    description:
      "Lead weekly hour-long mentoring sessions for a group of students. Also prepared, assessed and executed the curriculum that studens are going to study in their course. lead the optimization and maintainance of RefCodes's website.",
    icon: React.createElement(FaReact),
    date: "Oct 2023 - Present",
  },
  {
    title: "Freenlace Webdeveloper",
    location: "Atlanta, Georgia",
    description:
      "With over 6 years of proven expertise as a freelance web developer, I specialize in collaborating with diverse clients to conceptualize, build, and optimize their websites.",
    icon: React.createElement(FaReact),
    date: "Oct 2018 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sooq.et",
    description:
      "led the Frontend team in building this amazing website using WordPress and PHP.",
    tags: ["WordPress", "PHP", "Laravel", "Figma", "Apache"],
    imageUrl: Sooq,
    linkUrl : "https://sooq.et/",
  },
  {
    title: "COSMIC NUTRITION",
    description:
      "E-commerce website for a client's fitness nutrition Shopify brand, implementing robust components.",
    tags: ["HTML", "CSS", "JS", "Figma", "React", "ThreeJs"],
    imageUrl: Cosmo,
    linkUrl : "https://cosmicnutrition.co.za/",
  },
  {
    title: "TECH BLADE",
    description:
      "Tech Blade provides top-notch solutions for automations, NFT & Token Creation, DApps, SMS, Email Marketing, and more!",
    tags: ["HTML", "CSS", "JS", "React", "Blender", "Figma"],
    imageUrl: Blade,
    linkUrl : "https://techblade.netlify.app/",
  },
  {
    title: "Advanced Heart",
    description:
      "Designed a visually appealing website for a digital marketing and branding agency, highlighting their expertise in marketing and branding services.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: Agency,
    linkUrl : "https://advanced-heart.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "JQuery",
  "Figma",
  "Sketch",
  "Blender",
  "Adobe Creative Cloud",
  "Next.js",
  "Node.js",
  "Three.js",
  "Git",
  "PHP",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Email Marketing",
  "SEO optimization",

] as const;