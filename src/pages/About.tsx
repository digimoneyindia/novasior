import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full bg-transparent min-h-screen">
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-[88rem] mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-serif leading-tight text-balance max-w-5xl mx-auto mb-10 text-brand-text font-bold"
          >
            WE ARE BUILDING<br/>A STANDARD.
          </motion.h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-md border border-brand-border/60 rounded-3xl p-8 md:p-14 shadow-sm font-sans"
          >
            <p className="text-2xl md:text-3xl font-serif italic text-black mb-10 leading-relaxed font-normal text-balance">
              NOVASIOR exists for people who refuse to accept an average version of themselves.
            </p>
            
            <p className="text-brand-text text-lg md:text-xl mb-8 leading-loose tracking-wide font-normal">
              The world is built to keep you comfortable. It is designed to lower your standards, compromise your ambitions, and distract you from the work that matters. We reject this entirely.
            </p>
            
            <p className="text-brand-text text-lg md:text-xl mb-8 leading-loose tracking-wide font-normal">
              NOVASIOR is not a motivational brand. Motivation is an emotional state that fades when the work gets difficult. We are an identity brand. We build the tools, frameworks, and visual environments that reinforce discipline and absolute execution.
            </p>
            
            <p className="text-brand-text text-lg md:text-xl mb-12 leading-loose tracking-wide font-normal">
              The long-term vision is to become a globally recognized premium mindset and lifestyle movement centered around discipline, ambition, excellence, wealth, and personal growth.
            </p>

            <h2 className="text-2xl md:text-4xl font-serif text-black uppercase tracking-widest text-center pt-8 border-t border-brand-border/60 font-bold">
              LIVE BEYOND AVERAGE.
            </h2>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


