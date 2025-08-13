import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react"
import { portfolioProjects } from "@/lib/data"

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = portfolioProjects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  // Find related projects (same category, excluding current project)
  const relatedProjects = portfolioProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up font-playfair">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-cormorant animate-fade-in-up delay-200">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto my-16">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Main Content */}
          <div className="md:w-2/3">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-charcoal-900/70 hover:text-gold-500 transition-colors mb-8 font-cormorant text-lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair">Project Overview</h2>
            <div className="prose max-w-none font-cormorant text-lg text-charcoal-900/80 mb-12">
              <p>{project.fullDescription}</p>
            </div>

            {/* Gallery */}
            <h3 className="text-2xl font-bold mb-6 font-playfair">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Gallery Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Services Provided */}
            <h3 className="text-2xl font-bold mb-6 font-playfair">Services Provided</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {project.services.map((service, index) => (
                <li key={index} className="flex items-center bg-cream-100 px-4 py-3 font-cormorant text-lg">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="bg-cream-100 p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 font-playfair">Project Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <User className="h-5 w-5 text-gold-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-charcoal-900">Client</p>
                    <p className="text-charcoal-900/70">{project.client}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gold-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-charcoal-900">Location</p>
                    <p className="text-charcoal-900/70">{project.location}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-gold-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-charcoal-900">Year</p>
                    <p className="text-charcoal-900/70">{project.year}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-cream-100 p-8">
              <h3 className="text-xl font-bold mb-6 font-playfair">Project Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-white px-3 py-1 text-sm text-charcoal-900/70 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="px-4 md:px-8 max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-10 font-playfair">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link key={relatedProject.id} href={`/portfolio/${relatedProject.id}`} className="group">
                <div className="relative h-[300px] overflow-hidden mb-4">
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-cormorant group-hover:text-gold-500 transition-colors">
                  {relatedProject.title}
                </h3>
                <p className="text-charcoal-900/70">{relatedProject.category}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
