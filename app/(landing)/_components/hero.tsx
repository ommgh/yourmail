import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative h-[92vh] overflow-hidden bg-gradient-to-b from-blue-400 to-blue-500 rounded-b-[100px]">
      {/* Background Circles */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={20}
        refresh
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
        {/* Radial Blur Effect */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-400/30 blur-[120px]" />
      </div>
      {/* Floating Envelopes */}
      <div className="absolute inset-0">
        <Image
          src="/envelope.png"
          alt="Envelope"
          width={100}
          height={100}
          className="absolute left-[10%] top-[20%] h-16 w-16 rotate-[-15deg] animate-float opacity-90"
        />
        <Image
          src="/envelope.png"
          alt="Envelope"
          width={100}
          height={100}
          className="absolute right-[15%] top-[30%] h-20 w-20 rotate-[15deg] animate-float-delayed opacity-90"
        />
        <Image
          src="/envelope.png"
          alt="Envelope"
          width={100}
          height={100}
          className="absolute bottom-[20%] left-[20%] h-24 w-24 rotate-[25deg] animate-float opacity-90"
        />
        <Image
          src="/envelope.png"
          alt="Envelope"
          width={100}
          height={100}
          className="absolute bottom-[30%] right-[25%] h-16 w-16 rotate-[-20deg] animate-float-delayed opacity-90"
        />
      </div>
      <div className="relative flex min-h-screen items-center justify-center px-4">
        {/* Hero Content */}
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-5xl font-extrabold text-center tracking-tight text-white sm:text-7xl md:text-8xl">
            The Best Mail
            <br />
            Client Ever Made
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-center text-white/90 md:text-2xl">
            Get real-time notifications with our email app, ensuring you never
            miss an important message.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-black text-white hover:bg-black/90"
            >
              Start Today
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full bg-white text-gray-900 hover:bg-white/90"
            >
              Try it first
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
