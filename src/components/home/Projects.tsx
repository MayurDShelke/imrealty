"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "The Monolith",
    location: "Swiss Alps",
    image: "/images/project1.png",
    details: ["Concrete Shell", "Glass Facade", "4,200 sqft"],
    status: "Completed"
  },
  {
    id: "02",
    title: "Zenith Plaza",
    location: "Dubai Marina",
    image: "/images/project2.png",
    details: ["Sky Garden", "Smart Integration", "Penthouse"],
    status: "Under Construction"
  },
  {
    id: "03",
    title: "Azure Heights",
    location: "Malibu Coast",
    image: "/images/project3.png",
    details: ["Infinity Pool", "Carbon Neutral", "Private Beach"],
    status: "Private Sale"
  },
];

const Projects = () => {
  return (
    <section className="bg-black py-24 md:py-40 px-6 md:px-24 overflow-hidden relative">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="h-full w-[1px] bg-white absolute left-8 md:left-32" />
        <div className="h-full w-[1px] bg-white absolute right-8 md:right-32" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary-red text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Portfolio / 2024</span>
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              Selected <br /> <span className="text-white/10 italic font-serif">Curations</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-silver/40 text-[10px] uppercase tracking-widest leading-loose text-left md:text-right"
          >
            Our portfolio is limited by choice. We only engage in projects that challenge the boundaries of contemporary architecture and sustainable luxury.
          </motion.p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Project Info */}
              <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
                <span className="text-7xl md:text-[180px] font-bold text-white/5 absolute -top-12 md:-top-32 left-0 -z-10 group-hover:text-primary-red/10 transition-colors duration-1000 tracking-tighter">
                  {project.id}
                </span>
                <div className="space-y-6 pt-12 md:pt-24">
                  <h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter group-hover:text-primary-red transition-colors duration-500">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.details.map((detail) => (
                      <span key={detail} className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 text-[8px] uppercase tracking-widest text-silver/60">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <div className="pt-8 flex items-center space-x-12 border-t border-white/5">
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-silver/30 mb-1 font-bold">Location</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-silver/30 mb-1 font-bold">Status</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-primary-red">{project.status}</p>
                    </div>
                  </div>
                  <button className="flex items-center space-x-4 pt-10 text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em] font-bold">
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} className="text-primary-red" />
                  </button>
                </div>
              </div>

              {/* Project Image */}
              <div className="lg:col-span-7 relative h-[350px] md:h-[600px] w-full overflow-hidden order-1 lg:order-2 border border-white/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 brightness-75 hover:brightness-100" 
                  />
                </motion.div>
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 z-20">
                  <div className="w-12 h-12 bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <Plus className="text-primary-red group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary-red to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
