import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"

export default function page() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full mb-16">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Developer"
          alt="Meet the Developer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Meet the Developer
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-cormorant animate-fade-in-up delay-200">
            The creative mind who designed and crafted this beautiful website experience.
          </p>
        </div>
      </section>

      {/* Developer Intro Section */}
      <section className="px-4 md:px-8 max-w-5xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Circular Photo */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold-500 shadow-lg flex-shrink-0">
            <Image
              src="/devv.jpg"
              alt="Developer Photo"
              fill
              className="object-cover"
            />
          </div>

          {/* Message */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hello, I’m Abdullah Shaikh</h2>
            <p className="text-lg text-charcoal-900/80 mb-6 leading-relaxed font-cormorant">
              As the developer behind this site, my goal was to blend sleek design with smooth performance. I carefully
              crafted each section with attention to detail, ensuring that Rajesh Interior's elegance and style shine
              through in every pixel.
            </p>
            <p className="text-lg text-charcoal-900/80 leading-relaxed font-cormorant">
              From thoughtful typography choices to optimized image rendering, everything here was built with love,
              passion, and a focus on user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio & Social Links */}
      <section className="px-4 md:px-8 py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Explore My Work</h2>
          <p className="text-xl text-charcoal-900/70 mb-12 font-cormorant">
            Interested in more of my projects? Check out my portfolio and connect with me online.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            {/* Portfolio Button */}
            <Link
              href="https://thetechshaikh.online"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-charcoal-900 px-8 py-4 font-medium hover:bg-white transition-colors inline-flex items-center gap-2 rounded-md shadow-md"
            >
              Visit Portfolio <ArrowRight className="h-5 w-5" />
            </Link>
            {/* GitHub Button */}
            <Link
              href="https://github.com/coder-philosopher"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-900 text-white px-8 py-4 font-medium hover:bg-gold-500 hover:text-charcoal-900 transition-colors inline-flex items-center gap-2 rounded-md shadow-md"
            >
              <Github className="h-5 w-5" /> GitHub
            </Link>
            {/* LinkedIn Button */}
            <Link
              href="https://www.linkedin.com/in/abdullah-shaikh-97309b297/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-900 text-white px-8 py-4 font-medium hover:bg-gold-500 hover:text-charcoal-900 transition-colors inline-flex items-center gap-2 rounded-md shadow-md"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
