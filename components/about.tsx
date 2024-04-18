"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="about-card sm:text-lg">
        <p className="mb-3">
          <span className="font-medium">I enrolled</span> in a coding bootcamp and learned
          <span className="font-medium"> full-stack web development. </span>
          My favorite part of programming is the <span className="font-medium">problem-solving</span> aspect.
          I love the feeling of finally figuring out a solution to a problem. My core stack is
          <span className="font-semibold"> React, Laravel, Next.js, Node.js, and MongoDB, PostgreSQL. </span>
          I am also familiar with
          <span className="font-medium"> TypeScript, Tailwind CSS, shadcn/ui, MySQL, GraphQL, Prisma, AWS and GCP. </span>
          I am always looking to learn new technologies. I am currently offering
          <span className="font-medium"> a full-stack web solution.</span>
        </p>

        <p className="mb-3">
          When I am not coding, I enjoy doing <span className="font-medium">DIY projects, </span>
          playing games, and sports. I also enjoy <span className="font-medium"> learning new things. </span>
          I am currently learning about <span className="font-medium">EV and solar energy</span>.
        </p>

        <p>
          <span className="font-medium">I aim</span> to partner with you to
          <span className="font-medium"> achieve your business goals together. </span>
          I will help you build <span className="font-medium">scalable solutions </span>
          that <span className="font-medium">reduce workload and maximize profit. </span>
          Of course, I try to provide you <span className="font-medium">informed, stress-free best experience </span>
          and it comes with <span className="font-medium">substantial savings of your time, money, and effort.</span>
        </p>
      </div>
    </motion.section>
  );
}