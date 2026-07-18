"use client";

import { motion } from "framer-motion";
import { Brain, CheckCheck, Sparkles } from "lucide-react";

export default function DemoChat() {
  return (
    <section
      id="demo"
      className="
      relative
      overflow-hidden
      px-6
      py-16
      "
    >
      {/* Aurora */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-20
        h-[420px]
        w-[420px]
        -translate-x-1/2
        rounded-full
        bg-(--highlight)
        blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <p
            className="
            font-mono
            text-xs
            tracking-[.3em]
            text-(--primary)
            "
          >
            LIVE DEMO
          </p>

          <h2
            className="
            mt-5
            font-heading
            text-4xl
            font-bold
            md:text-5xl
            "
          >
            Your conversations
            <br />
            become <span className="text-(--primary)">memories.</span>
          </h2>

          <p
            className="
            mx-auto
            mt-5
            max-w-xl
            text-muted-foreground
            "
          >
            Watch DailyBrief understand a message, extract meaning, and reconnect past context.
          </p>
        </motion.div>

        {/* Demo stage */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.95,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
          relative
          mx-auto
          mt-14
          max-w-sm
          "
        >
          {/* Floating Memory */}

          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [0, 2, 0],
            }}

            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
            absolute
            -right-28
            top-24
            hidden
            rounded-3xl
            border
            border-white/70
            bg-white/60
            p-4
            shadow-xl
            backdrop-blur-xl
            md:block
            "
          >
            <div
              className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              "
            >
              <Brain size={17} className="text-(--primary)" />
              Past memory
            </div>

            <p
              className="
              mt-2
              text-xs
              text-muted-foreground
              "
            >
              API architecture
              <br />2 weeks ago
            </p>
          </motion.div>

          {/* Glass container */}

          <div
            className="
            relative
            overflow-hidden
            rounded-[38px]
            border
            border-white/70
            bg-gradient-to-br
            from-white/80
            to-white/40
            p-4
            shadow-[0_40px_120px_rgba(25,43,54,.15)]
            backdrop-blur-3xl
            "
          >
            {/* Reflection */}

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
              border-b
              pb-4
              "
            >
              <div
                className="
                flex
                h-10
                w-10
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

                <p className="text-xs text-(--primary)">online</p>
              </div>
            </div>

            <div
              className="
              relative
              space-y-4
              py-5
              "
            >
              {/* User */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: 0.3,
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

              {/* Thinking */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: 0.8,
                }}

                className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                py-2
                text-xs
                shadow-sm
                "
              >
                <Sparkles size={13} className="text-(--primary)" />
                Thinking
                {[1, 2, 3].map((i) => (
                  <motion.span
                    key={i}

                    animate={{
                      y: [0, -4, 0],
                    }}

                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}

                    className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-(--primary)
                    "
                  />
                ))}
              </motion.div>

              {/* AI response */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: 1.2,
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
                  gap-2
                  font-mono
                  text-xs
                  text-(--primary)
                  "
                >
                  TASK
                  <CheckCheck size={14} />
                </div>
              </motion.div>

              {/* Memory line */}

              <motion.div
                initial={{
                  height: 0,
                }}

                whileInView={{
                  height: 45,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: 1.7,
                  duration: 1,
                }}

                className="
                mx-auto
                w-px
                bg-(--primary)
                "
              />

              {/* Memory found */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
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
                shadow-lg
                "
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}

                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}

                  className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-(--highlight)
                  blur-xl
                  "
                />

                <div
                  className="
                  relative
                  flex
                  items-center
                  gap-2
                  font-semibold
                  "
                >
                  <Brain size={17} className="text-(--primary)" />
                  Memory connected
                </div>

                <p
                  className="
                  relative
                  mt-2
                  text-xs
                  text-muted-foreground
                  "
                >
                  Connected with your API discussion from 2 weeks ago.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
