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
                                       {/* Hero Section - Image Carousel Background */}
         <section className="relative h-screen flex items-center justify-center overflow-hidden hero-section">
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
               className="w-full h-screen"
             />
          </div>

                 {/* Centered Glassmorphism Card */}
         <div className="relative z-10 container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
           <div className="flex justify-center items-center min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh]">
             {/* Glassmorphism Card */}
             <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
               {/* Main Glassmorphism Container */}
               <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl overflow-hidden glassmorphism-card">
                 {/* Animated Border Glow */}
                 <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 animate-pulse"></div>

                 {/* Card Content */}
                 <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">


                                     {/* Dynamic Main Heading */}
                   <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-8">
                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight">
                       <span className="block hero-title-line-1 mb-1 sm:mb-2 md:mb-3">
                         Expert Immigration <br className="hidden sm:block" /> Guidance with <br className="sm:hidden" /> Transparent Assessment
                       </span>
                     </h1>
                   </div>

                   {/* Dynamic Description */}
                   <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-8">
                     <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-slate-200 leading-relaxed max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto hero-description px-2 sm:px-4">
                       Free 30-minute consultations - only for cases we can win. Get expert guidance from a licensed immigration consultant.
                     </p>
                   </div>

                                     {/* Buttons */}
                   <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-4 justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-8 hero-buttons">
                                           <div className="group">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#f5a101] to-[#e09401] hover:from-[#e09401] hover:to-[#f5a101] text-white border-none px-3 sm:px-6 md:px-8 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-5 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg h-10 sm:h-12 md:h-14 lg:h-14 xl:h-16 font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(245,161,1,0.3)] hover:shadow-[0_6px_20px_rgba(245,161,1,0.4)] hover:-translate-y-0.5 transform hover:scale-105"
                        >
                          <a href="/services/permanent-residency" className="flex items-center justify-center">
                            <span>Permanent Residency</span>
                            <div className="ml-1 sm:ml-2 md:ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </div>
                          </a>
                        </Button>
                      </div>

                                           <div className="group">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white/50 text-white hover:bg-white/20 hover:border-white px-3 sm:px-6 md:px-8 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-5 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg h-10 sm:h-12 md:h-14 lg:h-14 xl:h-16 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                          <a href="/services/status-services" className="flex items-center justify-center">
                            <span>Status Services</span>
                            <div className="ml-1 sm:ml-2 md:ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </div>
                          </a>
                        </Button>
                      </div>

                                           <div className="group">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white/50 text-white hover:bg-white/20 hover:border-white px-3 sm:px-6 md:px-8 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-5 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg h-10 sm:h-12 md:h-14 lg:h-14 xl:h-16 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                          <a href="/training" className="flex items-center justify-center">
                            <span>RCIC Consultant Training</span>
                            <div className="ml-1 sm:ml-2 md:ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </div>
                          </a>
                        </Button>
                      </div>
                   </div>

                                     {/* Dynamic Trust Indicators */}
                   <div className="hidden lg:flex flex-wrap justify-center items-center gap-4 xl:gap-6 text-xs xl:text-sm text-slate-200 hero-trust">
                     <div className="flex items-center gap-2 xl:gap-3 group">
                       <div className="w-2 h-2 xl:w-3 xl:h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                       <span className="group-hover:text-white transition-colors duration-300">Licensed RCIC</span>
                     </div>
                     <div className="flex items-center gap-2 xl:gap-3 group">
                       <div className="w-2 h-2 xl:w-3 xl:h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                       <span className="group-hover:text-white transition-colors duration-300">Free Assessment</span>
                     </div>
                     <div className="flex items-center gap-2 xl:gap-3 group">
                       <div className="w-2 h-2 xl:w-3 xl:h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                       <span className="group-hover:text-white transition-colors duration-300">80% Success Rate</span>
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
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-foreground">ICCRC</div>
            <div className="text-xl font-bold text-foreground">★ RCIC</div>
            <div className="text-xl font-bold text-foreground border-2 border-foreground px-3 py-1">CAPIC</div>


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
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center&q=80"
                alt="Professional immigration consulting - helping dreams come true"
                className="w-full h-auto rounded-lg shadow-lg"
              />
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

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5a101] to-[#e09401]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Dedicated to advocating for immigrant communities and individuals since 2016.
              </h2>
            </div>
            <div className="space-y-6 text-white">
              <p className="text-lg leading-relaxed">
                Our team has years of experience working with people from around the world to ensure that they can
                build new lives in Canada. With our understanding of the procedures followed when applying
                for permanent residency, work permits, and study permits, we can ensure that applications are prepared correctly, and we can also help
                gather and submit all required supporting documentation.
              </p>
              <p className="leading-relaxed">
                We can also help determine the best options for resolving issues that may affect a person's immigration
                status, including options for relief through humanitarian and compassionate grounds, or{" "}
                <strong>extreme hardship</strong> applications.
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
