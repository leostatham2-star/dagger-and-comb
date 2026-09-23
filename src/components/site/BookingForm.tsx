"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/brand";

const inputCls =
  "w-full border border-smoke bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-bone/35 outline-none transition-colors focus:border-brass";
const labelCls = "mb-1.5 block font-display text-xs tracking-[0.22em] text-brass uppercase";

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultService ?? "",
    date: "",
    notes: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Front desk simulation: in the real shop this pings the booking book.
    setTimeout(() => setStatus("done"), 900);
  };

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 border border-brass/40 bg-ink/60 p-8 text-center"
        role="status"
      >
        <CheckCircle2 className="h-12 w-12 text-brass" />
        <h3 className="font-display text-3xl tracking-wide text-bone">Request received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-bone/70">
          Thanks {form.name.split(" ")[0] || "friend"}, the request is in the book. The
          front desk will call {form.phone || "you"} within the hour during shop hours to
          lock in your time. If we miss you, we will try once more before close.
        </p>
        <button
          onClick={() => {
            setForm({ name: "", phone: "", service: "", date: "", notes: "" });
            setStatus("idle");
          }}
          className="mt-2 border border-brass px-6 py-2.5 font-display text-sm tracking-[0.2em] text-brass uppercase transition-colors hover:bg-brass hover:text-ink"
        >
          Book another chair
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-name" className={labelCls}>
            Your name
          </label>
          <input
            id="bf-name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="First and last"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="bf-phone" className={labelCls}>
            Phone
          </label>
          <input
            id="bf-phone"
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(312) 555 0000"
            className={inputCls}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-service" className={labelCls}>
            What are we doing
          </label>
          <select
            id="bf-service"
            required
            value={form.service}
            onChange={update("service")}
            className={`${inputCls} appearance-none`}
          >
            <option value="" disabled>
              Pick a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title} className="bg-ink">
                {s.title} · {s.price}
              </option>
            ))}
            <option value="First haircut of my life" className="bg-ink">
              Something else
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="bf-date" className={labelCls}>
            Preferred day
          </label>
          <input
            id="bf-date"
            required
            type="date"
            value={form.date}
            onChange={update("date")}
            className={`${inputCls} [color-scheme:dark]`}
          />
        </div>
      </div>
      <div>
        <label htmlFor="bf-notes" className={labelCls}>
          Notes for the chair
        </label>
        <textarea
          id="bf-notes"
          rows={4}
          value={form.notes}
          onChange={update("notes")}
          placeholder="Reference photos welcome in person. Tell us the important stuff here."
          className={`${inputCls} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 border border-brass bg-brass py-4 font-display text-lg tracking-[0.2em] text-ink uppercase transition-colors hover:bg-brass-soft disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending to the desk
          </>
        ) : (
          "Request my appointment"
        )}
      </button>
      <p className="text-center text-xs text-bone/40">
        Or call the desk directly at {BRAND.phone}. We answer until close.
      </p>
    </form>
  );
}
