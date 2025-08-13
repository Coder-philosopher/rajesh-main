import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services, testimonials } from "@/lib/data"

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen  w-full flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Interior Design Showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
            <span className="block">Transforming</span>
            <span className="block mt-2">Spaces</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-cormorant animate-fade-in-up delay-200">
            Elevating interiors with thoughtful design and meticulous attention to detail
          </p>
          <Link
            href="/portfolio"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-none font-medium hover:bg-white hover:text-charcoal-900 transition-all duration-300 flex items-center gap-2 animate-fade-in-up delay-300"
          >
            Explore Our Work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Scroll indicator */}
       
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 md:px-8 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 mb-8 leading-tight">
                We create spaces that inspire and delight
              </h2>
              <p className="text-lg text-charcoal-900/80 mb-6 leading-relaxed font-cormorant">
                We believe that exceptional interior design is about creating spaces that reflect your personality and
                enhance your lifestyle. With over a decade of experience, we specialize in transforming ordinary spaces
                into extraordinary environments.
              </p>
              <p className="text-lg text-charcoal-900/80 mb-8 leading-relaxed font-cormorant">
                Our approach combines aesthetic vision with practical functionality, ensuring that every design not only
                looks beautiful but also works perfectly for your needs.
              </p>
              <Link
                href="/about"
                className="text-charcoal-900 font-medium border-b-2 border-gold-500 pb-1 hover:border-charcoal-900 transition-colors inline-flex items-center gap-2"
              >
                Learn more about us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 h-[500px] relative rounded-none overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Interior Design Concept"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Overlapping Images */}
      <section className="py-20 px-4 md:px-8 bg-cream-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sage-300/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-terracotta-500/5 rounded-tr-full"></div>

        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 mb-4 text-center">Our Services</h2>
          <p className="text-xl text-charcoal-900/70 mb-16 text-center max-w-3xl mx-auto font-cormorant">
            Comprehensive interior design solutions tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-[300px] md:h-[400px] mb-6 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4 font-cormorant">{service.title}</h3>
                <p className="text-charcoal-900/70 mb-6">{service.description}</p>
                <Link
                  href="/services"
                  className="text-charcoal-900 font-medium border-b-2 border-gold-500 pb-1 hover:border-charcoal-900 transition-colors inline-flex items-center gap-2"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="bg-charcoal-900 text-white px-8 py-4 font-medium hover:bg-gold-500 transition-colors inline-flex items-center gap-2"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects - Horizontal Scroll on Mobile */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900 mb-4 text-center">Featured Projects</h2>
          <p className="text-xl text-charcoal-900/70 mb-16 text-center max-w-3xl mx-auto font-cormorant">
            A glimpse into our recent transformations and design journeys
          </p>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="portfolio-item group relative overflow-hidden h-[450px]">
                <Image
                  src={`/placeholder.svg?height=900&width=600&text=Project%20${item}`}
                  alt={`Featured Project ${item}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="portfolio-item-content">
                  <h3 className="text-2xl font-bold text-white font-cormorant">Modern Living Space</h3>
                  <p className="text-white/80 mt-2 font-montserrat">Residential Design</p>
                  <Link
                    href={`/portfolio/${item}`}
                    className="inline-block mt-4 text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-8 -mx-4 px-4">
            <div className="flex space-x-4" style={{ minWidth: "max-content" }}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="portfolio-item relative w-[280px] h-[400px] flex-shrink-0">
                  <Image
                    src={`/placeholder.svg?height=800&width=600&text=Project%20${item}`}
                    alt={`Featured Project ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="portfolio-item-content">
                    <h3 className="text-xl font-bold text-white font-cormorant">Modern Living Space</h3>
                    <p className="text-white/80 mt-2 font-montserrat text-sm">Residential Design</p>
                    <Link
                      href={`/portfolio/${item}`}
                      className="inline-block mt-4 text-gold-500 border-b border-gold-500 pb-1 text-sm"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="bg-charcoal-900 text-white px-8 py-4 font-medium hover:bg-charcoal-900/90 transition-colors inline-flex items-center gap-2"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Full-width Background */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Interior"
            alt="Interior Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/80"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">What Our Clients Say</h2>

          <blockquote className="text-xl md:text-3xl text-white italic mb-10 leading-relaxed font-cormorant">
            "{testimonials[0].text}"
          </blockquote>

          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
              <Image
                src={testimonials[0].image || "/placeholder.svg"}
                alt={testimonials[0].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-medium text-white text-lg">{testimonials[0].name}</p>
              <p className="text-white/70">{testimonials[0].role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Angled Design */}
      <section className="py-24 px-4 md:px-8 bg-charcoal-900 relative overflow-hidden">
        {/* Decorative angled element */}
        <div
          className="absolute top-0 left-0 w-full h-24 bg-cream-50"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
        ></div>

        <div className="max-w-6xl mx-auto text-center relative z-10 mt-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-cormorant">
            Let's collaborate to create an interior that inspires and delights.
          </p>
          <Link
            href="/contact"
            className="bg-gold-500 text-charcoal-900 px-10 py-4 font-medium hover:bg-white transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>

        {/* Decorative angled element at bottom */}
        <div
          className="absolute bottom-0 right-0 w-full h-24 bg-cream-50"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>
    </main>
  )
}
