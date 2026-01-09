"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className=" bg-[#E64217] py-2 sm:py-4 overflow-hidden border-y whitespace-nowrap flex">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="
          flex
          items-center
          text-lg
          sm:text-2xl
          lg:text-4xl
          font-semibold
         text-[rgb(39,39,39)]
        "
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-5 mx-4">
            <span>Ritik Kumar</span>
            <div className="sm:w-3 sm:h-3 bg-[rgb(39,39,39)] rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
