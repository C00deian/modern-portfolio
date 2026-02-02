"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import Link from "next/link";

const projects = [
  {
    title: "Aadhaar Based CRM",
    category: "Mern Stack Concept",
    img: "/aadhaar.png",
    link: "https://digitalwork.net.in/",
  },
  {
    title: "Comprig - Build Your VM",
    category: "React & UI Engineering",
    img: "/compr.png",
    link: "https://d3d1mqhw27zond.cloudfront.net",
  },
  {
    title: "Interior Landing Page",
    category: "Full Stack Concept",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
    link: "#",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="bg-[#e0e0e0] overflow-hidden py-16">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-semibold
                leading-[1.15]
                text-[#111]
                tracking-tight
                mb-4
              "
            >
              Selected <br /> Projects & Work
            </motion.h2>

            <p className="text-base sm:text-lg text-[#333] max-w-md leading-relaxed">
              A selection of projects where I focused on clean UI, scalable
              frontend architecture, and user-centered development.
            </p>
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-[#E64217]
              text-black
              px-8
              py-4
              rounded-full
              font-medium
              text-base
              flex
              items-center
              gap-2
              hover:bg-black
              hover:text-white
              transition-all
            "
          >
            View More <ArrowUpRight size={20} />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-white shadow-md mb-5">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full">
                    <Link href={project.link} target="_blank">
                      <ArrowUpRight className="text-black" size={20} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#111] group-hover:text-[#E64217] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-[#555] uppercase tracking-wider">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioGrid;
