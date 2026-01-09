"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";


const projects = [
  {
    title: "Smart Home Dashboard",
    category: "UI / Frontend Development",
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000",
  },
  {
    title: "Coffee Shop Website",
    category: "React & UI Engineering",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000",
  },
  {
    title: "Interior Landing Page",
    category: "Full Stack Concept",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="bg-[#e0e0e0] overflow-hidden">
      <Container>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">

          {/* Heading + Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-[1.15]
                text-[#222]
                mb-4
              "
            >
              Selected <br /> Projects & Work
            </motion.h2>

            <p
              className="
                text-base
                sm:text-lg
                text-gray-800
                max-w-md
                leading-relaxed
              "
            >
              A selection of projects where I focused on clean UI, scalable
              frontend architecture, and user-centered development.
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-[#d4e94d]
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              text-base
              flex
              items-center
              gap-2
              shadow-md
              hover:bg-black
              hover:text-white
              transition-all
            "
          >
            View More <ArrowUpRight size={20} />
          </motion.button>
        </div>

        {/* Grid of Projects */}
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-white shadow-md mb-5">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full">
                    <ArrowUpRight className="text-black" size={20} />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    text-center
                    font-bold
                    text-[#222]
                    group-hover:text-[#E64217] 
                    transition-colors
                  "
                >
                  {project.title}
                </h3>

                {/* <p
                  className="
                    mt-1
                    text-xs
                    sm:text-sm
                    uppercase
                    tracking-widest
                    text-gray-500
                    font-medium
                  "
                >
                  {project.category}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default PortfolioGrid;
