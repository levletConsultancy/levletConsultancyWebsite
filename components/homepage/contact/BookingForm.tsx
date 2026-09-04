"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { formatDateLabel } from "@/utils/booking-utils";

interface BookingFormProps {
  selectedDate: Date;
  timeLabel: string;
  onBack: () => void;
  onSuccess: () => void;
}

export default function BookingForm({
  selectedDate,
  timeLabel,
  onBack,
  onSuccess,
}: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const updateField =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: wire this up to a real backend — e.g. an API route that emails
    // levletconsultancyltd@gmail.com, or a booking/calendar API. This is a
    // placeholder so the flow is complete and demonstrable end-to-end.
    await new Promise((resolve) => setTimeout(resolve, 700));

    setIsSubmitting(false);
    onSuccess();
  };

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-burgundy"
      >
        <ArrowLeft size={15} />
        Change date/time
      </button>

      <h3 className="mt-4 text-lg font-semibold text-neutral-900">
        Your Details
      </h3>
      <p className="mt-1 text-sm text-burgundy">
        {formatDateLabel(selectedDate)} · {timeLabel}
      </p>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm text-neutral-700">
            Name
            <input
              type="text"
              required
              placeholder="John Doe"
              value={form.name}
              onChange={updateField("name")}
              className="rounded-md border placeholder:text-xs placeholder:text-neutral-400 border-neutral-200 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-burgundy"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-neutral-700">
            Email
            <input
              type="email"
              required
              placeholder="info@email.com"
              value={form.email}
              onChange={updateField("email")}
              className="rounded-md border placeholder:text-xs placeholder:text-neutral-400 border-neutral-200 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-burgundy"
            />
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-sm text-neutral-700">
          Phone <span className="text-neutral-400">(optional)</span>
          <input
            type="tel"
            value={form.phone}
            placeholder="+254 700 000 00"
            onChange={updateField("phone")}
            className="rounded-md border placeholder:text-xs placeholder:text-neutral-400 border-neutral-200 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-burgundy"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm text-neutral-700">
          Subject
          <input
            type="text"
            required
            value={form.subject}
            onChange={updateField("subject")}
            className="rounded-md border placeholder:text-xs placeholder:text-neutral-400 border-neutral-200 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-burgundy"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm text-neutral-700">
          Message
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={updateField("message")}
            placeholder="Tell us about your project..."
            className="resize-none rounded-md border placeholder:text-xs placeholder:text-neutral-400 border-neutral-200 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-burgundy"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-md cursor-pointer bg-burgundy py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-burgundy-dark disabled:opacity-60"
        >
          {isSubmitting ? "Booking…" : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}