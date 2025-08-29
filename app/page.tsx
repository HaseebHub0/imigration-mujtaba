"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Award, TrendingUp, Heart } from "lucide-react"

// import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Contact Bar - Below Header */}
      <div className="md:hidden bg-[#0f172b] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Call Us */}
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">Call Us</span>
            </div>
            
            {/* Separator */}
            <div className="w-px h-6 bg-white/30"></div>
            
            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Email</span>
            </div>
            
            {/* Separator */}
            <div className="w-px h-6 bg-white/30"></div>
            
            {/* Offices */}
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Offices</span>
            </div>
          </div>
        </div>
      </div>

             {/* Hero Section - Video Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Video Background */}
         <div className="absolute inset-0 z-0 overflow-hidden">
           <video
             autoPlay
             loop
             muted
             playsInline
             className="w-full h-full object-cover"
           >
             <source src="/videos/Hero.mp4" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
           
           {/* Enhanced overlay with gradient */}
           <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
         </div>

        {/* Centered Glassmorphism Card */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="flex justify-center items-center min-h-[60vh]">
            {/* Glassmorphism Card */}
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Main Glassmorphism Container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden glassmorphism-card">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 animate-pulse"></div>

                {/* Card Content */}
                <div className="relative p-8 sm:p-12 lg:p-16">


                  {/* Dynamic Main Heading */}
                  <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                      <span className="block hero-title-line-1 mb-2">
                        Expert Immigration
                      </span>
                      <span className="block hero-title-line-2">
                        Guidance with{" "}
                        <span className="italic text-[#f5a101] bg-gradient-to-r from-[#f5a101] to-[#e09401] bg-clip-text text-transparent drop-shadow-lg">
                          Transparent Assessment
                        </span>
                      </span>
                    </h1>
                  </div>

                  {/* Dynamic Description */}
                  <div className="text-center mb-10">
                    <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto hero-description">
                      Free 30-minute consultations - only for cases we can win. Get expert guidance from a licensed immigration consultant.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10 hero-buttons">
                    <div className="group">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg w-full sm:w-auto h-16 sm:h-20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <a href="/services/permanent-residency" className="flex items-center justify-center">
                          <span>Permanent Residency</span>
                          <div className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </div>
                        </a>
                      </Button>
                    </div>

                    <div className="group">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/50 text-white hover:bg-white/20 hover:border-white px-8 py-6 text-lg h-16 sm:h-20 bg-white/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                      >
                        <a href="/services/status-services" className="flex items-center justify-center">
                          <span>Status Services</span>
                          <div className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </div>
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Dynamic Trust Indicators */}
                  <div className="hidden md:flex flex-wrap justify-center items-center gap-6 text-sm text-slate-200 hero-trust">
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">Licensed RCIC</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">Free Assessment</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
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
        <section className="py-20 bg-gradient-to-r from-[#0f172b] to-[#f5a101]">
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

               {/* Our Reviews Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
          {/* Glassy overlay effect */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left Side - Testimonial */}
              <div className="relative">
                {/* Large Quote Icon */}
                <div className="text-6xl md:text-8xl text-[#0f172b] font-serif mb-6">"</div>
                
                {/* Testimonial Quote */}
                <blockquote className="text-2xl md:text-3xl font-serif text-[#0f172b] leading-relaxed mb-8 italic">
                  I could tell she genuinely cared for our family. I highly recommend her to anyone who needs an immigration consultant!
                </blockquote>
                
                {/* Reviews Button */}
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-[#0f172b] hover:bg-[#0f172b]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    OUR REVIEWS
                  </Button>
                </div>
              </div>

              {/* Right Side - Service Description */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are dedicated to protecting our clients' rights and interests, helping immigrants live in Canada,
                  pursue employment, build successful lives, and obtain <strong>Canadian permanent residency</strong>.
                  Our commitment extends to ensuring every family has the opportunity to achieve their Canadian dreams.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide comprehensive immigration services for English as a second language speakers, explaining
                  legal options and immigration laws in clear terms. We offer services in English and can work with
                  translators for clients who speak Hindi, Punjabi, Urdu, Spanish, and many other languages to ensure
                  effective communication and understanding.
                </p>
              </div>
            </div>

            {/* Cityscape Line Art */}
            <div className="mt-16 text-center">
              <svg width="400" height="60" viewBox="0 0 400 60" className="mx-auto">
                <path 
                  d="M0 50 L20 40 L40 45 L60 35 L80 40 L100 30 L120 35 L140 25 L160 30 L180 20 L200 25 L220 15 L240 20 L260 10 L280 15 L300 5 L320 10 L340 0 L360 5 L380 0 L400 5 L400 60 L0 60 Z" 
                  fill="none" 
                  stroke="#0f172b" 
                  strokeWidth="2"
                  className="opacity-30"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Get in Touch with Our Team Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
          {/* Glassy overlay effect */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172b] mb-6">
                Get in Touch with Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your Canadian immigration journey? Contact our expert team for a free consultation.
              </p>
            </div>

           <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
             {/* Contact Information */}
             <div className="space-y-8">
               <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
                 <h3 className="text-2xl font-bold text-[#0f172b] mb-6">
                   Contact Information
                 </h3>
                 
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-[#0f172b] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                       <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-[#0f172b] mb-1">Office Locations</h4>
                       <p className="text-gray-600">Mississauga, Ontario, Canada</p>
                       <p className="text-gray-600">Toronto, Ontario, Canada</p>
                       <p className="text-gray-600">Virtual Consultations Worldwide</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-[#0f172b] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                       <Phone className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-[#0f172b] mb-1">Phone</h4>
                       <p className="text-gray-600">514-506-0671</p>
                       <p className="text-sm text-gray-500">Available Monday-Friday, 9 AM - 6 PM EST</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-[#0f172b] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                       <Mail className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-[#0f172b] mb-1">Email</h4>
                       <p className="text-gray-600">info@example.com</p>
                       <p className="text-sm text-gray-500">We respond within 24 hours</p>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
                 <h3 className="text-2xl font-bold text-[#0f172b] mb-4">
                   Why Choose Us?
                 </h3>
                 <ul className="space-y-3 text-gray-600">
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-[#f5a101] rounded-full"></div>
                     Licensed RCIC Consultant
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-[#f5a101] rounded-full"></div>
                     Free 30-minute consultations
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-[#f5a101] rounded-full"></div>
                     80% success rate
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-[#f5a101] rounded-full"></div>
                     Transparent assessment process
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-[#f5a101] rounded-full"></div>
                     Multilingual support available
                   </li>
                 </ul>
               </div>
             </div>

             {/* Contact Form */}
             <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
               <h3 className="text-2xl font-bold text-[#0f172b] mb-6">
                   Send us a Message
                 </h3>
               
               <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-4">
                   <div>
                     <label htmlFor="firstName" className="block text-sm font-medium text-[#0f172b] mb-2">
                       First Name *
                     </label>
                     <input
                       type="text"
                       id="firstName"
                       name="firstName"
                       required
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f172b] focus:border-transparent transition-all duration-300"
                       placeholder="Enter your first name"
                     />
                   </div>
                   <div>
                     <label htmlFor="lastName" className="block text-sm font-medium text-[#0f172b] mb-2">
                       Last Name *
                     </label>
                     <input
                       type="text"
                       id="lastName"
                       name="lastName"
                       required
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f172b] focus:border-transparent transition-all duration-300"
                       placeholder="Enter your last name"
                     />
                   </div>
                 </div>

                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-[#0f172b] mb-2">
                     Email Address *
                   </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f172b] focus:border-transparent transition-all duration-300"
                     placeholder="Enter your email address"
                   />
                 </div>

                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-[#0f172b] mb-2">
                     Phone Number
                   </label>
                   <input
                     type="tel"
                     id="phone"
                     name="phone"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f172b] focus:border-transparent transition-all duration-300"
                     placeholder="Enter your phone number"
                   />
                 </div>

                 <div>
                   <label htmlFor="service" className="block text-sm font-medium text-[#0f172b] mb-2">
                     Service of Interest *
                   </label>
                   <select
                     id="service"
                     name="service"
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f172b] focus:border-transparent transition-all duration-300"
                   >
                     <option value="">Select a service</option>
                     <option value="express-entry">Express Entry</option>
                     <option value="provincial-nominee">Provincial Nominee Program</option>
                     <option value="work-permit">Work Permit</option>
                     <option value="study-permit">Study Permit</option>
                     <option value="family-sponsorship">Family Sponsorship</option>
                     <option value="permanent-residency">Permanent Residency</option>
                     <option value="other">Other</option>
                   </select>
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-[#0f172b] mb-2">
                     Message *
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     rows={4}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f172b] focus:border-transparent transition-all duration-300 resize-none"
                     placeholder="Tell us about your immigration goals and any specific questions you have..."
                   ></textarea>
                 </div>

                 <Button 
                   type="submit" 
                   size="lg" 
                   className="w-full bg-[#0f172b] hover:bg-[#0f172b]/90 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                 >
                   Send Message
                 </Button>
               </form>
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
