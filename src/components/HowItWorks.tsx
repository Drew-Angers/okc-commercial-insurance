const STEPS = [
  {
    number: 1,
    title: 'Fill out the form',
    description: 'Share a few details about your property — it takes less than 2 minutes.',
  },
  {
    number: 2,
    title: 'We match you with an OKC broker',
    description: "We connect you with a licensed broker who specializes in Oklahoma's commercial market.",
  },
  {
    number: 3,
    title: 'Get your quote',
    description: 'Your broker reaches out within 1 business day with coverage options tailored to your property.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c]">How it works</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Three simple steps to the right commercial coverage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-center gap-0 max-w-3xl mx-auto">
          {STEPS.map((step, index) => (
            <div key={step.number} className="flex sm:flex-col flex-1 gap-4 sm:gap-0">
              <div className="flex sm:flex-col items-start sm:items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a3a5c] text-white font-bold text-sm flex items-center justify-center">
                  {step.number}
                </div>
                {index < STEPS.length - 1 && (
                  <>
                    {/* Vertical connector (mobile) */}
                    <div className="sm:hidden w-px flex-1 bg-gray-200 ml-5 mt-2" style={{ minHeight: '32px' }} />
                    {/* Horizontal connector (desktop) */}
                    <div className="hidden sm:block h-px flex-1 bg-gray-200 mt-5 w-full" />
                  </>
                )}
              </div>
              <div className="pb-6 sm:pb-0 sm:pt-4 sm:text-center sm:px-3">
                <h3 className="font-semibold text-[#1a3a5c] text-base mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
