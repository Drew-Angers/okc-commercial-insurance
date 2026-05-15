import { MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="bg-[#1a3a5c] pt-16 pb-40 sm:pb-48"
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-6">
          <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
          Serving Oklahoma City &amp; Greater Metro
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl mx-auto">
          Commercial property insurance made simple
        </h1>
        <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto">
          Get connected with a licensed broker who knows the OKC market. No pressure, no obligation.
        </p>
      </div>
    </section>
  )
}
