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
      {/* Main Aurora */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}

        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
absolute
-left-56
top-10
h-[650px]
w-[650px]
rounded-full
bg-(--highlight)
blur-[160px]
opacity-60
"
      />

      {/* Warm depth */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}

        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
absolute
-right-56
top-20
h-[550px]
w-[550px]
rounded-full
bg-[#E9E8DD]
blur-[170px]
opacity-50
"
      />

      {/* Soft center atmosphere */}

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1],
        }}

        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
absolute
left-1/2
top-1/3
h-[300px]
w-[300px]
-translate-x-1/2
rounded-full
bg-(--highlight)
blur-[140px]
"
      />

      {/* Floating particles */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.6, 0.2],
        }}

        transition={{
          duration: 9,
          repeat: Infinity,
        }}

        className="
absolute
left-[18%]
top-[35%]
h-1.5
w-1.5
rounded-full
bg-(--primary)
blur-sm
"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.5, 0.2],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
        }}

        className="
absolute
right-[20%]
top-[25%]
h-2
w-2
rounded-full
bg-(--primary)
blur-sm
"
      />

      {/* Film grain */}

      <div
        className="
absolute
inset-0
opacity-[0.025]
"

        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="n"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3"/%3E%3C/filter%3E%3Crect width="200" height="200" filter="url(%23n)"/%3E%3C/svg%3E\')',
        }}
      />

      {/* Premium vignette */}

      <div
        className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,transparent_20%,#FAFAFC_90%)]
"
      />
    </div>
  );
}
