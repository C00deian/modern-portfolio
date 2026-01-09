"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Services", "Blog", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center">
      {/* Logo Wrapper */}
      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
        <div className="w-8 h-8 border-2 border-black rotate-45 flex items-center justify-center">
          <div className="w-4 h-4 border border-black -rotate-45" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border border-gray-200 shadow-sm">
        {links.map((link) => (
          <a key={link} href={`${link.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
            {link}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3 bg-white rounded-full shadow-md">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-white rounded-3xl p-8 shadow-2xl flex flex-col gap-6 md:hidden border border-gray-100"
          >
            {links.map((link) => (
              <a key={link} href="#" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>{link}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;