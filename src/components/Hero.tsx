import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { HeroGlowBackground } from "./BackgroundEffects";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <HeroGlowBackground />
      
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-brand-blue/50" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-blue font-medium">Design & Engenharia Premium</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-white">
            Seu digital está <span className="italic-accent text-brand-blue">vendendo</span> sua empresa ou fazendo ela parecer <span className="italic-accent">menor?</span>
          </h1>

          <p className="max-w-xl text-lg text-white/50 font-light leading-relaxed">
            Criamos landing pages, sistemas e experiências digitais para empresas que precisam parecer tão profissionais quanto realmente são — antes do cliente chamar, comparar preço ou escolher o concorrente.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a 
              href="#whatsapp"
              className="px-8 py-4 bg-brand-blue text-white rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_-5px_rgba(49,92,255,0.4)]"
            >
              Conversar no WhatsApp
            </a>
            <a 
              href="#projetos"
              className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <span>Ver projetos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <span>Páginas</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Sistemas</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Automações</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Produtos</span>
          </div>
        </motion.div>

        {/* Right Panel: Diagnostic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative glass-panel rounded-3xl p-8 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium tracking-widest uppercase text-white/40">Diagnóstico rápido</h3>
              <div className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[10px] text-brand-blue uppercase font-bold">Live Status</div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-wider text-white/20 font-bold">Percepção atual</p>
                <div className="space-y-2">
                  {[
                    "Site genérico",
                    "Oferta pouco valorizada",
                    "Baixa confiança inicial",
                    "Operação manual demais"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                      <AlertCircle className="w-4 h-4 text-brand-purple/50" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/5" />

              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-wider text-brand-blue font-bold">Oportunidade</p>
                <div className="flex items-center gap-3 text-sm text-brand-coldwhite">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Criar uma presença digital mais forte e confiável.</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10">
              <p className="text-xs text-white/60 font-light italic">
                "Seu digital precisa provar o nível da sua empresa antes da conversa começar."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
