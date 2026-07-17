"use client";

import { motion } from "framer-motion";
import { CheckCheck, Brain } from "lucide-react";
import MemoryLine from "./memory-line";

export default function WhatsAppPreview() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        rotateX: 15,
        scale: 0.92,
      }}

      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
      }}

      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}

      style={{
        perspective: 1000,
      }}

      className="
relative
mx-auto
w-full
max-w-[390px]
"
    >
      {/* Breathing glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
        }}

        className="
absolute
inset-10
rounded-full
bg-(--highlight)
blur-3xl
"
      />

      {/* Glass device */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
relative
overflow-hidden
rounded-[44px]
border
border-white/70
bg-white/50
p-3
shadow-[0_40px_100px_rgba(25,43,54,.18)]
backdrop-blur-3xl
"
      >
        {/* Glass reflection */}

        <motion.div
          animate={{
            x: ["-150%", "150%"],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 4,
          }}

          className="
absolute
inset-y-0
w-24
rotate-12
bg-white/40
blur-xl
"
        />

        {/* Header */}

        <div
          className="
relative
flex
items-center
gap-3
rounded-t-[34px]
bg-white/70
px-5
py-4
"
        >
          <div
            className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-(--highlight)
font-bold
text-(--primary)
"
          >
            D
          </div>

          <div>
            <p className="font-semibold">DailyBrief</p>

            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}

              className="
text-xs
text-(--primary)
"
            >
              online
            </motion.p>
          </div>
        </div>

        <div
          className="
relative
space-y-5
rounded-b-[34px]
bg-[#F7F8F6]
p-5
"
        >
          {/* user */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: 0.7,
              type: "spring",
            }}

            className="
max-w-[85%]
rounded-2xl
rounded-tl-sm
bg-white
p-4
text-sm
shadow-sm
"
          >
            Need to finish API docs next week
            <p
              className="
mt-2
text-right
text-[11px]
text-gray-400
"
            >
              10:42 PM ✓✓
            </p>
          </motion.div>

          {/* typing */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              delay: 1.2,
              type: "spring",
            }}

            className="
w-fit
rounded-full
bg-white
px-4
py-3
shadow-sm
"
          >
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <motion.span
                  key={i}

                  animate={{
                    y: [0, -5, 0],
                  }}

                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}

                  className="
h-2
w-2
rounded-full
bg-gray-400
"
                />
              ))}
            </div>
          </motion.div>

          {/* AI */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}

            transition={{
              delay: 1.6,
              type: "spring",
            }}

            className="
ml-auto
max-w-[85%]
rounded-2xl
rounded-tr-sm
bg-(--highlight)
p-4
text-sm
"
          >
            Got it. Saved as a task.
            <div
              className="
mt-3
flex
items-center
gap-3
font-mono
text-[11px]
text-(--primary)
"
            >
              TASK
              <CheckCheck size={14} />
            </div>
          </motion.div>

          {/* Memory */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            transition={{
              delay: 2,
              type: "spring",
            }}

            className="
relative
rounded-2xl
border
border-(--primary)/30
bg-white
p-4
"
          >
            <MemoryLine />

            <div
              className="
flex
items-center
gap-2
text-sm
font-semibold
"
            >
              <Brain size={18} className="text-(--primary)" />
              Memory connected
            </div>

            <p
              className="
mt-2
text-xs
text-muted-foreground
"
            >
              Docker deployment discussion from 10 days ago.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
