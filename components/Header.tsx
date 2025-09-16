
"use client"

import React from 'react'
import CardNav from './ui/card-nav'

const Header: React.FC = () => {
  const navigationItems = [
    {
      label: "Home",
      bgColor: "#6aad81",
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
        { label: "About Me", ariaLabel: "About Me", href: "/about" },
        
      ]
    },
    {
      label: "Services", 
      bgColor: "#6aad81",
      textColor: "#ffffff",
      links: [
        { label: "Permanent Residency", ariaLabel: "Permanent Residency Services", href: "/services/permanent-residency" },
        { label: "Status Services", ariaLabel: "Status Services", href: "/services/status-services" },
       
      ]
    },
    {
      label: "Assessment",
              bgColor: "#144d5e",
        textColor: "#ffffff",
      links: [
        { label: "CRS Calculator", ariaLabel: "CRS Score Calculator", href: "/assessment/crs-calculator" },
        { label: "PNP Assessment", ariaLabel: "PNP Assessment Tool", href: "/assessment/pnp-assessment" },
        
      ]
    },
    {
      label: "Resources",
      bgColor: "#6aad81",
      textColor: "#ffffff",
      links: [
        { label: "Immigration Blog", ariaLabel: "Immigration Blog", href: "/blog" },
        { label: "Immigration Tools", ariaLabel: "Immigration Tools", href: "/resources" },
        
      ]
    },
    {
      label: "Mentoring", 
      bgColor: "#6aad81",
      textColor: "#ffffff",
      links: [
        { label: "RCIC Mentoring", ariaLabel: "RCIC Mentoring & Coaching", href: "/mentoring" },
        { label: "Private Practice Setup", ariaLabel: "Private Practice Coaching", href: "/mentoring" },
        
        ]
      },
    {
      label: "Contact",
      bgColor: "#144d5e",
      textColor: "#ffffff",
      links: [
        { label: "Free Assessment", ariaLabel: "Schedule Free Assessment", href: "/contact/free-consultation" },
        { label: "Detailed Consultation", ariaLabel: "Schedule Detailed Consultation", href: "/contact/paid-consultation" },
        
      ]
    }
  ]

  return (
    <CardNav
      logo="/logo.png"
      logoText=""
      logoAlt="Mujtaba Sarwar Immigration Consulting"
      items={navigationItems}
      baseColor="#ffffff"
      menuColor="#6aad81"
      buttonBgColor="#6aad81"
      buttonTextColor="#ffffff"
      ease="power3.out"
    />
  )
}

export default Header
