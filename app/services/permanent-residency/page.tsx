import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Globe, TrendingUp, Users, Award, Send } from "lucide-react"

export default function PermanentResidencyPage() {
  const programs = [
    {
      title: "Express Entry - Federal Skilled Worker",
      description: "For skilled workers with foreign work experience",
      minRequirements: [
        "Bachelor's degree or equivalent",
        "1+ years skilled work experience",
        "CLB 7 in English/French",
        "Minimum CRS score varies",
      ],
      processingTime: "6 months",
      price: "$2,500",
    },
    {
      title: "Express Entry - Canadian Experience Class",
      description: "For skilled workers with Canadian work experience",
      minRequirements: [
        "1+ years Canadian work experience",
        "CLB 7 in English/French",
        "No education requirement",
        "Meet program requirements",
      ],
      processingTime: "6 months",
      price: "$2,500",
    },
    {
      title: "Provincial Nominee Program (PNP)",
      description: "Province-specific programs for skilled workers",
      minRequirements: [
        "Varies by province",
        "Job offer may be required",
        "Meet provincial criteria",
        "Express Entry profile",
      ],
      processingTime: "15-19 months",
      price: "$3,000",
    },
    {
      title: "Category-Based Selection",
      description: "Targeted draws for specific occupations",
      minRequirements: [
        "French language proficiency",
        "Healthcare/STEM/Trade experience",
        "Meet category criteria",
        "Express Entry profile",
      ],
      processingTime: "6 months",
      price: "$2,800",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80")' }}>
        <div className="absolute inset-0 bg-[#66a380]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Permanent Residency Services</h1>
            <p className="text-xl text-gray-200 mb-8">
              Expert guidance for Express Entry, PNP, and all pathways to Canadian permanent residency
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Immigration Programs</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Choose the right pathway to Canadian permanent residency based on your qualifications and goals
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="hover:bg-[#f5f2ec] transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#144d5e]">{program.title}</CardTitle>
                    <p className="text-gray-600">{program.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#66a380]">{program.price}</span>
                      <Badge variant="outline" className="border-[#66a380] text-[#66a380]">
                        {program.processingTime}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-[#144d5e] mb-3">Minimum Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {program.minRequirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#66a380] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#66a380] hover:bg-[#66a380]/90 text-white">Get Assessment</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-[#f5f2ec]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Our PR Process</h2>
              <p className="text-gray-700">A systematic approach to maximize your chances of success</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#66a380] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Assessment</h3>
                <p className="text-gray-700 text-sm">Free eligibility assessment and CRS score calculation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#66a380] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Strategy</h3>
                <p className="text-gray-700 text-sm">Develop personalized immigration strategy and timeline</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#66a380] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Preparation</h3>
                <p className="text-gray-700 text-sm">Document collection and application preparation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#66a380] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Success</h3>
                <p className="text-gray-700 text-sm">Application submission and ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Why Choose Our PR Services?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:bg-[#f5f2ec] transition-colors duration-300 text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-[#66a380] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#144d5e] mb-3">CRS Optimization</h3>
                  <p className="text-gray-700">Strategic advice to maximize your Comprehensive Ranking System score</p>
                </CardContent>
              </Card>

              <Card className="hover:bg-[#f5f2ec] transition-colors duration-300 text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-[#66a380] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#144d5e] mb-3">Family Support</h3>
                  <p className="text-gray-700">Include your spouse and dependent children in your PR application</p>
                </CardContent>
              </Card>

              <Card className="hover:bg-[#f5f2ec] transition-colors duration-300 text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-[#66a380] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#144d5e] mb-3">Expert Guidance</h3>
                  <p className="text-gray-700">RCIC-regulated consultant with proven track record of success</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#f5f2ec]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Get Started with Permanent Residency</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Ready to begin your journey to Canadian permanent residency? Send us a message and we'll help you get started.
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
                    <Label htmlFor="program">Program of Interest</Label>
                    <Input id="program" placeholder="Express Entry, PNP, etc." />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Tell Us About Your Case *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your background, experience, and immigration goals..." 
                      rows={4}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#66a380] hover:bg-[#66a380]/90 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#66a380] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Permanent Residency Journey Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take our free CRS calculator to see if you qualify for Canadian permanent residency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#66a380] hover:bg-[#66a380]/90 text-white">
              Calculate CRS Score
            </Button>
            <Button
              size="lg"
              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-[#144d5e] bg-transparent"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
