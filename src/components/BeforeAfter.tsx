import { motion } from "motion/react";
import { XCircle, CheckCircle } from "lucide-react";

export const BeforeAfter = () => {
  const beforeItems = [
    "Site genérico",
    "Página sem narrativa",
    "Visual antigo",
    "Oferta desvalorizada",
    "Cliente inseguro",
    "Conversa começa pelo preço",
  ];

  const afterItems = [
    "Landing page premium",
    "Mensagem clara",
    "Visual de autoridade",
    "Maior percepção de valor",
    "Cliente entende o diferencial",
    "Conversa começa com confiança",
  ];

  return (
    <section className="relative py-32 px-6 bg-white text-brand-black overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            A diferença entre parecer <span className="italic-accent">improvisado</span> e parecer escolhido.
          </h2>
          <p className="text-brand-black/50 font-light max-w-2xl mx-auto">
            A empresa pode ser a mesma. Mas a percepção muda no primeiro acesso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Antes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-brand-offwhite border border-black/5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            <div className="flex items-center justify-between mb-10">
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/40">ANTERIOR</span>
              <XCircle className="w-6 h-6 text-black/20" />
            </div>
            <div className="space-y-6">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-black/60">
                   <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                   <span className="text-lg font-light tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Depois */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-white border border-brand-blue/20 shadow-[0_40px_80px_-20px_rgba(49,92,255,0.15)] flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl rounded-full" />
            <div className="flex items-center justify-between mb-10 z-10">
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-blue">VYREX UPGRADE</span>
              <CheckCircle className="w-6 h-6 text-brand-blue" />
            </div>
            <div className="space-y-6 z-10">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-black">
                   <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="w-2 h-2 rounded-full bg-brand-blue" 
                   />
                   <span className="text-lg font-medium tracking-tight text-brand-black">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-widest text-brand-blue font-bold border-t border-brand-blue/10 pt-8">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              Impacto imediato na conversão
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
