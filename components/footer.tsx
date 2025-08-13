import Link from "next/link"
import {  Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-playfair mb-6">Rajesh Interior</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Transforming spaces with elegant and functional interior design solutions since 1998. We specialize in
              creating beautiful environments that reflect your personality and lifestyle.
            </p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-white/70 hover:text-gold-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link> */}
              <Link href="https://www.instagram.com/rajeshinterior_142/" className="text-white/70 hover:text-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-playfair mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
                { name: "Meet Developer", path: "/developer" }, // ✅ Added meet developer
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-white/70 hover:text-gold-500 transition-colors font-cormorant text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-playfair mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Road+no.+09,+Plot+no.17/I/4,+Shivaji+Nagar+Number+2,+Govandi+West,+Baiganwadi,+Govandi+East,+Mumbai,+Maharashtra+400043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold-500 transition-colors"
                >
                  Road no. 09, Plot no.17/I/4, Shivaji Nagar Number 2, Govandi West, Baiganwadi, Govandi East, Mumbai,
                  Maharashtra 400043
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <a href="tel:+918286271025" className="text-white/70 hover:text-gold-500 transition-colors">
                  +91 82862 71025
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <a href="tel:+919326051604" className="text-white/70 hover:text-gold-500 transition-colors">
                  +91 93260 51604
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <a href="mailto:rajeshinteriorcontractor142@gmail.com" className="text-white/70 hover:text-gold-500 transition-colors">
                  rajeshinteriorcontractor142@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Rajesh Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
