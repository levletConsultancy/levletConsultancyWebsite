"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  TIME_SLOTS,
  getMonthGrid,
  formatMonthLabel,
  isSaturday,
  isPastDate,
  isSameDate,
} from "@/utils/booking-utils";

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

interface BookingCalendarProps {
  onConfirm: (date: Date, timeSlot: string, timeLabel: string) => void;
}

export default function BookingCalendar({ onConfirm }: BookingCalendarProps) {
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const grid = getMonthGrid(visibleMonth);

  const goToPrevMonth = () =>
    setVisibleMonth(
      (m) => new Date(m.getFullYear(), m.getMonth() - 1, 1)
    );
  const goToNextMonth = () =>
    setVisibleMonth(
      (m) => new Date(m.getFullYear(), m.getMonth() + 1, 1)
    );

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null); // reset time when date changes
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedSlot) return;
    const slotLabel = TIME_SLOTS.find((s) => s.value === selectedSlot)?.label ?? "";
    onConfirm(selectedDate, selectedSlot, slotLabel);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-neutral-900">
        Pick a Saturday
      </h3>
      <p className="mt-1 text-sm text-neutral-500">
        Consultations run Saturdays only, 8:00 AM – 9:00 PM EAT.
      </p>

      {/* Month navigation */}
      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={goToPrevMonth}
          aria-label="Previous month"
          className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="text-sm font-medium text-neutral-900">
          {formatMonthLabel(visibleMonth)}
        </span>
        <button
          type="button"
          onClick={goToNextMonth}
          aria-label="Next month"
          className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Weekday header */}
      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-medium text-neutral-400">
        {WEEKDAY_LABELS.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      {/* Day grid */}
      <div className="mt-1 grid grid-cols-7 gap-1">
        {grid.map((date, i) => {
          if (!date) return <div key={i} />;

          const bookable = isSaturday(date) && !isPastDate(date);
          const isSelected = selectedDate && isSameDate(date, selectedDate);

          return (
            <button
              key={i}
              type="button"
              disabled={!bookable}
              onClick={() => bookable && handleSelectDate(date)}
              aria-pressed={!!isSelected}
              className={`aspect-square rounded-md text-sm transition-colors duration-150 ${
                isSelected
                  ? "bg-burgundy font-medium text-white"
                  : bookable
                  ? "text-neutral-800 hover:bg-burgundy/10"
                  : "cursor-not-allowed text-neutral-300"
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Time slots — only shown once a Saturday is picked */}
      {selectedDate && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-neutral-900">
            Available times
          </h4>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot.value}
                type="button"
                onClick={() => setSelectedSlot(slot.value)}
                aria-pressed={selectedSlot === slot.value}
                className={`rounded-md border px-2 py-2 text-xs font-medium transition-colors duration-150 ${
                  selectedSlot === slot.value
                    ? "border-burgundy bg-burgundy text-white"
                    : "border-neutral-200 text-neutral-700 hover:border-burgundy/40"
                }`}
              >
                {slot.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        disabled={!selectedDate || !selectedSlot}
        onClick={handleConfirm}
        className="mt-6 w-full rounded-md bg-burgundy py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-burgundy-dark disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400 cursor-pointer"
      >
        Continue to Details
      </button>
    </div>
  );
}