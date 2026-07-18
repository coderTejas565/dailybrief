"use client";

import { motion } from "framer-motion";

export default function MemoryLine() {
  return (
    <div
      className="
absolute
left-1/2
top-[60%]
-z-10
h-40
w-10
-translate-x-1/2
"
    >
      {/* soft glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.15, 1],
        }}

        transition={{
          duration: 5,
          repeat: Infinity,
        }}

        className="
absolute
left-1/2
top-0
h-full
w-10
-translate-x-1/2
rounded-full
bg-(--highlight)
blur-2xl
"
      />

      {/* glass line */}

      <motion.div
        initial={{
          height: 0,
        }}

        animate={{
          height: "100%",
        }}

        transition={{
          duration: 1.5,
          delay: 1.8,
          ease: "easeOut",
        }}

        className="
absolute
left-1/2
top-0
w-px
-translate-x-1/2
bg-gradient-to-b
from-(--primary)/70
via-(--primary)/30
to-transparent
"
      />

      {/* memory energy */}

      <motion.div
        animate={{
          y: [0, 130],

          opacity: [0, 1, 0],

          scale: [0.8, 1.3, 0.8],
        }}

        transition={{
          duration: 2.8,

          repeat: Infinity,

          repeatDelay: 1,

          ease: "easeInOut",
        }}

        className="
absolute
left-1/2
top-0
h-3
w-3
-translate-x-1/2
rounded-full
bg-(--primary)
shadow-[0_0_35px_var(--primary)]
"
      />

      {/* tiny particles */}

      {[1, 2, 3].map((item) => (
        <motion.span
          key={item}

          animate={{
            y: [20, 100],

            opacity: [0, 0.8, 0],

            x: [0, item % 2 === 0 ? 8 : -8, 0],
          }}

          transition={{
            duration: 3 + item,

            repeat: Infinity,

            delay: item,
          }}

          className="
absolute
left-1/2
top-5
h-1
w-1
rounded-full
bg-(--primary)
"
        />
      ))}
    </div>
  );
}
