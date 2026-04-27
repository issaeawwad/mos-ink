import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";


const recentWork = [
  { src: "/images/tattoo-3.jpg",  label: "Lion",               style: "Black & Grey Realism" },
  { src: "/images/IMG_2423.jpg",  label: "Dragon & Peonies",   style: "Color" },
  { src: "/images/IMG_6902.jpg",  label: "Elephant in Flames", style: "Color" },
  { src: "/images/GALLERY_A.jpg", label: "Memorial Floral",    style: "Black & Grey" },
  { src: "/images/IMG_6880.jpg",  label: "Butterflies",        style: "Watercolour" },
  { src: "/images/GALLERY_B.jpg", label: "Snake & Heart",      style: "Fine Line" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-screen animated slideshow */}
      <HeroSlideshow />


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
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
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
