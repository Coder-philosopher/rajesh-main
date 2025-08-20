import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Heart, Users } from "lucide-react"

export default function About() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full mb-16">
        <Image
          src="/images/about-ban.jpg?height=1080&width=1920&text=About"
          alt="About Rajesh Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">About Rajesh Interior</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-cormorant animate-fade-in-up delay-200">
            Passionate about creating beautiful, functional spaces that inspire and delight.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 h-[500px] md:h-[600px] relative overflow-hidden order-1 md:order-none">
            <Image
              src="/images/about1.jpg?height=1200&width=800&text=Rajesh"
              alt="Rajesh - Interior Designer"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Our Story</h2>
            <p className="text-lg text-charcoal-900/80 mb-6 leading-relaxed font-cormorant">
              Founded in 1998 by Rajesh Mourya, Rajesh Interior has grown from a small design studio to a full-service
              interior design firm with a reputation for excellence and innovation.
            </p>
            <p className="text-lg text-charcoal-900/80 mb-6 leading-relaxed font-cormorant">
              With a background in architecture and a passion for interior spaces, Rajesh brings a unique perspective to
              each project, blending functionality with aesthetic beauty to create spaces that truly reflect the
              personalities and needs of his clients.
            </p>
            <p className="text-lg text-charcoal-900/80 mb-8 leading-relaxed font-cormorant">
              Over the years, we've had the privilege of working on a diverse range of projects, from cozy residential
              spaces to dynamic commercial environments, each with its own unique challenges and opportunities.
            </p>
            <div className="flex items-center">
              <Image
                src="/images/rajesh.png?height=100&width=300&text=Signature"
                alt="Rajesh's Signature"
                width={150}
                height={50}
                className="mr-4"
              />
              <div>
                <p className="font-bold text-charcoal-900 font-cormorant text-xl">Rajesh Mourya</p>
                <p className="text-charcoal-900/70">Founder & Principal Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-4 md:px-8 py-24 bg-cream-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-300/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                icon: <Heart className="h-12 w-12 text-gold-500" />,
                title: "Passion",
                description: "We're driven by our love for design and the transformative power of beautiful spaces.",
              },
              {
                icon: <Users className="h-12 w-12 text-gold-500" />,
                title: "Collaboration",
                description: "We believe in working closely with our clients to bring their vision to life.",
              },
              {
                icon: <Award className="h-12 w-12 text-gold-500" />,
                title: "Excellence",
                description: "We strive for perfection in every detail, from concept to completion.",
              },
              {
                icon: <Clock className="h-12 w-12 text-gold-500" />,
                title: "Timeliness",
                description:
                  "We respect our clients' time and deliver projects on schedule without compromising quality.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-10 text-center hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 font-cormorant">{value.title}</h3>
                <p className="text-charcoal-900/70 font-montserrat">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-4 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Our Design Process</h2>
          <p className="text-xl text-charcoal-900/70 max-w-3xl mx-auto text-center mb-20 font-cormorant">
            We follow a structured approach to ensure every project meets our high standards and exceeds client
            expectations.
          </p>

          <div className="space-y-24">
            {[
              {
                number: "01",
                title: "Consultation & Discovery",
                description:
                  "We begin by understanding your needs, preferences, and vision for the space. This initial consultation helps us establish project goals and parameters.",
                image: "/images/pro1.jpg?height=600&width=800&text=Consultation",
              },
              {
                number: "02",
                title: "Concept Development",
                description:
                  "Based on our discovery, we create preliminary design concepts that align with your vision, including space planning, color schemes, and material selections.",
                image: "/images/about2.jpg?height=600&width=800&text=Concept",
              },
              {
                number: "03",
                title: "Design Refinement",
                description:
                  "We refine the chosen concept, developing detailed plans, elevations, and 3D visualizations to help you better understand the proposed design.",
                image: "/images/about3.jpg?height=600&width=800&text=Refinement",
              },
              {
                number: "04",
                title: "Implementation",
                description:
                  "Once the design is approved, we coordinate with contractors and vendors to bring the vision to life, overseeing every aspect of the implementation process.",
                image: "/images/about4.jpg?height=600&width=800&text=Implementation",
              },
              {
                number: "05",
                title: "Final Reveal",
                description:
                  "We complete the project with styling and finishing touches, ensuring every detail is perfect before the final reveal of your transformed space.",
                image: "/images/about5.jpg?height=600&width=800&text=Reveal",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-12 items-center">
                <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-start mb-6">
                    <span className="text-7xl font-playfair font-bold text-gold-500 opacity-50 mr-6 leading-none">
                      {step.number}
                    </span>
                    <h3 className="text-3xl font-bold font-cormorant mt-2">{step.title}</h3>
                  </div>
                  <p className="text-lg text-charcoal-900/70 ml-20 font-montserrat">{step.description}</p>
                </div>
                <div
                  className={`md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-24">
        <div className="max-w-5xl mx-auto bg-charcoal-900 text-white p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Start Your Design Journey?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-cormorant relative z-10">
            Let's collaborate to create a space that reflects your unique style and meets your specific needs.
          </p>
          <Link
            href="/contact"
            className="bg-gold-500 text-charcoal-900 px-10 py-4 font-medium hover:bg-white transition-colors inline-flex items-center gap-2 relative z-10"
          >
            Contact Us Today <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
