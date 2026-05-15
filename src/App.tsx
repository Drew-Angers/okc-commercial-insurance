import Nav from './components/Nav'
import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import PropertyTypes from './components/PropertyTypes'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main>
        <div className="relative">
          <Hero />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm />
          </div>
        </div>
        <PropertyTypes />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
