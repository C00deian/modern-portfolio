"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="bg-[#E64217] py-3 sm:py-4 overflow-hidden border-y border-black my-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          whileHover={{ animationPlayState: "paused" }}

          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear",
          }}
          className="
            flex
            items-center
            text-lg
            sm:text-2xl
            lg:text-4xl
            font-semibold
            text-[#272727]
          "
        >
          {[...Array(2)].map((_, loopIndex) =>
            [...Array(8)].map((_, i) => (
              <div
                key={`${loopIndex}-${i}`}
                className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6"
              >
                <span>Ritik Kumar</span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#272727] rounded-full" />
              </div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
