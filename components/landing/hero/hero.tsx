"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import HeroBackground from "./hero-background";
import WhatsAppPreview from "./whatsapp-preview";
import FloatingMemory from "./floating-memory";

const headline = ["You don't have a", "forgetting problem.", "You have a remembering problem."];

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-[100vh]
      overflow-hidden
      px-6
      pt-32
      pb-16
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
        gap-12
        lg:grid-cols-2
        "
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
            mb-5
            font-mono
            text-xs
            tracking-[0.3em]
            text-(--primary)
            "
          >
            AI MEMORY ASSISTANT
          </motion.p>

          <h1
            className="
            max-w-3xl
            font-heading
            text-5xl
            font-bold
            leading-[1.05]
            tracking-tight
            sm:text-6xl
            lg:text-[4.1rem]
            "
          >
            {headline.map((line, index) => (
              <motion.span
                key={line}

                initial={{
                  opacity: 0,
                  y: 60,
                  filter: "blur(10px)",
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}

                className="block"
              >
                {index === 2 ? (
                  <span className="text-(--primary)">You have a remembering problem.</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.8,
            }}

            className="
            mt-5
            max-w-xl
            text-base
            leading-relaxed
            text-muted-foreground
            md:text-lg
            "
          >
            DailyBrief captures your WhatsApp thoughts, turns them into tasks and memories, and
            brings them back when they matter.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1,
            }}

            className="
            mt-7
            flex
            items-center
            gap-4
            "
          >
            <motion.div
              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >
              <Link href="/demo">
  <Button
    className="
    group
    relative
    overflow-hidden
    rounded-full
    bg-(--primary)
    px-7
    py-5
    text-sm
    font-semibold
    text-white
    shadow-xl
    "
  >
    <motion.span
      animate={{
        x: ["-120%", "120%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: 3,
      }}
      className="
      absolute
      inset-y-0
      w-16
      rotate-12
      bg-white/30
      "
    />

    <span
      className="
      relative
      flex
      items-center
      "
    >
      Start remembering
      <ArrowRight
        size={17}
        className="
        ml-2
        transition-transform
        group-hover:translate-x-1
        "
      />
    </span>

  </Button>
</Link>
            </motion.div>

            <p
              className="
              hidden
              text-xs
              text-muted-foreground
              sm:block
              "
            >
              Works inside WhatsApp.
              <br />
              Nothing new to learn.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT PRODUCT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.88,
            x: 60,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
          relative
          flex
          justify-center
          "
        >
          {/* Smaller orbit */}

          <motion.div
            animate={{
              rotate: 360,
            }}

            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}

            className="
            absolute
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-(--highlight)
            opacity-30
            "
          />

          <FloatingMemory />

          <div className="scale-[0.92]">
            <WhatsAppPreview />
          </div>

          {/* Memory saved card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-1, 1, -1],
            }}

            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
            absolute
            -bottom-3
            -left-4
            rounded-2xl
            border
            border-white/70
            bg-white/70
            px-4
            py-3
            shadow-xl
            backdrop-blur-xl
            "
          >
            <p
              className="
              font-mono
              text-[10px]
              text-(--primary)
              "
            >
              MEMORY SAVED
            </p>

            <p
              className="
              mt-1
              text-xs
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
    </section>
  );
}
