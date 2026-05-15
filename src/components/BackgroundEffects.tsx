import { motion } from "motion/react";

export const OrganicGlowDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative w-full h-[300px] overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div 
          className="w-[140%] h-[200px] rotate-[-2deg] rounded-[100%] blur-[100px]"
          style={{
            background: "radial-gradient(ellipse at center, #315CFF 0%, #6D4DFF 30%, transparent 70%)",
            mixBlendMode: "screen"
          }}
        />
        <div 
          className="absolute w-[120%] h-[150px] rotate-[1deg] translate-x-10 rounded-[100%] blur-[80px] opacity-50"
          style={{
            background: "radial-gradient(ellipse at center, #EEF4FF 0%, #315CFF 40%, transparent 80%)",
            mixBlendMode: "overlay"
          }}
        />
      </motion.div>
    </div>
  );
};

export const HeroGlowBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #315CFF 0%, transparent 70%)" }}
      />
      <div 
        className="absolute top-[20%] right-[-5%] w-[40%] h-[50%] rounded-full opacity-15 blur-[100px]"
        style={{ background: "radial-gradient(circle, #6D4DFF 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] rounded-full opacity-10 blur-[150px]"
        style={{ background: "radial-gradient(circle, #315CFF 0%, transparent 70%)" }}
      />
    </div>
  );
};

export const SectionGlow = ({ color = "#315CFF" }: { color?: string }) => {
  return (
    <div 
      className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
    />
  );
};
