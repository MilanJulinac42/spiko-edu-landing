import { cn } from "@/lib/utils";

const wrap = "block overflow-hidden rounded-md ring-1 ring-ink/10 shadow-sm";

export function FlagGB({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={cn(wrap, className)}
      role="img"
      aria-label="Zastava Ujedinjenog Kraljevstva"
    >
      <clipPath id="gb-clip">
        <rect width="60" height="40" />
      </clipPath>
      <g clipPath="url(#gb-clip)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
        <path
          d="M0 0l60 40"
          stroke="#C8102E"
          strokeWidth="4"
          transform="translate(0,2)"
        />
        <path
          d="M60 0L0 40"
          stroke="#C8102E"
          strokeWidth="4"
          transform="translate(0,-2)"
        />
        <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="12" />
        <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7" />
      </g>
    </svg>
  );
}

export function FlagUS({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={cn(wrap, className)}
      role="img"
      aria-label="Zastava Sjedinjenih Američkih Država"
    >
      <rect width="60" height="40" fill="#fff" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect
          key={i}
          y={(i * 40) / 13}
          width="60"
          height={40 / 13}
          fill="#B22234"
        />
      ))}
      <rect width="26" height={(40 / 13) * 7} fill="#3C3B6E" />
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={2.5 + c * 4.2}
            cy={2.5 + r * 4}
            r="0.9"
            fill="#fff"
          />
        ))
      )}
    </svg>
  );
}

export function FlagDE({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={cn(wrap, className)}
      role="img"
      aria-label="Zastava Nemačke"
    >
      <rect width="60" height="40" fill="#FFCE00" />
      <rect width="60" height="26.67" fill="#DD0000" />
      <rect width="60" height="13.33" fill="#000" />
    </svg>
  );
}
