import { useMemo } from "react";

export default function PoeiraMagica({ quantidade = 18 }: { quantidade?: number }) {
  const particulas = useMemo(
    () =>
      Array.from({ length: quantidade }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        tamanho: Math.random() * 5 + 2,
        atraso: Math.random() * 3.6,
        duracao: 2.8 + Math.random() * 2.4,
        deriva: `${(Math.random() - 0.5) * 60}px`,
      })),
    [quantidade]
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particulas.map((p) => (
        <span
          key={p.id}
          className="particula-magica"
          style={
            {
              left: `${p.left}%`,
              bottom: "-10px",
              width: `${p.tamanho}px`,
              height: `${p.tamanho}px`,
              animationDelay: `${p.atraso}s`,
              animationDuration: `${p.duracao}s`,
              "--deriva": p.deriva,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
