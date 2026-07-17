"use client";

import { motion } from "framer-motion";
import { MessageCircle, Brain, Bell } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Send anything",
    description: "A task, idea, reminder, or thought. Just send it naturally on WhatsApp.",
    message: "Need to submit assignment Friday",
    label: "MESSAGE CAPTURED",
  },

  {
    number: "02",
    icon: Brain,
    title: "AI understands",
    description: "DailyBrief extracts meaning, deadlines, and importance automatically.",
    message: "TASK\nDeadline: Friday\nPriority: Medium",
    label: "AI STRUCTURED",
  },

  {
    number: "03",
    icon: Bell,
    title: "Memory returns",
    description: "When the right moment arrives, DailyBrief brings it back.",
    message: "Reminder:\nAssignment due tomorrow",
    label: "MEMORY RESURFACED",
  },
];

export default function HowItWorks() {
  return (
    <section
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
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
absolute
-left-40
top-20
h-[500px]
w-[500px]
rounded-full
bg-(--highlight)
blur-[130px]
opacity-50
"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}

        transition={{
          duration: 20,
          repeat: Infinity,
        }}

        className="
absolute
-right-40
bottom-20
h-[400px]
w-[400px]
rounded-full
bg-[#E9E8DD]
blur-[120px]
opacity-50
"
      />

      <div
        className="
relative
mx-auto
max-w-7xl
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
mx-auto
max-w-3xl
text-center
"
        >
          <p
            className="
font-mono
text-sm
tracking-[0.25em]
text-(--primary)
"
          >
            HOW IT WORKS
          </p>

          <h2
            className="
mt-6
font-heading
text-4xl
font-bold
tracking-tight
md:text-6xl
"
          >
            From random thoughts
            <br />
            <span className="text-(--primary)">to organized memories.</span>
          </h2>

          <p
            className="
mt-6
text-lg
text-muted-foreground
"
          >
            Your WhatsApp conversations become tasks, reminders, and memories automatically.
          </p>
        </motion.div>

        {/* Journey */}

        <div
          className="
relative
mt-24
grid
gap-10
md:grid-cols-3
"
        >
          {/* Animated connection */}

          <motion.div
            initial={{
              scaleX: 0,
            }}

            whileInView={{
              scaleX: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1.5,
              delay: 0.5,
            }}

            className="
absolute
top-32
left-[15%]
hidden
h-px
w-[70%]
origin-left
bg-gradient-to-r
from-(--primary)
via-(--highlight)
to-(--primary)
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
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}

                className="
relative
"
              >
                {/* floating number */}

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
-left-3
-top-5
rounded-full
bg-(--primary)
px-4
py-2
font-mono
text-xs
text-white
shadow-lg
"
                >
                  {step.number}
                </motion.div>

                {/* Glass card */}

                <div
                  className="
group
relative
overflow-hidden
rounded-[32px]
border
border-white/70
bg-white/60
p-7
shadow-[0_30px_80px_rgba(25,43,54,.08)]
backdrop-blur-2xl
"
                >
                  {/* card glow */}

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
opacity-20
blur-3xl
"
                  />

                  <div className="relative">
                    {/* icon */}

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}

                      className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-(--highlight)
text-(--primary)
"
                    >
                      <Icon size={26} />
                    </motion.div>

                    <h3
                      className="
mt-7
font-heading
text-2xl
font-semibold
"
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
mt-3
leading-relaxed
text-muted-foreground
"
                    >
                      {step.description}
                    </p>

                    {/* Product simulation */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.5 + index * 0.2,
                      }}

                      className="
mt-7
rounded-2xl
bg-white/80
p-4
shadow-inner
"
                    >
                      <p
                        className="
font-mono
text-[11px]
text-(--primary)
"
                      >
                        {step.label}
                      </p>

                      <p
                        className="
mt-3
whitespace-pre-line
text-sm
font-medium
"
                      >
                        {step.message}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Memory pulse */}

                {index === 2 && (
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.8, 0.2],
                    }}

                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}

                    className="
absolute
bottom-10
right-8
h-3
w-3
rounded-full
bg-(--primary)
shadow-[0_0_30px_var(--primary)]
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
