import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data"
function page() {
  return (
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
                    src={service.image || "/images/banner2.jpg"}
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
  )
}

export default page