import NavBar from "@/app/(landing)/_components/navbar";
import Hero from "@/app/(landing)/_components/hero";
import Features from "@/app/(landing)/_components/features";
import Pricing from "@/app/(landing)/_components/pricing";
import Footer from "./_components/footer";

export default function Page() {
  return (
    <main className="relative">
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
