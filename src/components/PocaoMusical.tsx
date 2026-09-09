import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { spotifyUrl as spotifyUrlPadrao } from "@/data/content";
import { toSpotifyEmbedUrl } from "@/lib/spotify";

export default function PocaoMusical() {
  const [urlDigitada, setUrlDigitada] = useState(spotifyUrlPadrao);
  const [urlAtiva, setUrlAtiva] = useState(spotifyUrlPadrao);

  const embedUrl = useMemo(() => toSpotifyEmbedUrl(urlAtiva), [urlAtiva]);
  const urlValida = embedUrl !== null;

  function tocarNovaUrl(e: React.FormEvent) {
    e.preventDefault();
    setUrlAtiva(urlDigitada);
  }

  return (
    <section className="relative overflow-hidden bg-[var(--color-vinho-escuro)] px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(90,169,223,0.16),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 lg:flex-row lg:items-start">
        {/* disco decorativo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex shrink-0 flex-col items-center"
        >
          <div
            className={`disco-girando ${urlValida ? "" : "disco-pausado"} relative h-40 w-40 rounded-full sm:h-48 sm:w-48`}
            style={{
              boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 0 6px var(--color-dourado)",
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}disco.png`}
              alt="Disco de vinil azul"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="font-selo mt-4 text-xs tracking-[0.3em] text-[var(--color-dourado)]">
            poção musical
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full"
        >
          <h2 className="font-display text-3xl text-[var(--color-dourado-claro)] sm:text-4xl">
            Essa playlist era sobre você. Ou melhor, ainda é, de certa forma.
          </h2>
          <p className="font-corpo mt-4 text-lg text-[var(--color-pergaminho)]">
          
          </p>

          <form
            onSubmit={tocarNovaUrl}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="url"
              value={urlDigitada}
              onChange={(e) => setUrlDigitada(e.target.value)}
              placeholder="https://open.spotify.com/playlist/3CEEyqk6fiVKiLfD7zpo0z?si=4df1d761b08b4171"
              className="font-corpo w-full rounded-sm border border-[var(--color-dourado)]/40 bg-[var(--color-noite)] px-4 py-3 text-[var(--color-pergaminho)] placeholder:text-[var(--color-pergaminho-escuro)]/50 focus:border-[var(--color-dourado)] focus:outline-none"
              aria-label="Link do Spotify"
            />
            <button
              type="submit"
              className="font-selo shrink-0 rounded-sm border border-[var(--color-dourado)] px-6 py-3 text-sm tracking-widest text-[var(--color-dourado-claro)] transition hover:bg-[var(--color-dourado)] hover:text-[var(--color-vinho-escuro)]"
            >
              conjurar
            </button>
          </form>

          <div className="mt-8 overflow-hidden rounded-lg border border-[var(--color-dourado)]/30 shadow-2xl">
            {urlValida ? (
              <iframe
                key={embedUrl}
                title="Player do Spotify"
                style={{ borderRadius: "8px" }}
                src={embedUrl ?? undefined}
                width="100%"
                height="352"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            ) : (
              <div className="font-corpo flex h-40 items-center justify-center bg-[var(--color-noite)] px-6 text-center text-[var(--color-pergaminho-escuro)]">

              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
