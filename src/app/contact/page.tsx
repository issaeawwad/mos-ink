const contactDetails = [
  {
    icon: "📍",
    label: "Address",
    value: "123 Ink Street, Your City, ST 00000",
    sub: "Walk-ins welcome during studio hours",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "(555) 000-0000",
    sub: "Mon–Sat, 11am – 7pm",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@mosink.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: "📘",
    label: "Facebook",
    value: "facebook.com/Mos1nk",
    sub: "Follow us for updates & promos",
    href: "https://www.facebook.com/Mos1nk",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@mosink.tattoo",
    sub: "Follow for daily work updates",
  },
];

const hours = [
  { day: "Monday", time: "11am – 8pm" },
  { day: "Tuesday", time: "11am – 8pm" },
  { day: "Wednesday", time: "11am – 8pm" },
  { day: "Thursday", time: "11am – 8pm" },
  { day: "Friday", time: "11am – 8pm" },
  { day: "Saturday", time: "10am – 6pm" },
  { day: "Sunday", time: "By Appointment" },
];

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/15 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-white">
            Contact <span className="text-purple-500">Us</span>
          </h1>
          <div className="mt-3 w-16 h-0.5 bg-purple-600 mx-auto" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm sm:text-base">
            Questions? Ideas? Just want to chat about a potential piece? We&apos;d
            love to hear from you.
          </p>
        </div>
      </div>

      <div className="px-4 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info + hours */}
          <div className="space-y-8">
            {/* Contact details */}
            <div>
              <h2 className="text-white font-bold text-xl mb-6">
                Studio Info
              </h2>
              <div className="space-y-4">
                {contactDetails.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-start gap-4 p-4 gradient-border rounded-xl bg-[#0f0f18]"
                  >
                    <span className="text-2xl flex-shrink-0">{c.icon}</span>
                    <div>
                      <p className="text-purple-400 text-xs uppercase tracking-wider font-medium mb-0.5">
                        {c.label}
                      </p>
                      {"href" in c && c.href ? (
                        <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-purple-400 transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{c.value}</p>
                      )}
                      <p className="text-gray-500 text-xs mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-white font-bold text-xl mb-6">
                Studio Hours
              </h2>
              <div className="gradient-border rounded-xl bg-[#0f0f18] overflow-hidden">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between px-5 py-3 text-sm ${
                      i < hours.length - 1
                        ? "border-b border-purple-900/30"
                        : ""
                    }`}
                  >
                    <span className="text-gray-300">{h.day}</span>
                    <span
                      className={
                        h.time === "By Appointment"
                          ? "text-purple-400 font-medium"
                          : "text-white"
                      }
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            <h2 className="text-white font-bold text-xl mb-6">
              Send a Message
            </h2>
            <form className="gradient-border rounded-2xl p-8 bg-[#0f0f18] space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2" htmlFor="cName">
                    Name <span className="text-purple-500">*</span>
                  </label>
                  <input
                    id="cName"
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
                  required
                  rows={6}
                  placeholder="Tell us what's on your mind…"
                  className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-md transition-all duration-200 glow-purple"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-14">
          <div className="w-full h-64 rounded-2xl bg-[#0f0f18] border border-purple-900/40 flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.3) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="text-center relative z-10">
              <span className="text-4xl">📍</span>
              <p className="text-gray-400 mt-3 text-sm">
                Map coming soon — 123 Ink Street, Your City
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
