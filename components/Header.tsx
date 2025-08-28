"use client"

import React from 'react'
import CardNav from './ui/card-nav'

const Header: React.FC = () => {
  const navigationItems = [
    {
      label: "Home",
      bgColor: "#f5a101",
      textColor: "#ffffff",
      links: [
        { label: "Main Page", ariaLabel: "Go to Home Page", href: "/" },
        { label: "Hero Section", ariaLabel: "View Hero Section", href: "/" },
        { label: "Immigration Services", ariaLabel: "View Services Overview", href: "/" }
      ]
    },
    {
      label: "About",
      bgColor: "#00537b",
      textColor: "#ffffff",
      links: [
        { label: "Company Profile", ariaLabel: "About Company", href: "/about" },
        { label: "Professional Credentials", ariaLabel: "Professional Credentials", href: "/about" },
        { label: "Years of Experience", ariaLabel: "Years of Experience", href: "/about" }
      ]
    },
    {
      label: "Services", 
      bgColor: "#f5a101",
      textColor: "#ffffff",
      links: [
        { label: "Permanent Residency", ariaLabel: "Permanent Residency Services", href: "/services/permanent-residency" },
        { label: "Status Services", ariaLabel: "Status Services", href: "/services/status-services" },
        { label: "All Services", ariaLabel: "View All Services", href: "/services" }
      ]
    },
    {
      label: "Assessment",
      bgColor: "#00537b",
      textColor: "#ffffff",
      links: [
        { label: "CRS Calculator", ariaLabel: "CRS Score Calculator", href: "/assessment/crs-calculator" },
        { label: "PNP Assessment", ariaLabel: "PNP Assessment Tool", href: "/assessment/pnp-assessment" },
        { label: "All Tools", ariaLabel: "View All Assessment Tools", href: "/assessment" }
      ]
    },
    {
      label: "Resources",
      bgColor: "#f5a101",
      textColor: "#ffffff",
      links: [
        { label: "Immigration Blog", ariaLabel: "Immigration Blog", href: "/blog" },
        { label: "Immigration Tools", ariaLabel: "Immigration Tools", href: "/resources" },
        { label: "Free Downloads", ariaLabel: "Free Downloads", href: "/resources" }
      ]
    },
    {
      label: "Booking",
      bgColor: "#00537b",
      textColor: "#ffffff",
      links: [
        { label: "Free Consultation", ariaLabel: "Book Free Consultation", href: "/booking/free-consultation" },
        { label: "Paid Consultation", ariaLabel: "Book Paid Consultation", href: "/booking/paid-consultation" },
        { label: "All Options", ariaLabel: "View All Booking Options", href: "/booking" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#f5a101",
      textColor: "#ffffff",
      links: [
        { label: "Phone: 514-506-0671", ariaLabel: "Call us", href: "tel:514-506-0671" },
        { label: "Mississauga, ON", ariaLabel: "Our Location", href: "/about" },
        { label: "Get Started", ariaLabel: "Start Your Journey", href: "/booking" }
      ]
    }
  ]

  return (
    <CardNav
      logo="/placeholder-logo.svg"
      logoAlt="Mujtaba Sarwar Immigration Consulting"
      items={navigationItems}
      baseColor="#ffffff"
      menuColor="#f5a101"
      buttonBgColor="#f5a101"
      buttonTextColor="#ffffff"
      ease="power3.out"
    />
  )
}

export default Header
