import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  ChevronRight, 
  Check, 
  AlertCircle, 
  ArrowUpRight,
  Monitor,
  Layout,
  Database,
  BarChart3,
  Zap,
  Calculator,
  Laptop,
  Smartphone,
  Eye,
  TrendingDown,
  ShieldAlert,
  ArrowRightLeft,
  Search,
  PenTool,
  Code2,
  Instagram,
  Mail,
  MapPin,
  TrendingUp
} from 'lucide-react';

// --- Utility Components ---
const SectionLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`text-[10px] tracking-[0.2em] font-bold text-brand-blue uppercase opacity-90 mb-4 block ${className}`}>
    {children}
  </span>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href = '#whatsapp' 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost', 
  className?: string,
  href?: string
}) => {
  const base = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm whitespace-nowrap";
  const variants = {
    primary: "bg-white text-black hover:bg-opacity-90",
    secondary: "bg-brand-blue text-white hover:bg-opacity-90",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-white/70 hover:text-white"
  };
  
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

// --- Navbar ---
const Navbar = () => (
  <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
    <nav className="glass-panel px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center justify-between md:justify-center gap-4 md:gap-8 w-full md:w-auto max-w-full overflow-x-auto no-scrollbar">
      <div className="text-lg md:text-xl font-bold tracking-tighter shrink-0">VYREX<span className="text-brand-blue">.</span></div>
      <div className="hidden md:flex items-center gap-6">
        {['Problema', 'Projetos', 'Serviços', 'Método', 'WhatsApp'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest text-white/50 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      <Button variant="outline" className="py-2 px-4 h-9 text-xs">
        Conversar no WhatsApp <ArrowRight size={14} />
      </Button>
    </nav>
  </header>
);

// --- Hero ---
const Hero = () => (
  <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden min-h-screen flex items-center">
    <div className="glow-mesh top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full" />
    <div className="glow-mesh bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/20 rounded-full" />
    
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionLabel>DESIGN, CÓDIGO E ESTRATÉGIA DIGITAL</SectionLabel>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[1]">
          Seu digital está vendendo sua empresa ou <span className="italic font-display font-light text-brand-blue">fazendo ela parecer menor?</span>
        </h1>
        <p className="text-base md:text-xl text-white/60 mb-6 md:mb-8 max-w-xl leading-relaxed">
          Criamos landing pages, sistemas e experiências digitais para empresas que precisam parecer mais profissionais, mais confiáveis e mais preparadas antes mesmo do primeiro contato.
        </p>
        <p className="text-sm md:text-base text-white/40 mb-8 md:mb-10 max-w-md italic border-l border-white/10 pl-4 md:pl-6">
          Porque antes do cliente chamar, pedir orçamento ou comparar preço, ele já decidiu se sua empresa parece valer o que cobra.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
          <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Conversar no WhatsApp <ArrowRight size={16} /></Button>
          <Button variant="outline" className="w-full sm:w-auto px-8 py-4">Ver projetos</Button>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
          <span>Páginas</span> • <span>Sistemas</span> • <span>Automações</span> • <span>Produtos digitais</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-panel p-6 md:p-8 rounded-3xl relative border-white/10"
      >
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-1">Diagnóstico rápido</h3>
            <span className="text-[10px] uppercase tracking-widest text-white/40 italic">Percepção atual</span>
          </div>
          <div className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider border border-brand-blue/20">
            Live Analysis
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          {[
            { label: 'Site genérico', status: 'Red' },
            { label: 'Oferta parecendo barata', status: 'Red' },
            { label: 'Baixa confiança inicial', status: 'Orange' },
            { label: 'Processo manual demais', status: 'Yellow' },
            { label: 'Concorrente parecendo profissional', labelMobile: 'Concorrente superior', status: 'Red' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center group">
              <span className="text-xs md:text-sm text-white/70 group-hover:text-white transition-colors">{item.labelMobile || item.label}</span>
              <div className="flex items-center gap-3">
                <div className={`h-1.5 w-10 md:w-12 rounded-full bg-white/5 overflow-hidden`}>
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: item.status === 'Red' ? '90%' : item.status === 'Orange' ? '60%' : '40%' }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className={`h-full ${item.status === 'Red' ? 'bg-red-500' : item.status === 'Orange' ? 'bg-orange-500' : 'bg-yellow-500'}`}
                   />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <SectionLabel className="mb-2 text-brand-purple">Oportunidade detectada</SectionLabel>
          <p className="text-sm text-white/80 mb-6 font-display italic leading-relaxed">
            Criar um digital que prove o nível da empresa antes da conversa começar.
          </p>
          <div className="bg-white/5 p-4 rounded-xl text-xs text-white/60 leading-relaxed border border-white/5 italic">
            “Se a sua entrega é boa, sua presença digital precisa mostrar isso sem você precisar explicar.”
          </div>
        </div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-purple/30 to-transparent" />
      </motion.div>
    </div>
  </section>
);

// --- Judgment Section ---
const JudgmentSection = () => (
  <section id="problema" className="py-20 md:py-32 px-4 md:px-6 bg-brand-coldwhite text-brand-black overflow-hidden relative">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="text-brand-blue/60">/ O JULGAMENTO INVISÍVEL</SectionLabel>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
        <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-tight">
          Empresa boa com digital fraco vira <span className="italic text-brand-blue">empresa comum.</span>
        </h2>
        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-black/70 border-l border-black/5 pl-6 md:pl-8">
          <p>O cliente não separa sua empresa da forma como ela aparece na internet.</p>
          <p>Se o site parece antigo, genérico, confuso ou improvisado, ele não pensa apenas “o site está ruim”. Ele começa a duvidar do seu nível.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
            {["“Será que essa empresa é confiável?”", "“Será que vale esse preço?”", "“Será que existe uma opção melhor?”", "“Será que eles cuidam do serviço como cuidam da própria apresentação?”"].map((q, i) => (
              <div key={i} className="text-xs md:text-sm italic font-medium p-4 border-l-2 border-brand-blue/10 text-brand-blue/80 bg-brand-blue/5">
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Sua oferta perde valor', text: 'Uma apresentação fraca faz o cliente sentir que pode negociar mais, pagar menos ou procurar alguém “mais profissional”.' },
          { title: 'O concorrente começa na frente', text: 'Ele não precisa entregar melhor. Se ele parece mais preparado, já entra na venda com vantagem.' },
          { title: 'A confiança cai antes da conversa', text: 'Antes de falar com você, o cliente já julgou organização, cuidado, autoridade e nível.' },
          { title: 'O prejuízo é silencioso', text: 'Muitos clientes não avisam que desistiram. Eles só fecham a aba e chamam outro.' }
        ].map((card, i) => (
          <div key={i} className="group p-8 bg-white border border-black/5 hover:border-black/10 transition-all duration-500">
            <span className="text-6xl font-display font-light text-brand-blue/10 mb-6 block">0{i+1}</span>
            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{card.title}</h3>
            <p className="text-sm leading-relaxed text-black/50">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Cost Section ---
const CostSection = () => (
  <section className="py-20 md:py-32 px-4 md:px-6 bg-brand-black text-white relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <SectionLabel className="text-brand-purple mx-auto">/ CUSTO INVISÍVEL</SectionLabel>
      <h2 className="text-3xl md:text-6xl font-medium tracking-tighter mb-8 md:mb-12 leading-tight">
        Um digital fraco não parece caro. <span className="italic text-brand-purple font-light">Mas cobra todos os dias.</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 md:mb-24 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/30">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="h-12 md:h-16 w-px bg-white/10" />
          <span>Leads perdidos</span>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="h-12 md:h-16 w-px bg-white/10" />
          <span>Orçamentos frios</span>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="h-12 md:h-16 w-px bg-white/10" />
          <span>Desconfiança</span>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="h-12 md:h-16 w-px bg-white/10" />
          <span>Guerra de preços</span>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="h-12 md:h-16 w-px bg-white/10" />
          <span>Oportunidades</span>
        </div>
      </div>

      <p className="text-2xl md:text-6xl font-display font-light italic mb-8 md:mb-12 max-w-3xl mx-auto leading-tight tracking-tight px-4">
        “O cliente compara <span className="text-brand-blue">percepção</span> antes de comparar proposta.”
      </p>

      <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed italic border-t border-white/5 pt-6 md:pt-8 px-4">
        Se sua presença digital não transmite clareza, autoridade e valor, você começa a venda tentando recuperar uma confiança que já perdeu.
      </p>
    </div>
    
    <div className="glow-mesh top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue/5 rounded-full" />
  </section>
);

// --- Before After ---
const BeforeAfter = () => (
  <section className="py-20 md:py-32 px-4 md:px-6 bg-[#080910]">
    <div className="max-w-7xl mx-auto">
      <SectionLabel>/ VYREX UPGRADE</SectionLabel>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-end mb-12 md:mb-16">
        <h2 className="text-3xl md:text-6xl font-medium tracking-tighter leading-tight">
          A diferença entre parecer <span className="text-white/20">improvisado</span> e parecer <span className="text-brand-blue italic font-light">escolhido.</span>
        </h2>
        <p className="text-base md:text-lg text-white/40 border-l border-white/10 pl-6 md:pl-8 leading-relaxed italic">
          A empresa pode ser a mesma. A entrega pode ser a mesma. Mas a percepção muda no primeiro acesso.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-panel p-8 md:p-12 rounded-3xl opacity-30 border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="text-xs md:text-sm tracking-[0.3em] font-bold text-white/40 mb-8 md:mb-12 flex items-center gap-3">
               <TrendingDown size={16} className="text-red-500/50" /> ANTES
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {["Site genérico", "Página sem narrativa", "Visual antigo", "Oferta desvalorizada", "Cliente inseguro", "Conversa começa pelo preço", "Pouca clareza do próximo passo"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-white/40 text-[13px] md:text-sm">
                  <AlertCircle size={14} className="opacity-50" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-8 md:p-12 rounded-3xl border-brand-blue/20 relative flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(49,92,255,0.05)]">
          <div className="absolute top-0 right-0 h-40 w-40 bg-brand-blue/10 blur-[60px] rounded-full" />
          <div className="relative">
            <div className="absolute top-0 right-0 bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-wider border border-brand-blue/20 italic">Elite Standard</div>
            <h3 className="text-xs md:text-sm tracking-[0.3em] font-bold text-brand-blue mb-8 md:mb-12 flex items-center gap-3">
               <Zap size={16} className="fill-brand-blue" /> DEPOIS DA VYREX
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {["Landing page premium", "Mensagem clara", "Visual de autoridade", "Maior percepção de valor", "Cliente entende o diferencial", "Conversa começa com mais confiança", "CTA direto para WhatsApp"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-white font-medium text-[13px] md:text-sm">
                  <div className="h-5 w-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
                     <Check size={10} strokeWidth={4} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <p className="mt-10 md:mt-12 text-center text-white/30 text-xs md:text-sm font-medium tracking-wide">
        Não é só deixar bonito. É mudar o contexto em que sua empresa é julgada.
      </p>
    </div>
  </section>
);

// --- Services ---
const Services = () => (
  <section id="serviços" className="py-20 md:py-32 px-4 md:px-6 bg-brand-coldwhite text-brand-black">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="text-brand-blue/60">/ O QUE CRIAMOS</SectionLabel>
      <div className="mb-12 md:mb-24">
        <h2 className="text-3xl md:text-7xl font-medium tracking-tighter mb-6 md:mb-8 max-w-4xl leading-[1.1]">
          Do site que vende confiança ao sistema que tira sua operação <span className="text-brand-blue italic font-light">do improviso.</span>
        </h2>
        <p className="text-lg md:text-xl text-black/50 max-w-2xl leading-relaxed italic border-t border-black/5 pt-6 md:pt-8">
          Criamos ativos digitais para empresas que querem parecer melhores, vender com mais clareza e operar com mais controle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/5">
        {[
          { code: 'LP', title: 'Landing pages premium', text: 'Páginas criadas para apresentar sua oferta com clareza, desejo e percepção de valor.' },
          { code: 'SITE', title: 'Sites institucionais', text: 'Presença digital moderna para empresas que precisam parar de parecer antigas na internet.' },
          { code: 'SALE', title: 'Páginas de venda', text: 'Copy, design e estrutura para transformar atenção em intenção de compra.' },
          { code: 'SYS', title: 'Sistemas internos', text: 'Ferramentas para organizar clientes, pedidos, processos, dados, equipe e operação.' },
          { code: 'DASH', title: 'Dashboards', text: 'Visualização clara de números, metas, vendas, performance e indicadores.' },
          { code: 'AUTO', title: 'Automações', text: 'Fluxos inteligentes para reduzir tarefas repetitivas e tirar processos da mão.' },
          { code: 'CALC', title: 'Calculadoras', text: 'Simuladores, orçamentos automáticos e ferramentas interativas.' },
          { code: 'SaaS', title: 'Interfaces SaaS', text: 'Telas modernas e usáveis para MVPs, sistemas web e plataformas.' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 md:p-10 border border-black/5 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500">
            <div>
              <span className="inline-block bg-brand-blue/5 text-brand-blue text-[8px] md:text-[9px] font-bold px-2 py-1 rounded mb-6 md:mb-8 border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white group-hover:border-transparent transition-colors tracking-widest">{item.code}</span>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 tracking-tight">{item.title}</h3>
              <p className="text-xs md:text-sm text-black/50 group-hover:text-white/50 leading-relaxed italic">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-12 md:mt-16 text-center text-black/30 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em]">
        Think digital as an asset — <span className="text-brand-blue italic">Never as an ornament.</span>
      </p>
    </div>
  </section>
);

// --- Project Carousel Component ---
const ProjectCarousel = ({ images, initialInterval }: { images: string[], initialInterval: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalTime, setIntervalTime] = useState(initialInterval);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      // Alternate interval time to make it more "organic"
      setIntervalTime(prev => (prev === initialInterval ? initialInterval + 1500 : initialInterval));
    }, intervalTime);
    return () => clearInterval(timer);
  }, [currentIndex, intervalTime, images.length, initialInterval]);

  return (
    <div className="w-full h-full relative group/carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="absolute inset-0"
        >
          <img 
            src={images[currentIndex]} 
            className="w-full h-full object-cover object-top" 
            alt="Project Preview"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-700 ${i === currentIndex ? 'w-6 bg-brand-blue' : 'w-1.5 bg-white/20'}`} 
          />
        ))}
      </div>
      
      {/* Soft Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

// --- Portfolio ---
const Portfolio = () => {
  const projects = [
    {
      tag: 'Página de venda / Food Brand',
      name: 'Pack In — Landing Page para marmitas fitness',
      short: 'Landing page premium criada para aumentar desejo visual e levar o cliente direto para o pedido.',
      expanded: 'Criamos uma página de venda para posicionar a Pack In como uma solução prática para quem treina e quer manter a dieta sem depender de improviso.',
      focus: 'Venda direta, desejo visual, conversão via WhatsApp.',
      images: ['/input_file_6.png', '/input_file_11.png', '/input_file_12.png'],
      interval: 3000,
      color: 'from-orange-500/10 to-brand-blue/10',
      btn1: 'Ver projeto',
      btn2: 'Quero algo parecido'
    },
    {
      tag: 'SaaS / Sistema financeiro',
      name: 'KOII — Gestor financeiro para operações digitais',
      short: 'Sistema financeiro criado para organizar lucro diário e fluxo de caixa em uma interface ultra clara.',
      expanded: 'Desenvolvemos o KOII para centralizar lançamentos, gráficos e indicadores em uma experiência visual superior a planilhas tradicionais.',
      focus: 'Dashboard, controle financeiro, organização de operação.',
      images: ['/input_file_1.png', '/input_file_3.png', '/input_file_4.png'],
      interval: 2200,
      color: 'from-brand-blue/10 to-cyan-500/10',
      btn1: 'Ver sistema',
      btn2: 'Quero um sistema assim'
    },
    {
      tag: 'Agência de IA / Site institucional premium',
      name: 'Forge — Website para agência de IA',
      short: 'Site premium criado para transmitir autoridade e percepção tecnológica desde o primeiro acesso.',
      expanded: 'A página foi pensada para explicar a proposta com clareza, elevar a percepção da marca e gerar conversas comerciais qualificadas.',
      focus: 'Autoridade, posicionamento tecnológico, percepção premium.',
      images: ['/input_file_0.png', '/input_file_5.png', '/input_file_7.png'],
      interval: 3500,
      color: 'from-brand-purple/10 to-indigo-500/10',
      btn1: 'Ver projeto',
      btn2: 'Quero uma página premium'
    },
    {
      tag: 'Landing page / Saúde e estética',
      name: 'Clínica Odontológica — Conversão e Confiança',
      short: 'Landing page focada em transformar visitantes em pacientes com estrutura persuasiva e agendamento rápido.',
      expanded: 'Organizamos tratamentos, reforçamos autoridade local e reduzimos inseguranças para conduzir o visitante ao agendamento pelo WhatsApp.',
      focus: 'Captação de pacientes, autoridade local, agendamento direto.',
      images: ['/input_file_2.png', '/input_file_8.png', '/input_file_9.png'],
      interval: 2800,
      color: 'from-emerald-500/10 to-brand-blue/10',
      btn1: 'Ver landing page',
      btn2: 'Quero captar mais pacientes'
    }
  ];

  return (
    <section id="projetos" className="py-20 md:py-32 px-4 md:px-6 bg-brand-black text-white relative">
      <div className="max-w-7xl mx-auto">
        <SectionLabel className="text-brand-blue">/ PROJETOS EM EXECUÇÃO</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-24">
          <div>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tighter mb-6 md:mb-8 leading-[1.1]">
              Projetos que provam <span className="text-brand-blue italic font-light">capacidade</span>, não discurso.
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed italic border-l border-white/5 pl-6 md:pl-0 md:border-0 font-display">
              A VYREX existe para construir o tipo de digital que faz o cliente olhar e sentir: “essa empresa é séria”.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`aspect-video rounded-[1.5rem] md:rounded-[2.5rem] mb-8 bg-gradient-to-br ${project.color} border border-white/5 overflow-hidden relative flex items-center justify-center p-1 transition-all duration-700 group-hover:p-0 group-hover:shadow-[0_20px_80px_rgba(49,92,255,0.08)]`}>
                 <div className="w-full h-full glass-panel rounded-[1.4rem] md:rounded-[2.3rem] overflow-hidden group-hover:rounded-[1.5rem] md:group-hover:rounded-[2.5rem] transition-all">
                    <ProjectCarousel images={project.images} initialInterval={project.interval} />
                 </div>
              </div>
              
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-blue font-bold italic">{project.tag}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-medium tracking-tighter group-hover:text-brand-blue transition-colors leading-[1.1]">
                  {project.name}
                </h3>
                <p className="text-white/50 leading-relaxed italic text-sm md:text-base max-w-xl">
                  {project.short}
                </p>
                <div className="pt-4 space-y-4">
                  <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">
                    <span className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-brand-blue" /> {project.focus}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 md:pt-6 border-t border-white/5">
                    <a href="#whatsapp" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:text-brand-blue transition-colors group/btn">
                      {project.btn1} <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                    <a href="#whatsapp" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">
                      {project.btn2}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-40 pt-16 border-t border-white/5 text-center">
          <p className="text-white/20 italic font-display text-xs md:text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            “Não criamos apenas interfaces. Criamos o contexto de autoridade necessário para que sua proposta valha mais.”
          </p>
        </div>
      </div>
    </section>
  );
};


// --- Method ---
const Method = () => (
  <section id="método" className="py-20 md:py-40 px-4 md:px-6 bg-brand-coldwhite text-brand-black overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="text-brand-blue/60">/ MÉTODO</SectionLabel>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-24 items-start">
        <h2 className="text-3xl md:text-7xl font-medium tracking-tighter leading-[1.1]">
          Não começamos pelo layout. Começamos pelo <span className="text-brand-blue italic font-light">que precisa vender.</span>
        </h2>
        <div className="border-l border-black/5 pl-6 md:pl-8 italic font-display text-lg md:text-xl text-black/50 leading-relaxed">
          Bonito qualquer template tenta ser. Estratégico é quando cada seção sabe por que existe.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-black/5">
        {[
          { n: '01', title: 'Leitura do negócio', text: 'Entendemos sua oferta, público, margem, diferenciais e o que precisa ficar claro para o cliente.' },
          { n: '02', title: 'Diagnóstico da percepção', text: 'Analisamos como sua empresa aparece hoje e onde o digital pode estar reduzindo confiança.' },
          { n: '03', title: 'Estratégia e copy', text: 'Construímos a narrativa: dor, desejo, objeções, diferenciais, prova e chamada para ação.' },
          { n: '04', title: 'Direção visual', text: 'Criamos uma estética compatível com o nível que sua empresa quer transmitir.' },
          { n: '05', title: 'Desenvolvimento', text: 'Construímos com responsividade, performance, acabamento premium e estrutura clara.' },
          { n: '06', title: 'Refinamento', text: 'Ajustamos detalhes visuais, textos, hierarquia e CTAs antes de publicar.' },
        ].map((step, i) => (
          <div key={i} className="p-8 md:p-12 border border-black/5 bg-white flex flex-col justify-between group hover:bg-brand-blue hover:text-white transition-all duration-500">
            <div>
              <span className="text-4xl md:text-5xl font-display font-light text-black/5 mb-6 md:mb-8 block group-hover:text-white/10 transition-colors">{step.n}</span>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-tight">{step.title}</h3>
              <p className="text-xs md:text-sm italic opacity-60 leading-relaxed group-hover:opacity-80 font-medium">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-16 md:mt-24 text-center text-brand-blue font-display italic font-medium text-base md:text-lg">
        O objetivo não é só entregar uma página. <br className="hidden md:block" /> É entregar uma nova percepção sobre a sua empresa.
      </p>
    </div>
  </section>
);

// --- Who It Is For ---
const WhoItsFor = () => (
  <section className="py-20 md:py-32 px-4 md:px-6 bg-[#080911] text-white">
    <div className="max-w-7xl mx-auto">
      <SectionLabel>/ PARA QUEM É</SectionLabel>
      <div className="grid lg:grid-cols-3 gap-12 md:gap-24 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8 md:mb-10 leading-[1.1]">
            Para negócios que precisam ser levados a <span className="italic text-brand-blue font-light">sério</span> no primeiro clique.
          </h2>
          <p className="text-sm md:text-base text-white/40 leading-relaxed italic border-l border-white/5 pl-6 md:pl-8">
            Atendemos empresas que vendem serviço, produto, orçamento, atendimento, consultoria ou operação personalizada.
          </p>
        </div>
        <div className="lg:col-span-2 flex flex-wrap gap-2 md:gap-3 content-start">
          {[
            'Clínicas', 'Escritórios', 'Imobiliárias', 'Restaurantes', 'Marcas de alimento', 
            'Academias', 'Estéticas', 'Consultorias', 'Empresas B2B', 'Negócios locais', 
            'Infoprodutos', 'SaaS', 'Prestadores de serviço', 'Operações com planilhas', 'Empresas em lançamento'
          ].map((item) => (
            <span key={item} className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest bg-white/[0.02] hover:bg-brand-blue/10 hover:border-brand-blue transition-all cursor-default">
              {item}
            </span>
          ))}
          <div className="w-full mt-12 md:mt-16 glass-panel p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border-brand-blue/10 bg-gradient-to-r from-brand-blue/5 to-transparent">
            <p className="text-xl md:text-3xl italic font-display text-center leading-snug tracking-tight text-white/90 px-4">
              “Se o cliente precisa confiar antes de comprar, seu digital precisa trabalhar antes de você atender.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Diagnosis / WhatsApp ---
const Diagnosis = () => (
  <section id="whatsapp" className="py-20 md:py-40 px-4 md:px-6 bg-brand-black relative">
    <div className="max-w-7xl mx-auto">
      <div className="glass-panel p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border-brand-blue/20 bg-gradient-to-br from-brand-blue/[0.03] to-transparent relative shadow-[0_0_150px_rgba(49,92,255,0.03)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <div>
            <SectionLabel className="text-brand-blue">/ DIAGNÓSTICO</SectionLabel>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tighter mb-8 md:mb-10 leading-[1.05]">
               Quer saber onde seu digital está te fazendo <span className="italic text-brand-purple font-light">perder força?</span>
            </h2>
            <p className="text-base md:text-lg text-white/50 mb-10 md:mb-12 leading-relaxed italic max-w-lg">
              Mande seu site, Instagram ou ideia no WhatsApp. Nós analisamos rapidamente onde sua apresentação está fraca e o que poderia ser criado para aumentar percepção, clareza e conversão.
            </p>
            
            <div className="space-y-6 mb-10 md:mb-16 px-4 md:px-6 border-l border-white/5">
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/30 block mb-4 font-bold">Você pode mandar:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 md:gap-y-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80">
                {["Seu site atual", "Seu Instagram", "Uma ideia de página", "Uma operação manual", "Um processo manual", "Um produto digital", "Uma ferramenta nova"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-1 w-1 rounded-full bg-brand-blue" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <Button variant="secondary" className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 text-sm md:text-base shadow-[0_15px_60px_rgba(49,92,255,0.3)]">
              Chamar no WhatsApp <ArrowRight size={20} />
            </Button>
            <p className="mt-8 text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.3em] italic font-bold">
              No endless meetings. Pure digital strategy.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="glass-panel p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-white/5 space-y-8 md:space-y-10 bg-black/40 backdrop-blur-xl relative z-10">
              <div className="flex gap-3 md:gap-4 items-start">
                 <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                    <Smartphone size={20} className="text-white/20" />
                 </div>
                 <div className="space-y-6 w-full">
                    <div className="bg-white/5 p-4 md:p-5 rounded-2xl md:rounded-3xl rounded-tl-none text-[13px] md:text-sm italic text-white/60 max-w-[95%] sm:max-w-[90%] leading-relaxed border border-white/5">
                       “Meu site está antigo e não passa muita confiança.”
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-brand-blue/10 p-4 md:p-5 rounded-2xl md:rounded-3xl rounded-tr-none text-[13px] md:text-sm text-white self-end ml-auto max-w-[95%] sm:max-w-[90%] border border-brand-blue/20 leading-relaxed shadow-[0_10px_30px_rgba(49,92,255,0.1)] font-medium"
                    >
                       “A gente consegue te mostrar exatamente onde ele está perdendo percepção e como poderia ficar uma versão mais forte.”
                    </motion.div>
                 </div>
              </div>
            </div>
            
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Final CTA ---
const FinalCTA = () => (
  <section className="py-24 md:py-48 px-4 md:px-6 bg-brand-black overflow-hidden relative">
    <div className="max-w-5xl mx-auto text-center z-10 relative">
      <h2 className="text-4xl md:text-[8rem] font-medium tracking-tighter mb-8 md:mb-12 leading-[1] md:leading-[0.9]">
        Seu digital precisa <br /> <span className="italic font-display font-light text-brand-blue">provar o seu nível.</span>
      </h2>
      <p className="text-lg md:text-2xl text-white/50 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed italic px-4">
        Se sua empresa entrega bem, sua página, sistema ou ferramenta precisa deixar isso claro no primeiro contato.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4">
        <Button variant="primary" className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 text-sm md:text-base">Analisar meu digital <ArrowRight size={20}/></Button>
        <Button variant="outline" className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 text-sm md:text-base italic font-display">Ver projetos construídos</Button>
      </div>

      <div className="mt-20 md:mt-32 flex flex-col items-center gap-4">
        <p className="text-xl md:text-3xl italic font-display text-white/50">
          A primeira impressão já está acontecendo.
        </p>
        <div className="h-px w-20 bg-white/10" />
        <p className="text-[8px] md:text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold">
          Selling or Sabotaging?
        </p>
      </div>
    </div>
    
    <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-brand-blue/[0.07] via-transparent to-transparent pointer-events-none" />
  </section>
);

// --- Footer ---
const Footer = () => (
  <footer className="py-32 px-6 border-t border-white/5 bg-[#030408]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
        <div className="lg:col-span-1">
          <div className="text-3xl font-bold tracking-tighter mb-8">VYREX<span className="text-brand-blue">.</span></div>
          <p className="text-sm text-white/40 leading-relaxed mb-10 italic">
            Páginas, sistemas e experiências digitais para empresas que não querem parecer comuns.
          </p>
          <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.01]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 italic leading-relaxed">
              “Não criamos digital genérico. <br /> Criamos percepção, clareza e conversão.”
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold">Navegação</span>
          <nav className="flex flex-col gap-4 text-sm font-medium text-white/30">
            {['Problema', 'Serviços', 'Projetos', 'Método', 'WhatsApp'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors w-fit tracking-wide">{item}</a>
            ))}
          </nav>
        </div>

        <div className="space-y-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold">Contato</span>
          <div className="flex flex-col gap-4 text-sm font-medium text-white/30">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-3"><MessageSquare size={16} /> WhatsApp Direct</a>
            <a href="mailto:contato@vyrex.studio" className="hover:text-white transition-colors flex items-center gap-3"><Mail size={16} /> contato@vyrex.studio</a>
            <p className="flex items-center gap-3"><MapPin size={16} /> Águas Claras, Brasília</p>
          </div>
        </div>

        <div className="flex flex-col justify-end items-start md:items-end gap-6 text-[9px] uppercase tracking-[0.4em] font-bold text-white/10">
            <span className="hover:text-white/20 transition-colors cursor-default">© 2026 VYREX STUDIO. ALL RIGHTS RESERVED.</span>
            <span className="text-brand-blue/30 italic">MADE FOR IMPACT. PREMIUM ONLY.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="bg-brand-black text-white font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white antialiased">
      <Navbar />
      <Hero />
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-black to-transparent z-10" />
        <JudgmentSection />
        <CostSection />
        <BeforeAfter />
        <Services />
        <Portfolio />
        <Method />
        <WhoItsFor />
        <Diagnosis />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
