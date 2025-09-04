"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Award, TrendingUp, Heart } from "lucide-react"
import { AutoPlayCarousel } from "@/components/AutoPlayCarousel"

// import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced Desktop Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-section">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 z-0 overflow-hidden h-full">
          <AutoPlayCarousel
            images={[
              {
                src: "/images/hero/canadatower.jpg",
                alt: "Canadian immigration consulting"
              },
              {
                src: "/images/hero/canadian.jpg",
                alt: "Express Entry immigration services"
              },
              {
                src: "/images/hero/treeshill.jpg",
                alt: "Provincial Nominee Program guidance"
              },
              {
                src: "/images/hero/window.jpg",
                alt: "Work permit immigration services"
              }
            ]}
            interval={3000} // 3 seconds
            className="w-full h-full"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
              {/* Mobile Layout - Centered Card */}
              <div className="w-full lg:hidden">
                <div className="flex justify-center">
                  <div className="w-full max-w-2xl">
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 animate-pulse"></div>
                      <div className="relative p-6 sm:p-8">
                        <div className="text-center mb-6 sm:mb-8">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-bold text-white">
                            Expert Immigration Guidance with Transparent Assessment
                          </h1>
                        </div>
                        <div className="text-center mb-6 sm:mb-8">
                          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-lg mx-auto px-2">
                            <span className="font-bold">Free 30 minute consultations only</span> for cases we can win.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#f5a101] to-[#e09401] hover:from-[#e09401] hover:to-[#f5a101] text-white border-none px-6 py-4 text-sm sm:text-base h-12 sm:h-14 font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(245,161,1,0.3)] hover:shadow-[0_6px_20px_rgba(245,161,1,0.4)] hover:-translate-y-0.5 transform hover:scale-105"
                          >
                            <a href="/services/permanent-residency" className="flex items-center justify-center">
                              <span>Permanent Residency</span>
                              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                →
                              </div>
                            </a>
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-white/50 text-white hover:bg-white/20 hover:border-white px-6 py-4 text-sm sm:text-base h-12 sm:h-14 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                          >
                            <a href="/services/status-services" className="flex items-center justify-center">
                              <span>Status Services</span>
                              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                →
                              </div>
                            </a>
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-white/50 text-white hover:bg-white/20 hover:border-white px-6 py-4 text-sm sm:text-base h-12 sm:h-14 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                          >
                            <a href="/training" className="flex items-center justify-center">
                              <span>RCIC Consultant Training</span>
                              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                                →
                              </div>
                            </a>
                          </Button>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-200">
                          <div className="flex items-center gap-2 group">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="group-hover:text-white transition-colors duration-300">Licensed RCIC</span>
                          </div>
                          <div className="flex items-center gap-2 group">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="group-hover:text-white transition-colors duration-300">Free Assessment</span>
                          </div>
                          <div className="flex items-center gap-2 group">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="group-hover:text-white transition-colors duration-300">80% Success Rate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 w-full max-w-7xl mx-auto">
                {/* Left Side - Content */}
                <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight">
                      Expert Immigration Guidance with{" "}
                      <span className="text-[#f5a101] text-5xl">Transparent Assessment</span>
                    </h1>
                    <p className="text-xl xl:text-2xl text-slate-200 leading-relaxed max-w-2xl">
                      <span className="font-bold">Free 30 minute consultations only</span> for cases we can win.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/50 text-white hover:bg-white/20 hover:border-white px-6 py-4 text-base xl:text-lg h-14 w-150 xl:h-16 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group"
                    >
                      <a href="/services/permanent-residency" className="flex items-center justify-center">
                        <span>Permanent Residency</span>
                        <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </div>
                      </a>
                    </Button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/50 text-white hover:bg-white/20 w-72 hover:border-white px-6 py-4 text-base xl:text-lg h-14 xl:h-16 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group"
                      >
                        <a href="/services/status-services" className="flex items-center justify-center">
                          <span>Status Services</span>
                          <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </div>
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/50 text-white hover:bg-white/20 hover:border-white px-6 py-4 text-base xl:text-lg h-14 w-72 xl:h-16 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group"
                      >
                        <a href="/training" className="flex items-center justify-center">
                          <span>RCIC Training</span>
                          <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </div>
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-sm xl:text-base text-slate-200">
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300 font-medium">Licensed RCIC</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300 font-medium">Free Assessment</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300 font-medium">80% Success Rate</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Visual Element */}
                <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center">
                  <div className="relative w-full max-w-lg">
                    {/* Floating Cards */}
                    <div className="relative">
                      {/* Main Card */}
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 bg-[#f5a101] rounded-full flex items-center justify-center mx-auto">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">RCIC Licensed</h3>
                          <p className="text-slate-200 text-sm">Regulated Canadian Immigration Consultant</p>
                          <Badge className="bg-[#f5a101] text-white">License #R712505</Badge>
                        </div>
                      </div>

                      {/* Floating Stats Card */}
                      <div className="absolute -top-4 -right-4 bg-white/15 backdrop-blur-xl rounded-xl border border-white/30 shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#f5a101]">80%+</div>
                          <div className="text-xs text-slate-200">Success Rate</div>
                        </div>
                      </div>

                      {/* Floating Experience Card */}
                      <div className="absolute -bottom-4 -left-4 bg-white/15 backdrop-blur-xl rounded-xl border border-white/30 shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#f5a101]">5+</div>
                          <div className="text-xs text-slate-200">Years Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Cards Section - Enhanced with Scroll Animations */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Expertise Card */}
            <div>
              <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group shadow-lg hover:shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div>
                    <Award className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                  </div>
                  <CardTitle className="text-2xl">Expertise</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="group-hover:text-slate-700">
                    Regulated Canadian Immigration Consultant with deep knowledge of Express Entry, PNP, and all
                    immigration pathways.
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                    >
                      <a href="/services">→ SERVICES</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Success Card */}
            <div>
              <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group shadow-lg hover:shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div>
                    <TrendingUp className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                  </div>
                  <CardTitle className="text-2xl">Success</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="group-hover:text-slate-700">
                    80% success rate with transparent assessment process. We only take cases we can win, ensuring your
                    investment pays off.
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                    >
                      <a href="/assessment">→ ASSESSMENT</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Card */}
            <div>
              <Card className="bg-slate-700/50 border-slate-600 text-white hover:bg-[#f5f2ec] hover:text-slate-900 transition-all duration-300 group shadow-lg hover:shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div>
                    <Heart className="h-12 w-12 text-primary group-hover:text-primary mx-auto mb-4" />
                  </div>
                  <CardTitle className="text-2xl">Trust</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="group-hover:text-slate-700">
                    Transparent pricing, honest assessments, and dedicated support throughout your immigration journey to
                    Canada.
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent group-hover:border-primary group-hover:text-primary"
                    >
                      <a href="/about">→ ABOUT US</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-8 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-white text-lg font-medium mb-2">
              Serving Immigration Clients Across Canada and Internationally. Based in:
            </h3>
            <div className="flex justify-center items-center space-x-8 text-primary">
              <span>Mississauga, ON</span>
              <span>|</span>
              <span>Toronto, ON</span>
              <span>|</span>
              <span>Virtual Consultations Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Associations */}
      <section className="py-12 bg-alt">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 md:space-x-12">
          <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Licensed & Certified</h1>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/images/1.png" 
                alt="Professional Association 1" 
                className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/images/3.png" 
                alt="Professional Association 3" 
                className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Enhanced with Scroll Animations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4">
              Mississauga Immigration Consultant
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 max-w-4xl mx-auto">
              Expert Guidance for Express Entry, PNP, Work Permits, and Canadian Immigration
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left side - Image */}
            <div className="relative">
              <div className="w-full h-150 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/mujtaba.jpg"
                  alt="Professional immigration consulting - helping dreams come true"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  A consultant dedicated to helping you achieve your Canadian immigration dreams.
                </h3>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Navigating Canadian immigration can be complex and overwhelming. With constantly changing policies and
                detailed requirements, having expert guidance makes all the difference.
              </p>
              <p className="text-foreground leading-relaxed">
                As a Regulated Canadian Immigration Consultant (RCIC), I provide transparent assessments and honest
                guidance for your <strong>Canadian immigration</strong> journey. Whether you're exploring Express Entry,
                Provincial Nominee Programs, or need assistance with work permits and family sponsorship, I'm here to
                help you understand your options and achieve your goals.
              </p>
              <p className="text-foreground leading-relaxed">
                With my commitment to only taking cases I can win and providing free 30-minute consultations for
                qualified applicants, you can trust that your investment will be worthwhile.{" "}
                <strong>Contact me today</strong> to schedule your consultation and take the first step toward your
                Canadian future.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MS</span>
                </div>
                <span className="text-lg font-bold text-white">Mujtaba Sarwar</span>
              </div>
              <p className="text-slate-300">
                Regulated Canadian Immigration Consultant providing expert guidance for your immigration journey.
              </p>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-primary text-primary">
                  RCIC #R712505
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Services</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>Express Entry</p>
                <p>Provincial Nominee Program</p>
                <p>Work Permits</p>
                <p>Study Permits</p>
                <p>Family Sponsorship</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Resources</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>Immigration Updates</p>
                <p>How-To Guides</p>
                <p>Case Studies</p>
                <p>FAQ</p>
                <p>YouTube Channel</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <MapPin className="h-4 w-4" />
                  <span>Mississauga, Ontario, Canada</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-slate-300">
                  <Phone className="h-4 w-4" />
                  <span>514-506-0671</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-slate-300">
                  <Mail className="h-4 w-4" />
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 Mujtaba Sarwar Canadian Immigration Consulting. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                ICCRC Compliance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
