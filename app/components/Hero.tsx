"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full grid grid-cols-1 md:grid-cols-2 bg-[rgb(39,39,39)] overflow-hidden">

      {/* LEFT: IMAGE */}
      <div className="relative h-[60vh] md:h-screen w-full overflow-hidden bg-[rgb(39,39,39)] hover:cursor-pointer">
        <img
          src="https://static.wixstatic.com/media/554ccd_033fc628366b4f1ca0d57dab82b4f67e~mv2.jpg/v1/fill/w_580,h_494,fp_0.47_0.40,q_80,usm_0.66_1.00_0.01,enc_auto/Girl%20Hero%20Image%20Left.jpg"
          alt="Evelina Quinn"
         className="object-cover w-full h-full  grayscale hover:grayscale-0 transition-all duration-700"
        />

        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <div className="w-9 h-9 border-2 border-white rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 border border-white -rotate-45" />
          </div>
        </div>
      </div>

      {/* RIGHT: CONTENT */}
      <div className="relative flex flex-col justify-center items-start bg-[#222222] px-10 md:px-20 py-24">


        {/* Hello I'm Pill */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-0 top-[28%] -translate-x-1/2  bg-[#E64217] text-[rgb(39,39,39)] px-6 p-4  rounded-full font-medium text-5xl shadow-xl"
        >
          Hello I'm
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="mt-10">

          {/* Title */}
          <div className="relative">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white absolute left-0 top-[28%] -translate-x-1/2 mt-10"
            >
           Ritik Kumar
            </motion.h1>

            {/* Sparkle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 right-8 text-yellow-400"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
            </motion.div>
          </div>

          {/* Divider */}
     

                  {/* Descriptiodin */}
                  <div className="flex flex-col gap-5 mt-32">
                      <div className="w-full h-px bg-white flex items-start" />     
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white text-xl w-md"
          >
            Hello, my name is Ritik kumar, nice to meet you.
            I would like to welcome you with my personal portfolio.
          </motion.p>
                  </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;