export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
          Oklahoma City Commercial Insurance is a lead generation service. We are not a licensed
          insurance provider or broker. By submitting this form you agree to be contacted by a
          licensed insurance professional.
        </p>
        <p className="text-gray-400 text-xs mt-3">
          &copy; {year} oklahomacitycommercialinsurance.com
        </p>
      </div>
    </footer>
  )
}
