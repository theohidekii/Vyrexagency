import { motion } from "motion/react";

export const ProblemSection = () => {
  const cards = [
    {
      title: "Você perde valor antes do orçamento",
      text: "Uma página fraca faz sua oferta parecer mais barata, mesmo quando sua entrega é boa."
    },
    {
      title: "Você parece menor que o concorrente",
      text: "O concorrente não precisa ser melhor. Se ele parece mais profissional, já começa na frente."
    },
    {
      title: "Você passa menos confiança",
      text: "Antes de falar com você, o cliente já julgou sua organização, seu cuidado e seu nível."
    },
    {
      title: "Você deixa dinheiro invisível na mesa",
      text: "Muitos clientes não reclamam do seu site. Eles simplesmente fecham e chamam outro."
    }
  ];

  return (
    <section id="problema" className="relative py-32 px-6 bg-brand-offwhite text-brand-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="flex flex-col gap-6 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-blue font-bold">/ O PROBLEMA</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
              Empresa boa com digital fraco <span className="italic-accent">vira empresa comum.</span>
            </h2>
            <p className="text-xl text-brand-black/60 font-light max-w-lg">
              O cliente não separa sua empresa do jeito que ela aparece na internet. Se o site é antigo, genérico ou lento, ele não pensa só “o site está ruim”. Ele duvida do seu nível.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 text-sm text-brand-black/40 font-mono italic">
            <span>“Será que essa empresa é confiável?”</span>
            <span>“Será que vale esse preço?”</span>
            <span>“Será que tem alguém melhor?”</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-8 bg-white border border-brand-black/5 rounded-[2rem] hover:shadow-xl hover:shadow-brand-blue/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue font-mono font-bold">
                0{index + 1}
              </div>
              <h3 className="text-lg font-medium leading-tight group-hover:text-brand-blue transition-colors">{card.title}</h3>
              <p className="text-sm text-brand-black/60 font-light leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
