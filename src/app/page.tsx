import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: "✦",
    title: "Custom Designs",
    desc: "Every tattoo is crafted exclusively for you — no flash, no repeats.",
  },
  {
    icon: "✦",
    title: "Fine Line & Realism",
    desc: "Specialising in intricate fine-line work and hyper-realistic portraits.",
  },
  {
    icon: "✦",
    title: "Cover-Ups",
    desc: "Transform old ink into something you'll love again.",
  },
  {
    icon: "✦",
    title: "Safe & Sterile",
    desc: "Hospital-grade sterilisation and single-use equipment every time.",
  },
];

const recentWork = [
  { src: "/images/tattoo-3.jpg",  label: "Lion",              style: "Black & Grey Realism" },
  { src: "/images/IMG_2423.jpg",  label: "Dragon & Peonies",  style: "Colour" },
  { src: "/images/IMG_6902.jpg",  label: "Elephant in Flames",style: "Colour" },
  { src: "/images/GALLERY_A.jpg", label: "Memorial Floral",   style: "Black & Grey" },
  { src: "/images/IMG_6880.jpg",  label: "Butterflies",       style: "Watercolour" },
  { src: "/images/GALLERY_B.jpg", label: "Snake & Heart",     style: "Fine Line" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm font-medium mb-6">
            Professional Tattoo Studio
          </p>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-white mb-4 leading-none">
            MO&apos;S{" "}
            <span className="text-purple-500 glow-text">INK</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mt-6 leading-relaxed">
            Where art meets skin. Custom tattoos crafted with precision,
            passion, and purpose — built to last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/book"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-md transition-all duration-200 glow-purple text-base"
            >
              Book Your Session
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border border-purple-700 hover:border-purple-400 text-purple-300 hover:text-white font-semibold rounded-md transition-all duration-200 text-base"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs uppercase tracking-widest">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why Choose{" "}
            <span className="text-purple-400">MO&apos;s Ink</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-purple-600 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="gradient-border rounded-xl p-6 bg-[#0f0f18] hover:bg-[#12121e] transition-colors duration-200 group"
            >
              <span className="text-purple-500 text-2xl block mb-4 group-hover:text-purple-300 transition-colors">
                {f.icon}
              </span>
              <h3 className="text-white font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Work preview */}
      <section className="py-20 px-4 bg-[#07070d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Recent <span className="text-purple-400">Work</span>
            </h2>
            <div className="mt-3 w-16 h-0.5 bg-purple-600 mx-auto" />
            <p className="text-gray-500 mt-4 text-sm">
              A glimpse of what we&apos;ve been creating
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {recentWork.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] bg-[#111118] rounded-xl overflow-hidden group border border-purple-900/30 hover:border-purple-600/60 transition-colors duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                  <span className="text-white font-semibold">{item.label}</span>
                  <span className="text-purple-400 text-sm mt-1">{item.style}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs text-purple-400 bg-black/70 px-2 py-1 rounded">
                    {item.style}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 border border-purple-700 hover:border-purple-400 text-purple-300 hover:text-white font-medium rounded-md transition-all duration-200 text-sm"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Ready to bring your{" "}
            <span className="text-purple-400 glow-text">vision to life?</span>
          </h2>
          <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-xl mx-auto">
            Consultations are free. Let&apos;s talk about your design and make
            something you&apos;ll wear proudly forever.
          </p>
          <Link
            href="/book"
            className="inline-block mt-8 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-md transition-all duration-200 glow-purple text-base"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
