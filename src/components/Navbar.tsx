import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const navLinks = [
    { name: "Problema", href: "#problema" },
    { name: "Projetos", href: "#projetos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Método", href: "#metodo" },
    { name: "WhatsApp", href: "https://wa.me/5500000000000" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-3 rounded-full border border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="text-xl font-medium tracking-tighter text-white">
          VYREX<span className="text-brand-blue">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="https://wa.me/5500000000000"
          className="group flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-widest bg-brand-coldwhite text-brand-black rounded-full hover:bg-white transition-all overflow-hidden"
        >
          <span>Conversar</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.nav>
  );
};
