import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Target, BookOpen, Phone, Mail, Calendar, Star, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function MentoringPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#144d5e] via-[#1a5a6f] to-[#144d5e] py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Badge className="bg-[#6aad81] text-white px-4 py-2">Professional Mentoring</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              RCIC Mentoring &<br/>
              <span className="text-[#6aad81]">Private Practice Coaching</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6aad81] to-[#5a9d71] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{color: '#144d5e'}}>
                  Build the Practice You Imagined — With Guidance That Works
                </h2>
                <div className="w-16 h-1 bg-[#6aad81] mb-6"></div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Whether you're just starting out or looking to grow your RCIC practice, Mujtaba offers personalized mentorship focused on real casework, business systems, and strategy.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-[#6aad81] hover:bg-[#5a9d71] text-white px-6 py-3">
                    <Link href="#pricing">View Packages</Link>
                  </Button>
                  <Button variant="outline" className="border-[#144d5e] text-[#144d5e] hover:bg-[#144d5e] hover:text-white px-6 py-3">
                    <Link href="#about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#6aad81]/10 to-[#144d5e]/10 rounded-2xl p-8">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#6aad81] rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold" style={{color: '#144d5e'}}>Licensed RCIC</h3>
                        <p className="text-sm text-gray-600">Regulated Professional</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Success Rate</span>
                        <span className="font-bold text-[#6aad81]">80%+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Experience</span>
                        <span className="font-bold text-[#6aad81]">5+ Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 bg-[#d2d4d8]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4" style={{color: '#144d5e'}}>Who This Is For</h2>
             </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#6aad81]">
                <CardHeader>
                   <CardTitle className="text-xl" style={{color: '#144d5e'}}>Perfect For:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-1 flex-shrink-0" />
                    <span>New RCICs ( 2 years of experience)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-1 flex-shrink-0" />
                    <span>RCIC students preparing to launch their practice</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-1 flex-shrink-0" />
                    <span>Consultants working at firms but aiming to go solo</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-1 flex-shrink-0" />
                    <span>Practitioners seeking casework support or business clarity</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-2 border-red-200">
                <CardHeader>
                   <CardTitle className="text-xl text-red-600">Not For:</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700">
                    Those looking for shortcuts or mass coaching. This is selective, 1-on-1, quality-first guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold mb-6" style={{color: '#144d5e'}}>What You Get</h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Comprehensive mentorship covering every aspect of building a successful RCIC practice
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6aad81] to-[#5a9d71] text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8" />
                  </div>
                   <CardTitle className="text-2xl font-bold text-center mb-4" style={{color: '#144d5e'}}>Case Strategy Coaching</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Walkthroughs of real files</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Support on tricky cases or eligibility assessments</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Help with building strong narratives for IRCC</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Advice on red flags, refusals, and fairness letters</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6aad81] to-[#5a9d71] text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8" />
                  </div>
                   <CardTitle className="text-2xl font-bold text-center mb-4" style={{color: '#144d5e'}}>Private Practice Setup</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#6aad81] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Choosing your niche or service focus</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#6aad81] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Client intake systems</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#6aad81] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Retainer agreements and pricing structures</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#6aad81] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Operational workflow setup (email, forms, CRM)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6aad81] to-[#5a9d71] text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8" />
                  </div>
                   <CardTitle className="text-2xl font-bold text-center mb-4" style={{color: '#144d5e'}}>Ongoing Business Guidance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#6aad81] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">How to build predictable leads (without burning out)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#6aad81] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Tools for automation and efficiency</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#6aad81] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Branding and ethical marketing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#6aad81] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Content strategy (YouTube, blogs, etc.)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-[#d2d4d8] to-[#c5c9cd]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold mb-6" style={{color: '#144d5e'}}>How The Mentorship Works</h2>
               <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                 Flexible options designed to fit your schedule and specific needs
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#144d5e'}}>Format:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-1 flex-shrink-0" />
                    <span>1-on-1 Zoom or phone sessions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-1 flex-shrink-0" />
                    <span>Option to review your files live</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6aad81] mt-1 flex-shrink-0" />
                    <span>Email follow-up after each session with action steps</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#144d5e'}}>Duration Options:</h3>
                <div className="space-y-6">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-[#6aad81] bg-white">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                         <h4 className="font-bold text-2xl" style={{color: '#144d5e'}}>One-Time Strategy Call</h4>
                        <Badge className="bg-[#6aad81] text-white px-3 py-1">60 mins</Badge>
                      </div>
                      <p className="text-4xl font-bold text-[#6aad81] mb-4">$500 <span className="text-lg text-gray-600">CAD</span></p>
                      <p className="text-gray-700 mb-4">Perfect for specific guidance and immediate problem-solving</p>
                      <Button className="w-full bg-[#6aad81] hover:bg-[#5a9d71] text-white">
                        <Link href="/contact/paid-consultation">Book Strategy Call</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-[#6aad81] bg-gradient-to-r from-green-50 to-emerald-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#6aad81] text-white px-4 py-2 text-sm font-bold">
                      MOST POPULAR
                    </div>
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                         <h4 className="font-bold text-2xl" style={{color: '#144d5e'}}>3-Session Package</h4>
                        <Badge className="bg-green-600 text-white px-3 py-1">Save $300</Badge>
                      </div>
                      <p className="text-4xl font-bold text-[#6aad81] mb-4">$1,200 <span className="text-lg text-gray-600">CAD</span></p>
                      <p className="text-gray-700 mb-4">Comprehensive guidance with follow-up support</p>
                      <Button className="w-full bg-[#6aad81] hover:bg-[#5a9d71] text-white">
                        <Link href="/contact/paid-consultation">Start 3-Session Package</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-[#144d5e] bg-white">
                    <CardContent className="p-8">
                       <h4 className="font-bold text-2xl mb-4" style={{color: '#144d5e'}}>Ongoing Monthly Mentorship</h4>
                      <p className="text-3xl font-bold text-[#6aad81] mb-4">Custom Pricing</p>
                      <p className="text-gray-700 mb-4">Exclusive, long-term partnership (by application only)</p>
                      <Button variant="outline" className="w-full border-[#144d5e] text-[#144d5e] hover:bg-[#144d5e] hover:text-white">
                        <Link href="/contact">Apply for Monthly Mentorship</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">All pricing is in CAD. Tax included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4" style={{color: '#144d5e'}}>What Mentees Say</h2>
            </div>
            
            <Card className="bg-[#d2d4d8] border-l-4 border-[#6aad81]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#6aad81] text-white rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <blockquote className="text-lg italic mb-4 text-gray-700">
                      "The business side of this work used to overwhelm me. Mujtaba's mentorship helped me structure my first 5 paid retainers."
                    </blockquote>
                    <cite className="font-semibold" style={{color: '#144d5e'}}>— Fariha R., RCIC</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6aad81] to-[#5a9d71] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Grow Confidently?</h2>
            <p className="text-xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Whether you want to improve your file prep, reduce doubt, or finally go independent — you don't have to figure it out alone.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-4 text-white" />
                  <h3 className="font-bold text-lg mb-2">Book Your First Session</h3>
                  <p className="text-sm opacity-90 mb-4">Start with a strategy call</p>
                  <Button className="w-full bg-white text-[#6aad81] hover:bg-gray-100">
                    <Link href="/contact/paid-consultation">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-white" />
                  <h3 className="font-bold text-lg mb-2">Apply for Ongoing</h3>
                  <p className="text-sm opacity-90 mb-4">Long-term mentorship</p>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#6aad81]">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn From Mujtaba Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4" style={{color: '#144d5e'}}>Why Learn From Mujtaba?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-12 h-12 text-[#6aad81] mx-auto mb-4" />
                  <CardTitle className="text-lg" style={{color: '#144d5e'}}>Licensed RCIC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">With successful private practice experience</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-[#6aad81] mx-auto mb-4" />
                  <CardTitle className="text-lg" style={{color: '#144d5e'}}>80% Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Proven threshold for client cases</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="w-12 h-12 text-[#6aad81] mx-auto mb-4" />
                  <CardTitle className="text-lg" style={{color: '#144d5e'}}>YouTube Educator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Immigration Insights with Mujtaba</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="w-12 h-12 text-[#6aad81] mx-auto mb-4" />
                  <CardTitle className="text-lg" style={{color: '#144d5e'}}>Strategic Storytelling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Known for strategy, not just form-filling</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 text-[#6aad81] mx-auto mb-4" />
                  <CardTitle className="text-lg" style={{color: '#144d5e'}}>Caring Mentor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Mentors new consultants with real care</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-[#6aad81] mx-auto mb-4" />
                  <CardTitle className="text-lg" style={{color: '#144d5e'}}>Transparent Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Honest guidance with no hidden agendas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
