"use client";

import { motion } from "framer-motion";

export default function MemoryLine() {
  return (
    <div
      className="
      absolute
      left-1/2
      top-[62%]
      -z-10
      h-32
      w-px
      -translate-x-1/2
      "
    >
      {/* Main connection line */}

      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}

        animate={{
          height: "100%",
          opacity: 1,
        }}

        transition={{
          duration: 1.2,
          delay: 2.2,
          ease: "easeInOut",
        }}

        className="
        w-full
        bg-gradient-to-b
        from-(--primary)
        to-transparent
        "
      />

      {/* Moving memory pulse */}

      <motion.div
        animate={{
          y: [0, 100],
          opacity: [0, 1, 0],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 2.5,
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
        shadow-[0_0_25px_var(--primary)]
        "
      />
    </div>
  );
}
