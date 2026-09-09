import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cartaParagrafos, siteConfig } from "@/data/content";

export default function CartaEnfeiticada() {
  const [aberta, setAberta] = useState(false);

  return (
    <section
      id="carta"
      className="relative flex min-h-screen flex-col items-center justify-center bg-[var(--color-noite-2)] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(22,74,120,0.4),transparent_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <AnimatePresence mode="wait">
          {!aberta ? (
            <motion.div
              key="envelope"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="font-selo mb-3 text-sm tracking-[0.3em] text-[var(--color-dourado)]">
                uma carta chegou por coruja
              </p>
              <h2 className="font-display mb-10 text-3xl text-[var(--color-dourado-claro)] sm:text-4xl">
                Para {siteConfig.nomeDestinataria}
              </h2>

              {/* envelope ilustrado */}
              <div className="relative w-full max-w-md">
                <svg
                  viewBox="0 0 400 260"
                  className="w-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.55)]"
                >
                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="240"
                    rx="6"
                    fill="var(--color-pergaminho)"
                  />
                  <path
                    d="M10 16 L200 150 L390 16"
                    fill="none"
                    stroke="var(--color-pergaminho-escuro)"
                    strokeWidth="3"
                  />
                  <path
                    d="M10 250 L150 140 M390 250 L250 140"
                    fill="none"
                    stroke="var(--color-pergaminho-escuro)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="240"
                    rx="6"
                    fill="none"
                    stroke="var(--color-dourado)"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                </svg>

                <button
                  type="button"
                  onClick={() => setAberta(true)}
                  aria-label="Quebrar o selo e abrir a carta"
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center sm:h-24 sm:w-24"
                >
                  <img
                    src="/selo.png"
                    alt="Brasão no selo de cera"
                    className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                  />
                </button>
              </div>

              <p className="font-corpo mt-8 text-base italic text-[var(--color-pergaminho-escuro)]">
                toque no selo para quebrá-lo
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="pergaminho"
              initial={{ opacity: 0, scaleY: 0.15 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top center" }}
              className="textura-pergaminho relative mx-auto max-h-[75vh] w-full overflow-y-auto rounded-sm px-6 py-10 text-left shadow-2xl sm:px-12 sm:py-14"
            >
              <p className="font-selo mb-8 text-center text-xs tracking-[0.35em] text-[var(--color-vinho)] sm:text-sm">
                ✦ uma carta enfeitiçada ✦
              </p>

              <div className="font-corpo space-y-5 text-lg leading-relaxed text-[var(--color-tinta)] sm:text-xl">
                {cartaParagrafos.map((paragrafo, i) =>
                  paragrafo === "" ? (
                    <div key={i} className="h-2" />
                  ) : (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: Math.min(i * 0.03, 0.9) }}
                    >
                      {paragrafo}
                    </motion.p>
                  )
                )}
              </div>

              <p className="font-display mt-10 text-right text-2xl text-[var(--color-vinho)] sm:text-3xl">
                {siteConfig.assinatura}
              </p>

              <button
                type="button"
                onClick={() => setAberta(false)}
                className="font-selo mx-auto mt-10 block text-sm tracking-widest text-[var(--color-vinho)] underline decoration-dotted underline-offset-4 hover:text-[var(--color-vinho-escuro)]"
              >
                fechar a carta
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
