import { Building2, Phone } from 'lucide-react'

export default function Nav() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-[#1a3a5c]" strokeWidth={1.5} />
            <span className="font-semibold text-[#1a3a5c] text-base sm:text-lg leading-tight">
              Oklahoma City Commercial Insurance
            </span>
          </div>
          <a
            href="tel:+14055550100"
            className="flex items-center gap-1.5 text-[#1a3a5c] font-semibold hover:opacity-75 transition-opacity text-sm sm:text-base"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">(405) 555-0100</span>
            <span className="sm:hidden">Call us</span>
          </a>
        </div>
      </div>
    </header>
  )
}
