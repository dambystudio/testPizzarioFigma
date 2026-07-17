export type OpeningPeriod = {
  open: string;
  close: string;
  label: string;
};

export type OpeningStatus = {
  isOpen: boolean;
  currentPeriod?: OpeningPeriod;
  nextOpening?: { date: Date; period: OpeningPeriod };
  reason?: string;
};

const TIME_ZONE = 'Europe/Rome';
const EVENING: OpeningPeriod = { open: '18:00', close: '23:30', label: 'Sera' };
const PROMO_MORNING: OpeningPeriod = { open: '07:30', close: '11:00', label: 'Promo domenicale' };

const parts = (date: Date) => {
  const values = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(date).filter(({ type }) => type !== 'literal').map(({ type, value }) => [type, value]));
  return { year: Number(values.year), month: Number(values.month), day: Number(values.day), weekday: values.weekday, minutes: Number(values.hour) * 60 + Number(values.minute) };
};

const dateAtRome = (date: Date, dayOffset: number, time: string) => {
  const current = parts(date);
  const utcMidnight = new Date(Date.UTC(current.year, current.month - 1, current.day + dayOffset, 12));
  const [hour, minute] = time.split(':').map(Number);
  // Noon UTC is safely inside the target Rome date; resolve the offset through the formatter.
  const candidate = new Date(Date.UTC(utcMidnight.getUTCFullYear(), utcMidnight.getUTCMonth(), utcMidnight.getUTCDate(), hour, minute));
  const formatted = parts(candidate);
  const offsetMinutes = formatted.minutes - (hour * 60 + minute);
  return new Date(candidate.getTime() - offsetMinutes * 60_000);
};

const periodsFor = (date: Date, dayOffset = 0): OpeningPeriod[] => {
  const current = parts(date);
  const target = new Date(Date.UTC(current.year, current.month - 1, current.day + dayOffset, 12));
  const weekday = target.getUTCDay();
  const periods = [EVENING];
  // The approved 2026 summer promo runs from 5 July through 31 August, on Sundays only.
  const isPromoDate = target.getUTCFullYear() === 2026 && (
    (target.getUTCMonth() === 6 && target.getUTCDate() >= 5) ||
    target.getUTCMonth() === 7
  );
  if (weekday === 0 && isPromoDate) periods.unshift(PROMO_MORNING);
  return periods;
};

export const getOpeningStatus = (at: Date = new Date()): OpeningStatus => {
  const now = parts(at);
  const periods = periodsFor(at);
  const current = periods.find((period) => now.minutes >= toMinutes(period.open) && now.minutes < toMinutes(period.close));
  if (current) return { isOpen: true, currentPeriod: current };

  for (let offset = 0; offset <= 8; offset += 1) {
    for (const period of periodsFor(at, offset)) {
      const opening = dateAtRome(at, offset, period.open);
      if (opening > at) return { isOpen: false, nextOpening: { date: opening, period }, reason: 'Chiuso in questo momento' };
    }
  }
  return { isOpen: false, reason: 'Chiuso in questo momento' };
};

const toMinutes = (time: string) => {
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + minute;
};

export const OPENING_HOURS = {
  weekdayMorning: 'Chiuso',
  sundayPromo: '07:30–11:00',
  evening: '18:00–23:30',
  timeZone: TIME_ZONE,
};
