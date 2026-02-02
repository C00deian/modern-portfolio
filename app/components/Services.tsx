"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const Services = () => {
  const services = [
    { title: "UI Engineering", projects: "Design Systems & Interfaces" },
    { title: "Frontend Development", projects: "React • TypeScript • Tailwind" },
    { title: "Full Stack Development", projects: "Node.js • Java • Spring Boot" },
  ];

  return (
    <section className="bg-[#e0e0e0] overflow-hidden py-">
      <Container>

        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          
          {/* Heading */}
          <div className="relative">
            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-semibold
                text-[#111]
                tracking-tight
                leading-[1.15]
              "
            >
              What Can I Do <br /> For Your Needs
            </h2>

            {/* Red Sparkle */}
            <div className="absolute -top-4 -right-10 text-[#E64217]">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p
            className="
              max-w-sm
              text-base
              sm:text-lg
              text-[#333]
              leading-relaxed
            "
          >
            I focus on building reliable, scalable, and user-friendly web
            applications by combining clean code, thoughtful UI, and solid
            backend architecture.
          </p>
        </div>

        {/* Services Row */}
        <div className="grid md:grid-cols-3 border-t border-b border-black">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
                px-8
                py-10
                text-center
                ${
                  index !== services.length - 1
                    ? "md:border-r border-black"
                    : ""
                }
              `}
            >
              <h3
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  text-[#111]
                  mb-2
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  text-xs
                  sm:text-sm
                  text-[#333]
                  uppercase
                  tracking-widest
                  font-medium
                "
              >
                {service.projects}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Services;
