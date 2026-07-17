import { describe, expect, it } from 'vitest';
import { getOpeningStatus } from './opening-hours';

const rome = (value: string) => new Date(`${value}+02:00`);

describe('opening-hours', () => {
  it('opens for the Sunday summer promo', () => {
    const status = getOpeningStatus(rome('2026-07-05T08:00:00'));
    expect(status.isOpen).toBe(true);
    expect(status.currentPeriod?.label).toBe('Promo domenicale');
  });

  it('keeps Monday through Saturday mornings closed', () => {
    const status = getOpeningStatus(rome('2026-08-03T10:00:00'));
    expect(status.isOpen).toBe(false);
    expect(status.nextOpening?.period.label).toBe('Sera');
  });

  it('opens every evening and reports the next opening', () => {
    expect(getOpeningStatus(rome('2026-08-04T19:00:00')).isOpen).toBe(true);
    const status = getOpeningStatus(rome('2026-08-04T12:00:00'));
    expect(status.nextOpening?.period.open).toBe('18:00');
  });

  it('ends the morning promo after August', () => {
    const status = getOpeningStatus(rome('2026-09-06T08:00:00'));
    expect(status.isOpen).toBe(false);
    expect(status.nextOpening?.period.label).toBe('Sera');
  });

  it('does not repeat the seasonal promo in future years', () => {
    const status = getOpeningStatus(rome('2027-07-11T08:00:00'));
    expect(status.isOpen).toBe(false);
    expect(status.nextOpening?.period.label).toBe('Sera');
  });

  it('treats closing times as closed', () => {
    expect(getOpeningStatus(rome('2026-08-09T11:00:00')).isOpen).toBe(false);
    expect(getOpeningStatus(rome('2026-08-09T23:30:00')).isOpen).toBe(false);
  });
});
