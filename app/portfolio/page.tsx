import Image from "next/image"
import { portfolioProjects } from "@/lib/data"

// Portfolio categories derived from project data
const categories = ["All", ...Array.from(new Set(portfolioProjects.map((project) => project.category)))]

export default function Portfolio() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full mb-16">
        <Image
          src="/images/port-ban.jpg?height=1080&width=1920&text=Portfolio"
          alt="Portfolio Showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-cormorant animate-fade-in-up delay-200">
            Explore our collection of thoughtfully designed spaces that showcase our passion for creating beautiful and
            functional interiors.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Filter Categories - Horizontal Scroll on Mobile */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 md:pb-0 md:mx-0 md:px-0 mb-12">
          <div className="flex space-x-4 md:justify-center" style={{ minWidth: "max-content" }}>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 border border-charcoal-900/20 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900 transition-colors text-sm md:text-base whitespace-nowrap font-cormorant"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Masonry Layout on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className="group portfolio-item"
              style={{
                height: index % 3 === 0 ? "500px" : index % 3 === 1 ? "450px" : "400px",
              }}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="portfolio-item-content">
                  <h3 className="text-2xl font-bold text-white font-cormorant">{project.title}</h3>
                  <p className="text-white/80 mt-2 font-montserrat">{project.description}</p>
                  <span className="inline-block mt-2 text-gold-500 text-sm">{project.category}</span>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
