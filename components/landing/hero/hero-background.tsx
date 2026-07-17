"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div
      className="
      pointer-events-none
      absolute
      inset-0
      overflow-hidden
      "
    >
      {/* Primary Aurora */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        -left-48
        top-20
        h-[600px]
        w-[600px]
        rounded-full
        bg-(--highlight)
        blur-[140px]
        opacity-70
        "
      />

      {/* Secondary Warm Aurora */}

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}

        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        -right-40
        top-32
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#E9E8DD]
        blur-[150px]
        opacity-70
        "
      />

      {/* Center breathing light */}

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.2, 1],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        left-1/2
        top-1/2
        h-[350px]
        w-[350px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-(--highlight)
        blur-[120px]
        "
      />

      {/* Floating light particles */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        left-[20%]
        top-[30%]
        h-2
        w-2
        rounded-full
        bg-(--primary)
        blur-sm
        "
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.1, 0.4, 0.1],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        right-[25%]
        top-[20%]
        h-3
        w-3
        rounded-full
        bg-(--primary)
        blur-sm
        "
      />

      {/* Moving Noise Layer */}

      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}

        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
        absolute
        inset-0
        opacity-[0.035]
        "

        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="n"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3"/%3E%3C/filter%3E%3Crect width="200" height="200" filter="url(%23n)"/%3E%3C/svg%3E\')',

          backgroundSize: "300px 300px",
        }}
      />

      {/* Soft top fade */}

      <div
        className="
        absolute
        inset-x-0
        top-0
        h-40
        bg-gradient-to-b
        from-[#FAFAFC]
        to-transparent
        "
      />
    </div>
  );
}
