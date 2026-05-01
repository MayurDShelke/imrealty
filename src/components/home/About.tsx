"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, ArrowRight, Maximize2 } from "lucide-react";

const About = () => {
  const stats = [
    { value: "650+", label: "Architectural Projects", img: "/images/project1.png" },
    { value: "200+", label: "Delivered Residences", img: "/images/project2.png" },
    { value: "10+", label: "Years of Excellence", img: "/images/project3.png" },
    { value: "3", label: "Global Design Awards", img: "/images/hero.png" },
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 md:py-40 px-6 md:px-24 overflow-hidden font-sans">
      {/* Cinematic Grid Layout - Following Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-full w-[1px] bg-white/5 absolute right-8 md:right-32 top-0" />
        <div className="h-full w-[1px] bg-white/5 absolute left-8 md:left-32 top-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Vertical Data - Left */}
        <div className="absolute -left-16 top-0 hidden xl:flex flex-col items-center space-y-12">
          <span className="text-[10px] uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr] text-primary-red font-bold">
            Structure / 01
          </span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-primary-red to-transparent" />
        </div>

        {/* --- Top Section: Heading & Modular Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 md:mb-48 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
          >
            <span className="text-[80px] md:text-[180px] font-serif text-white/5 absolute -top-16 md:-top-32 -left-4 md:-left-16 pointer-events-none">
              01
            </span>
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-8 md:mb-12 relative z-10">
              Solutions <br /> 
              <span className="text-primary-red italic">Architected</span> <br />
              For Prestige
            </h2>
            <div className="w-16 md:w-20 h-[1px] bg-primary-red mb-8 md:mb-12" />
          </motion.div>

          <div className="lg:col-span-5 space-y-6 pt-0 md:pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-10 border border-white/10 relative group cursor-pointer hover:border-primary-red transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-silver/60 font-bold">Strategy</p>
                <Plus size={18} className="text-primary-red group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-tighter">Total Control Workflow</h3>
              <p className="text-[10px] md:text-xs text-silver/40 leading-loose">From land acquisition to final handover, every phase is governed by our rigorous internal standards.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-10 border border-white/10 relative group cursor-pointer hover:border-primary-red transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-silver/60 font-bold">Execution</p>
                <Plus size={18} className="text-primary-red group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-tighter">Single Point Accountability</h3>
              <p className="text-[10px] md:text-xs text-silver/40 leading-loose">One dedicated partner throughout the entire lifecycle of your architectural investment.</p>
            </motion.div>
          </div>
        </div>

        {/* --- Middle Section: Stats with Thumbnails --- */}
        <div className="mb-24 md:mb-48 relative">
           <div className="absolute -right-16 top-0 hidden xl:flex flex-col items-center space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] [writing-mode:vertical-lr] text-white/20">
              Metric / System
            </span>
            <div className="w-[1px] h-32 bg-white/10" />
          </div>

          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-light uppercase tracking-tighter mb-12 md:mb-20 flex items-center space-x-4 md:space-x-8"
          >
            <div className="w-8 md:w-16 h-[1px] bg-primary-red" />
            <span>Realities That Match Expectations</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative h-64 md:h-72 overflow-hidden group cursor-pointer border border-white/5 hover:border-primary-red/50 transition-colors duration-500"
              >
                <Image src={stat.img} alt={stat.label} fill className="object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10">
                  <h4 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter group-hover:text-primary-red transition-colors">{stat.value}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-silver/60 font-bold">{stat.label}</p>
                </div>
                <div className="absolute top-6 md:top-8 right-6 md:right-8">
                  <Maximize2 size={16} className="text-white/20 group-hover:text-primary-red transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Owners Section: The Vision --- */}
        <div className="border-t border-white/10 pt-24 md:pt-40 pb-12 relative">
          <div className="absolute -left-16 top-40 hidden md:flex flex-col items-center space-y-12">
            <div className="w-12 h-12 rounded-full border border-primary-red flex items-center justify-center">
              <span className="text-[8px] font-bold text-primary-red">IV</span>
            </div>
            <div className="w-[1px] h-32 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative aspect-[4/5] overflow-hidden group"
            >
              <Image src="/images/about.png" alt="Founders" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-3xl font-serif mb-1">Julian & Aria Vance</p>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-[1px] bg-primary-red" />
                  <p className="text-[10px] text-primary-red uppercase tracking-[0.3em] font-bold">Founders & Visionaries</p>
                </div>
              </div>
            </motion.div>
            
            <div className="lg:col-span-7">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary-red text-[10px] font-bold tracking-[0.6em] uppercase mb-12 block"
              >
                The Vision / 01
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-7xl font-serif mb-12 italic leading-tight"
              >
                "Architecture is the silence <br /> before the sound of living."
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="space-y-8 text-silver/60 text-sm leading-loose max-w-xl"
              >
                <p>
                  With a shared passion for minimalist aesthetics and structural integrity, Julian and Aria founded I Am Realty to bridge the gap between architectural art and functional luxury.
                </p>
                <p>
                  Our goal is to create spaces that don't just exist but breathe—offering a sanctuary of calm in a chaotic world. We personally oversee every project to ensure it meets our standard of 'Uncompromising Excellence'.
                </p>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-6 text-white hover:text-primary-red transition-all pt-8 group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary-red transition-colors">
                    <ArrowRight size={16} className="text-white group-hover:text-primary-red" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Connect with Founders</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Technical Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
};

export default About;
