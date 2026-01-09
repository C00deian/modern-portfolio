"use client";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Container from "./Container";


const Footer = () => {
    return (
        <footer className="bg-[rgb(39,39,39)] text-white overflow-hidden">
            <Container className="text-center flex flex-col items-center">

                {/* Main CTA Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            leading-[1.15]
            mb-16
            text-[#E0DFDB]
          "
                >

                    Let's Hire Me And Make
                    <br />
                    The Best Product
                </motion.h2>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <button
                        className="
               bg-[#E64217] 
              text-black
              px-4
              py-1
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
                    </button>

                    <button
                        className="
              border
              border-white/20
            
              rounded-full
               px-5
              py-2
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
                    </button>
                </div>

                {/* Bottom Bar */}
                <div
                    className="
            w-full
            pt-10
            border-t
            border-white
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
            text-gray-400
            text-sm
          "
                >
                    {/* Social Links */}
                    <div className="flex gap-8 text-white">
                        {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="uppercase tracking-widest hover:text-white transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-white">© {new Date().getFullYear()} Ritik Kumar. All rights reserved.</p>
                </div>

            </Container>
        </footer>
    );
};

export default Footer;
