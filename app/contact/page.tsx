"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full mb-16">
        <Image
          src="/images/about-ban.jpg?height=1080&width=1920&text=Contact"
          alt="Contact Rajesh Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-cormorant animate-fade-in-up delay-200">
            We'd love to hear from you. Get in touch with us to discuss your project or schedule a consultation.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-charcoal-900/80 mb-10 leading-relaxed font-cormorant">
              Whether you're ready to start a project or just have questions about our services, we're here to help.
              Reach out to us using any of the methods below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-8 w-8 text-gold-500 mr-6 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2 font-cormorant">Our Location</h3>
                  <a
                    href="https://maps.google.com/?q=Road+no.+09,+Plot+no.17/I/4,+Shivaji+Nagar+Number+2,+Govandi+West,+Baiganwadi,+Govandi+East,+Mumbai,+Maharashtra+400043"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal-900/70 text-lg hover:text-gold-500 transition-colors"
                  >
                    Road no. 09, Plot no.17/I/4, Shivaji Nagar Number 2, Govandi West,
                    Baiganwadi, Govandi East, Mumbai, Maharashtra 400043
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-8 w-8 text-gold-500 mr-6 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2 font-cormorant">Phone</h3>
                  <a
                    href="tel:+918286271025"
                    className="text-charcoal-900/70 text-lg hover:text-gold-500 transition-colors block"
                  >
                    +91 82862 71025
                  </a>
                  <a
                    href="tel:+919326051604"
                    className="text-charcoal-900/70 text-lg hover:text-gold-500 transition-colors block"
                  >
                    +91 93260 51604
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-8 w-8 text-gold-500 mr-6 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2 font-cormorant">Email</h3>
                  <a
                    href="mailto:rajeshinteriorcontractor142@gmail.com"
                    className="text-charcoal-900/70 text-lg hover:text-gold-500 transition-colors"
                  >
                    rajeshinteriorcontractor142@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Link
                href="/developer"
                className="bg-gold-500 text-charcoal-900 px-6 py-3 font-medium hover:bg-gold-600 transition-colors inline-block"
              >
                Meet Developer
              </Link>
            </div>
          </div>

          {/* Contact Form */}
           <div className="bg-white p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 font-playfair">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-900/70 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b border-charcoal-900/20 focus:outline-none focus:border-gold-500 bg-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-900/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b border-charcoal-900/20 focus:outline-none focus:border-gold-500 bg-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal-900/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b border-charcoal-900/20 focus:outline-none focus:border-gold-500 bg-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal-900/70 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b border-charcoal-900/20 focus:outline-none focus:border-gold-500 bg-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Residential Project">Residential Project</option>
                    <option value="Commercial Project">Commercial Project</option>
                    <option value="Consultation Request">Consultation Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-900/70 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-b border-charcoal-900/20 focus:outline-none focus:border-gold-500 bg-transparent transition-colors"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-charcoal-900 text-white px-8 py-4 font-medium hover:bg-gold-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          </div>
      </section>

      {/* Map Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Find Us</h2>
        <div className="h-[400px] md:h-[500px] w-full overflow-hidden relative rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.687642181007!2d72.906!3d19.056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7a4f122c3df%3A0xabcdef!2sGovandi%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1692299999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
