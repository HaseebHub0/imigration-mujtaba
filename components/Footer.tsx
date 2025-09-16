"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#144d5e] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logowhite.png" alt="Mujtaba Sarwar Immigration Consulting" className="h-20 w-auto" />
              
            </div>
            <p className="text-gray-200 leading-relaxed">
              Regulated Canadian Immigration Consultant providing expert guidance for your immigration journey to Canada. Dedicated to making the process smooth and stress-free.
            </p>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-[#6aad81] text-[#6aad81] bg-transparent">
                RCIC #R712505
              </Badge>
            </div>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 bg-[#6aad81] rounded-full flex items-center justify-center hover:bg-[#5a9d71] transition-colors">
                <span className="text-white text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#6aad81] rounded-full flex items-center justify-center hover:bg-[#5a9d71] transition-colors">
                <span className="text-white text-sm">t</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#6aad81] rounded-full flex items-center justify-center hover:bg-[#5a9d71] transition-colors">
                <span className="text-white text-sm">in</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Quick Links</h3>
            <div className="space-y-3 text-sm text-gray-200">
            <a href="/about-me" className="block hover:text-[#6aad81] transition-colors">
              About Me
            </a>

              <a href="/services/permanent-residency" className="block hover:text-[#6aad81] transition-colors">
                Express Entry
              </a>
              <a href="/services/immigration-pathways" className="block hover:text-[#6aad81] transition-colors">
                Immigration Pathways
              </a>
              
              <a href="/blog" className="block hover:text-[#6aad81] transition-colors">
                Blog
              </a>
              <a href="/contact-me" className="block hover:text-[#6aad81] transition-colors">
                Contact Me
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Tools & Downloads</h3>
            <div className="space-y-3 text-sm text-gray-200">  
              <a href="/crs-calculator" className="block hover:text-[#6aad81] transition-colors">
                CRS Calculator
              </a>
              <a href="/pnp-assessment" className="block hover:text-[#6aad81] transition-colors">
                PNP Assessment Tool
              </a>
              <a href="/resources" className="block hover:text-[#6aad81] transition-colors">
                Resource Downloads
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm text-gray-200">
                <MapPin className="h-5 w-5 text-[#6aad81] mt-0.5 flex-shrink-0" />
                <span>Mississauga, Ontario, Canada</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <Phone className="h-5 w-5 text-[#6aad81] flex-shrink-0" />
                <a href="tel:514-506-0671" className="hover:text-[#6aad81] transition-colors">
                  514-506-0671
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <Mail className="h-5 w-5 text-[#6aad81] flex-shrink-0" />
                <a href="mailto:info@mujtabasarwar.com" className="hover:text-[#6aad81] transition-colors">
                  info@mujtabasarwar.com
                </a>
              </div>
              <div className="pt-2">
                <a href="/contact-me" className="inline-flex items-center px-4 py-2 bg-[#6aad81] text-white rounded-lg hover:bg-[#5a9d71] transition-colors text-sm font-medium">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; 2025 Mujtaba Sarwar Canadian Immigration Consulting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#6aad81] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#6aad81] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#6aad81] transition-colors">
              ICCRC Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
