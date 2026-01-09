"use client";

import React from "react";
import States from "./components/States";
import { About } from "./components/About";
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import Banner from "./components/Banner"


export default function Home() {
  return (
    <main className="bg-[#E0DFDB] min-h-screen font-sans selection:bg-[#ff4d4d] selection:text-white">
      {/* 1. Header & Hero Section */}
      <Navbar />
      <Hero />
<Banner/>
      {/* 2. Stats Section (The "8 Years" / "110+ Projects" section) */}
      <States />

      {/* 3. About Section (The "Learn More About Me" section) */}
      <About />

      {/* 4. Services Section (The "What Can I Do" section) */}
      <Services />

      {/* 5. Animated Scrolling Text */}
      <Marquee />

      {/* 6. Portfolio Showcase */}
      <PortfolioGrid />

      {/* 7. Call to Action / Footer */}
      <Footer />
    </main>
  );
}