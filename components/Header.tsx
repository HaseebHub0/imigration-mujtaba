
"use client"

import React from 'react'
import CardNav from './ui/card-nav'

const Header: React.FC = () => {
  const navigationItems = [
    {
      label: "Home",
      bgColor: "#66a380",
      textColor: "#ffffff",
      links: [
        { label: "Main Page", ariaLabel: "Go to Home Page", href: "/" },
     
      ]
    },
    {
      label: "About",
              bgColor: "#144d5e",
        textColor: "#ffffff",
      links: [
        { label: "About Us", ariaLabel: "About Company", href: "/about" },
        
      ]
    },
    {
      label: "Services", 
      bgColor: "#66a380",
      textColor: "#ffffff",
      links: [
        { label: "Permanent Residency", ariaLabel: "Permanent Residency Services", href: "/services/permanent-residency" },
        { label: "Status Services", ariaLabel: "Status Services", href: "/services/status-services" },
        { label: "All Services", ariaLabel: "View All Services", href: "/services" }
      ]
    },
    {
      label: "Assessment",
              bgColor: "#144d5e",
        textColor: "#ffffff",
      links: [
        { label: "CRS Calculator", ariaLabel: "CRS Score Calculator", href: "/assessment/crs-calculator" },
        { label: "PNP Assessment", ariaLabel: "PNP Assessment Tool", href: "/assessment/pnp-assessment" },
        { label: "All Tools", ariaLabel: "View All Assessment Tools", href: "/assessment" }
      ]
    },
    {
      label: "Resources",
      bgColor: "#66a380",
      textColor: "#ffffff",
      links: [
        { label: "Immigration Blog", ariaLabel: "Immigration Blog", href: "/blog" },
        { label: "Immigration Tools", ariaLabel: "Immigration Tools", href: "/resources" },
        { label: "Free Downloads", ariaLabel: "Free Downloads", href: "/resources" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#144d5e",
      textColor: "#ffffff",
      links: [
        { label: "Free Assessment", ariaLabel: "Schedule Free Assessment", href: "/contact/free-consultation" },
        { label: "Detailed Consultation", ariaLabel: "Schedule Detailed Consultation", href: "/contact/paid-consultation" },
        { label: "All Options", ariaLabel: "View All Contact Options", href: "/contact" }
      ]
    }
  ]

  return (
    <CardNav
      logo=""
      logoText="Mujtaba Sarwar"
      logoAlt="Mujtaba Sarwar Immigration Consulting"
      items={navigationItems}
      baseColor="#ffffff"
      menuColor="#66a380"
      buttonBgColor="#66a380"
      buttonTextColor="#ffffff"
      ease="power3.out"
    />
  )
}

export default Header
