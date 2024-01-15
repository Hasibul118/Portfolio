import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import greelab from "@/public/project/greelab.png";
import evently from "@/public/project/evently.png";
import hoobank from "@/public/project/hoobank.png";
import threads from "@/public/project/threads.png";
import summarizer from "@/public/project/summarizer.png";
import portfolio from "@/public/project/portfolio.png";
import pomodoro from "@/public/project/pomodoro.png";
import darkmode from "@/public/project/darkmode.png";


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
    title: "Warior bootcamp",
    location: "Dhaka, Bangladesh",
    description:
      "I studied and practiced for 1 year. I immediately joined as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Dhaka, Bangladesh",
    description:
      "I worked as a front-end developer for 1 year at 6sense Technologies Ltd. I also upskilled to the full-stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Software Quality Assurance",
    location: "Dhaka, Bangladesh",
    description:
      "I worked as a software quality assurance for 6 months at 6sense Technologies Ltd. I also upskilled to the full-stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Dhaka, Bangladesh",
    description:
      "I'm now a full-stack developer and a co-founder of a software firm called Greelab. My stack includes React, Next.js, Node.js, and MongoDB. I'm currently offering a full-stack web solution.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Greelab",
    description:
      "Greelab is a startup that offer web solution all over the world. I am a co-founder and a full-stack developer for 3 years. Unlock the full potential of your business with greelab.",
    tags: ["React", "Node.js", "MongoDB","Calendly", "Custom UI"],
    imageUrl: greelab,
    liveUrl: "https://greelab.com/",
    github: "https://github.com/Hasibul118/",
  },
  {
    title: "Evently",
    description:
      "Host, Connect, Celebrate your events with our platform. This is a ready to go morden event booking phatform.",
    tags: ["React", "Next.js", "Redux", "Node.js", "mongodb", "TypeScript", "Tailwind", "Stripe", "Clerk", "React-Hook-form", "Uploadthing"],
    imageUrl: evently,
    liveUrl: "https://eventwizard.vercel.app/",
    github: "https://github.com/Hasibul118/evently",
  },
  {
    title: "Threads",
    description:
      "Threads is an online social media and social networking service. This chat application UI is inspired by Meta Platforms.",
    tags: ["React", "Next.js", "Redux", "Node.js", "Mongodb", "Typescript", "Tailwind", "Clerk", "Uploadthing"],
    imageUrl: threads,
    liveUrl: "https://threads-sage.vercel.app/",
    github: "https://github.com/Hasibul118/threads",
  },
  {
    title: "Summarizer",
    description:
      "Simplify your reading with Sumz, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    tags: ["React", "Vite", "Redux", "Rapid api", "Openai", "Tailwind"],
    imageUrl: summarizer,
    liveUrl: "https://web-article-summarizer.web.app/",
    github: "https://github.com/Hasibul118/summarizer",
  },
  {
    title: "HooBank",
    description:
      "HooBank is the best morden business landing page. This web app has a stunning opening section, business stats, CTA, testimonial and many more features.",
    tags: ["React", "TypeScript", "Responsive", "Tailwind", "Mordern ui/ux"],
    imageUrl: hoobank,
    liveUrl: "https://hoo-bank.web.app/",
    github: "https://github.com/Hasibul118/HooBank",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio or online business card. It shows projects, skills, about yourself, Personal Achievements and many more features.",
    tags: ["React", "Next.js", "Node.js", "styled-components", "sass"],
    imageUrl: portfolio,
    liveUrl: "https://portfolio-xi-amber.vercel.app/",
    github: "https://vercel.com/hasibul118/portfolio",
  },
  {
    title: "Pomodoro",
    description:
      "An online Pomodoro Timer to boost your productivity. Pomodoro will help you manage your time and let you focus on any tasks.",
    tags: ["React", "Vite", "React-slider", "React-circular-progressbar"],
    imageUrl: pomodoro,
    liveUrl: "https://habitoftheday.web.app/",
    github: "https://github.com/Hasibul118/habit-of-the-day",
  },
  {
    title: "Dark mode",
    description:
      "A pet project that switch between dark mode and light mode.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: darkmode,
    liveUrl: "https://darkmode-purple.vercel.app/",
    github: "https://github.com/Hasibul118/dark-mode",
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "shadcn/ui",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Three.js",
  "AWS",
  "GCP"
] as const;