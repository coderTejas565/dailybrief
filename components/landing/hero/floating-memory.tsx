"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function FloatingMemory() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.9,
        rotate: 5,
      }}

      animate={{
        opacity: 1,
        y: [0, -14, 0],
        scale: 1,
        rotate: [0, -2, 0],
      }}

      transition={{
        opacity: {
          duration: 0.8,
          delay: 1,
        },

        scale: {
          duration: 0.8,
          delay: 1,
          type: "spring",
        },

        y: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        },

        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}

      whileHover={{
        scale: 1.05,
        y: -20,
      }}

      className="
      group
      absolute
      -right-14
      top-8
      overflow-hidden
      rounded-3xl
      border
      border-white/70
      bg-white/60
      p-5
      shadow-[0_30px_80px_rgba(25,43,54,0.12)]
      backdrop-blur-2xl
      "
    >
      {/* Glass reflection */}

      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}

        className="
        absolute
        inset-y-0
        w-20
        rotate-12
        bg-white/40
        blur-xl
        "
      />

      {/* Ambient glow */}

      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        -inset-2
        -z-10
        rounded-3xl
        bg-(--highlight)
        blur-2xl
        "
      />

      <div className="relative">
        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-2xl
            bg-(--highlight)
            text-(--primary)
            "
          >
            <Brain size={19} />
          </motion.div>

          <div>
            <p
              className="
              text-sm
              font-semibold
              "
            >
              Memory found
            </p>

            <p
              className="
              text-[11px]
              text-muted-foreground
              "
            >
              Connected instantly
            </p>
          </div>
        </div>

        <div
          className="
          mt-4
          rounded-2xl
          bg-white/60
          px-4
          py-3
          "
        >
          <p
            className="
            text-xs
            text-muted-foreground
            "
          >
            Docker discussion
          </p>

          <p
            className="
            mt-1
            text-sm
            font-medium
            "
          >
            10 days ago
          </p>
        </div>
      </div>
    </motion.div>
  );
}
