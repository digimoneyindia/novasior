import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Philosophy() {
  const statements = [
    { no: "WE DO NOT CHASE MOTIVATION.", yes: "WE BUILD DISCIPLINE." },
    { no: "WE DO NOT SETTLE FOR AVERAGE.", yes: "WE BUILD AMBITION." },
    { no: "WE DO NOT FLEX WEALTH.", yes: "WE BUILD VALUE." },
    { no: "WE DO NOT WAIT TO BECOME BETTER.", yes: "WE EXECUTE." }
  ];

  return (
    <div className="w-full bg-transparent text-brand-text min-h-screen pb-24">
      <section className="flex flex-col items-center justify-center pt-36 md:pt-44 px-6 md:px-12 relative overflow-hidden">
        
        {/* Soft subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-[#C026FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-16"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-accent bg-white/80 backdrop-blur-sm border border-[#DCD1BF] px-6 py-2.5 rounded-full shadow-sm">
              THE MANIFESTO
            </span>
          </motion.div>

          <div className="space-y-20 md:space-y-28 mb-28">
            {statements.map((stmt, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <p className="text-xs md:text-sm font-semibold text-brand-text-muted mb-3 uppercase tracking-[0.22em] text-balance">
                  {stmt.no}
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-text uppercase tracking-tight leading-tight text-balance group-hover:text-brand-accent transition-colors duration-300">
                  {stmt.yes}
                </h2>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-sm border border-[#E0D5C3] rounded-3xl p-10 md:p-16 shadow-sm flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text uppercase tracking-tight mb-10 leading-tight max-w-2xl">
              BECOME SOMEONE <br className="hidden sm:inline" /> IMPOSSIBLE TO IGNORE.
            </h2>
            <Link 
              to="/shop"
              className="px-10 py-4 bg-brand-text text-brand-bg font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              ENTER THE STORE
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

