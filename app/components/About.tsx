"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export const About = () => {
  return (
    <section className="bg-[#e0e0e0] overflow-hidden py-16">
      <Container>
        <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] gap-12 items-center border-b border-black pb-16">

          {/* Left: Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-[1.15]
              text-[#111]
              tracking-tight
            "
          >
            A Bit About <br /> Me & My Work
          </motion.h2>

          {/* Center: Image */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="rounded overflow-hidden aspect-video bg-black"
            >
              <img
                src="/me.jpeg"
                alt="Ritik Kumar"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>

          {/* Right: Description */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              text-base
              sm:text-lg
              text-[#333]
              leading-[1.65]
            "
          >
            I’m Ritik Kumar, a full-stack developer with hands-on experience
            building modern web applications. I work primarily with React,
            TypeScript, Node.js, and Spring Boot, focusing on clean architecture,
            performance, and maintainable code.
          </motion.p>

        </div>
      </Container>
    </section>
  );
};
