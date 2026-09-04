"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import BookingCalendar from "../homepage/contact/BookingCalendar";
import BookingForm from "../homepage/contact/BookingForm";
import { formatDateLabel } from "@/utils/booking-utils";

type Step = "calendar" | "form" | "success";

export default function ContactPage() {
  const [step, setStep] = useState<Step>("calendar");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeLabel, setTimeLabel] = useState<string>("");

  const handleConfirmSlot = (
    date: Date,
    _timeValue: string,
    label: string
  ) => {
    setSelectedDate(date);
    setTimeLabel(label);
    setStep("form");
  };

  const handleReset = () => {
    setStep("calendar");
    setSelectedDate(null);
    setTimeLabel("");
  };

  return (
    <section
      id="contact"
      className="bg-white px-5 py-20 sm:px-8 border-b"
    >
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        {/* Left: contact info */}
        <div className="rounded-2xl border border-neutral-200/20 bg-paper p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm font-medium text-burgundy">
            <span className="h-4 w-0.5 bg-burgundy" />
            <span>Get in Touch</span>
          </div>

          <h2 className="mt-4 text-2xl leading-snug text-neutral-900 sm:text-3xl">
            Book a Consultation
          </h2>

          <p className="mt-4 max-w-sm text-neutral-500">
            Pick a Saturday that works for you and tell us what you&apos;d like
            to discuss, we&apos;ll take it from there.
          </p>

          <ul className="mt-8 flex flex-col gap-4 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <Phone
                size={18}
                className="mt-0.5 shrink-0 text-burgundy"
              />
              <span>+254 745 177 833</span>
            </li>

            <li className="flex items-start gap-3">
              <Mail
                size={18}
                className="mt-0.5 shrink-0 text-burgundy"
              />
              <span>levletconsultancyltd@gmail.com</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-burgundy"
              />
              {/* Placeholder — swap in the real office address */}
              <span>Nairobi, Kenya</span>
            </li>

            <li className="flex items-start gap-3">
              <Clock
                size={18}
                className="mt-0.5 shrink-0 text-burgundy"
              />
              <span>
                Consultations: Saturdays, 8:00 AM – 9:00 PM EAT
              </span>
            </li>
          </ul>
        </div>

        {/* Right: booking widget */}
        <div className="rounded-2xl border border-neutral-200/20 bg-paper p-6 sm:p-8">
          {step === "calendar" && (
            <BookingCalendar onConfirm={handleConfirmSlot} />
          )}

          {step === "form" && selectedDate && (
            <BookingForm
              selectedDate={selectedDate}
              timeLabel={timeLabel}
              onBack={() => setStep("calendar")}
              onSuccess={() => setStep("success")}
            />
          )}

          {step === "success" && selectedDate && (
            <div className="flex flex-col items-center py-6 text-center">
              <CheckCircle2 size={40} className="text-burgundy" />

              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                Booking Requested
              </h3>

              <p className="mt-2 max-w-xs text-sm text-neutral-500">
                We&apos;ve received your request for{" "}
                <span className="font-medium text-neutral-700">
                  {formatDateLabel(selectedDate)} · {timeLabel}
                </span>
                . We&apos;ll confirm by phone or email shortly.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 text-sm font-medium text-burgundy hover:text-burgundy-dark"
              >
                Book another session
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
