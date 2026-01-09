"use client"

import { Sparkle } from "lucide-react";
import Container from "./Container";
import WixSparkle from "./WixSparkle";




const Banner = () => {
  return (
      <Container>
        <div className="flex flex-col items-center text-[rgb(39,39,39)] ">

          {/* Heading */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-center
              max-w-3xl
              leading-tight
              border-b
              
              border-black
              pb-6
            "
          >
            Trusted with a variety of more experiences
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              text-base
              sm:text-lg
              text-center
              max-w-2xl
              text-gray-800
              leading-relaxed
            "
          >
            With over 8 years of design experience, I bring deep expertise and
            have earned the trust of more than 20 companies.
          </p>

        </div>
      </Container>
  );
};

export default Banner;
