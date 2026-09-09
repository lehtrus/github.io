import { motion } from "framer-motion";
import { memorias } from "@/data/content";

/** leve rotação alternada para dar um ar de fotos coladas à mão */
const rotacoes = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-3", "-rotate-3"];

export default function GaleriaMemorias() {
  return (
    <section className="relative bg-[var(--color-noite)] px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(22,74,120,0.3),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-selo mb-2 text-sm tracking-[0.3em] text-[var(--color-dourado)]">
            baú de recordações
          </p>
          <h2 className="font-display text-3xl text-[var(--color-dourado-claro)] sm:text-4xl">
            Memórias que viraram feitiço
          </h2>
          <p className="font-corpo mx-auto mt-4 max-w-xl text-lg text-[var(--color-pergaminho)]">

            <code className="rounded bg-black/30 px-1.5 py-0.5 text-sm">
        
            </code>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {memorias.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ scale: 1.04, rotate: 0 }}
              className={`group ${rotacoes[i % rotacoes.length]} transition-transform`}
            >
              <div className="rounded-sm border-[10px] border-[var(--color-pergaminho)] bg-[var(--color-pergaminho)] shadow-xl">
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[var(--color-noite-2)]">
                  {item.src ? (
                    item.type === "video" ? (
                      <video
                        src={item.src.startsWith("/") ? item.src : `${import.meta.env.BASE_URL}${item.src}`}
                        controls
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.src.startsWith("/") ? item.src : `${import.meta.env.BASE_URL}${item.src}`}
                        alt={item.legenda}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    )
                  ) : (
                    <div className="flex flex-col items-center gap-3 px-4 text-center">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-[var(--color-dourado)] opacity-70"
                      >
                        <path
                          d="M4 6h2l1-2h10l1 2h2a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                        <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                      <span className="font-selo text-[11px] tracking-wider text-[var(--color-dourado)]/80">
                        {item.type === "video" ? "espaço para vídeo" : "espaço para foto"}
                      </span>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_25px_rgba(0,0,0,0.25)]" />
                </div>

                <figcaption className="px-1 pb-2 pt-4 text-center">
                  <p className="font-selo text-sm text-[var(--color-tinta)]">
                    {item.legenda}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
