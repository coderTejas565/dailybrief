"use client";

import { motion } from "framer-motion";
import { MessageCircle, Brain, Bell, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Capture",
    description: "Send any thought naturally on WhatsApp.",
    label: "MESSAGE",
    content: "Need to submit assignment Friday",
  },

  {
    number: "02",
    icon: Sparkles,
    title: "Understand",
    description: "AI finds meaning, deadlines, and priority.",
    label: "AI STRUCTURE",
    content: "TASK\nFriday\nMedium priority",
  },

  {
    number: "03",
    icon: Brain,
    title: "Remember",
    description: "Important moments return when needed.",
    label: "MEMORY",
    content: "Assignment due tomorrow",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="
relative
overflow-hidden
px-6
py-20
"
    >
      {/* Aurora */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
absolute
-left-40
top-20
h-[420px]
w-[420px]
rounded-full
bg-(--highlight)
blur-[130px]
opacity-40
"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
absolute
-right-40
bottom-20
h-[350px]
w-[350px]
rounded-full
bg-[#E9E8DD]
blur-[120px]
opacity-40
"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}

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
          className="
mx-auto
max-w-3xl
text-center
"
        >
          <p
            className="
font-mono
text-xs
tracking-[.3em]
text-(--primary)
"
          >
            HOW IT WORKS
          </p>

          <h2
            className="
mt-4
font-heading
text-4xl
font-bold
leading-tight
md:text-5xl
"
          >
            From thoughts
            <br />
            <span className="text-(--primary)">to memories.</span>
          </h2>

          <p
            className="
mt-5
text-muted-foreground
"
          >
            Your conversations become organized memories automatically.
          </p>
        </motion.div>

        {/* Pipeline */}

        <div
          className="
relative
mt-12
grid
gap-6
md:grid-cols-3
"
        >
          {/* travelling light */}

          <motion.div
            animate={{
              x: ["0%", "300%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
absolute
top-16
hidden
h-px
w-32
bg-(--primary)
blur-sm
md:block
"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}

                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.96,
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
                  delay: index * 0.15,
                  duration: 0.7,
                }}

                className="
relative
"
              >
                {/* Number */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}

                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                  }}

                  className="
absolute
-right-2
-top-3
z-10
rounded-full
bg-(--primary)
px-3
py-1
font-mono
text-[10px]
text-white
shadow-lg
"
                >
                  {step.number}
                </motion.div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                  }}

                  className="
relative
overflow-hidden
rounded-[26px]
border
border-white/70
bg-white/50
p-5
shadow-[0_25px_70px_rgba(25,43,54,.10)]
backdrop-blur-2xl
"
                >
                  {/* glow */}

                  <motion.div
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}

                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}

                    className="
absolute
inset-0
bg-(--highlight)
blur-3xl
"
                  />

                  <div className="relative">
                    <div
                      className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
bg-(--highlight)
text-(--primary)
"
                    >
                      <Icon size={21} />
                    </div>

                    <h3
                      className="
mt-5
font-heading
text-xl
font-semibold
"
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
mt-2
text-sm
text-muted-foreground
"
                    >
                      {step.description}
                    </p>

                    {/* product bubble */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.5 + index * 0.2,
                      }}

                      className="
mt-5
rounded-2xl
border
border-white
bg-white/80
p-4
shadow-inner
"
                    >
                      <p
                        className="
font-mono
text-[10px]
text-(--primary)
"
                      >
                        {step.label}
                      </p>

                      <p
                        className="
mt-2
whitespace-pre-line
text-sm
font-medium
"
                      >
                        {step.content}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* memory pulse */}

                {index === 2 && (
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}

                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}

                    className="
absolute
bottom-6
right-6
h-3
w-3
rounded-full
bg-(--primary)
"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
