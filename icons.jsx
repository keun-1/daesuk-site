/* Inline SVG icon set — thin, technical, drafting-style */
const ICON_PATHS = {
  ArrowRight: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  ArrowUpRight: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  ArrowDown: <><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></>,
  ChevronRight: <path d="m9 18 6-6-6-6"/>,
  ChevronDown: <path d="m6 9 6 6 6-6"/>,
  ChevronLeft: <path d="m15 18-6-6 6-6"/>,
  Menu: <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>,
  X: <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
  Plus: <><path d="M5 12h14"/><path d="M12 5v14"/></>,
  Minus: <path d="M5 12h14"/>,
  MapPin: <><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
  Phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  Mail: <><rect width="20" height="16" x="2" y="4" rx="1"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
  Printer: <><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></>,
  Smartphone: <><rect width="14" height="20" x="5" y="2" rx="1"/><path d="M12 18h.01"/></>,
  Check: <path d="M20 6 9 17l-5-5"/>,
  Download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></>,
  Dot: <circle cx="12" cy="12" r="1.5" fill="currentColor"/>,
};

function Icon({ name, className = "w-5 h-5", strokeWidth = 1.5 }) {
  const path = ICON_PATHS[name];
  if (!path) return <span className={className} aria-hidden="true" />;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      {path}
    </svg>
  );
}

Object.assign(window, { Icon });
