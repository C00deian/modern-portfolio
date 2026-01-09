import { motion } from "framer-motion";
import Sparkle from "./Sparkle";

const WixSparkle = () => {
  return (
   <motion.div
  className="absolute top-60 right-12 z-50 pointer-events-none"
  style={{
    perspective: "800px",
    transformStyle: "preserve-3d",
  }}
  animate={{
    rotateY: [0, 0.25, -0.25, 0],
    rotateX: [0, 0.15, -0.15, 0],
    rotateZ: [0, 0.2, -0.2, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Sparkle size={100} />
</motion.div>

  );
};

export default WixSparkle;
