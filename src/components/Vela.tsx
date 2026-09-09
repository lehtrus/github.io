type Props = {
  altura?: number;
  atraso?: number;
  className?: string;
};

/**
 * Uma velinha ilustrada em SVG puro, com chama tremeluzente animada
 * via CSS (.chama, ver index.css). Sem dependência de imagens.
 */
export default function Vela({ altura = 90, atraso = 0, className = "" }: Props) {
  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ width: altura * 0.4 }}
    >
      <svg
        width={altura * 0.4}
        height={altura}
        viewBox="0 0 40 90"
        className="drop-shadow-[0_0_10px_rgba(232,205,138,0.55)]"
      >
        {/* pingo de cera */}
        <path
          d="M20 26 C 12 40, 10 55, 10 68 C 10 80, 30 80, 30 68 C 30 55, 28 40, 20 26 Z"
          fill="var(--color-pergaminho)"
          opacity="0.9"
        />
        <rect x="10" y="30" width="20" height="50" fill="var(--color-pergaminho)" />
        <rect x="10" y="30" width="20" height="6" fill="var(--color-pergaminho-escuro)" />
        {/* pavio */}
        <line x1="20" y1="30" x2="20" y2="22" stroke="#3a2a18" strokeWidth="1.5" />
        {/* chama */}
        <g
          className="chama"
          style={{ animationDelay: `${atraso}s` }}
          transform="translate(20,16)"
        >
          <path
            d="M0,-14 C 6,-6 6,2 0,8 C -6,2 -6,-6 0,-14 Z"
            fill="var(--color-dourado)"
          />
          <path
            d="M0,-8 C 3,-3 3,2 0,5 C -3,2 -3,-3 0,-8 Z"
            fill="var(--color-dourado-claro)"
          />
        </g>
      </svg>
    </div>
  );
}
