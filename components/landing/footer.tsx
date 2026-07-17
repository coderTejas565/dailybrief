"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";

export default function FinalCTA() {
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
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="
absolute
left-1/2
top-0
h-[350px]
w-[350px]
blur-[100px]
-translate-x-1/2
rounded-full
bg-(--highlight)
"
      />

      <div
        className="
relative
mx-auto
max-w-5xl
"
      >
        {/* Floating memories */}

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
absolute
-left-5
top-10
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
          <div className="flex items-center gap-2">
            <Brain size={18} className="text-(--primary)" />

            <span className="text-xs font-medium">Memory saved</span>
          </div>

          <p
            className="
mt-2
font-mono
text-[10px]
text-muted-foreground
"
          >
            Docker discussion
          </p>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
            rotate: [0, -2, 0],
          }}

          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
absolute
-right-5
bottom-20
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
          <p
            className="
text-xs
font-semibold
"
          >
            Reminder
          </p>

          <p
            className="
mt-1
font-mono
text-[10px]
text-muted-foreground
"
          >
            Tomorrow 9 AM
          </p>
        </motion.div>

        {/* Main glass card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
relative
overflow-hidden
rounded-[32px]
border
border-white/70
bg-white/50
px-6
py-16
text-center
shadow-[0_40px_120px_rgba(25,43,54,.12)]
backdrop-blur-3xl
<md:px-10></md:px-10>
"
        >
          {/* Glass reflection */}

          <motion.div
            animate={{
              x: ["-120%", "120%"],
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

          <div className="relative">
            <motion.p
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
font-mono
text-sm
tracking-[.25em]
text-(--primary)
"
            >
              START REMEMBERING
            </motion.p>

            <motion.h2
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
                delay: 0.2,
              }}

              className="
mx-auto
mt-5
max-w-3xl
font-heading
text-3xl
font-bold
leading-tight
md:text-5xl
"
            >
              Your thoughts are already on WhatsApp.
              <br />
              <span className="text-(--primary)">Make them useful.</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
              }}

              whileInView={{
                opacity: 1,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.4,
              }}

              className="
mx-auto
mt-5
max-w-lg
text-base
md:text-lg
text-muted-foreground
"
            >
              Send a message. DailyBrief organizes, remembers, and brings it back when it matters.
            </motion.p>

            {/* CTA */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.96,
              }}

              className="mt-9 inline-block"
            >
              <Button
                className="
group
relative
overflow-hidden
rounded-full
bg-(--primary)
px-7
py-5
text-base
font-semibold
text-white
shadow-xl
"
              >
                <motion.span
                  animate={{
                    x: ["-100%", "150%"],
                  }}

                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 3,
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
          </div>
        </motion.div>

        {/* Footer */}

        <motion.footer
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
            delay: 0.5,
          }}

          className="
mx-auto
mt-12
flex
max-w-5xl
flex-col
items-center
justify-between
gap-4
border-t
pt-8
text-sm
text-muted-foreground
md:flex-row
"
        >
          <p>© 2026 DailyBrief. Your personal memory assistant.</p>

          <div
            className="
flex
gap-6
"
          >
            <a href="#" className="hover:text-foreground">
              GitHub
            </a>

            <a href="#" className="hover:text-foreground">
              Twitter
            </a>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
