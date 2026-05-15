import { motion } from "motion/react";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { OrganicGlowDivider } from "./BackgroundEffects";

export const Portfolio = () => {
  const projects = [
    {
      name: "Landing Page Alimentos",
      category: "Página de Venda",
      description: "Página premium para apresentar produtos alimentícios, aumentar desejo visual e conversão.",
      gradient: "linear-gradient(135deg, #315CFF 0%, #07113A 100%)"
    },
    {
      name: "Calculadora de Controle",
      category: "Ferramenta Digital",
      description: "Sistema inteligente para automatizar cálculos e reduzir erro manual na operação.",
      gradient: "linear-gradient(135deg, #6D4DFF 0%, #315CFF 100%)"
    },
    {
      name: "Dashboard de Gestão",
      category: "Sistema Interno",
      description: "Painel visual para organizar dados e transformar informações em decisões rápidas.",
      gradient: "linear-gradient(135deg, #07113A 0%, #6D4DFF 100%)"
    },
    {
      name: "Página Institucional",
      category: "Site Moderno",
      description: "Reposicionamento de marca para transmitir autoridade e confiança absoluta.",
      gradient: "linear-gradient(135deg, #EEF4FF 0%, #315CFF 100%)"
    }
  ];

  return (
    <section id="projetos" className="relative py-32 px-6 bg-brand-black text-white">
      <OrganicGlowDivider className="absolute top-0 left-0 w-full opacity-30 rotate-180" />
      
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-6 text-center items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold">PORTFÓLIO</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            Projetos que provam <span className="italic-accent font-medium">execução</span>, não discurso.
          </h2>
          <p className="text-lg text-white/50 font-light max-w-xl">
            A melhor forma de vender o que fazemos é mostrar o que conseguimos construir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col gap-8 p-6 rounded-[2.5rem] glass-panel border-white/5 hover:border-brand-blue/30 transition-all duration-700 overflow-hidden"
            >
              {/* Project Preview (CSS Only) */}
              <div 
                className="relative aspect-[16/10] w-full rounded-[1.5rem] overflow-hidden"
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-4 right-4 z-10">
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest font-bold">
                    Case Study
                   </div>
                </div>
                {/* Abstract Textures */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#fff_0%,transparent_1%)_repeat] bg-[length:24px_24px]" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-brand-blue font-bold">{project.category}</span>
                    <h3 className="text-2xl font-light tracking-tight">{project.name}</h3>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
                
                <p className="text-white/40 font-light leading-relaxed max-w-sm">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4">
                   <button className="text-[11px] uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/10 pb-1">
                    Ver projeto
                   </button>
                   <button className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-brand-blue hover:text-brand-coldwhite transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Similar ao meu caso
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
