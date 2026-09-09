import { motion } from "framer-motion";
import CeuEstrelado from "./CeuEstrelado";
import Vela from "./Vela";
import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="ceu-estrelado relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <CeuEstrelado quantidade={90} />

      {/* velas decorativas nas laterais, escondidas em telas pequenas */}
      <div className="pointer-events-none absolute bottom-0 left-4 hidden sm:block md:left-10">
        <Vela altura={110} atraso={0.3} />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-4 hidden sm:block md:right-10">
        <Vela altura={140} atraso={1.1} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-selo text-sm tracking-[0.35em] text-[var(--color-dourado-claro)] sm:text-base"
      >
        um feitiço de aniversário para
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.04em" }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="font-display mt-4 text-4xl leading-tight text-[var(--color-dourado-claro)] sm:text-6xl md:text-7xl"
        style={{ textShadow: "0 0 30px rgba(232,205,138,0.35)" }}
      >
        {siteConfig.nomeDestinataria}
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[var(--color-dourado)] to-transparent sm:w-64"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="font-corpo mt-8 max-w-lg text-lg italic text-[var(--color-pergaminho)] sm:text-xl"
      >
        Uma pequena resposta a um story mudou o rumo de uma história inteira.
        Hoje essa história ganha uma nova página.
      </motion.p>

      <motion.a
        href="#carta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="font-selo mt-16 flex flex-col items-center gap-2 text-sm tracking-widest text-[var(--color-dourado)] transition hover:text-[var(--color-dourado-claro)]"
      >
        abrir a carta
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-bounce"
        >
          <path
            d="M12 4v14m0 0-6-6m6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </section>
  );
}
