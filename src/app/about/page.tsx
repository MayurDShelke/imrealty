import Navbar from "@/components/layout/Navbar";
import About from "@/components/home/About";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navbar />
      <About />
      {/* Additional sections can be added here specifically for the about page */}
      <div className="bg-off-black py-24 text-center">
        <h2 className="text-3xl font-serif text-white mb-8">Ready to explore?</h2>
        <button className="bg-primary-red px-12 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
          View Projects
        </button>
      </div>
      <Footer />
    </main>
  );
}
