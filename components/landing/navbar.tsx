"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const links = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Demo",
      href: "#demo",
    },
    {
      name: "How it works",
      href: "#architecture",
    },
  ];

  return (
    <motion.nav
      animate={{
        width: scrolled ? "92%" : "100%",
        y: scrolled ? 16 : 0,
      }}

      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}

      className={`
      fixed
      left-1/2
      top-0
      z-50
      -translate-x-1/2
      transition-all
      ${
        scrolled
          ? `
        rounded-full
        border
        border-white/40
        bg-white/70
        shadow-[0_20px_50px_rgba(82,167,131,0.12)]
        backdrop-blur-2xl
        `
          : ""
      }
      `}
    >
      {/* Ambient glow */}

      {scrolled && (
        <motion.div
          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-(--highlight)
          blur-xl
          "
        />
      )}

      <motion.div
        animate={{
          paddingTop: scrolled ? 10 : 18,
          paddingBottom: scrolled ? 10 : 18,
          paddingLeft: scrolled ? 18 : 28,
          paddingRight: scrolled ? 18 : 28,
        }}

        transition={{
          duration: 0.35,
        }}

        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
          flex
          items-center
          gap-3
          "
        >
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}

            transition={{
              type: "spring",
            }}

            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-2xl
            bg-(--highlight)
            text-lg
            font-bold
            text-(--primary)
            shadow-sm
            "
          >
            D
          </motion.div>

          <motion.span
            animate={{
              scale: scrolled ? 0.95 : 1,
            }}

            className="
            font-heading
            text-xl
            font-bold
            tracking-tight
            text-foreground
            "
          >
            DailyBrief
          </motion.span>
        </Link>

        {/* Links */}

        <div
          className="
          hidden
          items-center
          gap-2
          rounded-full
          border
          border-transparent
          bg-white/30
          px-3
          py-2
          md:flex
          "
        >
          {links.map((link) => (
            <motion.a
              key={link.name}

              href={link.href}

              whileHover={{
                y: -2,
              }}

              className="
                relative
                rounded-full
                px-4
                py-2
                text-sm
                text-muted-foreground
                transition
                hover:text-foreground
                "
            >
              {link.name}

              <motion.span
                initial={{
                  scaleX: 0,
                }}

                whileHover={{
                  scaleX: 1,
                }}

                transition={{
                  duration: 0.2,
                }}

                className="
                  absolute
                  bottom-0
                  left-4
                  right-4
                  h-px
                  origin-left
                  bg-(--primary)
                  "
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}

          whileTap={{
            scale: 0.95,
          }}
        >
          <Button
            className="
            group
            rounded-full
            bg-(--primary)
            px-6
            text-white
            shadow-lg
            shadow-green-200
            hover:bg-[#468f71]
            "
          >
            <span>Start WhatsApp</span>

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}

              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}

              className="ml-2"
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
