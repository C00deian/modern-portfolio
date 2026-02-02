"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const Stats = () => {
  const stats = [
    { highlight: "1.5+", suffix: "Years", label: "Hands-on Experience" },
    { highlight: "5+", suffix: "Projects", label: "Built & Delivered" },
    { highlight: "Full", suffix: "Stack", label: "Web Development" },
  ];

  return (
    <section className="bg-[#e0e0e0]">
      <Container className="py-6">
        <div className="border-t border-b border-black py-6">
          <div className="grid md:grid-cols-3 gap-y-6 md:gap-y-0">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`
                  text-center
                  px-6
                  ${index !== stats.length - 1
                    ? "md:border-r border-black"
                    : ""
                  }
                `}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111] mb-2 tracking-tight">
                  <span className="text-[#E64217]">{stat.highlight}</span>
                  <span className="ml-1 sm:ml-2">
                    {stat.suffix}
                  </span>
                </h2>

                <p className="text-sm text-[#333] leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
