import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { services } from "@/lib/data"

export default function Services() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full mb-16">
        <Image
          src="/images/ser-ban.jpg?height=1080&width=1920&text=Services"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-cormorant animate-fade-in-up delay-200">
            Comprehensive interior design solutions tailored to your unique needs and vision
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">How We Can Help You</h2>
          <p className="text-lg text-charcoal-900/80 max-w-3xl mx-auto font-cormorant">
            At Rajesh Interior, we offer a comprehensive range of interior design services to meet all your needs.
            Whether you're looking to transform your home, create an inspiring workspace, or renovate an existing
            property, our team of experienced designers is here to bring your vision to life.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
            >
              <div className="md:w-1/2 h-[400px] relative overflow-hidden">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4 font-playfair">{service.title}</h3>
                <p className="text-lg text-charcoal-900/80 mb-8 font-cormorant">{service.description}</p>

                <h4 className="text-xl font-bold mb-4 font-cormorant">What's Included:</h4>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-charcoal-900/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center bg-charcoal-900 text-white px-6 py-3 font-medium hover:bg-gold-500 transition-colors"
                >
                  Inquire About This Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Overview */}
      <section className="px-4 md:px-8 py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Our Design Process</h2>
            <p className="text-lg text-charcoal-900/80 max-w-3xl mx-auto font-cormorant">
              We follow a structured approach to ensure every project meets our high standards and exceeds client
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "We begin by understanding your needs, preferences, and vision for the space.",
              },
              {
                number: "02",
                title: "Design Development",
                description:
                  "We create detailed plans, mood boards, and 3D visualizations to bring your vision to life.",
              },
              {
                number: "03",
                title: "Implementation",
                description: "We coordinate with contractors and vendors to execute the design with precision.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-6">
                  <span className="text-2xl font-bold text-gold-500">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-cormorant">{step.title}</h3>
                <p className="text-charcoal-900/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-5xl mx-auto bg-charcoal-900 text-white p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-cormorant">
            Contact us today to schedule a consultation and take the first step towards your dream interior.
          </p>
          <Link
            href="/contact"
            className="bg-gold-500 text-charcoal-900 px-10 py-4 font-medium hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            Contact Us Today <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
