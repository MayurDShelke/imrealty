import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Features from "@/components/home/Features";
import Vision from "@/components/home/Vision";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Features />
      <Vision />
      <Footer />
    </main>
  );
}
