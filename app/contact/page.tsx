import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, DollarSign, CheckCircle, ArrowRight, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("/images/herobanners/11.png")' }}>
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(106, 173, 129, 0.8)'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Me</h1>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with our immigration experts and start your Canadian immigration journey today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{color: '#144d5e'}}>Get In Touch With Me</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Choose how you'd like to connect with our immigration experts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:bg-neutral-100 transition-colors duration-300 border-2 relative" style={{borderColor: '#6aad81'}}>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="text-white px-4 py-1" style={{backgroundColor: '#6aad81'}}>Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#6aad81'}}>
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl text-[#144d5e]">Free Assessment</CardTitle>
                  <div className="text-3xl font-bold text-[#6aad81]">$0 CAD</div>
                  <p className="text-gray-600">30-minute eligibility assessment</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Eligibility assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Immigration pathway review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Next steps guidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Honest assessment of chances</span>
                    </div>
                  </div>

                  <div className="bg-[#e8eaed] p-4 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">
                      <strong>Note:</strong> Free consultations are only offered for cases we believe we can
                      successfully help with.
                    </p>
                  </div>

                  <Link href="/contact/free-consultation">
                    <Button className="w-full text-white hover:opacity-90" style={{backgroundColor: '#6aad81'}}>
                      Schedule Free Assessment <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:bg-[#e8eaed] transition-colors duration-300 border-2 border-gray-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#6aad81'}}>
                    <Clock className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl text-[#144d5e]">Detailed Consultation</CardTitle>
                  <div className="text-3xl font-bold text-[#6aad81]">$50 CAD</div>
                  <p className="text-gray-600">60-minute comprehensive consultation</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Comprehensive case review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Detailed strategy discussion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Document checklist provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Timeline and cost breakdown</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#6aad81]" />
                      <span className="text-gray-700">Follow-up email summary</span>
                    </div>
                  </div>

                  <div className="bg-[#e8eaed] p-4 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">
                      <strong>Best for:</strong> Complex cases, multiple pathways, or when you need detailed guidance.
                    </p>
                  </div>

                  <Link href="/contact/paid-consultation">
                    <Button className="w-full text-white hover:opacity-90" style={{backgroundColor: '#6aad81'}}>
                      Schedule Detailed Consultation <ArrowRight className="w-4 h-4 ml-2" />
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
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">How We Help</h2>
              <p className="text-gray-700">Simple steps to connect with our immigration experts</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Choose Service</h3>
                <p className="text-gray-700 text-sm">Select free assessment or detailed consultation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Schedule Meeting</h3>
                <p className="text-gray-700 text-sm">Pick a convenient time from our available calendar</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Prepare Documents</h3>
                <p className="text-gray-700 text-sm">Gather relevant documents as outlined in confirmation email</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6aad81] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-[#144d5e] mb-2">Get Expert Advice</h3>
                <p className="text-gray-700 text-sm">Receive personalized immigration guidance and next steps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#144d5e] mb-2">
                    What's the difference between free and paid consultations?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Free consultations (30 min) focus on eligibility assessment and are only offered for cases we can
                    help. Paid consultations (60 min) provide comprehensive strategy and detailed guidance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#144d5e] mb-2">
                    How do I know if I qualify for a free consultation?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We offer free consultations only for cases where we believe we can successfully help you achieve
                    your immigration goals. This maintains our 80% success rate.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#144d5e] mb-2">
                    Can consultations be conducted online?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Yes, we offer consultations via video call, phone, or in-person at our Mississauga office. Choose
                    your preferred method during booking.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#144d5e] mb-2">
                    What should I prepare for the consultation?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Bring relevant documents like passports, education credentials, work experience letters, and
                    language test results. A detailed list will be provided upon booking.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#144d5e] mb-2">
                    How quickly can I get an appointment?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We typically have availability within 2-3 business days. Urgent cases can often be accommodated
                    within 24 hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#144d5e] mb-2">
                    What happens after the consultation?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    You'll receive a follow-up email with key points discussed, next steps, and service options if you
                    decide to proceed with our assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#e8eaed]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#144d5e] mb-4">Have Questions?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Not sure which service is right for you? Send us a message and we'll help you choose the best option for your immigration needs.
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
                    <Label htmlFor="serviceType">Service Type</Label>
                    <Input id="serviceType" placeholder="Free Assessment, Detailed Consultation, or Not Sure" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Your Question *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your immigration case and what you'd like to discuss..." 
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today and get expert guidance on your Canadian immigration journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/free-consultation">
              <Button size="lg" className="bg-[#6aad81] hover:bg-[#6aad81]/90 text-white">
                Schedule Free Assessment
              </Button>
            </Link>
            <Link href="/contact/paid-consultation">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#144d5e] bg-transparent"
              >
                Schedule Detailed Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
