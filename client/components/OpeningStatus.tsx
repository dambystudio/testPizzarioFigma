import { useEffect, useState } from 'react';
import { getOpeningStatus, OPENING_HOURS } from '../lib/opening-hours';

const formatNextOpening = (date: Date) => new Intl.DateTimeFormat('it-IT', {
  timeZone: OPENING_HOURS.timeZone,
  weekday: 'long', hour: '2-digit', minute: '2-digit',
}).format(date);

export function OpeningStatus() {
  const [now, setNow] = useState(() => new Date());
  const [expanded, setExpanded] = useState(false);
  const status = getOpeningStatus(now);

  useEffect(() => {
    let interval: number;
    const startInterval = window.setTimeout(() => {
      setNow(new Date());
      interval = window.setInterval(() => setNow(new Date()), 60_000);
    }, 60_000 - (Date.now() % 60_000));
    const refresh = () => setNow(new Date());
    document.addEventListener('visibilitychange', refresh);
    return () => {
      window.clearTimeout(startInterval);
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 font-montserrat sm:bottom-6 sm:left-6" aria-live="polite">
      {expanded && (
        <div id="opening-status-details" className="absolute bottom-full left-0 mb-2 w-[min(20rem,calc(100vw-2rem))] space-y-1 rounded-2xl border border-pizzario-green/15 bg-pizzario-beige p-4 text-xs text-pizzario-brown shadow-xl">
          <p><strong>Lunedì–sabato mattina:</strong> chiuso</p>
          <p><strong>Domenica mattina:</strong> 07:30–11:00 (promo, fino al 31 agosto)</p>
          <p><strong>Tutte le sere:</strong> 18:00–23:30</p>
          {!status.isOpen && status.nextOpening && <p className="pt-1"><strong>Prossima apertura:</strong> {formatNextOpening(status.nextOpening.date)}</p>}
          <p className="pt-1 text-[11px] italic">Orari in tempo reale · fuso {OPENING_HOURS.timeZone}</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        aria-controls="opening-status-details"
        aria-label={`${status.isOpen ? 'Aperto ora' : 'Chiuso ora'}. ${expanded ? 'Nascondi' : 'Mostra'} gli orari`}
        className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pizzario-green ${status.isOpen ? 'bg-pizzario-green text-white' : 'bg-pizzario-beige text-pizzario-red ring-1 ring-pizzario-red/15'}`}
      >
        <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
        {status.isOpen ? 'Aperto ora' : 'Chiuso ora'}
        <span className="text-[10px] opacity-70" aria-hidden="true">{expanded ? '↓' : '↑'}</span>
      </button>
    </div>
  );
}
