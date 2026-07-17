"use client";

import { motion } from "framer-motion";
import { Brain, Database, MessageCircle, Sparkles, Server } from "lucide-react";

const systems = [
  {
    name: "WhatsApp",
    description: "User messages",
    icon: MessageCircle,
  },
  {
    name: "Twilio",
    description: "Message delivery",
    icon: MessageCircle,
  },
  {
    name: "Gemini AI",
    description: "Understands",
    icon: Sparkles,
  },
  {
    name: "Next.js",
    description: "Runs logic",
    icon: Server,
  },
  {
    name: "pgvector",
    description: "Stores memory",
    icon: Database,
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="
relative
overflow-hidden
px-6
py-28
"
    >
      {/* Ambient glow */}

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
top-40
h-[400px]
w-[400px]
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
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          className="
text-center
"
        >
          <p
            className="
font-mono
text-xs
tracking-[0.25em]
text-(--primary)
"
          >
            UNDER THE HOOD
          </p>

          <h2
            className="
mt-4
font-heading
text-4xl
font-bold
md:text-5xl
"
          >
            Simple experience.
            <br />
            Powerful system.
          </h2>

          <p
            className="
mx-auto
mt-4
max-w-xl
text-sm
text-muted-foreground
"
          >
            Every message travels through a pipeline designed to understand and remember.
          </p>
        </motion.div>

        {/* Pipeline */}

        {/* Pipeline */}

        <div
          className="
  mt-16
  flex
  flex-wrap
  items-center
  justify-center
  gap-4
  "
        >
          {systems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.name} className="flex items-center gap-4">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    delay: index * 0.12,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}

                  whileHover={{
                    y: -6,
                    scale: 1.04,
                  }}

                  className="
relative
w-36
rounded-2xl
border
border-white/70
bg-white/60
px-4
py-4
text-center
shadow-[0_15px_40px_rgba(25,43,54,.08)]
backdrop-blur-xl
"
                >
                  <div
                    className="
mx-auto
flex
h-9
w-9
items-center
justify-center
rounded-xl
bg-(--highlight)
text-(--primary)
"
                  >
                    <Icon size={17} />
                  </div>

                  <p
                    className="
mt-3
text-xs
font-semibold
"
                  >
                    {item.name}
                  </p>

                  <p
                    className="
mt-1
font-mono
text-[9px]
text-muted-foreground
"
                  >
                    {item.description}
                  </p>
                </motion.div>

                {index !== systems.length - 1 && (
                  <motion.div
                    animate={{
                      scaleX: [0, 1, 0],
                    }}

                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}

                    className="
hidden
h-px
w-8
origin-left
bg-(--primary)
md:block
"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Memory result */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.6,
          }}

          className="
mx-auto
mt-10
flex
w-fit
items-center
gap-3
rounded-full
border
border-white/70
bg-white/70
px-5
py-3
shadow-lg
backdrop-blur-xl
"
        >
          <Brain size={18} className="text-(--primary)" />

          <span
            className="
text-sm
font-medium
"
          >
            Your message becomes memory
          </span>
        </motion.div>
      </div>
    </section>
  );
}
