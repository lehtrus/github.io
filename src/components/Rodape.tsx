import { motion } from "framer-motion";
import Vela from "./Vela";
import PoeiraMagica from "./PoeiraMagica";
import { siteConfig } from "@/data/content";

export default function Rodape() {
  return (
    <footer className="ceu-estrelado relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <PoeiraMagica quantidade={22} />

      <div className="relative z-10 flex flex-col items-center">
        <Vela altura={80} />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display mt-8 text-2xl text-[var(--color-dourado-claro)] sm:text-3xl"
        >
          {siteConfig.assinatura}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-corpo mt-4 max-w-md text-base italic text-[var(--color-pergaminho-escuro)]"
        >
          feito com um pouco de magia para {siteConfig.nomeDestinataria}
        </motion.p>
      </div>
    </footer>
  );
}
