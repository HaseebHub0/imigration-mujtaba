import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Users, FileText, Globe, Heart } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const permanentResidencyServices = [
    {
      title: "Express Entry",
      description: "Federal Skilled Worker, Canadian Experience Class, Federal Skilled Trades",
      price: "Starting at $2,500",
      features: ["CRS Score Optimization", "Document Preparation", "Application Submission", "Post-ITA Support"],
    },
    {
      title: "Provincial Nominee Program (PNP)",
      description: "Province-specific immigration programs across Canada",
      price: "Starting at $3,000",
      features: ["Province Selection", "Eligibility Assessment", "Application Management", "Nomination Support"],
    },
    {
      title: "Category-Based Selection",
      description: "French language, Healthcare, STEM, Trade, Transport draws",
      price: "Starting at $2,800",
      features: ["Category Assessment", "Profile Enhancement", "Draw Preparation", "Application Support"],
    },
  ]

  const statusServices = [
    {
      title: "Work Permits",
      description: "Open and employer-specific work permits",
      price: "$1,500",
      features: ["LMIA Support", "Document Review", "Application Filing", "Extension Services"],
    },
    {
      title: "Study Permits",
      description: "Student visas and study permit extensions",
      price: "$1,200",
      features: ["School Selection", "Financial Planning", "Application Support", "Family Permits"],
    },
    {
      title: "Family Sponsorship",
      description: "Spouse, child, parent and grandparent sponsorship",
      price: "$2,000",
      features: ["Eligibility Review", "Financial Assessment", "Application Preparation", "Interview Prep"],
    },
    {
      title: "LMIA Applications",
      description: "Labour Market Impact Assessment for employers",
      price: "$2,500",
      features: ["Job Analysis", "Recruitment Support", "Application Filing", "Compliance Review"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
        <div className="absolute inset-0 bg-[#0f172b]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Immigration Services</h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive immigration solutions tailored to your unique situation and goals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-[#66a380] text-white px-4 py-2">
                80% Success Rate
              </Badge>
              <Badge variant="secondary" className="bg-[#66a380] text-white px-4 py-2">
                Free Consultation
              </Badge>
              <Badge variant="secondary" className="bg-[#66a380] text-white px-4 py-2">
                Transparent Pricing
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="hover:bg-[#f5f2ec] transition-colors duration-300 border-2 border-[#66a380]">
                <CardHeader className="text-center pb-4">
                  <Globe className="w-16 h-16 text-[#66a380] mx-auto mb-4" />
                  <CardTitle className="text-2xl text-[#0f172b]">Permanent Residency</CardTitle>
                  <p className="text-gray-600">Make Canada your permanent home</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Comprehensive support for Express Entry, PNP, and category-based immigration programs
                  </p>
                  <Link href="/services/permanent-residency">
                    <Button className="bg-[#66a380] hover:bg-[#66a380]/90 text-white">
                      Explore PR Services <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:bg-[#f5f2ec] transition-colors duration-300 border-2 border-[#66a380]">
                <CardHeader className="text-center pb-4">
                  <FileText className="w-16 h-16 text-[#66a380] mx-auto mb-4" />
                  <CardTitle className="text-2xl text-[#0f172b]">Status Services</CardTitle>
                  <p className="text-gray-600">Work, study, and visit Canada</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Work permits, study permits, family sponsorship, and LMIA applications
                  </p>
                  <Link href="/services/status-services">
                    <Button className="bg-[#66a380] hover:bg-[#66a380]/90 text-white">
                      Explore Status Services <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Permanent Residency Services */}
      <section className="py-16 bg-[#f5f2ec]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f172b] mb-4">Permanent Residency Services</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Achieve your dream of becoming a Canadian permanent resident with our expert guidance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {permanentResidencyServices.map((service, index) => (
                <Card key={index} className="hover:bg-white transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0f172b]">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="text-2xl font-bold text-[#66a380]">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#66a380]" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#66a380] hover:bg-[#66a380]/90 text-white">Get Started</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f172b] mb-4">Status Services</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Work, study, and reunite with family in Canada through our comprehensive status services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statusServices.map((service, index) => (
                <Card key={index} className="hover:bg-[#f5f2ec] transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#0f172b]">{service.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    <div className="text-xl font-bold text-[#66a380]">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-[#66a380]" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button size="sm" className="w-full bg-[#66a380] hover:bg-[#66a380]/90 text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#f5f2ec]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f172b] mb-8">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-[#66a380] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#0f172b] mb-2">Personalized Approach</h3>
                <p className="text-gray-700">
                  Every case is unique. We provide tailored solutions for your specific situation.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-[#66a380] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#0f172b] mb-2">Proven Success</h3>
                <p className="text-gray-700">
                  80% success rate with transparent assessment - we only take cases we can win.
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#66a380] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#0f172b] mb-2">Ongoing Support</h3>
                <p className="text-gray-700">
                  From initial consultation to final approval, we're with you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0f172b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Immigration Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your free 30-minute consultation to discuss your immigration goals and get expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#66a380] hover:bg-[#66a380]/90 text-white">
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-[#0f172b] bg-transparent"
            >
              Take Eligibility Quiz
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
