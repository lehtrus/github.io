import { useMemo } from "react";

type Props = {
  quantidade?: number;
  className?: string;
};

/**
 * Fundo de céu com estrelas cintilantes, geradas por CSS.
 * Puramente decorativo — não usa nenhuma imagem externa.
 */
export default function CeuEstrelado({ quantidade = 60, className = "" }: Props) {
  const estrelas = useMemo(
    () =>
      Array.from({ length: quantidade }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        tamanho: Math.random() * 2.4 + 0.6,
        atraso: Math.random() * 4,
        duracao: 3 + Math.random() * 3,
      })),
    [quantidade]
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {estrelas.map((e) => (
        <span
          key={e.id}
          className="estrela"
          style={{
            top: `${e.top}%`,
            left: `${e.left}%`,
            width: `${e.tamanho}px`,
            height: `${e.tamanho}px`,
            animationDelay: `${e.atraso}s`,
            animationDuration: `${e.duracao}s`,
          }}
        />
      ))}
    </div>
  );
}
