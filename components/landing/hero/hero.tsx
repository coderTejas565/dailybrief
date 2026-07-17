"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroBackground from "./hero-background";
import WhatsAppPreview from "./whatsapp-preview";
import FloatingMemory from "./floating-memory";
import { ArrowRight } from "lucide-react";

const headline = ["Your WhatsApp", "already knows", "your life."];

export default function Hero() {
  return (
    <section
      className="
relative
min-h-screen
overflow-hidden
px-6
pt-32
pb-20
"
    >
      <HeroBackground />

      <div
        className="
relative
mx-auto
grid
max-w-7xl
items-center
gap-20
lg:grid-cols-2
"
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2,
            }}

            className="
mb-6
font-mono
text-sm
tracking-[0.25em]
text-(--primary)
"
          >
            WHATSAPP MEMORY LAYER
          </motion.p>

          {/* Animated headline */}

          <h1
            className="
max-w-3xl
font-heading
text-5xl
font-bold
leading-[1.05]
tracking-tight
sm:text-6xl
lg:text-7xl
"
          >
            {headline.map((line, index) => (
              <motion.span
                key={line}

                initial={{
                  opacity: 0,
                  y: 80,
                  filter: "blur(10px)",
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                transition={{
                  duration: 0.9,

                  delay: 0.35 + index * 0.15,

                  ease: [0.16, 1, 0.3, 1],
                }}

                className="
block
"
              >
                {index === 2 ? (
                  <>
                    <span className="text-(--primary)">your life.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.9,
              duration: 0.8,
            }}

            className="
mt-7
max-w-xl
text-lg
leading-relaxed
text-muted-foreground
"
          >
            DailyBrief turns your everyday conversations into tasks, reminders, and memories — so
            important things return when they matter.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1.1,
            }}

            className="
mt-9
flex
items-center
gap-5
"
          >
            <motion.div
              whileHover={{
                scale: 1.06,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >
              <Button
                className="
group
relative
overflow-hidden
rounded-full
bg-(--primary)
px-8
py-6
text-base
font-semibold
text-white
shadow-xl
"
              >
                {/* button shine */}

                <motion.span
                  animate={{
                    x: ["-120%", "120%"],
                  }}

                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}

                  className="
absolute
inset-y-0
w-20
rotate-12
bg-white/30
"
                />

                <span className="relative flex items-center">
                  Start on WhatsApp
                  <ArrowRight
                    size={18}

                    className="
ml-2
transition-transform
group-hover:translate-x-1
"
                  />
                </span>
              </Button>
            </motion.div>

            <p
              className="
hidden
text-sm
text-muted-foreground
sm:block
"
            >
              No app.
              <br />
              No setup.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT PRODUCT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 80,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}

          transition={{
            duration: 1.2,

            delay: 0.5,

            ease: [0.16, 1, 0.3, 1],
          }}

          className="
relative
flex
justify-center
"
        >
          {/* ambient rotation glow */}

          <motion.div
            animate={{
              rotate: 360,
            }}

            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}

            className="
absolute
h-[500px]
w-[500px]
rounded-full
border
border-(--highlight)
opacity-30
"
          />

          <FloatingMemory />

          <WhatsAppPreview />

          {/* Task card */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              y: [0, -16, 0],
              rotate: [-1, 1, -1],
              filter: [
                "drop-shadow(0px 20px 30px rgba(25,43,54,0.08))",
                "drop-shadow(0px 35px 45px rgba(25,43,54,0.14))",
                "drop-shadow(0px 20px 30px rgba(25,43,54,0.08))",
              ],
            }}

            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
absolute
-bottom-5
-left-8
rounded-2xl
border
border-white/70
bg-white/70
px-5
py-4
shadow-xl
backdrop-blur-xl
"
          >
            <p
              className="
font-mono
text-xs
text-(--primary)
"
            >
              TASK SAVED
            </p>

            <p
              className="
mt-1
text-sm
font-medium
"
            >
              API docs
              <br />
              Next week
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll */}

      <motion.div
        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 2,
        }}

        className="
absolute
bottom-8
left-1/2
hidden
-translate-x-1/2
md:block
"
      >
        <div
          className="
flex
flex-col
items-center
gap-3
text-xs
text-muted-foreground
"
        >
          Scroll
          <motion.div
            animate={{
              height: [10, 35, 10],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
            }}

            className="
w-px
bg-(--primary)
"
          />
        </div>
      </motion.div>
    </section>
  );
}
