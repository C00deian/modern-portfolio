import { motion } from "framer-motion";
import Container from "./Container";

export const About = () => {
    return (
        <section className="bg-[#e0e0e0] overflow-hidden">
            <Container>
                <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr] gap-12 items-center border-b border-black pb-20">

                    {/* Left: Heading */}
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-[1.15]
              text-[rgb(39,39,39)] 
            "
                    >
                        Learn More <br /> About Me <br /> Ritik Kumar
                    </motion.h2>

                    {/* Center: Image with Sparkle */}
                    <div className="relative group">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="rounded overflow-hidden aspect-video bg-black"
                        >
                            <img
                                src="/me.jpeg"
                                alt="Profile"
                                className="w-full h-full object-cover object-top"
                            />
                        </motion.div>

                        {/* Yellow Sparkle */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-6 -right-6 text-yellow-400"
                        >
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Right: Description */}
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="
              text-base
              sm:text-lg
              text-[rgb(39,39,39)] 
              leading-[1.65]
              font-normal
            "
                    >
                        "Hi, I’m Ritik Kumar, a Full Stack Developer with 1.5 years of experience. I specialize in building scalable web applications using React, TypeScript, and Node.js, focusing on clean code and efficient solutions."
                    </motion.p>

                </div>
            </Container>
        </section>
    );
};
