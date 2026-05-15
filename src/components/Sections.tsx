import { motion } from "motion/react";
import { MessageSquare, ArrowRight, Smartphone, Instagram, Globe, Layout, Layers, Activity } from "lucide-react";
import { SectionGlow, OrganicGlowDivider } from "./BackgroundEffects";

export const Method = () => {
  const steps = [
    { title: "Leitura do negócio", text: "Entendemos sua oferta, seu público, sua margem e o que precisa ficar claro para o cliente." },
    { title: "Diagnóstico da percepção", text: "Analisamos como sua empresa aparece hoje e onde o digital pode estar reduzindo valor." },
    { title: "Estratégia e copy", text: "Organizamos a narrativa: problema, desejo, diferenciais, objeções e chamada para ação." },
    { title: "Direção visual", text: "Criamos uma estética compatível com o nível que sua empresa quer transmitir." },
    { title: "Desenvolvimento", text: "Construímos a página ou sistema com responsividade, clareza e acabamento premium." },
    { title: "Refinamento", text: "Ajustamos detalhes visuais e textos para deixar o projeto mais forte antes de publicar." }
  ];

  return (
    <section id="metodo" className="relative py-32 px-6 bg-brand-offwhite text-brand-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
        <div className="flex flex-col gap-8 sticky top-32 h-fit">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold">/ MÉTODO</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
            Não começamos <span className="italic-accent">pelo layout.</span> Começamos pelo que precisa vender.
          </h2>
          <p className="text-lg text-brand-black/50 font-light">
            Bonito qualquer template tenta ser. Estratégico é quando cada seção sabe por que existe.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-10 p-8 bg-white rounded-[2.5rem] border border-black/5 items-center group hover:border-brand-blue/20 transition-all transition-duration-500"
            >
              <div className="text-4xl font-light font-display text-black/10 group-hover:text-brand-blue/30 transition-colors">0{i + 1}</div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium tracking-tight group-hover:translate-x-1 transition-transform">{step.title}</h3>
                <p className="text-brand-black/60 font-light leading-relaxed max-w-lg">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BusinessTypes = () => {
  const types = ["Clínicas", "Escritórios", "Imobiliárias", "Restaurantes", "Marcas de Alimento", "Academias", "Estéticas", "Consultorias", "Empresas B2B", "Negócios Locais", "Infoprodutos", "SaaS", "Prestadores de Serviço", "Operações Complexas"];

  return (
    <section className="relative py-32 px-6 bg-white text-brand-black overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 text-center items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Para negócios que precisam ser <span className="italic-accent">levados a sério</span> no primeiro clique.
          </h2>
          <p className="text-brand-black/50 font-light max-w-2xl mx-auto">
            Atendemos empresas que vendem serviço, produto, orçamento, assinatura, atendimento ou operação personalizada.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {types.map((type, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-black/5 bg-brand-offwhite text-sm font-medium hover:border-brand-blue/20 transition-colors cursor-default">
              {type}
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-sm italic text-brand-black/40">
          "Se o cliente precisa confiar antes de comprar, seu digital precisa trabalhar antes de você atender."
        </p>
      </div>
    </section>
  );
};

export const DiagnosisCTA = () => {
  return (
    <section className="relative py-32 px-6 bg-brand-black text-white overflow-hidden">
      <SectionGlow color="#6D4DFF" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-[3.5rem] border border-brand-blue/20 bg-gradient-to-br from-brand-blue/10 to-transparent flex flex-col gap-10 overflow-hidden shadow-[0_0_100px_-20px_rgba(49,92,255,0.2)]"
        >
          <div className="flex flex-col gap-6 z-10">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Quer saber onde seu digital está te fazendo <span className="italic-accent font-medium">perder força?</span>
            </h2>
            <p className="text-white/50 font-light text-lg">
              Mande seu site, Instagram ou ideia no WhatsApp. Nós analisamos rapidamente onde sua apresentação está fraca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 z-10">
            {[
              { icon: Globe, text: "Seu site atual" },
              { icon: Instagram, text: "Seu Instagram" },
              { icon: Layout, text: "Uma ideia de página" },
              { icon: Layers, text: "Operação em planilhas" },
              { icon: Activity, text: "Processos manuais" },
              { icon: Smartphone, text: "Produto digital" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <item.icon className="w-4 h-4 text-brand-blue" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 z-10">
            <a href="#whatsapp" className="flex items-center gap-4 px-8 py-5 bg-brand-coldwhite text-brand-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all w-fit group">
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">
              Sem reunião desnecessária. Direto ao ponto.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center gap-8">
           <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start translate-x-4">
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] text-white/40">CLI</span>
                 </div>
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-sm text-white/60 max-w-xs font-light">
                    “Meu site está meio antigo e não passa muita confiança.”
                 </div>
              </div>

              <div className="flex gap-4 items-start self-end -translate-x-4">
                 <div className="p-4 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-sm text-brand-coldwhite max-w-xs text-right font-light">
                    “Vou analisar aqui. A gente consegue te mostrar exatamente onde ele está perdendo percepção.”
                 </div>
                 <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center">
                    <span className="text-[10px] text-brand-blue font-bold">VYX</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="relative py-48 px-6 bg-brand-black text-white text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-16 relative z-10">
        <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-none mb-4">
          Seu digital precisa <span className="italic-accent text-brand-blue">provar o nível</span> da sua empresa.
        </h2>
        
        <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto">
          Se sua empresa entrega bem, sua página, sistema ou ferramenta precisa deixar isso claro no primeiro contato.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <a href="#whatsapp" className="px-12 py-6 bg-brand-blue text-white rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_-10px_rgba(49,92,255,0.6)]">
             Conversar no WhatsApp
          </a>
          <a href="#projetos" className="text-white/60 hover:text-white transition-colors text-lg flex items-center gap-2 group">
             Ver projetos construídos
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="pt-20 opacity-30 flex flex-col gap-2">
           <p className="text-[11px] uppercase tracking-[0.5em] font-bold">
              A primeira impressão já está acontecendo.
           </p>
           <p className="text-sm italic font-display italic-accent">
              A pergunta é se ela está vendendo ou atrapalhando.
           </p>
        </div>
      </div>

      <div className="absolute bottom-[-20%] left-[-10%] w-[120%] h-[50%] opacity-30 blur-[120px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at center, #6D4DFF 0%, #315CFF 40%, transparent 80%)" }} />
    </section>
  );
};
