import Navbar from "@/components/layout/Navbar";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      {/* Page Hero */}
      <div className="pt-32 md:pt-40 pb-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto border-l border-primary-red pl-6 md:pl-12">
          <p className="text-primary-red text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6">Experience / 02</p>
          <h1 className="text-4xl md:text-9xl font-bold uppercase tracking-tighter leading-none text-white">
            Life <br /> Uncompromised
          </h1>
        </div>
      </div>

      <Features />

      {/* Additional Page Content: Technology Matrix */}
      <div className="bg-[#0f0f0f] py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-4">The Innovation Matrix</h2>
            <div className="w-20 h-[2px] bg-primary-red" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-red">Energy</h4>
              <p className="text-xs text-silver/40 leading-loose">
                Self-sustaining solar glass and geothermal cooling systems come standard in all 2026-tier residences.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-red">Privacy</h4>
              <p className="text-xs text-silver/40 leading-loose">
                Active noise cancellation and signal-shielded master suites for absolute digital and acoustic privacy.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-red">Connectivity</h4>
              <p className="text-xs text-silver/40 leading-loose">
                Dedicated satellite link and 10Gbps fiber backbone integrated into the structural core of every building.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
