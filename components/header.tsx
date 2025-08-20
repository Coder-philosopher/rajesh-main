"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Check if we're on the homepage
  const isHomePage = pathname === "/"

  // Always show solid background on inner pages
  const shouldShowSolidBg = isScrolled || !isHomePage

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShowSolidBg ? "bg-white/95 backdrop-blur-md shadow-sm py-5 rounded-full my-4 mx-4" : "bg-transparent mx-4 my-4 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-playfair font-bold tracking-tight ${
              shouldShowSolidBg ? "text-charcoal-900" : "text-white"
            }`}
          >
            Rajesh Interior
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home","Portfolio","Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`font-cormorant text-xl tracking-wide hover:text-gold-500 transition-colors ${
                  shouldShowSolidBg ? "text-charcoal-900" : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-50" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? (
              <X className="h-7 w-7 text-charcoal-900" />
            ) : (
              <Menu className={`h-7 w-7 ${shouldShowSolidBg ? "text-charcoal-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-cream-50 mobile-menu-container flex flex-col justify-center items-center z-40">
          <nav className="flex flex-col items-center space-y-8">
            {["Home", "Portfolio", "About", "Contact"].map((item, index) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`font-playfair text-3xl text-charcoal-900 hover:text-gold-500 transition-colors animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setIsMenuOpen(false)
                  document.body.style.overflow = "auto"
                }}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
