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
py-32
"
    >
      {/* Aurora */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="
absolute
left-1/2
top-20
h-[500px]
w-[500px]
-translate-x-1/2
rounded-full
bg-(--highlight)
blur-[140px]
"
      />

      <div
        className="
relative
mx-auto
max-w-6xl
"
      >
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}

          className="
text-center
"
        >
          <p
            className="
font-mono
text-sm
tracking-[0.3em]
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
md:text-6xl
"
          >
            A conversation that
            <br />
            <span className="text-(--primary)">remembers.</span>
          </h2>

          <p
            className="
mt-5
text-lg
text-muted-foreground
"
          >
            No dashboards. No forms. Just conversations.
          </p>
        </motion.div>

        {/* Product stage */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
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
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
relative
mx-auto
mt-16
max-w-md
"
        >
          {/* floating memory bubble */}

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0],
            }}

            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
absolute
-right-24
top-20
hidden
rounded-3xl
border
border-white/70
bg-white/60
p-5
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
font-medium
"
            >
              <Brain size={18} className="text-(--primary)" />
              Memory
            </div>

            <p
              className="
mt-2
text-xs
text-muted-foreground
"
            >
              Docker notes
              <br />2 weeks ago
            </p>
          </motion.div>

          {/* Chat glass */}

          <div
            className="
relative
overflow-hidden
rounded-[36px]
border
border-white/70
bg-white/60
p-4
shadow-[0_40px_100px_rgba(25,43,54,.15)]
backdrop-blur-3xl
"
          >
            {/* reflection */}

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
w-20
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

                <p
                  className="
text-xs
text-muted-foreground
"
                >
                  memory active
                </p>
              </div>
            </div>

            <div
              className="
relative
space-y-5
py-6
"
            >
              {/* User */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
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
                Need to finish API documentation next week
                <p
                  className="
mt-2
text-right
text-xs
text-gray-400
"
                >
                  10:42 PM
                </p>
              </motion.div>

              {/* AI thinking */}

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
                  delay: 0.7,
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
                <div
                  className="
flex
items-center
gap-2
text-xs
text-muted-foreground
"
                >
                  <Sparkles size={14} className="text-(--primary)" />
                  Thinking
                </div>
              </motion.div>

              {/* AI */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: 1,
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
text-xs
text-(--primary)
"
                >
                  TASK NEXT WEEK
                  <CheckCheck size={14} />
                </div>
              </motion.div>

              {/* Memory reveal */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
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
                  delay: 1.5,
                  type: "spring",
                }}

                className="
relative
rounded-2xl
border
border-(--primary)/30
bg-white
p-5
"
              >
                {/* memory pulse */}

                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
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
                  <Brain className="text-(--primary)" size={18} />
                  Memory found
                </div>

                <p
                  className="
relative
mt-3
text-sm
text-muted-foreground
"
                >
                  You discussed API structure in previous project notes.
                </p>
              </motion.div>

              {/* Memory reveal */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
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
                  delay: 1.5,
                  type: "spring",
                }}

                className="
        relative
        rounded-2xl
        border
        border-(--primary)/30
        bg-white
        p-5
        "
              >
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
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

                <div className="relative">
                  <div
                    className="
          flex
          items-center
          gap-2
          font-semibold
          "
                  >
                    <Brain size={18} className="text-(--primary)" />
                    Memory found
                  </div>

                  <p
                    className="
            mt-3
            text-sm
            text-muted-foreground
            "
                  >
                    You discussed API structure in previous project notes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
