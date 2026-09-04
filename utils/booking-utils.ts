

export type TimeSlot = {
  value: string; // "8:00", "13:00", etc — 24h, used as a stable key
  label: string; // "8:00 AM EAT"
};

function formatHour(hour24: number): string {
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:00 ${period} EAT`;
}

export const TIME_SLOTS: TimeSlot[] = Array.from({ length: 13 }, (_, i) => {
  const hour = 8 + i; // 8am .. 8pm start times
  return { value: `${hour}:00`, label: formatHour(hour) };
});

export function isSaturday(date: Date): boolean {
  return date.getDay() === 6;
}

export function isPastDate(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const compare = new Date(date);
  compare.setHours(0, 0, 0, 0);
  return compare < today;
}

export function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function getMonthGrid(month: Date): (Date | null)[] {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingBlanks = firstDay.getDay(); // 0 (Sun) .. 6 (Sat)

  const grid: (Date | null)[] = Array.from(
    { length: leadingBlanks },
    () => null
  );
  for (let day = 1; day <= daysInMonth; day++) {
    grid.push(new Date(year, monthIndex, day));
  }
  return grid;
}

export function formatMonthLabel(month: Date): string {
  return month.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function formatDateLabel(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}