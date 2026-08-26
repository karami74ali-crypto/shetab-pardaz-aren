type IconProps = {
  className?: string;
};

const common = {
  width: 44,
  height: 44,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#04133e",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.3" />
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="12" cy="20" r="1.6" />
      <circle cx="4" cy="12" r="1.6" />
      <circle cx="20" cy="12" r="1.6" />
      <path d="M12 6.3v3.4M12 14.3v3.4M6.3 12h3.4M14.3 12h3.4" />
    </svg>
  );
}

export function TelecomIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <line x1="12" y1="21" x2="12" y2="6" />
      <circle cx="12" cy="4.3" r="1.3" fill="currentColor" stroke="none" />
      <path d="M9 21h6" />
      <path d="M9.8 21 12 15.5 14.2 21" />
      <path d="M14.6 10.3a3.4 3.4 0 010 5.4" strokeLinecap="round" />
      <path d="M16.6 8.2a6.4 6.4 0 010 9.6" strokeLinecap="round" />
      <path d="M9.4 10.3a3.4 3.4 0 000 5.4" strokeLinecap="round" />
      <path d="M7.4 8.2a6.4 6.4 0 000 9.6" strokeLinecap="round" />
    </svg>
  );
}

export function SoftwareIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 8.5h18" />
      <circle cx="6.3" cy="6.5" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="8.6" cy="6.5" r="0.55" fill="currentColor" stroke="none" />
      <path d="m9.5 12.5-2.2 2.2 2.2 2.2M14.5 12.5l2.2 2.2-2.2 2.2" />
    </svg>
  );
}

export function HardwareIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.4" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
    </svg>
  );
}

export function AiIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <path d="M9 4.2a3 3 0 00-3 3 2.6 2.6 0 00-1.2 4.8A2.8 2.8 0 006 16.4 3 3 0 009 19.2" />
      <path d="M15 4.2a3 3 0 013 3 2.6 2.6 0 011.2 4.8A2.8 2.8 0 0118 16.4 3 3 0 0115 19.2" />
      <path d="M9 4.2v15M15 4.2v15" />
      <circle cx="9" cy="9.2" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9.2" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="9" cy="14.2" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function EnergyIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function TradingIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <path d="M2.5 3h2l1 3.4M5.5 6.4h15.2l-1.7 8.6a1.6 1.6 0 01-1.6 1.3H8.4a1.6 1.6 0 01-1.6-1.3L5.5 6.4z" />
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17.5" cy="20" r="1.3" />
    </svg>
  );
}

export function SupportIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <path
        d="M17.7 6.3a3.6 3.6 0 01-4.7 4.7L6.2 17.8l-2-2 6.8-6.8a3.6 3.6 0 014.7-4.7l-2.4 2.4 1.4 1.4 2.4-2.4z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const serviceIconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  network: NetworkIcon,
  telecom: TelecomIcon,
  software: SoftwareIcon,
  hardware: HardwareIcon,
  ai: AiIcon,
  energy: EnergyIcon,
  trading: TradingIcon,
  support: SupportIcon,
};
