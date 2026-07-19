import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Clock3,
  ArrowLeft,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#FFFFEB] px-6 py-20 text-[#14151F]">
      <div className="mx-auto max-w-5xl">

        {/* Hero */}
        <section className="text-center">

          <div
            className="
              mx-auto flex w-fit items-center gap-2
              rounded-full border border-black/10
              bg-white px-5 py-2 text-sm shadow-sm
            "
          >
            <Clock3 size={16} className="text-[#FF8A5B]" />

            <span>
              WhatsApp Business verification in progress
            </span>
          </div>


          <h1
            className="
              mt-8 text-4xl font-bold tracking-tight
              md:text-6xl
            "
          >
            DailyBrief is built.
            <br />

            <span className="text-[#5B6EF5]">
              Public WhatsApp access is being enabled.
            </span>
          </h1>


          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-lg leading-relaxed text-gray-600
            "
          >
            Thank you for visiting DailyBrief.

            The product is fully functional and running.
            We are currently completing WhatsApp Business verification,
            which is required before opening the assistant for everyone.
          </p>


          <div className="mt-8 flex justify-center gap-4">

            <a href="#demo">

              <Button
                className="
                  rounded-full bg-[#14151F]
                  px-7 text-white
                  hover:bg-[#14151F]/90
                "
              >
                <PlayCircle className="mr-2" size={18} />

                Watch Working Demo
              </Button>

            </a>


            <Link href="/">

              <Button
                variant="outline"
                className="rounded-full px-7"
              >
                <ArrowLeft className="mr-2" size={18} />

                Back to Website
              </Button>

            </Link>

          </div>

        </section>



        {/* Verification Explanation */}
        <section
          className="
            mt-16 rounded-3xl
            border border-black/10
            bg-white p-8 shadow-sm
          "
        >

          <div className="flex gap-4">

            <ShieldCheck
              className="mt-1 text-[#5B6EF5]"
              size={28}
            />


            <div>

              <h2 className="text-2xl font-semibold">
                Why WhatsApp access is not public yet
              </h2>


              <p className="mt-3 leading-relaxed text-gray-600">
                DailyBrief uses WhatsApp as its communication layer.
                Before anyone can connect their own number,
                WhatsApp requires Business API verification.
              </p>


              <p className="mt-3 leading-relaxed text-gray-600">
                This verification is handled externally by WhatsApp
                and may take a few days.
                The AI assistant, backend, and memory system are already working.
              </p>

            </div>

          </div>

        </section>




        {/* Product Status */}
        <section
          className="
            mt-8 rounded-3xl
            border border-black/10
            bg-white p-8 shadow-sm
          "
        >

          <div className="flex gap-4">

            <CheckCircle2
              className="mt-1 text-green-600"
              size={26}
            />


            <div>

              <h2 className="text-2xl font-semibold">
                Current product status
              </h2>


              <ul
                className="
                  mt-4 space-y-2
                  text-gray-600
                "
              >
                <li>✓ WhatsApp message ingestion</li>
                <li>✓ AI message classification</li>
                <li>✓ Daily brief generation</li>
                <li>✓ Task completion workflow</li>
                <li>✓ Long-term memory with semantic search</li>
              </ul>

            </div>

          </div>

        </section>




        {/* Demo Video */}
        <section id="demo" className="mt-20">

          <h2 className="text-3xl font-bold">
            Watch DailyBrief working
          </h2>


          <p className="mt-3 text-gray-600">
            The demo shows the complete user journey:
            sending messages, AI understanding,
            daily summaries, and memory resurfacing.
          </p>


          <div
            className="
              mt-8 aspect-video
              overflow-hidden rounded-3xl
              bg-black shadow-xl
            "
          >

            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="DailyBrief working demo"
              allowFullScreen
            />

          </div>

        </section>




        {/* Technology */}
        <section
          className="
            mt-20 rounded-3xl
            bg-[#14151F]
            p-10 text-white
          "
        >

          <h2 className="text-3xl font-bold">
            Technology behind DailyBrief
          </h2>


          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "Next.js",
              "Twilio WhatsApp API",
              "Gemini AI",
              "PostgreSQL",
              "pgvector",
            ].map((tech) => (

              <span
                key={tech}
                className="
                  rounded-full
                  border border-white/20
                  px-5 py-2
                  font-mono text-sm
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </section>



        <footer
          className="
            mt-20 text-center
            text-sm text-gray-500
          "
        >
          DailyBrief — Building a personal AI assistant with persistent memory.
        </footer>


      </div>
    </main>
  );
}