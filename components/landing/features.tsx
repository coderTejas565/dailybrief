"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, CalendarDays, CheckCircle2, Mic } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Smart classification",
    description: "Messages automatically become tasks, notes, ideas, or reminders.",
    tag: "AI UNDERSTANDS",
  },
  {
    icon: CalendarDays,
    title: "Daily brief",
    description: "Important moments return in one simple summary.",
    tag: "YOUR MORNING",
  },
  {
    icon: CheckCircle2,
    title: "Done from WhatsApp",
    description: "Complete actions without leaving the conversation.",
    tag: "ONE MESSAGE",
  },
  {
    icon: Mic,
    title: "Voice capture",
    description: "Speak naturally. DailyBrief remembers.",
    tag: "VOICE MEMORY",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="
      relative
      overflow-hidden
      px-6
      py-24
      "
    >
      {/* Aurora */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="
        absolute
        left-1/2
        top-20
        h-[350px]
        w-[350px]
        -translate-x-1/2
        rounded-full
        bg-(--highlight)
        blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}

        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "linear",
        }}

        className="
absolute
top-0
left-0
h-full
w-20
bg-white/30
blur-xl
rotate-12
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

          transition={{
            duration: 0.7,
          }}
        >
          <p
            className="
            font-mono
            text-xs
            tracking-[.25em]
            text-(--primary)
            "
          >
            HOW IT WORKS
          </p>

          <h2
            className="
            mt-4
            max-w-3xl
            font-heading
            text-3xl
            font-bold
            leading-tight
            md:text-5xl
            "
          >
            From random thoughts
            <br />
            to organized memories.
          </h2>

          <p
            className="
            mt-4
            max-w-xl
            text-base
            text-muted-foreground
            "
          >
            DailyBrief understands your conversations and brings back what matters.
          </p>
        </motion.div>

        {/* Main Memory Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
relative
mt-12
overflow-hidden
rounded-[32px]
border
border-white/80
bg-white/50
p-6
shadow-[0_40px_120px_rgba(25,43,54,0.12)]
backdrop-blur-2xl
before:absolute
before:inset-0
before:rounded-[32px]
before:bg-gradient-to-br
before:from-white/80
before:via-transparent
before:to-(--highlight)
before:opacity-40
"
        >
          <div
            className="
            grid
            items-center
            gap-8
            md:grid-cols-2
            "
          >
            {/* Text */}

            <div>
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}

                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}

                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-(--highlight)
                text-(--primary)
                "
              >
                <Brain size={24} />
              </motion.div>

              <h3
                className="
                mt-5
                font-heading
                text-2xl
                font-bold
                "
              >
                Your second brain.
              </h3>

              <p
                className="
                mt-3
                text-sm
                leading-relaxed
                text-muted-foreground
                "
              >
                DailyBrief connects past conversations and resurfaces information before you start
                searching.
              </p>
            </div>

            {/* Memory UI */}

            <div
              className="
              relative
              rounded-3xl
              bg-(--highlight)
              p-5
              "
            >
              <p
                className="
                font-mono
                text-[11px]
                text-(--primary)
                "
              >
                MEMORY FOUND
              </p>

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}

                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}

                className="
                mt-4
                rounded-2xl
                bg-white
                p-4
                shadow-lg
                "
              >
                <p className="text-xs text-muted-foreground">3 weeks ago</p>

                <p
                  className="
  mt-2
  text-sm
  font-medium
  "
                >
                  <span>&quot;</span>
                  Need Docker setup for deployment
                  <span>&quot;</span>
                </p>
              </motion.div>

              <motion.div
                initial={{
                  height: 0,
                }}

                whileInView={{
                  height: 40,
                }}

                transition={{
                  duration: 1,
                }}

                className="
                mx-auto
                w-px
                bg-(--primary)
                "
              />

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                transition={{
                  delay: 0.8,
                }}

                className="
                rounded-2xl
                bg-white
                p-4
                shadow-lg
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
                  <Brain size={16} className="text-(--primary)" />
                  Memory connected
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}

        <div
          className="
          mt-6
          grid
          gap-5
          md:grid-cols-2
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}

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
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -6,
                }}

                className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/80
bg-white/50
p-5
shadow-[0_20px_60px_rgba(25,43,54,0.08)]
backdrop-blur-2xl
transition-all
duration-500
before:absolute
before:inset-0
before:bg-gradient-to-br
before:from-white/70
before:via-transparent
before:to-(--highlight)
before:opacity-0
before:transition-opacity
before:duration-500
hover:before:opacity-100
"
              >
                <div
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
                  <Icon size={20} />
                </div>

                <h3
                  className="
                  mt-4
                  font-heading
                  font-semibold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-2
                  text-sm
                  text-muted-foreground
                  "
                >
                  {item.description}
                </p>

                <span
                  className="
                  mt-4
                  inline-block
                  rounded-full
                  bg-(--highlight)
                  px-3
                  py-1
                  font-mono
                  text-[10px]
                  text-(--primary)
                  "
                >
                  {item.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
