import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Contact />

      {/* Additional Page Content: Global Presence */}
      <div className="bg-[#0a0a0a] py-32 px-6 md:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-red mb-6">Europe</h4>
            <p className="text-sm font-medium mb-2 text-white">Geneva Headquarters</p>
            <p className="text-xs text-silver/40 leading-loose">Quai du Mont-Blanc 21, <br /> 1201 Genève, Switzerland</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-red mb-6">Middle East</h4>
            <p className="text-sm font-medium mb-2 text-white">Dubai Studio</p>
            <p className="text-xs text-silver/40 leading-loose">Level 41, Emirates Towers, <br /> Sheikh Zayed Rd, Dubai, UAE</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-red mb-6">North America</h4>
            <p className="text-sm font-medium mb-2 text-white">Malibu Hub</p>
            <p className="text-xs text-silver/40 leading-loose">22716 Pacific Coast Hwy, <br /> Malibu, CA 90265, USA</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
