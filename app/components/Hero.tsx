"use client";
import { motion } from "framer-motion";
import TextType from "./TypeText";
import WixSparkle from "./WixSparkle";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full grid grid-cols-1 md:grid-cols-2 bg-[rgb(39,39,39)] overflow-hidden">

      {/* LEFT: IMAGE */}
      <div className="relative h-[60vh] md:h-screen w-full overflow-hidden bg-[rgb(39,39,39)] hover:cursor-pointer">
        <img
          src="/Home.jpeg"
          alt="Evelina Quinn"
          className="object-cover w-full h-full  grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
 
      {/* RIGHT : CONTENT */}
      <div className="relative flex flex-col justify-center px-8 sm:px-12 md:px-20 py-20 bg-[#222222]">
     <WixSparkle/>
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-[#E64217] text-[#272727] px-5 py-2 rounded-full text-sm font-medium w-fit mb-6"
        >
          👋 Hello, I’m
        </motion.div>

        {/* Name */}

        <TextType
          text={["Ritik Kumar"]}
          typingSpeed={80}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter=""
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
        />
        {/* Role */}
        <TextType
          text={["Full-Stack Developer"]}
          typingSpeed={80}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="mt-2 text-[#E64217] text-xl sm:text-2xl font-medium"
        />



        {/* Divider */}
        <div className="w-14 h-0.5 bg-white my-8" />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="max-w-xl text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          I build modern, scalable web applications using React, TypeScript,
          Node.js, and Spring Boot — focused on clean code, performance,
          and real-world impact.
        </motion.p>

        {/* Sparkle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 text-yellow-400 hidden md:block"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
