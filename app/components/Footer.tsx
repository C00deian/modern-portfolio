"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, X } from "lucide-react";
import Container from "./Container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const SOCIAL_LINKS = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ritik-kumar-96b845212/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/C00deian",
      icon: <FaGithub size={20} />,
    },
    {
      name: "Twitter",
      url: "#",
      icon: <X size={20} />,
    },
  ];

  return (
    <footer className="bg-[#272727] text-white overflow-hidden">
      <Container className="py-20 text-center flex flex-col items-center">

        {/* Main CTA Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
            leading-[1.15]
            mb-16
            text-[#E0DFDB]
            tracking-tight
          "
        >
          Let’s Work Together <br />
          and Build Something Great
        </motion.h2>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a
            href="/contact"
            className="
              bg-[#E64217]
              text-black
              px-6
              py-3
              rounded-full
              text-base
              flex
              items-center
              gap-2
              hover:bg-white
              hover:text-[#E64217]
              transition-all
            "
          >
            Contact Me <ArrowRight size={18} />
          </a>

          <a
            href="/resume/ritik.pdf"
            download="ritik.pdf"
            className="
              border
              border-white/30
              rounded-full
              px-6
              py-3
              text-base
              flex
              items-center
              gap-2
              hover:bg-white
              hover:text-[#E64217]
              transition-all
            "
          >
            <Download size={18} /> Download CV
          </a>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            w-full
            pt-10
            border-t
            border-white/20
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
            text-sm
          "
        >
          {/* Social Links */}
          <div className="flex gap-8 text-white">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/70">
            © {new Date().getFullYear()} Ritik Kumar. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
