import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, FileText, Briefcase, GraduationCap, Heart, Building, Send } from "lucide-react"
import Link from "next/link"

export default function ImmigrationPathwaysPage() {
  const services = [
    {
      icon: Briefcase,
      title: "Work Permits",
      description: "Open and employer-specific work permits for temporary workers",
      price: "$1,500",
      processingTime: "2-4 months",
      features: [
        "LMIA support and guidance",
        "Document preparation and review",
        "Application filing and tracking",
        "Work permit extensions",
        "Spouse and family permits",
      ],
      types: [
        "Open Work Permit",
        "Employer-Specific Work Permit",
        "Post-Graduation Work Permit",
        "Spousal Work Permit",
      ],
    },
    {
      icon: GraduationCap,
      title: "Study Permits",
      description: "Student visas and study permit extensions for international students",
      price: "$1,200",
      processingTime: "4-12 weeks",
      features: [
        "School selection guidance",
        "Financial planning assistance",
        "Application preparation",
        "Study permit extensions",
        "Family member permits",
      ],
      types: ["Initial Study Permit", "Study Permit Extension", "Program Change", "Co-op Work Permit"],
    },
    {
      icon: Heart,
      title: "Family Sponsorship",
      description: "Reunite with your loved ones through family class sponsorship",
      price: "$2,000",
      processingTime: "12-24 months",
      features: [
        "Eligibility assessment",
        "Financial requirement review",
        "Complete application preparation",
        "Interview preparation",
        "Appeal support if needed",
      ],
      types: [
        "Spouse/Partner Sponsorship",
        "Dependent Child Sponsorship",
        "Parent/Grandparent Program",
        "Other Eligible Relatives",
      ],
    },
    {
      icon: Building,
      title: "LMIA Applications",
      description: "Labour Market Impact Assessment for Canadian employers",
      price: "$2,500",
      processingTime: "2-6 months",
      features: [
        "Job analysis and NOC classification",
        "Recruitment requirement support",
        "Application preparation and filing",
        "Compliance review",
        "Post-approval support",
      ],
      types: ["High-wage LMIA", "Low-wage LMIA", "Caregiver LMIA", "Global Talent Stream"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("/images/herobanners/3.png")' }}>
        <div className="absolute inset-0 bg-[#6aad81]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Immigration Pathways</h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional assistance with work permits, study permits, and temporary status applications
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Our Services</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Comprehensive support for Immigration Pathways applications in Canada
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={index} className="hover:bg-[#e8eaed] transition-colors duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                          <service.icon className="w-12 h-12 text-[#6aad81]" />
                          <div>
                            <h3 className="text-2xl font-bold text-[#144d5e]">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-[#6aad81]">{service.price}</div>
                            <div className="text-sm text-gray-600">Starting Price</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-[#144d5e]">{service.processingTime}</div>
                            <div className="text-sm text-gray-600">Processing Time</div>
                          </div>
                        </div>
                        <Link href="/contact-me">
                          <Button className="w-full bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">Get Started</Button>
                        </Link>
                      </div>

                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-[#144d5e] mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#6aad81] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-[#144d5e] mb-3">Service Types:</h4>
                        <div className="space-y-2">
                          {service.types.map((type, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="block w-fit border-[#6aad81] text-[#6aad81] text-xs"
                            >
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#e8eaed]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Our Service Process</h2>
              <p className="text-gray-700">Simple, transparent process for all status applications</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Consultation</h3>
                <p className="text-gray-700 text-sm">Free initial consultation to assess your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Documentation</h3>
                <p className="text-gray-700 text-sm">Gather and prepare all required documents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Application</h3>
                <p className="text-gray-700 text-sm">Complete and submit your application</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Support</h3>
                <p className="text-gray-700 text-sm">Ongoing support until approval</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Get Started with Immigration Pathways</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Ready to apply for a work permit, study permit, or other status? Send us a message and we'll help you get started.
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <Input id="service" placeholder="Work Permit, Study Permit, Family Sponsorship, etc." />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Tell Us About Your Case *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your current situation and what you need help with..." 
                      rows={4}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    <Link href="/contact-me">Get Started</Link>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
