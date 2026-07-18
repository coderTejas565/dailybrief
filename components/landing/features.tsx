"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, CalendarDays, CheckCircle2, Mic } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Smart classification",
  },
  {
    icon: CalendarDays,
    title: "Daily brief",
  },
  {
    icon: CheckCircle2,
    title: "Quick actions",
  },
  {
    icon: Mic,
    title: "Voice capture",
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
        top-10
        h-[420px]
        w-[420px]
        -translate-x-1/2
        rounded-full
        bg-(--highlight)
        blur-[130px]
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
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          className="
          max-w-3xl
          "
        >
          <p
            className="
            font-mono
            text-xs
            tracking-[0.3em]
            text-(--primary)
            "
          >
            FEATURES
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
            Your conversations.
            <br />
            <span className="text-(--primary)">Your second brain.</span>
          </h2>

          <p
            className="
            mt-5
            max-w-xl
            text-muted-foreground
            "
          >
            DailyBrief transforms everyday messages into memories that understand context and return
            when they matter.
          </p>
        </motion.div>

        {/* Main Experience */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96,
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
mt-10
overflow-hidden
rounded-[40px]
border
border-white/70
bg-white/40
p-7
shadow-[0_40px_120px_rgba(25,43,54,.12)]
backdrop-blur-3xl
md:p-10
"
        >
          {/* Reflection */}

          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}

            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 4,
            }}

            className="
            absolute
            top-0
            h-full
            w-24
            rotate-12
            bg-white/40
            blur-xl
            "
          />

          <div
            className="
            relative
            grid
            items-center
            gap-10
            md:grid-cols-2
            "
          >
            {/* Text */}

            <div>
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}

                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
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
                shadow-lg
                "
              >
                <Brain size={28} />
              </motion.div>

              <h3
                className="
                mt-6
                font-heading
                text-3xl
                font-bold
                "
              >
                Remember everything.
              </h3>

              <p
                className="
                mt-4
                max-w-md
                leading-relaxed
                text-muted-foreground
                "
              >
                Old conversations become useful again. DailyBrief connects past context before you
                waste time searching.
              </p>
            </div>

            {/* Memory Story UI */}

            <div
              className="
              relative
              rounded-3xl
              bg-(--highlight)
              p-6
              "
            >
              <p
                className="
                font-mono
                text-[11px]
                tracking-wider
                text-(--primary)
                "
              >
                MEMORY CONNECTION
              </p>

              {/* Old Message */}

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
                  delay: 0.3,
                }}

                className="
                mt-5
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
                  &quot;Need Docker setup for deployment&quot;
                </p>
              </motion.div>

              {/* Connection Line */}

              <motion.div
                initial={{
                  height: 0,
                }}

                whileInView={{
                  height: 45,
                }}

                viewport={{
                  once: true,
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

              {/* Memory Result */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: 1,
                  type: "spring",
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
                  <Brain size={17} className="text-(--primary)" />
                  Memory found
                </div>

                <p
                  className="
                  mt-2
                  text-xs
                  text-muted-foreground
                  "
                >
                  Connected with your previous deployment discussion.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating Feature Pills */}

        <div
          className="
          mt-5
          flex
          flex-wrap
          justify-center
          gap-3
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}

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
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}

                className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/70
                bg-white/50
                px-5
                py-3
                text-sm
                shadow-sm
                backdrop-blur-xl
                "
              >
                <Icon size={16} className="text-(--primary)" />

                {item.title}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
