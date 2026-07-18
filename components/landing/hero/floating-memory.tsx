"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function FloatingMemory() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.92,
      }}

      animate={{
        opacity: 1,
        y: [0, -12, 0],
        scale: 1,
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
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}

      whileHover={{
        y: -18,
        scale: 1.04,
      }}

      className="
group
absolute
-right-6
top-8
lg:-right-14
overflow-hidden
rounded-[28px]
border
border-white/70
bg-white/55
p-4
shadow-[0_30px_90px_rgba(25,43,54,.14)]
backdrop-blur-3xl
"
    >
      {/* moving glass light */}

      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}

        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 5,
        }}

        className="
absolute
inset-y-0
w-16
rotate-12
bg-white/50
blur-xl
"
      />

      {/* glow */}

      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
        }}

        transition={{
          duration: 5,
          repeat: Infinity,
        }}

        className="
absolute
-inset-5
-z-10
rounded-full
bg-(--highlight)
blur-3xl
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
              scale: [1, 1.08, 1],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
            }}

            className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
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
              Memory resurfaced
            </p>

            <p
              className="
text-[11px]
text-muted-foreground
"
            >
              From your conversations
            </p>
          </div>
        </div>

        {/* memory */}

        <div
          className="
mt-4
rounded-2xl
border
border-white
bg-white/70
px-4
py-3
shadow-inner
"
        >
          <p
            className="
text-[11px]
text-muted-foreground
"
          >
            10 days ago
          </p>

          <p
            className="
mt-1
text-sm
font-medium
leading-snug
"
          >
            You discussed Docker deployment
          </p>
        </div>
      </div>
    </motion.div>
  );
}
