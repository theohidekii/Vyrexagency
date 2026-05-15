import { motion } from "motion/react";

export const Services = () => {
  const services = [
    { label: "LP", title: "Landing pages premium", text: "Páginas pensadas para apresentar sua oferta com mais valor, clareza e confiança." },
    { label: "SYS", title: "Sites institucionais", text: "Estruturas modernas para empresas que precisam parar de parecer antigas na internet." },
    { label: "SLS", title: "Páginas de venda", text: "Copy, design e hierarquia para transformar atenção em intenção de compra." },
    { label: "INT", title: "Sistemas internos", text: "Ferramentas para organizar processos, dados, clientes, pedidos e operação." },
    { label: "DSH", title: "Dashboards e painéis", text: "Visualização clara de números, metas, vendas, performance e indicadores." },
    { label: "AUT", title: "Automações", text: "Menos tarefa repetida. Mais fluxo inteligente rodando sem depender de planilha manual." },
    { label: "CAL", title: "Calculadoras", text: "Simuladores, orçamentos automáticos e recursos interativos inteligentes." },
    { label: "SAS", title: "Interfaces para SaaS", text: "Telas modernas, organizadas e usáveis para produtos digitais e sistemas web." }
  ];

  return (
    <section id="servicos" className="relative py-32 px-6 bg-brand-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-6 max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold">O QUE CRIAMOS</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
            Do site que vende <span className="italic-accent">confiança</span> ao sistema que organiza sua operação.
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl">
            Criamos ativos digitais sob medida para empresas que querem parecer mais profissionais, vender melhor e operar com mais clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-blue/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-white/40 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-colors">
                  {service.label}
                </span>
                <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-brand-blue transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-3 group-hover:translate-x-1 transition-transform">{service.title}</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
