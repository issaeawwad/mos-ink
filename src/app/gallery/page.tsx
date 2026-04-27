import Image from "next/image";

const galleryItems = [
  { src: "/images/tattoo-3.jpg",  alt: "Lion tattoo" },
  { src: "/images/GALLERY_A.jpg", alt: "Memorial floral tattoo" },
  { src: "/images/GALLERY_B.jpg", alt: "Snake and heart tattoo" },
  { src: "/images/IMG_2423.jpg",  alt: "Dragon and peonies tattoo" },
  { src: "/images/IMG_6902.jpg",  alt: "Elephant in flames tattoo" },
  { src: "/images/IMG_6880.jpg",  alt: "Butterflies watercolor tattoo" },
  { src: "/images/IMG_6447.jpg",  alt: "Moon phases tattoo" },
  { src: "/images/IMG_6458.jpg",  alt: "Raccoon realism tattoo" },
  { src: "/images/IMG_2629.jpg",  alt: "Rose and blossoms tattoo" },
  { src: "/images/IMG_2779.jpg",  alt: "Sea turtle tattoo" },
  { src: "/images/IMG_2945.jpg",  alt: "Geometric floral tattoo" },
  { src: "/images/IMG_1671.jpg",  alt: "Floral geometric tattoo" },
  { src: "/images/tattoo-1.jpg",  alt: "Flash design sheets" },
  { src: "/images/tattoo-2.jpg",  alt: "Flash collection" },
];

export default function GalleryPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/15 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs font-medium mb-4">
            Our Portfolio
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-white">
            The <span className="text-purple-500">Gallery</span>
          </h1>
          <div className="mt-3 w-16 h-0.5 bg-purple-600 mx-auto" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm sm:text-base">
            Every tattoo tells a story. Browse our collection of custom work.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-purple-900/30 hover:border-purple-500/60 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] bg-[#111118] relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
