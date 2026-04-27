import ContactForm from "@/components/ContactForm";

const contactDetails = [
  {
    icon: "📍",
    label: "Address",
    value: "529 E Center St, Ithaca, MI 48847",
    sub: "Walk-ins welcome Mon–Fri 12–5pm",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "(989) 330-8991",
    sub: "Call or text anytime",
  },
  {
    icon: "📘",
    label: "Facebook",
    value: "Mo's Ink",
    sub: "Follow us for updates & promos",
    href: "https://www.facebook.com/Mos1nk",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@mos.artnstuff",
    sub: "Follow for daily work updates",
    href: "https://www.instagram.com/mos.artnstuff",
  },
];

const hours = [
  { day: "Monday", time: "12pm – 5pm (appt after 5)" },
  { day: "Tuesday", time: "12pm – 5pm (appt after 5)" },
  { day: "Wednesday", time: "12pm – 5pm (appt after 5)" },
  { day: "Thursday", time: "12pm – 5pm (appt after 5)" },
  { day: "Friday", time: "12pm – 5pm (appt after 5)" },
  { day: "Saturday", time: "By Appointment" },
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
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mt-14">
          <div className="w-full rounded-2xl overflow-hidden border border-purple-900/40" style={{ height: "420px" }}>
            <iframe
              title="MO's Ink Location"
              src="https://maps.google.com/maps?q=529+E+Center+St,+Ithaca,+MI+48847&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(200deg) saturate(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-gray-500 text-xs text-center mt-3">
            529 E Center St, Ithaca, MI 48847
          </p>
        </div>
      </div>
    </div>
  );
}
