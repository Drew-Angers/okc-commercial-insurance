import { Building2, ShoppingBag, Warehouse, UtensilsCrossed } from 'lucide-react'

const PROPERTY_CARDS = [
  {
    icon: Building2,
    title: 'Office Buildings',
    description:
      "From mid-rise towers in downtown OKC to suburban campuses serving the energy sector, office buildings carry unique liability and property risks. We connect you with brokers who understand the specific exposures of Oklahoma's professional landscape.",
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Strip Malls',
    description:
      "Bricktown shops, Midtown boutiques, and strip centers throughout the metro face high foot traffic, tenant turnover, and Oklahoma's severe weather season. The right policy covers building, tenant improvements, and lost income when the unexpected hits.",
  },
  {
    icon: Warehouse,
    title: 'Warehouses & Industrial',
    description:
      "OKC's booming logistics corridor along I-40 and I-35 has made industrial property one of the fastest-growing segments in the state. We match warehouse owners with coverage built for inventory, equipment, and the real cost of downtime.",
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description:
      "From food trucks to full-service dining, Oklahoma restaurants need coverage that accounts for equipment breakdown, spoilage, and business interruption. Hail and severe wind events can shut down a kitchen — make sure you're protected when they do.",
  },
]

export default function PropertyTypes() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c]">
            Coverage for every commercial property type
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-lg mx-auto">
            Oklahoma weather doesn't discriminate — hail, tornadoes, and severe wind are a real risk for every property owner in the OKC metro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {PROPERTY_CARDS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-lg p-5 flex gap-4"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-10 h-10 flex items-center justify-center border border-[#1a3a5c]/20 rounded">
                  <Icon className="w-5 h-5 text-[#1a3a5c]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a3a5c] text-base mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
