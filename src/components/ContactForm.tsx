"use client";

import { useRef, useState, useTransition } from "react";
import { submitMessage } from "@/app/actions/submitMessage";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await submitMessage(formData);
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
        <h2 className="text-white font-bold text-xl">Message Sent!</h2>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2 border border-purple-700 hover:border-purple-400 text-purple-300 hover:text-white text-sm rounded-md transition-all"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="gradient-border rounded-2xl p-8 bg-[#0f0f18] space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2" htmlFor="cName">
            Name <span className="text-purple-500">*</span>
          </label>
          <input
            id="cName"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2" htmlFor="cEmail">
            Email <span className="text-purple-500">*</span>
          </label>
          <input
            id="cEmail"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2" htmlFor="cSubject">
          Subject
        </label>
        <input
          id="cSubject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2" htmlFor="cMessage">
          Message <span className="text-purple-500">*</span>
        </label>
        <textarea
          id="cMessage"
          name="message"
          required
          rows={6}
          placeholder="Tell us what's on your mind…"
          className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-md transition-all duration-200 glow-purple"
      >
        {isPending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
