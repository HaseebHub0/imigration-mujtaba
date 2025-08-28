import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Award, Users, BookOpen, Youtube, MapPin, Send } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")' }}>
        <div className="absolute inset-0 bg-[#00537b]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Meet Mujtaba Sarwar</h1>
            <p className="text-xl text-gray-200 mb-8">
              Regulated Canadian Immigration Consultant (RCIC) dedicated to helping families achieve their Canadian
              dreams
            </p>
            <Badge variant="secondary" className="bg-[#f5a101] text-white text-lg px-6 py-2">
              RCIC License #R712505
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Image
                  src="/professional-headshot.png"
                  alt="Mujtaba Sarwar, RCIC"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#00537b] mb-6">Your Trusted Immigration Partner</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With years of experience in Canadian immigration law and a deep understanding of the challenges faced
                  by newcomers, I provide personalized guidance to help you navigate the complex immigration process
                  with confidence.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Based in Mississauga, Ontario, I specialize in permanent residency applications, work permits, study
                  permits, and family sponsorship cases. My approach combines legal expertise with genuine care for each
                  client's unique situation.
                </p>
                <div className="flex items-center gap-2 text-[#f5a101] mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Mississauga, Ontario, Canada</span>
                </div>
              </div>
            </div>

            {/* Credentials & Expertise */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="hover:bg-[#f5f2ec] transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-[#f5a101] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#00537b] mb-3">Professional Credentials</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>RCIC License #R712505</li>
                    <li>ICCRC Member in Good Standing</li>
                    <li>Continuing Education Certified</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:bg-[#f5f2ec] transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-[#f5a101] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#00537b] mb-3">Community Involvement</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>RCIC Mentoring Program</li>
                    <li>Professional Speaking</li>
                    <li>Industry Workshops</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:bg-[#f5f2ec] transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-[#f5a101] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#00537b] mb-3">Educational Content</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>Immigration Blog Author</li>
                    <li>Policy Analysis</li>
                    <li>Client Education</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* YouTube Channel */}
            <div className="bg-[#f5f2ec] rounded-lg p-8 mb-16">
              <div className="text-center">
                <Youtube className="w-16 h-16 text-[#f5a101] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#00537b] mb-4">
                  Immigration Insights with Mujtaba
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Stay informed with the latest immigration updates, policy changes, and expert insights through my
                  educational YouTube channel.
                </p>
                <Button className="bg-[#f5a101] hover:bg-[#f5a101]/90 text-white">Visit YouTube Channel</Button>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#f5a101] mb-2">80%+</div>
                <p className="text-gray-700">Success Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#f5a101] mb-2">500+</div>
                <p className="text-gray-700">Families Helped</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#f5a101] mb-2">5+</div>
                <p className="text-gray-700">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#f5f2ec]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#00537b] mb-4">Get in Touch</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Have questions about your immigration case? Send me a message and I'll get back to you within 24 hours.
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
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your immigration case or question..." 
                      rows={5}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#f5a101] hover:bg-[#f5a101]/90 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00537b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Immigration Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your free 30-minute consultation and take the first step toward your Canadian dream.
          </p>
          <Button size="lg" className="bg-[#f5a101] hover:bg-[#f5a101]/90 text-white">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
