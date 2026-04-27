import Image from "next/image";

const galleryItems = [
  { src: "/images/tattoo-3.jpg", style: "Black & Grey Realism", size: "Forearm", id: 1 },
  { src: "/images/tattoo-1.jpg", style: "Flash Art", size: "Design Sheets", id: 2 },
  { src: "/images/tattoo-2.jpg", style: "Flash Collection", size: "Design Sheets", id: 3 },
  { src: null, style: "Geometric", size: "Full Sleeve", id: 4 },
  { src: null, style: "Fine Line", size: "Shoulder", id: 5 },
  { src: null, style: "Neo-Traditional", size: "Calf", id: 6 },
  { src: null, style: "Blackwork", size: "Chest", id: 7 },
  { src: null, style: "Watercolour", size: "Upper Arm", id: 8 },
  { src: null, style: "Japanese", size: "Full Sleeve", id: 9 },
  { src: null, style: "Dotwork", size: "Rib", id: 10 },
  { src: null, style: "Old School", size: "Forearm", id: 11 },
  { src: null, style: "Micro Realism", size: "Wrist", id: 12 },
];

const filters = ["All", "Realism", "Flash Art", "Geometric", "Fine Line", "Blackwork", "Watercolour"];

const gradients = [
  "from-purple-900/50 to-black",
  "from-violet-900/40 to-purple-950/60",
  "from-black to-purple-900/40",
  "from-purple-950/60 to-violet-800/20",
  "from-indigo-900/30 to-purple-900/50",
  "from-purple-800/30 to-black",
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
            Every tattoo tells a story. Browse our collection of custom work
            spanning styles from delicate fine-line to bold blackwork.
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
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden border border-purple-900/30 hover:border-purple-500/60 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] bg-[#111118] relative">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.style}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[item.id % gradients.length]}`}
                    />
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147,51,234,0.4) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-purple-800/40 text-6xl font-black">
                        {item.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <span className="text-white font-bold text-lg">{item.style}</span>
                <span className="text-purple-400 text-sm">{item.size}</span>
                <button className="mt-3 px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm rounded-md transition-colors">
                  View Full Size
                </button>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-sm font-semibold">{item.style}</span>
                <span className="text-gray-400 text-xs ml-2">· {item.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
