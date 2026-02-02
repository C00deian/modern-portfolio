"use client";

import Container from "./Container";

const Banner = () => {
  return (
    <section className="bg-[#e0e0e0]">
      <Container className="py-20">
        <div className="flex flex-col items-center text-[#272727]">

          {/* Heading */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              text-center
              max-w-3xl
              leading-tight
              border-b
              border-black
              pb-6
            "
          >
            Trusted with a variety of real-world experiences
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              text-base
              sm:text-lg
              text-center
              max-w-2xl
              text-[#333]
              leading-relaxed
            "
          >
            I specialize in full-stack development, crafting scalable and modern
            web applications using React, Next.js, Node.js, and Spring Boot.
          </p>

        </div>
      </Container>
    </section>
  );
};

export default Banner;
