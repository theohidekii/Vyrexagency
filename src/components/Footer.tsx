import { motion } from "motion/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="text-3xl font-medium tracking-tighter">
            VYREX<span className="text-brand-blue">.</span>
          </div>
          <p className="text-xl text-white/40 font-light max-w-sm leading-relaxed">
            Páginas, sistemas e experiências digitais para empresas que não querem parecer comuns.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold italic-accent">
              Não criamos digital genérico.
            </p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
              Criamos percepção, clareza e conversão.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold">NAVEGAÇÃO</span>
          <div className="flex flex-col gap-4">
             {["Problema", "Serviços", "Projetos", "Método", "WhatsApp"].map((item) => (
               <a key={item} href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-white transition-colors tracking-tight font-light">
                 {item}
               </a>
             ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-purple font-bold">CONTATO</span>
          <div className="flex flex-col gap-4">
             <a href="#whatsapp" className="text-white/40 hover:text-white transition-colors tracking-tight font-light">
               WhatsApp Direct
             </a>
             <p className="text-white/40 tracking-tight font-light">
               contato@vyrex.studio
             </p>
             <p className="text-white/40 tracking-tight font-light">
               São Paulo, Brasil
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">
           © {currentYear} VYREX STUDIO. ALL RIGHTS RESERVED.
         </p>
         <div className="flex gap-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/10">MADE FOR IMPACT</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/10">PREMIUM ONLY</span>
         </div>
      </div>
    </footer>
  );
};
