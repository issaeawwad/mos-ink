import Link from "next/link";

const services = [
  {
    name: "Custom Design",
    price: "From $150",
    duration: "1–4 hrs",
    desc: "Fully original artwork designed exclusively for you. Bring references, ideas, or just a vibe — we'll create something unique.",
    included: ["Free consultation", "Custom sketch", "Unlimited revisions", "Aftercare kit"],
  },
  {
    name: "Fine Line",
    price: "From $120",
    duration: "1–3 hrs",
    desc: "Delicate, precise linework for minimal designs, botanical art, script, and intricate details.",
    included: ["Custom design", "Single-needle option", "Touch-up included", "Aftercare kit"],
  },
  {
    name: "Realism / Portrait",
    price: "From $300",
    duration: "3–8 hrs",
    desc: "Hyper-realistic portraits and detailed scenes rendered in black & grey or full colour.",
    included: ["Reference review", "Detailed draft", "Multi-session planning", "Aftercare kit"],
  },
  {
    name: "Cover-Up",
    price: "From $200",
    duration: "2–5 hrs",
    desc: "Turn unwanted ink into something you love. We assess your existing tattoo and design a custom solution.",
    included: ["Free cover-up consultation", "Before/after preview", "Touch-up session", "Aftercare kit"],
  },
  {
    name: "Blackwork / Tribal",
    price: "From $180",
    duration: "2–6 hrs",
    desc: "Bold, graphic designs with strong black ink. Tribal patterns, geometric fills, and ornamental styles.",
    included: ["Custom layout", "Reference gathering", "Session planning", "Aftercare kit"],
  },
  {
    name: "Touch-Up",
    price: "From $60",
    duration: "30–60 min",
    desc: "Refresh faded lines, fill in colour, or sharpen details on existing tattoos (not done here).",
    included: ["Assessment", "Colour matching", "Ink top-up"],
  },
];

const faqs = [
  {
    q: "Does it hurt?",
    a: "Pain varies by placement and personal threshold. Ribs, spine, and feet tend to be most sensitive. We'll walk you through what to expect.",
  },
  {
    q: "How do I prepare?",
    a: "Eat a full meal beforehand, stay hydrated, wear comfortable clothing that exposes the area, and avoid alcohol for 24 hours prior.",
  },
  {
    q: "How much does a tattoo cost?",
    a: "Pricing depends on size, complexity, placement, and time. All quotes are given after your free consultation.",
  },
  {
    q: "How long does healing take?",
    a: "Surface healing takes 2–3 weeks. Full skin healing is 3–6 months. We provide a full aftercare guide with every session.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/15 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs font-medium mb-4">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-white">
            Services &amp; <span className="text-purple-500">Pricing</span>
          </h1>
          <div className="mt-3 w-16 h-0.5 bg-purple-600 mx-auto" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm sm:text-base">
            Transparent pricing, no surprises. All sessions begin with a free
            consultation so we can quote accurately for your specific piece.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="px-4 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="gradient-border rounded-xl p-6 bg-[#0f0f18] hover:bg-[#12121e] transition-colors duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-bold text-xl">{s.name}</h3>
                <div className="text-right">
                  <div className="text-purple-400 font-bold">{s.price}</div>
                  <div className="text-gray-500 text-xs">{s.duration}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                {s.desc}
              </p>
              <ul className="space-y-1.5 mb-6">
                {s.included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block text-center px-4 py-2.5 bg-purple-700/40 hover:bg-purple-600 border border-purple-700/60 hover:border-purple-500 text-purple-200 hover:text-white text-sm font-medium rounded-md transition-all duration-200"
              >
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 px-4 bg-[#07070d]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Frequently Asked <span className="text-purple-400">Questions</span>
            </h2>
            <div className="mt-3 w-16 h-0.5 bg-purple-600 mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="gradient-border rounded-xl p-6 bg-[#0f0f18]"
              >
                <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Not sure what you need?
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">
          Book a free consultation and we&apos;ll help figure out the best
          approach for your idea and budget.
        </p>
        <Link
          href="/book"
          className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-md transition-all duration-200 glow-purple"
        >
          Book a Free Consultation
        </Link>
      </div>
    </div>
  );
}
