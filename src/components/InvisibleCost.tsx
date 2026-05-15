import { motion } from "motion/react";
import { OrganicGlowDivider } from "./BackgroundEffects";

export const InvisibleCost = () => {
  return (
    <section className="relative py-40 px-6 bg-brand-black text-white overflow-hidden">
      <OrganicGlowDivider className="absolute top-0 left-0 w-full opacity-40 z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col gap-6"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-purple font-bold">O CUSTO INVISÍVEL</span>
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter leading-tight">
            Um site ruim não <span className="italic-accent">parece</span> caro. Mas cobra todo dia.
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto">
            Ele cobra em lead que não chama, orçamento que esfria, cliente que desconfia e oportunidade que você nem sabe que perdeu.
          </p>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full py-20"
        >
          <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full" />
          <h3 className="relative text-3xl md:text-5xl font-medium tracking-tight text-white italic-accent">
            "O cliente compara percepção antes de comparar proposta."
          </h3>
          <div className="mt-8 flex items-center justify-center gap-4">
             <span className="w-8 h-[1px] bg-white/20" />
             <span className="text-[11px] uppercase tracking-widest text-white/30">VYREX Strategy</span>
             <span className="w-8 h-[1px] bg-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
