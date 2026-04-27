import BookingForm from "@/components/BookingForm";

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

      <div className="px-4 max-w-2xl mx-auto pb-24">
        <BookingForm />
      </div>
    </div>
  );
}
