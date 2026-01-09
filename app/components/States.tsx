"use client";
import { motion } from "framer-motion";
import Container from "./Container";

const States = () => {
  const stats = [
    { highlight: "1.5", suffix: "Years", label: "Experience" },
    { highlight: "20+", suffix: "Projects", label: "Completed" },
    { highlight: "Full", suffix: "Stack", label: "Web Development" },
  ];

  return (
    <section className="bg-[#e0e0e0] overflow-hidden">
      <Container className="py-10">
        <div className="border-t border-b border-black py-8">
          <div className="grid md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`
                  text-center
                  px-6
                  ${
                    index !== stats.length - 1
                      ? "md:border-r border-black"
                      : ""
                  }
                `}
              >
                {/* VALUE */}
                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-semibold
                    text-[#222]
                    mb-2
                  "
                >
                  <span className=" text-[#E64217]">
                    {stat.highlight}
                  </span>{" "}
                  {stat.suffix}
                </h2>

                {/* LABEL */}
                <p
                  className="
                    text-sm
                   text-[rgb(39,39,39)] 
                    font-normal
                  "
                >
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

export default States;
