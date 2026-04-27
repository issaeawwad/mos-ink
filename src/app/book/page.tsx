export default function BookPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/15 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Let&apos;s Get Started
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-white">
            Book an <span className="text-purple-500">Appointment</span>
          </h1>
          <div className="mt-3 w-16 h-0.5 bg-purple-600 mx-auto" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm sm:text-base">
            Fill out the form below and we&apos;ll reach out within 24 hours to
            confirm your session and discuss your design.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 max-w-2xl mx-auto pb-24">
        <form className="gradient-border rounded-2xl p-8 bg-[#0f0f18] space-y-6">
          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2" htmlFor="firstName">
                First Name <span className="text-purple-500">*</span>
              </label>
              <input
                id="firstName"
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
              required
              className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white text-sm outline-none transition-colors"
            >
              <option value="" className="bg-[#0a0a0f]">Select a service…</option>
              <option value="custom" className="bg-[#0a0a0f]">Custom Design</option>
              <option value="fineline" className="bg-[#0a0a0f]">Fine Line</option>
              <option value="realism" className="bg-[#0a0a0f]">Realism / Portrait</option>
              <option value="coverup" className="bg-[#0a0a0f]">Cover-Up</option>
              <option value="blackwork" className="bg-[#0a0a0f]">Blackwork / Tribal</option>
              <option value="touchup" className="bg-[#0a0a0f]">Touch-Up</option>
              <option value="consultation" className="bg-[#0a0a0f]">Free Consultation</option>
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
                className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white text-sm outline-none transition-colors"
              >
                <option value="" className="bg-[#0a0a0f]">Select size…</option>
                <option value="tiny" className="bg-[#0a0a0f]">Tiny (&lt; 2 inches)</option>
                <option value="small" className="bg-[#0a0a0f]">Small (2–4 inches)</option>
                <option value="medium" className="bg-[#0a0a0f]">Medium (4–6 inches)</option>
                <option value="large" className="bg-[#0a0a0f]">Large (6+ inches)</option>
                <option value="sleeve" className="bg-[#0a0a0f]">Sleeve / Full piece</option>
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
              required
              rows={5}
              placeholder="Tell us about your design idea, style preferences, references, and anything else we should know…"
              className="w-full bg-[#0a0a0f] border border-purple-900/50 focus:border-purple-500 rounded-md px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors resize-none"
            />
          </div>

          {/* Reference upload note */}
          <p className="text-gray-500 text-xs">
            Have reference images? You can email them to{" "}
            <span className="text-purple-400">hello@mosink.com</span> after
            submitting your request.
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-md transition-all duration-200 glow-purple text-base"
          >
            Submit Booking Request
          </button>

          <p className="text-gray-600 text-xs text-center">
            We&apos;ll confirm your appointment via email within 24 hours. A deposit
            may be required to hold your date.
          </p>
        </form>
      </div>
    </div>
  );
}
