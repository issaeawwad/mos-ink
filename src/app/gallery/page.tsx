import Image from "next/image";

const galleryItems = [
  { src: "/images/tattoo-3.jpg",   style: "Black & Grey Realism", size: "Forearm",    label: "Lion" },
  { src: "/images/GALLERY_A.jpg",  style: "Black & Grey",         size: "Forearm",    label: "Memorial Floral" },
  { src: "/images/GALLERY_B.jpg",  style: "Fine Line",            size: "Thigh",      label: "Snake & Heart" },
  { src: "/images/IMG_2423.jpg",   style: "Colour",               size: "Upper Arm",  label: "Dragon & Peonies" },
  { src: "/images/IMG_6902.jpg",   style: "Colour",               size: "Upper Arm",  label: "Elephant in Flames" },
  { src: "/images/IMG_6880.jpg",   style: "Watercolour",          size: "Forearm",    label: "Butterflies" },
  { src: "/images/IMG_6447.jpg",   style: "Fine Line",            size: "Forearm",    label: "Moon Phases" },
  { src: "/images/IMG_6458.jpg",   style: "Realism",              size: "Forearm",    label: "Raccoon" },
  { src: "/images/IMG_2629.jpg",   style: "Fine Line",            size: "Upper Arm",  label: "Rose & Blossoms" },
  { src: "/images/IMG_2779.jpg",   style: "Black & Grey",         size: "Upper Arm",  label: "Sea Turtle" },
  { src: "/images/IMG_2945.jpg",   style: "Blackwork",            size: "Forearm",    label: "Geometric Floral" },
  { src: "/images/IMG_1671.jpg",   style: "Fine Line",            size: "Upper Arm",  label: "Floral Geometric" },
  { src: "/images/tattoo-1.jpg",   style: "Flash Art",            size: "Design Sheets", label: "Flash Designs" },
  { src: "/images/tattoo-2.jpg",   style: "Flash Art",            size: "Design Sheets", label: "Flash Collection" },
];

const filters = ["All", "Black & Grey", "Fine Line", "Colour", "Realism", "Watercolour", "Blackwork", "Flash Art"];

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
            Every tattoo tells a story. Browse our collection of custom work
            spanning styles from delicate fine-line to bold colour pieces.
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="px-4 max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                f === "All"
                  ? "bg-purple-700 border-purple-600 text-white"
                  : "border-purple-900/50 text-gray-400 hover:border-purple-600 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
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
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <span className="text-white font-bold text-lg text-center px-4">{item.label}</span>
                <span className="text-purple-400 text-sm">{item.style}</span>
                <span className="text-gray-400 text-xs">{item.size}</span>
              </div>

              {/* Label bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-sm font-semibold">{item.label}</span>
                <span className="text-gray-400 text-xs ml-2">· {item.style}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
