export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flexaGold" x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b8863f" />
          <stop offset="0.5" stopColor="#e8cd8a" />
          <stop offset="1" stopColor="#d4af5a" />
        </linearGradient>
      </defs>
      <path
        d="M6 34 18 22 24 27 40 9"
        stroke="url(#flexaGold)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 9h8v8" stroke="url(#flexaGold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6" y="36" width="4" height="6" rx="1" fill="url(#flexaGold)" />
      <rect x="14" y="32" width="4" height="10" rx="1" fill="url(#flexaGold)" />
      <rect x="22" y="34" width="4" height="8" rx="1" fill="url(#flexaGold)" />
      <rect x="30" y="30" width="4" height="12" rx="1" fill="url(#flexaGold)" />
      <rect x="38" y="26" width="4" height="16" rx="1" fill="url(#flexaGold)" />
    </svg>
  );
}
