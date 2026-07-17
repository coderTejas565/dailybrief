import Hero from "@/components/landing/hero/hero";
import Navbar from "@/components/landing/navbar";
import HowItWorks from "@/components/landing/how-it-works";
import Features from "@/components/landing/features";
import DemoChat from "@/components/landing/demo-chat";
import Architecture from "@/components/landing/architecture";
import FinalCTA from "@/components/landing/footer";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero />
      <HowItWorks></HowItWorks>
      <Features />
      <DemoChat />
      <Architecture />
      <FinalCTA />
    </main>
  );
}
