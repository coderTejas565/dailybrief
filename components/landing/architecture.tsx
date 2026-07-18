"use client";

import { motion } from "framer-motion";
import { Brain, Bell, MessageCircle, Sparkles, Database, ArrowRight } from "lucide-react";

const flow = [
  {
    title: "Your message",
    description: "Send anything naturally",
    icon: MessageCircle,
    text: `"Need to submit assignment Friday"`,
  },
  {
    title: "AI understands",
    description: "Finds what matters",
    icon: Sparkles,
    text: "TASK • Deadline detected",
  },
  {
    title: "Memory stored",
    description: "Keeps context alive",
    icon: Database,
    text: "Related memory found",
  },
  {
    title: "Right moment",
    description: "Brings it back",
    icon: Bell,
    text: "Reminder tomorrow 9 AM",
  },
];

const tech = ["WhatsApp", "Gemini AI", "Next.js", "PostgreSQL", "pgvector"];

export default function Architecture() {
  return (
    <section
      id="architecture"
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
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-20
        h-[450px]
        w-[450px]
        -translate-x-1/2
        rounded-full
        bg-(--highlight)
        blur-[120px]
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
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          className="text-center"
        >
          <p
            className="
            font-mono
            text-xs
            tracking-[0.3em]
            text-(--primary)
            "
          >
            UNDER THE HOOD
          </p>

          <h2
            className="
            mt-5
            font-heading
            text-4xl
            font-bold
            leading-tight
            md:text-5xl
            "
          >
            A simple message.
            <br />
            <span className="text-(--primary)">A powerful memory engine.</span>
          </h2>

          <p
            className="
            mx-auto
            mt-5
            max-w-xl
            text-muted-foreground
            "
          >
            Every conversation passes through intelligence that understands, organizes, and
            remembers what matters.
          </p>
        </motion.div>

        {/* Flow */}

        <div
          className="
          mt-10
          flex
          flex-col
          items-center
          justify-center
          gap-5
          md:flex-row
          "
        >
          {flow.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                flex
                items-center
                "
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}

                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}

                  style={{
                    transformPerspective: 1000,
                  }}

                  className="
                  group
                  relative
                  w-52
                  rounded-3xl
                  border
                  border-white/70
                  bg-white/60
                  p-5
                  shadow-[0_20px_60px_rgba(25,43,54,.08)]
                  backdrop-blur-xl
                  "
                >
                  {/* Glow */}

                  <motion.div
                    animate={{
                      opacity: [0, 0.4, 0],
                    }}

                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}

                    className="
                    absolute
                    inset-0
                    rounded-3xl
                    bg-(--highlight)
                    blur-xl
                    "
                  />

                  <div className="relative">
                    <div
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
                      <Icon size={19} />
                    </div>

                    <h3
                      className="
                      mt-4
                      font-semibold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      mt-1
                      text-xs
                      text-muted-foreground
                      "
                    >
                      {item.description}
                    </p>

                    <div
                      className="
                      mt-4
                      rounded-xl
                      bg-white/70
                      px-3
                      py-2
                      text-[11px]
                      font-mono
                      "
                    >
                      {item.text}
                    </div>
                  </div>
                </motion.div>

                {/* Connector */}

                {index !== flow.length - 1 && (
                  <div
                    className="
                    relative
                    mx-3
                    hidden
                    h-px
                    w-10
                    bg-border
                    md:block
                    "
                  >
                    <motion.div
                      animate={{
                        x: [0, 35, 0],
                      }}

                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}

                      className="
                      absolute
                      top-1/2
                      h-2
                      w-2
                      -translate-y-1/2
                      rounded-full
                      bg-(--primary)
                      shadow-lg
                      "
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Memory */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
          absolute
          -left-5
          top-52
          hidden
          rounded-3xl
          border
          bg-white/70
          p-4
          shadow-xl
          backdrop-blur-xl
          lg:block
          "
        >
          <div className="flex gap-2 items-center">
            <Brain size={17} className="text-(--primary)" />

            <span className="text-xs font-semibold">Memory found</span>
          </div>

          <p className="mt-2 text-[11px] text-muted-foreground">
            Docker discussion
            <br />
            10 days ago
          </p>
        </motion.div>

        {/* Tech */}

        <motion.div
          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          className="
          mt-8
          flex
          flex-wrap
          justify-center
          gap-3
          "
        >
          {tech.map((item) => (
            <span
              key={item}
              className="
              rounded-full
              border
              border-white/70
              bg-white/60
              px-4
              py-2
              text-xs
              font-mono
              backdrop-blur-xl
              "
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
