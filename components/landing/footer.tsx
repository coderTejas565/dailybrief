"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="
      relative
      overflow-hidden
      px-6
      py-16
      "
    >
      {/* Aurora layers */}

      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        left-1/2
        top-0
        h-96
        w-96
        -translate-x-1/2
        rounded-full
        bg-(--highlight)
        opacity-50
        blur-[120px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="
        absolute
        right-20
        bottom-0
        h-52
        w-52
        rounded-full
        bg-(--primary)
        blur-[100px]
        "
      />

      <div
        className="
        relative
        mx-auto
        max-w-4xl
        "
      >
        {/* Floating memories */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 3, 0],
          }}

          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
          absolute
          -left-8
          top-10
          hidden
          rounded-2xl
          border
          border-white/80
          bg-white/50
          p-4
          shadow-xl
          backdrop-blur-2xl
          md:block
          "
        >
          <div className="flex gap-2 items-center">
            <div
              className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-xl
              bg-(--highlight)
              "
            >
              <Brain size={15} className="text-(--primary)" />
            </div>

            <p className="text-xs font-semibold">Memory found</p>
          </div>

          <p
            className="
            mt-2
            font-mono
            text-[10px]
            text-muted-foreground
            "
          >
            API discussion · 5 days ago
          </p>
        </motion.div>

        {/* Main glass panel */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            rotateX: 8,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}

          whileHover={{
            y: -5,
          }}

          className="
          group
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/80
          bg-white/45
          px-6
          py-12
          text-center
          shadow-[0_40px_100px_rgba(25,43,54,.14)]
          backdrop-blur-3xl
          md:px-12
          "
        >
          {/* moving glass shine */}

          <motion.div
            animate={{
              x: ["-150%", "200%"],
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
            bg-white/50
            blur-xl
            "
          />

          {/* inner glow */}

          <div
            className="
            absolute
            inset-0
            rounded-[36px]
            ring-1
            ring-white/60
            "
          />

          <div className="relative">
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}

              transition={{
                duration: 3,
                repeat: Infinity,
              }}

              className="
              mx-auto
              mb-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-2xl
              bg-(--highlight)
              "
            >
              <Sparkles size={18} className="text-(--primary)" />
            </motion.div>

            <p
              className="
              font-mono
              text-xs
              tracking-[.3em]
              text-(--primary)
              "
            >
              START REMEMBERING
            </p>

            <motion.h2
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
                delay: 0.2,
              }}

              className="
              mt-4
              font-heading
              text-3xl
              font-bold
              md:text-5xl
              "
            >
              Your conversations
              <br />
              deserve a memory.
            </motion.h2>

            <p
              className="
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-relaxed
              text-muted-foreground
              md:text-base
              "
            >
              DailyBrief turns your WhatsApp messages into organized tasks, reminders, and memories.
            </p>

            {/* Magnetic button */}

            <motion.div
              whileHover={{
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="
              mt-8
              inline-block
              "
            >
              <Button
                className="
                group
                rounded-full
                bg-(--primary)
                px-8
                py-6
                text-white
                shadow-[0_15px_40px_rgba(82,167,131,.35)]
                "
              >
                Start on WhatsApp
                <ArrowRight
                  size={17}
                  className="
                  ml-2
                  transition-transform
                  group-hover:translate-x-1
                  "
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <footer
          className="
          mt-5
          flex
          justify-center
          text-xs
          text-muted-foreground
          "
        >
          © 2026 DailyBrief · Your personal memory assistant.
        </footer>
      </div>
    </section>
  );
}
