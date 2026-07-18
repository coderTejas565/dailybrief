"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        y: scrolled ? 14 : 0,
      }}

      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
      }}

      className={`
fixed
top-0
left-1/2
z-50
-translate-x-1/2
${
  scrolled
    ? `
rounded-full
border
border-white/60
bg-white/65
shadow-[0_20px_60px_rgba(25,43,54,.12)]
backdrop-blur-2xl
`
    : `
bg-transparent
`
}

`}
    >
      <motion.div
        animate={{
          paddingTop: scrolled ? 10 : 18,
          paddingBottom: scrolled ? 10 : 18,
          paddingLeft: scrolled ? 20 : 28,
          paddingRight: scrolled ? 20 : 28,
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
              scale: 1.08,
              rotate: 5,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
            }}

            className="
relative
flex
h-10
w-10
items-center
justify-center
rounded-2xl
bg-(--highlight)
font-bold
text-(--primary)
shadow-sm
"
          >
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}

              transition={{
                duration: 3,
                repeat: Infinity,
              }}

              className="
absolute
inset-0
rounded-2xl
bg-(--primary)
blur-lg
"
            />

            <span className="relative">D</span>
          </motion.div>

          <motion.span
            animate={{
              scale: scrolled ? 0.96 : 1,
            }}

            className="
font-heading
text-xl
font-bold
tracking-tight
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
gap-1
rounded-full
border
border-white/50
bg-white/40
px-2
py-1
backdrop-blur-xl
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
transition-colors
hover:text-foreground
"
            >
              {link.name}

              <motion.span
                className="
absolute
bottom-1
left-4
right-4
h-[2px]
rounded-full
bg-(--primary)
"

                initial={{
                  scaleX: 0,
                }}

                whileHover={{
                  scaleX: 1,
                }}

                transition={{
                  duration: 0.25,
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}

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
px-6
py-5
font-semibold
text-white
shadow-[0_12px_30px_rgba(82,167,131,.35)]
"
          >
            {/* Shine */}

            <motion.span
              animate={{
                x: ["-120%", "150%"],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 5,
              }}

              className="
absolute
inset-y-0
w-10
rotate-12
bg-white/30
blur-sm
"
            />

            <span
              className="
relative
flex
items-center
gap-2
"
            >
              Start WhatsApp
              <ArrowRight
                size={16}

                className="
transition-transform
duration-300
group-hover:translate-x-1
"
              />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
