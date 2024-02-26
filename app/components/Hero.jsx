"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);//like it's not moving
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);//going through the subtract image

  return (
    <div
      ref={ref}
      className="relative grid w-full h-screen overflow-hidden place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="relative z-[10] font-bold text-white text-7xl md:text-9xl"
      >
        LEBANON
      </motion.h1>

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/image2.webp)`,
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-[20]"
        style={{
          backgroundImage: `url(/Subtract2.webp)`,
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
export default Hero;