import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calculator, FileCheck, ArrowRight, Send } from "lucide-react"
import Link from "next/link"

export default function AssessmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
        <div className="absolute inset-0 bg-[#6aad81]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Immigration Assessment Tools</h1>
            <p className="text-xl text-gray-200 mb-8">
              Evaluate your eligibility and understand your immigration options with our comprehensive assessment tools
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Tools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:bg-[#e8eaed] transition-colors duration-300 border-2 border-[#6aad81]">
                <CardHeader className="text-center pb-4">
                  <Calculator className="w-16 h-16 text-[#6aad81] mx-auto mb-4" />
                  <CardTitle className="text-2xl text-[#144d5e]">CRS Score Calculator</CardTitle>
                  <p className="text-gray-600">Calculate your Comprehensive Ranking System score for Express Entry</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Get your CRS score instantly and see if you qualify for Canadian permanent residency through Express
                    Entry
                  </p>
                  <Link href="/assessment/crs-calculator">
                    <Button className="bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                      Calculate CRS Score <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:bg-[#e8eaed] transition-colors duration-300 border-2 border-[#6aad81]">
                <CardHeader className="text-center pb-4">
                  <FileCheck className="w-16 h-16 text-[#6aad81] mx-auto mb-4" />
                  <CardTitle className="text-2xl text-[#144d5e]">PNP Assessment</CardTitle>
                  <p className="text-gray-600">Find out which Provincial Nominee Programs you may qualify for</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-6">
                    Discover provincial immigration programs that match your profile and increase your chances of
                    success
                  </p>
                  <Link href="/assessment/pnp-assessment">
                    <Button className="bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                      Start PNP Assessment <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#e8eaed]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">How Our Assessments Work</h2>
              <p className="text-gray-700">Simple, accurate, and completely free</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Answer Questions</h3>
                <p className="text-gray-700 text-sm">
                  Provide information about your education, work experience, and language skills
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Get Results</h3>
                <p className="text-gray-700 text-sm">
                  Receive instant results with your scores and qualification status
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Next Steps</h3>
                <p className="text-gray-700 text-sm">
                  Get personalized recommendations and book a consultation if eligible
                </p>
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
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Need Help with Your Assessment?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Have questions about your results or need help interpreting your scores? Send us a message and we'll get back to you.
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
                    <Label htmlFor="assessmentType">Assessment Type</Label>
                    <Input id="assessmentType" placeholder="CRS Calculator, PNP Assessment, etc." />
                  </div>
                  
                  <div>
                    <Label htmlFor="question">Your Question *</Label>
                    <Textarea 
                      id="question" 
                      placeholder="Tell us about your assessment results or any questions you have..." 
                      rows={4}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Question
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#6aad81] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Assess Your Immigration Options?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with our free assessment tools to understand your immigration potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment/crs-calculator">
              <Button size="lg" className="bg-[#f5a101] hover:bg-[#f5a101]/90 text-white">
                Calculate CRS Score
              </Button>
            </Link>
            <Link href="/assessment/pnp-assessment">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#144d5e] bg-transparent"
              >
                PNP Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
