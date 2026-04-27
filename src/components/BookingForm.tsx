"use client";

import { useRef, useState, useTransition } from "react";
import { submitAppointment } from "@/app/actions/submitAppointment";

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await submitAppointment(formData);
      if (result.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong.");
      }
    });
  }

  if (status === "success") {
    return (
      <div className="gradient-border rounded-2xl p-10 bg-[#0f0f18] text-center space-y-4">
        <div className="text-5xl">✓</div>
        <h2 className="text-white font-bold text-2xl">Request Sent!</h2>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          We&apos;ll be in touch within 24 hours to confirm your appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2 border border-purple-700 hover:border-purple-400 text-purple-300 hover:text-white text-sm rounded-md transition-all"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="gradient-border rounded-2xl p-8 bg-[#0f0f18] space-y-6"
    >
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2" htmlFor="firstName">
            First Name <span className="text-purple-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="John"
            className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2" htmlFor="lastName">
            Last Name <span className="text-purple-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Doe"
            className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2" htmlFor="email">
            Email <span className="text-purple-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm text-gray-400 mb-2" htmlFor="service">
          Service <span className="text-purple-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white text-sm outline-none transition-colors"
        >
          <option value="" className="bg-[#0a0a0f]">Select a service…</option>
          <option value="Custom Design" className="bg-[#0a0a0f]">Custom Design</option>
          <option value="Fine Line" className="bg-[#0a0a0f]">Fine Line</option>
          <option value="Realism / Portrait" className="bg-[#0a0a0f]">Realism / Portrait</option>
          <option value="Cover-Up" className="bg-[#0a0a0f]">Cover-Up</option>
          <option value="Blackwork / Tribal" className="bg-[#0a0a0f]">Blackwork / Tribal</option>
          <option value="Touch-Up" className="bg-[#0a0a0f]">Touch-Up</option>
          <option value="Free Consultation" className="bg-[#0a0a0f]">Free Consultation</option>
        </select>
      </div>

      {/* Placement + Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2" htmlFor="placement">
            Tattoo Placement
          </label>
          <input
            id="placement"
            name="placement"
            type="text"
            placeholder="e.g. inner forearm"
            className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2" htmlFor="size">
            Approximate Size
          </label>
          <select
            id="size"
            name="size"
            className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white text-sm outline-none transition-colors"
          >
            <option value="" className="bg-[#0a0a0f]">Select size…</option>
            <option value="Tiny (< 2 inches)" className="bg-[#0a0a0f]">Tiny (&lt; 2 inches)</option>
            <option value="Small (2–4 inches)" className="bg-[#0a0a0f]">Small (2–4 inches)</option>
            <option value="Medium (4–6 inches)" className="bg-[#0a0a0f]">Medium (4–6 inches)</option>
            <option value="Large (6+ inches)" className="bg-[#0a0a0f]">Large (6+ inches)</option>
            <option value="Sleeve / Full piece" className="bg-[#0a0a0f]">Sleeve / Full piece</option>
          </select>
        </div>
      </div>

      {/* Preferred Date */}
      <div>
        <label className="block text-sm text-gray-400 mb-2" htmlFor="date">
          Preferred Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white text-sm outline-none transition-colors [color-scheme:dark]"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm text-gray-400 mb-2" htmlFor="description">
          Describe Your Idea <span className="text-purple-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Tell us about your design idea, style preferences, references, and anything else we should know…"
          className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors resize-none"
        />
      </div>

      <p className="text-gray-500 text-xs">
        Have reference images? Email them to{" "}
        <span className="text-purple-400">hello@mosink.com</span> after submitting.
      </p>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-md transition-all duration-200 glow-purple text-base"
      >
        {isPending ? "Submitting…" : "Submit Booking Request"}
      </button>

      <p className="text-gray-600 text-xs text-center">
        We&apos;ll confirm your appointment within 24 hours. A deposit may be
        required to hold your date.
      </p>
    </form>
  );
}
